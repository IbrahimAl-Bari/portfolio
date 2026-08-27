"use client"

import React from 'react'
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri'
import { TbBrandThreejs } from 'react-icons/tb'
import { SiGsap, SiTypescript } from 'react-icons/si'
import { FaHtml5 , FaCss3Alt ,FaReact , FaGitAlt} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const techIcons = [
    { name: 'Next.js', Icon: RiNextjsFill },
    { name: 'Tailwind', Icon: RiTailwindCssFill },
    { name: 'GSAP', Icon: SiGsap },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Three.js', Icon: TbBrandThreejs },
    { name: 'Html', Icon: FaHtml5 },
    { name: 'Css', Icon: FaCss3Alt },
    { name: 'Javascript', Icon: IoLogoJavascript },
    { name: 'React', Icon: FaReact },
    { name: 'Git', Icon: FaGitAlt },
]

const TechMarquee = () => {
    const doubled = [...techIcons, ...techIcons]

    return (
        <div className="overflow-hidden relative w-full py-4 bg-dark-green-custom">
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-linear-to-r from-dark-green-custom to-transparent z-10" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-linear-to-l from-dark-green-custom to-transparent z-10" />

            <div className="flex gap-16 w-max animate-marquee">
                {doubled.map((tech, i) => (
                    <div key={i} className="flex items-center justify-center min-w-20">
                        <tech.Icon className="text-yellow-custom" size={48} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TechMarquee