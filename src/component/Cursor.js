import React, { useEffect } from 'react'

const Cursor = () => {

    useEffect(() => {
        let circle = document.querySelector(".circle")

        window.addEventListener("mousemove", e => {
            let xVal = e.clientX
            let yVal = e.clientY

            setTimeout(function(){
                circle.style.top = `${yVal}px`
                circle.style.left = `${xVal}px`
            }, 100)
        })


    }, [])

    return (
        <>
            <div className="circle"></div>
        </>
    )
}

export default Cursor
