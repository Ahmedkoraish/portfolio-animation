import React from 'react'
import Hero from '../component/Hero'
import Text from '../component/Text'
import About from '../component/About '
import Portfolio from '../component/Portfolio'
import Experts from '../component/Experts'
import Testimonial from '../component/Testimonial'
import Skill from '../component/Skill'
import Recent from '../component/Recent'

export default function Home() {
    return <>
        <Hero />
        <Text />
        <About/>
        <Portfolio/>
        <Experts/>
        <Testimonial/>
        <Skill/>
        <Recent/>
    </>
}
