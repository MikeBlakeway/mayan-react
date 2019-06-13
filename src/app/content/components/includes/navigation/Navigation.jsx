import React, { Component } from 'react'
import Logo from '../../icons/Logo/Logo'
import Hamburger from './components/Hamburger'
import Menu from './components/Menu'

export default class Navigation extends Component {
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
