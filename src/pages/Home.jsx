import React from 'react'
import AandI from '../components/AandI'
import Company from '../components/Company'
import Features from '../components/Features'
import FollowMicrosoft from '../components/FollowMicrosoft'
import Forbussiness from '../components/Forbussiness'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MicosoftResponse from '../components/MicosoftResponse'

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Features/>
            <AandI/>
            <Forbussiness/>
            <MicosoftResponse/>
            <FollowMicrosoft/>
            <Company/>
        </div>
    )
}

export default Home
