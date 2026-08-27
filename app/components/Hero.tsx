"use client"

import React from 'react'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import Button from "@/app/components/Button";

gsap.registerPlugin(SplitText, useGSAP ,DrawSVGPlugin)

const Hero = () => {

    useGSAP(() => {
        let splithero: SplitText | undefined
            let splitdesc: SplitText | undefined

        // hide immediately, before fonts even load
        gsap.set('.animated-button', { opacity: 0, y: 15 })

        document.fonts.ready.then(() => {
            splithero = SplitText.create('.hero-title', { type: 'chars, words' })
            splitdesc = SplitText.create('.hero-desc', { type: 'chars, words' })

            const tl = gsap.timeline()

            tl.from(splithero.chars, {
                y: 40,
                opacity: 0,
                stagger: 0.03,
                ease: 'power3.out',
                duration: 0.8,
            })
                .from(splitdesc.words, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.03,
                    ease: 'power3.out',
                    duration: 0.5,
                }, "-=0.5")
                .to('.animated-button', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                }, "-=0.7")
        })

        return () => {
            splithero?.revert()
            splitdesc?.revert()
        }
    })

    return (
        <div className={"centered w-full h-full text-dark-green-custom flex-col z-1"}>

            <h1 className={"hero-title z-1"}>IBRAHIM ALBARI</h1>
            <h4 className={"hero-desc w-140 max-[600px]:w-80 text-center z-10"}>a Software engineer focused on building fast, thoughtfully designed web experiences.</h4>
            <Button />
        </div>
    )
}
export default Hero