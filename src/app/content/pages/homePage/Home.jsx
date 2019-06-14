import React, { Component } from 'react'

import Title from './components/Title'
import Hero from './components/Hero/Hero'

export default class HomePage extends Component {
    render() {
        return (
            <section className="hero">
                <Hero />
                <Title />
            </section>
        )
    }
}
