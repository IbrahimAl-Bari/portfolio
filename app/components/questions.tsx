'use client';

import React, { useState } from 'react';
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP)
const faqs = [
    {
        id: 1,
        question: "Who are you?",
        answer: "I'm Ibrahim, a web developer who loves building interactive and visually engaging experiences."
    },
    {
        id: 2,
        question: "Why did you start coding?",
        answer: "I started coding out of curiosity and fell in love with turning ideas into real things."
    },
    {
        id: 3,
        question: "Why do you want this career?",
        answer: "Because it lets me combine creativity, problem-solving, and technology to build things I’m proud of."
    },
    {
        id: 4,
        question: "What makes you different?",
        answer: "I care about the details and want everything I build to feel intentional."
    }
];

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    useGSAP(() => {

        let splitHeading: SplitText | undefined

        gsap.set('.qa-title', { display: 'none' })

        document.fonts.ready.then(() => {
            splitHeading = SplitText.create('.qa-title', { type: 'chars, words' })

            gsap.set('.qa-title', { display: 'block' })
            gsap.set(splitHeading.words, { opacity: 0, y: 40 })

            ScrollTrigger.create({
                trigger: '.qa-title',
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
        <div className="w-full h-full relative bg-dark-green-custom p-10 flex flex-col">

            <div className="noise z-50" />

            <h2 className="text-center text-light-custom text-4xl mb-16 qa-title">
                Some Q&A !
            </h2>

            <div className="w-full max-w-5xl text-orange-custom flex gap-8 flex-col group">

                {faqs.map((faq, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={faq.id}
                            onClick={() => setActiveIndex(isActive ? null : index)}
                            className={`
                                cursor-pointer flex flex-col justify-center ml-5 pl-8
                                border-orange-custom transition-all duration-300 ease-out
                                /* Hover effects: blurs all items when group is hovered, except the one actually being hovered */
                                group-hover:blur-[3px] group-hover:opacity-40 hover:blur-none! hover:opacity-100!
                                ${isActive ? 'border-l-10' : 'border-l-2'}
                            `}
                        >
                            <h2 className={`
                                capitalize transition-all duration-300 origin-left text-2xl font-bold
                                ${isActive ? 'scale-110 mb-2' : 'scale-100'}
                            `}>
                                {faq.question}
                            </h2>

                            <div className={`
                                grid transition-all duration-300 ease-in-out
                                ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                            `}>
                                <div className="overflow-hidden">
                                    <h4 className="text-light-custom pb-2 capitalize">
                                        {faq.answer}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default Questions;