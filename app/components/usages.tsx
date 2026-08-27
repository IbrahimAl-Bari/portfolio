"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { FaGithub, FaApple, FaYoutube, FaPlaystation } from "react-icons/fa"
import { IoLogoFigma } from "react-icons/io5"
import { SiWebstorm, SiBlender, SiRobloxstudio, SiBrave, SiClaude } from "react-icons/si"
import { BiLogoVisualStudio, BiLogoGmail } from "react-icons/bi"
import TechMarquee from "@/app/components/marquee"

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

const usedTech = [
    FaGithub,
    FaApple,
    IoLogoFigma,
    SiWebstorm,
    BiLogoVisualStudio,
    SiBlender,
    SiRobloxstudio,
    SiBrave,
    SiClaude,
    FaYoutube,
    FaPlaystation,
    BiLogoGmail,
]

const Usages = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const icons = gsap.utils.toArray<HTMLElement>('.tech-icon')

        icons.forEach((icon) => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    scale: 1.3,
                    rotate: gsap.utils.random(-15, 15),
                    color: '#fefae0',
                    ease: 'back.out(3)',
                })
            })
            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    scale: 1,
                    rotate: 0,
                    color: '#dda15e',
                    ease: 'elastic.out(1, 0.5)',
                })
            })
        })

        let splitHeading: SplitText | undefined

        gsap.set('.usages-title', { display: 'none' })

        document.fonts.ready.then(() => {
            splitHeading = SplitText.create('.usages-title', { type: 'chars, words' })

            gsap.set('.usages-title', { display: 'block' })
            gsap.set(splitHeading.words, { opacity: 0, y: 40 })

            ScrollTrigger.create({
                trigger: '.usages-title',
                start: 'top 80%',
                once: true,
                markers: true,
                onEnter: () => {
                    gsap.to(splitHeading.words, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.03,
                        ease: 'power3.out',
                        duration: 0.8,
                    })
                },
            })
        })

        return () => {
            splitHeading?.revert()
        }
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="w-full h-[150%] usages-section flex relative bg-light-custom">
            <div className="noise" />

            <div className="w-full h-full centered flex-col gap-30">

                <TechMarquee />

                <h2 style={{fontSize: "clamp(16px, 5vw, 72px)"}} className="usages-title text-dark-green-custom w-250 text-center">
                    Softwares i Use Everyday in My Journey
                </h2>

                <div className="chat-box h-[400px] max-md:h-[600px] max-md:w-[600px] max-sm:w-[400px] w-[900px] rounded-2xl bg-green-custom relative overflow-hidden -translate-y-20">
                    <div className="noise2 w-full h-full absolute rounded-2xl" />

                    <div className="relative z-10 w-full h-full grid grid-cols-4 max-md:grid-cols-2 place-items-center px-lg py-lg gap-lg">
                        {usedTech.map((Icon, i) => (
                            <Icon
                                key={i}
                                className="tech-icon text-yellow-custom transition-all duration-300 cursor-pointer"
                                size={56}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Usages