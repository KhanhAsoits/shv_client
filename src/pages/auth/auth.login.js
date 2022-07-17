import {Container, Row, Col, Spinner} from "react-bootstrap";
import logo from '../../images/creator/create_logo.png'
import {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../../styles/auth.style.css'
import {loginAPI} from "../../api/auth.api";
import {check_is_auth, restore_cookies} from "../../app/app.cookies.config";
import {restoredToken} from "../../api/auto_config.api";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const LoginPage = () => {
    const navigate = useNavigate()
    const notify = (msg) => toast(msg)
    const initValidErr = {email: {isValid: false, msg: ''}, password: {isValid: false, msg: ''}}
    const [preloader, setPreloader] = useState(true)
    const [validErr, setValidErr] = useState(initValidErr)
    const [showPassword, setShowPassword] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)

    const [isFetch, setIsFetch] = useState(false)

    const preloaderMount = useRef(true)
    const validMount = useRef(false)
    const handleShowPassword = () => {
        setShowPassword(c => !c)
    }

    const handleValidEmail = (email) => {

        if (email.trim() !== '') {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setValidErr({
                    ...validErr, email: {isValid: true, msg: ''}
                })
            } else {
                setValidErr({...validErr, email: {isValid: false, msg: "Email không đúng định dạng!"}})
            }
        } else {
            setValidErr({...validErr, email: {isValid: false, msg: "Email không được để trống!"}})
        }
    }

    const handleValidPassword = (password) => {
        if (password.trim() !== '') {
            if (password.length < 8) {
                setValidErr({...validErr, password: {isValid: false, msg: "Mật khẩu không thể ít hơn 8 ký tự!"}})
            } else {
                setValidErr({
                    ...validErr, password: {isValid: true, msg: ''}
                })
            }
        } else {
            setValidErr({...validErr, password: {isValid: false, msg: "Mật khẩu không được để trống!"}})
        }
    }

    const wait = (time) => {
        return new Promise(resolve => setTimeout(resolve, time * 1000))
    }
    const handleLogin = async () => {

        if (isValid === true) {
            if (!isFetch) {
                setIsFetch(true)
                await wait(2)
                setIsFetch(false)

                let res = await loginAPI(email, password)
                if (res?.code == 'ERR_NETWORK'){
                    notify('Có lỗi xảy ra , chúng tôi sẽ khắc phục sớm nhất,xin hãy quy lại sau.')
                }
                if (res.status) {
                    restore_cookies('userId', res.data.userId)
                    restoredToken(res.data.access_token)
                    notify('Đăng Nhập Thành Công!')
                    window.location.assign(window.location.href)
                } else {
                    notify(res?.msg)
                }

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
            setIsValid((validErr.email.isValid && validErr.password.isValid))
        }
        // call when valid err change
    }, [validErr])
    useEffect(() => {
    }, [isValid])
    useEffect(() => {
    }, [isFetch])

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
                            {preloader && <Spinner animation={'border'} size={'lg'} variant={'primary'}/>}
                        </div>
                    }
                    {
                        !preloader &&
                        <div
                            className={'auth_bg z-10 bg-white border flex flex-col items-center rounded-lg w-full p-4 text-center'}>
                            <img src={logo} alt={'logo'} className={'object-fit w-12 mb-3 mt-2'}/>
                            <div className={'w-full'}>
                                <h6 className={'text-start text-md font-medium'}>Chào mừng đến với V
                                    creator!</h6>
                                <p className={'text-start text-md font-light'}>Đăng nhập và viết gì đó nào!</p>
                            </div>
                            <div className={'w-full my-3 space-y-4'}>
                                <h6 className={'text-xs font-normal text-start mb-0'}>Email</h6>
                                <input type={'text'} name={'email-input'} id={'txt_email'}
                                       className={`w-full border mt-1 rounded-md focus:outline-none focus:border ${validErr.email.msg !== '' ? 'border-red-500' : 'border-purple-400'}`}
                                       style={{padding: "6px 12px"}}
                                       onChange={(e) => {
                                           validMount.current = true
                                           setEmail(e.target.value)
                                       }}
                                       value={email}
                                />
                                <p className={'text-start text-xs text-red-700'}>{validErr.email.msg}</p>
                                <div className={'flex justify-between items-center mb-0'}>
                                    <h6 className={'text-xs font-normal text-start  mb-0'}>Mật khẩu</h6>
                                    <Link to={'/forgot-password'} className={'no-underline text-xs text-purple-500'}>Quên
                                        Mật
                                        Khẩu?</Link>
                                </div>
                                <div
                                    className={`w-full flex justify-center items-center border rounded-md mt-1  border-1 py-0 px-2 ${validErr.password.msg !== '' ? 'border-red-500' : 'border-purple-400'}`}>
                                    <input type={`${showPassword ? 'text' : 'password'}`} name={'password-input'}
                                           id={'txt_password'}
                                           className={'w-full border-0 outline-none rounded-md focus:outline-0 focus:border-0 '}
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
                            </div>

                            <button
                                className={` w-full text-white flex justify-center items-center text-sm font-semibold rounded-md`}

                                style={{
                                    backgroundColor: isValid === true ? '#7367f0' : '#a49df5',
                                    padding: '10px 0'
                                }}
                                onClick={handleLogin}>
                                {
                                    isFetch &&
                                    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                    </svg>
                                }

                                Đăng Nhập
                            </button>
                            <h6 className={'text-center tracking-wide text-sm font-normal mt-4'}>Chưa có tài khoản?<Link
                                to={'/auth/register'} className={'no-underline'} style={{color: '#7367f0'}}> Đăng ký
                                ngay!</Link></h6>
                        </div>
                    }
                </Col>
                <Col xs={1} sm={2} md={3} lg={4}></Col>
            </Row>
        </Container>
    )
}