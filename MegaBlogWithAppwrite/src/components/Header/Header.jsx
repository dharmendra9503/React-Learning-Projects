import React from 'react'
import { Button, Container, Logo, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Posts',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'My Posts',
            slug: '/my-posts',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus
        }
    ]

    return (
        <header className="py-3 shadow bg-gray-400">
            <Container >
                <nav className="flex">
                    <div className="content-center">
                        <Logo />
                    </div>
                    <ul className="flex ml-auto">
                        {
                            navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        {/* <button
                                            onClick={() => navigate(item.slug)}
                                            className='inline-bock mx-3 px-3 py-2 duration-200 hover:underline underline-offset-8 hover:text-gray-200'
                                        >{item.name}</button> */}
                                        <Button
                                            children={item.name}
                                            bgColor=''
                                            textColor=''
                                            className='inline-bock mx-3 px-3 py-2 duration-200 hover:underline underline-offset-8 hover:text-gray-200'
                                            onClick={() => navigate(item.slug)}
                                        />
                                    </li>
                                ) : null
                            )
                        }
                        {
                            authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;