"use client"

import React, { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        let splitTitle: SplitText | undefined
        let splitSubtitle: SplitText | undefined

        gsap.set('.about-title', { display: 'none' })
        gsap.set('.about-subtitle', { display: 'none' })

        document.fonts.ready.then(() => {
            splitTitle = SplitText.create('.about-title', { type: 'chars, words' })
            splitSubtitle = SplitText.create('.about-subtitle', { type: 'chars, words' })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top top",
                    end: "+=2000",
                    scrub: 1,
                    pin: true,
                }
            })

            tl.to(".stop", {
                opacity: 0,
                y: 40,
                ease: 'power3.out',
            })
                .set('.stop', { display: 'none' })
                .set('.about-title', { display: 'block' })
                .from(splitTitle.words, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.03,
                    ease: 'power3.out',
                    duration: 0.8,
                })
                .set('.about-subtitle', { display: 'block' }, "-=0.3")
                .from(splitSubtitle.words, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.03,
                    ease: 'power3.out',
                    duration: 0.5,
                }, "-=0.3")
        })

        return () => {
            splitTitle?.revert()
            splitSubtitle?.revert()
        }
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className={"w-full h-full about-section bg-dark-green-custom"}>

            <div className={"noise"}/>

            <h1 className={"text-yellow-custom about-title pl-5"}>Just a 16-years-old Trying To Break into Tech.</h1>
            <h2 className={"text-yellow-custom about-subtitle pl-5"}>Big Dreams, Big Hopes.</h2>
            <div className={"w-full h-full centered pr-5"}>
                <h2 className={"text-light-custom absolute stop"}>Stop</h2>
            </div>
        </div>
    )
}
export default About