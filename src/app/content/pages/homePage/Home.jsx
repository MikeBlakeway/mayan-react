import React, { Component } from 'react'
import Navigation from '../../components/includes/navigation/Navigation'
import Title from './components/Title'
import Hero from './components/Hero/Hero'

export default class Home extends Component {
    render() {
        return (
            <main>
                <Navigation />
                <section className="hero" id="main">
                    <Hero />
                    <Title />
                </section>
            </main>
        )
    }
}
