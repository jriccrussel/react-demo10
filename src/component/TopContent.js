import React, { useEffect } from 'react'
import gsap from 'gsap'
import imgOne from '../assets/img/1.png'
import imgTwo from '../assets/img/2.png'
import imgThree from '../assets/img/3.png'
import ScrollTrigger from 'gsap/ScrollTrigger'

const TopContent = () => {

    useEffect(() => {

        
          
    }, [])

    return (
        <>
            <div className="background">
                <div className="overlay"></div>
            </div>

            <div className="hero">
                <nav>
                    <img src={imgOne} alt="" />

                    <div className="links">
                        <a href="#">Contact</a>
                        <a href="#">Pricing</a>
                        <a href="#">About Us</a>
                        <a href="#">Samples</a>
                        <img src={imgTwo} alt="" />
                    </div>
                </nav>
                <h1 className="fader">The only true wisdom is in knowing you know nothing.</h1>
            </div>

            <div className="down">
                <div className="img">
                    <img className="fader" src="https://images.unsplash.com/photo-1627486856070-d63f9f3493bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80" alt="" />
                </div>
                <div className="txt">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas debitis dolorem necessitatibus aut totam. Voluptatum ipsum maiores natus, dolores explicabo sequi? Cupiditate dolorum reiciendis quae doloribus optio blanditiis fugit dolor deleniti. Fuga, vel.</h3>
                    <img src={imgThree} alt="" />
                </div>
            </div>
        </>
    )
}

export default TopContent
