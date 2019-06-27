import React from 'react'
import Slider from './components/Slider'
import Rocket from './components/Rocket';

export default function Hero() {
    return (
        <div className="hero--image">
            <Slider />
            <Rocket />
        </div>
    )
}
