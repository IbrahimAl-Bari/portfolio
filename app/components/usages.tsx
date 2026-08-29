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
            const handleMouseEnter = () => {
                const siblings = icons.filter((i) => i !== icon)

                // Stop any conflicting reset animations on these elements
                gsap.killTweensOf([icon, ...siblings])

                // Elevate hovered icon
                gsap.to(icon, {
                    scale: 1.35,
                    y: -10,
                    rotate: gsap.utils.random(-8, 8),
                    color: '#fefae0',
                    filter: 'drop-shadow(0px 10px 15px rgba(221, 161, 94, 0.4))',
                    ease: 'power2.out',
                    duration: 0.3,
                    zIndex: 20,
                })

                // Dim non-hovered siblings
                gsap.to(siblings, {
                    scale: 0.9,
                    opacity: 0.35,
                    filter: 'blur(2px)',
                    ease: 'power2.out',
                    duration: 0.3,
                    zIndex: 1,
                })
            }

            const handleMouseLeave = () => {
                const siblings = icons.filter((i) => i !== icon)

                gsap.killTweensOf([icon, ...siblings])

                // Reset target icon
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    rotate: 0,
                    color: '#dda15e',
                    opacity: 1,
                    filter: 'blur(0px) drop-shadow(0px 0px 0px rgba(0,0,0,0))',
                    ease: 'elastic.out(1, 0.5)',
                    duration: 0.5,
                    zIndex: 1,
                })

                // Reset siblings back to normal
                gsap.to(siblings, {
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)',
                    ease: 'power2.out',
                    duration: 0.3,
                })
            }

            icon.addEventListener('mouseenter', handleMouseEnter)
            icon.addEventListener('mouseleave', handleMouseLeave)
        })

        // SplitText Heading Logic
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
                                className="tech-icon text-yellow-custom cursor-pointer relative"
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