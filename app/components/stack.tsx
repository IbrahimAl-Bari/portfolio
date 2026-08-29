"use client"

import React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { chatMessages } from "../constants"
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger , useGSAP)

const Stack = () => {

    useGSAP(() => {
        const bubbles = gsap.utils.toArray<HTMLElement>(".chat-bubble")

        gsap.set(bubbles, { opacity: 0, y: 20 })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".chat-section",
                start: "bottom bottom",
                end: "+=500",
            },
        })

        tl.to(bubbles, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.5,
            ease: "power2.out",

        })

        let splitHeading: SplitText | undefined

        gsap.set('.stack-title', { display: 'none' })

        document.fonts.ready.then(() => {
            splitHeading = SplitText.create('.stack-title', { type: 'chars, words' })

            gsap.set('.stack-title', { display: 'block' })
            gsap.set(splitHeading.words, { opacity: 0, y: 40 })

            ScrollTrigger.create({
                trigger: '.stack-title',
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

    })

    return (
        <div
            className="w-full chat-section h-full flex relative bg-light-custom"
        >
            <div className="noise" />

            <div className="w-full min-h-screen centered flex-col gap-10">
                <h2 style={{fontSize: "clamp(16px, 5vw, 72px)"}} className="mt-20 text-dark-green-custom stack-title">
                    So What Do You Work With ?
                </h2>

                <div
                    className="
                    pointer-events-none
        scrollbar-none
        chat-box
        relative overflow-hidden
        w-[min(900px,calc(100vw-48px))]
        h-[min(600px,70vh)]
        min-h-[500px]
        rounded-2xl
        bg-green-custom

        max-md:w-[calc(100vw-32px)]
        max-md:h-[650px]
        max-md:min-h-0
        max-md:rounded-[28px] "
                >
                    <div className="noise2 w-full h-full absolute rounded-2xl" />

                    <div className="relative z-10 w-full h-full flex flex-col justify-center gap-md px-lg overflow-y-auto">
                        {chatMessages.map((tech, index) => (
                            <div key={index} className="flex flex-col gap-2 font-display">
                                <span className="chat-bubble self-start max-sm:text-xs bg-dark-green-custom text-light-custom rounded-2xl px-md py-sm max-w-[70%]">
                                    {tech.message}
                                </span>

                                <span className="chat-bubble self-end max-sm:text-xs bg-orange-custom text-light-custom rounded-2xl px-md py-sm max-w-[70%]">
                                    {tech.reply}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack