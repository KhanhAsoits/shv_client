import {Container, Row, Col, Spinner} from "react-bootstrap";
import logo from '../../images/creator/create_logo.png'
import {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../../styles/auth.style.css'
import {ToastContainer, toast} from 'react-toastify'
import {loginAPI, registerAPI} from "../../api/auth.api";
import 'react-toastify/dist/ReactToastify.css'
import {check_is_auth, restore_cookies} from "../../app/app.cookies.config";
import {restoredToken} from "../../api/auto_config.api";

export const RegisterPage = () => {
    const navigate = useNavigate()
    const initValidErr = {
        email: {isValid: false, msg: ""},
        password: {isValid: false, msg: ""},
        confirmPassword: {isValid: false, msg: ""},
        name: {isValid: false, msg: ""}
    }
    const notify = (msg) => toast(msg)
    const [preloader, setPreloader] = useState(true)
    const [validErr, setValidErr] = useState(initValidErr)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [isValid, setIsValid] = useState(false)

    const [isFetch, setIsFetch] = useState(false)
    const [autoLogin, setAutoLogin] = useState(false)
    const preloaderMount = useRef(true)
    const validMount = useRef(false)

    const handleShowPassword = () => {
        setShowPassword(c => !c)
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(c => !c)
    }

    const handleValidEmail = (email) => {
        if (email.trim() !== '') {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setValidErr({...validErr, email: {isValid: false, msg: "Email không đúng định dạng!"}})
            } else {
                setValidErr({
                    ...validErr, email: {isValid: true, msg: ""}
                })
            }
        } else {
            setValidErr({...validErr, email: {isValid: false, msg: "Email không được để trống!"}})
        }
    }
    const handleValidName = (name) => {
        if (name.trim() !== '') {
            if (name.length < 6) {
                setValidErr({...validErr, name: {isValid: false, msg: 'Tên không được ít hơn 6 ký tự!'}})
            } else {
                setValidErr({...validErr, name: {isValid: true, msg: ''}})
            }
        } else {
            setValidErr({...validErr, name: {isValid: false, msg: 'Tên không được để trống!'}})
        }
    }
    const handleValidConfirmPassword = (confirmPassword) => {
        if (confirmPassword.trim() !== '') {
            if (confirmPassword !== password) {
                setValidErr({...validErr, confirmPassword: {isValid: false, msg: 'Mật khẩu xác nhận không trùng!'}})
            } else {
                setValidErr({...validErr, confirmPassword: {isValid: true, msg: ''}})
            }
        } else {
            setValidErr({...validErr, confirmPassword: {isValid: false, msg: 'Mật khẩu xác nhận không được để trống!'}})
        }
    }

    const handleValidPassword = (password) => {
        if (password.trim() !== '') {
            if (password.length < 8) {
                setValidErr({...validErr, password: {isValid: false, msg: "Mật khẩu không thể ít hơn 8 ký tự!"}})
            } else {
                setValidErr({
                    ...validErr, password: {isValid: true, msg: ""}
                })
            }
        } else {
            setValidErr({...validErr, password: {isValid: false, msg: "Mật khẩu không được để trống!"}})
        }
    }

    const wait = (time) => {
        return new Promise(resolve => setTimeout(resolve, time * 1000))
    }
    const handleRegister = async () => {
        if (isValid === true) {
            if (!isFetch) {
                setIsFetch(true)
                await wait(2)
                let res = await registerAPI(name, email, password)
                if (res.status) {
                    notify('Đăng ký thành công!')
                    setAutoLogin(true)
                    await wait(1)
                    let login_res = await loginAPI(email, password)
                    if (login_res.status) {
                        restore_cookies('userId', login_res.data.userId)
                        restoredToken(login_res.data.access_token)
                        notify('Đăng nhập thành công!')
                        window.location.assign(window.location.href)
                    } else {
                        notify('Có lỗi xảy ra vui lòng tải lại trang!')
                    }
                } else {
                    notify(res.msg)
                }
                setIsFetch(false)
            }
        }
    }

    useEffect(() => {
        //call when preloader change
        const asyncBootstrap = async () => {
            await wait(2)
            setPreloader(false)
        }
        if (preloaderMount.current) {
            asyncBootstrap()
        }

        return () => {
            preloaderMount.current = false
        }
    }, [preloader])
    useEffect(() => {
        if (validMount.current === true) {
            handleValidEmail(email)
        }
        //    call when email  state change
    }, [email])
    useEffect(() => {
        if (validMount.current === true) {
            handleValidPassword(password)
        }
        //    call when password state change
    }, [password])

    useEffect(() => {
        if (validMount.current === true) {
            handleValidName(name)
        }
    }, [name])
    useEffect(() => {
        if (validMount.current === true) {
            handleValidConfirmPassword(passwordConfirm)
        }
    }, [passwordConfirm])

    useEffect(() => {
        if (validMount.current === true) {
            setIsValid(
                (
                    validErr.email.isValid &&
                    validErr.password.isValid &&
                    validErr.confirmPassword.isValid &&
                    validErr.name.isValid
                )
            )
        }
        // call when valid err change
    }, [validErr])
    useEffect(() => {
    }, [isValid])
    useEffect(() => {

    }, [isFetch])
    useEffect(() => {
    }, [autoLogin])
    useEffect(() => {
        if (check_is_auth()) {
            navigate('/')
        }
    }, [])
    return (
        <Container fluid style={{backgroundColor: "#f8f8f8"}}>
            <ToastContainer></ToastContainer>
            <Row>
                <Col xs={1} sm={2} md={3} lg={4}></Col>
                <Col xs={10} sm={8} md={6} lg={4}
                     className={'h-screen flex justify-center items-center px-0 px-sm-3 px-md-4 px-lg-4'}>
                    {
                        preloader && <div className={'text-center space-y-0'}>
                            <img src={logo} alt={'logo'} className={'object-fit w-32'}/>
                            <Spinner animation={'border'} size={'lg'} variant={'primary'}/>
                        </div>
                    }
                    {
                        !preloader &&
                        <div
                            className={'auth_bg z-10 bg-white border flex flex-col items-center rounded-lg w-100 p-4 text-center'}>
                            <img src={logo} alt={'logo'} className={'object-fit w-12 mb-3 mt-2'}/>
                            <div className={'w-100'}>
                                <h6 className={'text-start text-md font-medium'}>Chào mừng đến với V
                                    creator!</h6>
                                <p className={'text-start text-md font-light'}>Đăng Ký và viết gì đó nào!</p>
                            </div>
                            <div className={'w-100 my-3 space-y-4'}>
                                {/*name*/}
                                <h6 className={'text-xs font-normal text-start mb-0'}>Tên Tài Khoản</h6>

                                <input type={'text'} name={'name-input'} id={'txt_name'}
                                       className={`w-100 border-1 mt-1 rounded-md  focus:outline-none focus:border-1 ${validErr.name.msg !== '' ? 'border-red-500' : 'border-purple-400'}`}
                                       style={{padding: "6px 12px"}}
                                       onChange={(e) => {
                                           validMount.current = true
                                           setName(e.target.value)
                                       }}
                                       value={name}
                                />
                                <p className={'text-start text-xs text-red-700'}>{validErr.name.msg}</p>
                                {/*end name*/}
                                {/*email*/}
                                <h6 className={'text-xs font-normal text-start mb-0'}>Email</h6>
                                <input type={'text'} name={'email-input'} id={'txt_email'}
                                       className={`w-100 border-1 mt-1 rounded-md  focus:outline-none  focus:border-1 ${validErr.email.msg !== '' ? 'border-red-500' : 'border-purple-400'}`}
                                       style={{padding: "6px 12px"}}
                                       onChange={(e) => {
                                           validMount.current = true
                                           setEmail(e.target.value)
                                       }}
                                       value={email}
                                />
                                <p className={'text-start text-xs mt-1 mb-4  text-red-700'}>{validErr.email.msg}</p>
                                {/*end email*/}
                                {/*password*/}
                                <h6 className={'text-xs font-normal text-start mb-0'}>Mật khẩu</h6>
                                <div
                                    className={`w-100 flex justify-center items-center rounded-md mt-1  border-1 py-0 px-2 ${validErr.password.msg !== '' ? 'border-red-500' : 'border-purple-400'}`}>
                                    <input type={`${showPassword ? 'text' : 'password'}`} name={'password-input'}
                                           id={'txt_password'}
                                           className={'w-100 border-0 rounded-md focus:outline-none focus:border-0'}
                                           style={{padding: "6px"}}
                                           onChange={(e) => {
                                               validMount.current = true
                                               setPassword(e.target.value)
                                           }}
                                           value={password}
                                    />
                                    <span
                                        className={`fa-solid  ${showPassword ? 'fa-eye-slash' : 'fa-eye'} hover:cursor-pointer`}
                                        onClick={handleShowPassword}></span>
                                </div>
                                <p className={'text-start text-xs text-red-700'}>{validErr.password.msg}</p>
                                {/*end password*/}
                                {/*confirm pass*/}
                                <div className={'flex justify-between items-center mb-0'}>
                                    <h6 className={'text-xs font-normal text-start  mb-0'}>Mật khẩu xác nhận</h6>
                                    <Link to={'/forgot-password'} className={'no-underline text-xs text-purple-500'}>Quên
                                        Mật
                                        Khẩu?</Link>
                                </div>
                                <div
                                    className={`w-100 flex justify-center items-center rounded-md mt-1  border-1 py-0 px-2 ${validErr.confirmPassword.msg !== '' ? 'border-red-500' : 'border-purple-400'}`}>
                                    <input type={`${showConfirmPassword ? 'text' : 'password'}`} name={'password-input'}
                                           id={'txt_password'}
                                           className={'w-100 border-0 rounded-md focus:outline-none focus:border-0'}
                                           style={{padding: "6px"}}
                                           onChange={(e) => {
                                               validMount.current = true
                                               setPasswordConfirm(e.target.value)
                                           }}
                                           value={passwordConfirm}
                                    />
                                    <span
                                        className={`fa-solid  ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} hover:cursor-pointer`}
                                        onClick={handleShowConfirmPassword}></span>
                                </div>
                                <p className={'text-start text-xs text-red-700'}>{validErr.confirmPassword.msg}</p>
                                {/*end confirm */}
                            </div>

                            <button
                                className={`w-100 flex justify-center items-center text-white text-sm font-semibold rounded-md`}
                                style={{
                                    backgroundColor: isValid === true ? '#7367f0' : '#a49df5',
                                    padding: '10px 0'
                                }}
                                onClick={handleRegister}>
                                {
                                    isFetch &&
                                    <Spinner
                                        className={'mr-3'}
                                        animation="border"
                                        size="sm"
                                    />
                                }
                                {autoLogin ? 'Đang Tự Đăng Nhập!' : 'Đăng Ký'}
                            </button>
                            <h6 className={'text-center tracking-wide text-sm font-normal mt-4'}>Đã có tài khoản?<Link
                                to={'/auth/'} className={'no-underline'} style={{color: '#7367f0'}}> Đăng Nhập
                                ngay!</Link></h6>
                        </div>
                    }
                </Col>
                <Col xs={1} sm={2} md={3} lg={4}></Col>
            </Row>
        </Container>
    )
}