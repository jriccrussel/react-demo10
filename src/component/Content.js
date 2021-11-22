import React, { useEffect } from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Content = () => {

    useEffect(() => {

        let tl = gsap.timeline()

        const btn = document.querySelector("#btn")
        const svgAnim = document.querySelector("svg")

        btn.addEventListener("click", function(){
            tl.reverse()
            setTimeout(function(){
                svgAnim.classList.add("runAnimate")
            }, 3000)
        })

        tl.from(".wrapper", {
            duration: 3,
            scale: .7,
            ease: "Expo.easeInOut",
            opacity: 0,
        })

        tl.from(".whtBg", {
            duration: 1.5,
            width: 0,
            ease: "Expo.easeInOut",
            opacity: 0,
        }, "-=2.5")

        tl.from(".blk", {
            duration: 1.5,
            x: 50,
            ease: "Expo.easeInOut",
            opacity: 0,
        }, "-=1")

        tl.from(".lineWrap", {
            duration: 1.5,
            x: 50,
            ease: "Expo.easeInOut",
            opacity: 0,
        }, "-=1")

        tl.from(".lineWrap .line", {
            duration: 2,
            width: 0,
            ease: "Expo.easeInOut",
            opacity: 0,
        }, "-=1")

        tl.from(".blk p", {
            duration: 1.2,
            y: 30,
            ease: "Expo.easeInOut",
            opacity: 0,
        }, "-=2")

        tl.from(".sideTxt", {
            duration: 2,
            x: 30,
            ease: "Expo.easeInOut",
            opacity: 0,
        }, "-=2")
        
    }, [])

    return (
        <>
            <main>
                <div className="wrapper">
                    <h1>JD</h1>
                </div>
                <div className="whtBg">
                    <div className="blk">
                        <p>Lorem, ipsum dolor sit consectetur adipisicing elit. Architecto a, vel soluta impedit officiis. Voluptas debitis unde odit repudiandae provident distinctio, error ut labore minus sint nisi expedita.</p>
                    </div>

                    <div className="lineWrap">
                        <h4>View More</h4>
                        <div className="line"></div>
                        <i id="btn" class="ri-arrow-right-circle-line"></i>
                    </div>
                </div>
                <h5 className="sideTxt">unleash experience</h5>
            </main>
        </>
    )
}

export default Content
