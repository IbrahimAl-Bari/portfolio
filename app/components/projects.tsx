"use client"

import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

const projects = [
    { name: "cinematix", id: 1 },
    { name: "airpods", id: 2 },
    { name: "lazza", id: 3 },
    { name: "gamep", id: 4 },
    { name: "sls", id: 5 },
]

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        let splitHeading: SplitText | undefined

        gsap.set('.project-title', { display: 'none' })
        gsap.set('.label-recent', { opacity: 0 })
        gsap.set('.label-oldest', { opacity: 0 })

        document.fonts.ready.then(() => {
            splitHeading = SplitText.create('.project-title', { type: 'chars, words' })

            gsap.set('.project-title', { display: 'block' })
            gsap.set(splitHeading.words, { opacity: 0, y: 40 })

            ScrollTrigger.create({
                trigger: '.project-title',
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

            const track = trackRef.current
            const imgs = Array.from(track?.querySelectorAll('img') || [])

            const allLoaded = Promise.all(
                imgs.map((img) =>
                    img.complete
                        ? Promise.resolve()
                        : new Promise((resolve) => img.addEventListener('load', resolve, { once: true }))
                )
            )

            allLoaded.then(() => {
                requestAnimationFrame(() => {
                    const items = gsap.utils.toArray<HTMLElement>('.project-item')
                    if (!track || items.length === 0) return

                    const firstCenter = items[0].offsetLeft + items[0].offsetWidth / 2
                    const lastCenter = items[items.length - 1].offsetLeft + items[items.length - 1].offsetWidth / 2
                    const viewportCenter = window.innerWidth / 2

                    const startX = viewportCenter - firstCenter
                    const endX = viewportCenter - lastCenter
                    // shorter scroll distance = feels faster to scroll through
                    const scrollDistance = Math.abs(startX - endX) + window.innerHeight * 0.5

                    gsap.set(track, { x: startX })
                    gsap.set('.label-recent', { opacity: 0, y: 20 })
                    gsap.set('.label-oldest', { opacity: 0, y: 20 })

                    let recentFired = false
                    let oldestFired = false

                    gsap.to(track, {
                        x: endX,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.project-section',
                            start: 'top top',
                            end: () => `+=${scrollDistance}`,
                            scrub: 0.4, // lower = animation catches up to scroll faster, feels snappier
                            pin: true,
                            onUpdate: (self) => {
                                const p = self.progress

                                if (p > 0.05 && !recentFired) {
                                    recentFired = true
                                    gsap.to('.label-recent', {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.8,
                                        ease: 'power3.out',
                                    })
                                }

                                if (p > 0.85 && !oldestFired) {
                                    oldestFired = true
                                    gsap.to('.label-oldest', {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.8,
                                        ease: 'power3.out',
                                    })
                                }
                            },
                        },
                    })

                    ScrollTrigger.refresh()
                })
            })
        })

        return () => {
            splitHeading?.revert()
        }
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className={"h-full w-full bg-light-custom relative project-section"}>
            <div className={"noise"} />

            <div className={"w-full h-full flex justify-center"}>

                <h2 className={"mt-20 text-dark-green-custom project-title"}>Projects ?</h2>

                <div className={"w-full h-full absolute flex items-end justify-between"}>
                    <h5 className={"label-recent w-35 text-center text-dark-green-custom mb-20"}>From The Recent One</h5>
                    <h5 className={"label-oldest w-30 text-center text-dark-green-custom mb-20"}>To The Oldest One</h5>
                </div>

                <div ref={trackRef} className={"h-full absolute flex items-center gap-[200px]"} style={{ willChange: 'transform' }}>
                    {projects.map((project) => (
                        <div key={project.id} className={"project-item shrink-0"}>
                            <Image  className={"w-auto h-auto max-sm:h-[250px] max-sm:w-[400px] rounded-2xl"} width={600} height={300} src={`/projects/${project.name}.png`} alt={project.name} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Projects