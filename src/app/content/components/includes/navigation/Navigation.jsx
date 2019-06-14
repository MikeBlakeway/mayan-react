import React, { Component } from 'react'
import Logo from '../../icons/Logo/Logo'
import Hamburger from './components/Hamburger'
import Menu from './components/Menu'

export default class Navigation extends Component {

    componentDidMount() {
        window.addEventListener('scroll', function () {
            var navbar = document.getElementById("nav");
            if (
                document.body.scrollTop >= 80 ||
                document.documentElement.scrollTop >= 80
            ) {
                navbar.classList.add("scroll");
            } else {
                navbar.classList.remove("scroll");
            }
        })
    }

    render() {
        return (
            <nav id="nav">
                <div className="navbar container">
                    <Logo />
                    <Menu />
                    <Hamburger />
                </div>
            </nav>
        )
    }
}
