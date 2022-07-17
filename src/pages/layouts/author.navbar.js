import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import avatar from '../../images/creator/img.png'
import logo from '../../images/creator/create_logo.png'

import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

export const AuthorNavItem = ({content, icon, isActive, to, handleClick}) => {
    return (
        <li onClick={handleClick}
            className={`w-full  text-nowrap  ${isActive ? 'bg-purple-600 author-nav-item--shadow' : 'bg-transparent duration-150 ease-in hover:translate-x-2'} rounded-sm`}>
            <Link to={to} className={'flex justify-start pl-4 space-x-3 py-2 items-center'}>
                <i className={`${icon} ${isActive ? 'text-white':'text-black'}`}></i>
                <strong className={` ${isActive ? 'text-white':'text-black'} font-medium`}>
                    {content}
                </strong>
            </Link>
        </li>
    )
}
export const AuthorNavbar = (props) => {
    const listItem = [
        {
            id: 1,
            handleClick: function () {
                setActive(1)
            },
            icon: 'fa-solid fa-file-circle-plus',
            content: 'Thêm bản thảo',
            to: '',
        },
        {
            id: 8,
            handleClick: function () {
                setActive(8)
            },
            icon: 'fa-solid fa-file-circle-plus',
            content: 'Thêm bản thảo',
            to: '',
        },
    ]
    const [active, setActive] = useState(1)

    const [darkMode, setDarkMode] = useState(false)
    const [openNav, setOpenNav] = useState(true)
    const handleToggleDarkMode = (e) => {
        setDarkMode(c => !c)
    }
    useEffect(() => {
    }, [active])
    const handleToggleNavbar = (e) => setOpenNav(n => !n)
    return (
        <div className={'flex justify-center space-x-0 h-screen overflow-hidden'}>
            <div className={`${openNav ? 'open-author-nav  px-3' : 'close-author-nav  px-0'} h-fit border-r`}>
                <div className={'flex justify-between items-center my-4'}>
                    <div className={'p-0 m-0 flex justify-between items-center space-x-3'}>
                        <img className={'object-fill w-8'} src={logo}/>
                        <h1 className={'text-purple-600 text-xl font-semibold'}>ShvCreator</h1>
                    </div>
                    <span className={'fa-solid fa-bars text-purple-600 text-xl hover:cursor-pointer'}
                          onClick={handleToggleNavbar}></span>
                </div>
                <div className={'mt-3 mb-5 px-0 overflow-y-scroll  overflow-x-hidden author-item-container author-item-calc--height'}>
                    <strong className={'font-medium text-gray-400 text-lg block mb-3 pl-3'}>Bản thảo</strong>
                    <ul className={'list-unstyled space-y-2'}>
                        {listItem.map((val, index) => {
                            return <AuthorNavItem key={index} to={val.to} icon={val.icon} content={val.content}
                                                  isActive={val.id === active}
                                                  handleClick={val.handleClick}></AuthorNavItem>
                        })}
                    </ul>
                </div>
            </div>
            <div className={'flex-fill h-100'}>
                <div className={'flex flex-col justify-start'}>
                    <div className={'flex justify-between items-center px-4 py-3 border-b'}>

                        <div className={'m-0 p-0 space-x-2 flex justify-center items-center'}>
                            {
                                !openNav &&
                                <span className={'fa-solid fa-bars text-purple-600 text-xl hover:cursor-pointer'}
                                      onClick={handleToggleNavbar}></span>

                            }
                            {
                                darkMode ?
                                    <a onClick={handleToggleDarkMode} className={'hover:cursor-pointer'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px"
                                             viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round" className="feather feather-sun">
                                            <circle cx="12" cy="12" r="5"></circle>
                                            <line x1="12" y1="1" x2="12" y2="3"></line>
                                            <line x1="12" y1="21" x2="12" y2="23"></line>
                                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                            <line x1="1" y1="12" x2="3" y2="12"></line>
                                            <line x1="21" y1="12" x2="23" y2="12"></line>
                                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                        </svg>
                                    </a>

                                    :
                                    <a onClick={handleToggleDarkMode} className={'hover:cursor-pointer'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px"
                                             viewBox="0 0 24 24"
                                             fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round" className="feather feather-moon">
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                        </svg>
                                    </a>

                            }
                        </div>
                        <div className={'flex justify-end items-center space-x-3'}>
                            <div>
                                <strong className={'block text-gray-500 text-md text-right my-0'}>Dang Duy
                                    Khanh</strong>
                                <strong className={'text-md font-light text-gray-500'}>dankhanh.dev@gmail.com</strong>
                            </div>
                            <img className={'object-fit rounded-full w-12'} src={avatar} alt={'avatar'}/>
                        </div>
                    </div>
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}