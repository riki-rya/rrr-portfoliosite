'use client'

import React from 'react';
import { ScrollAnimator } from 'react-animate-observer';
import '../../App.css';
import Image from "next/image";

const Thispage = () => {
    return (
        <main className="main">
            <section className="section">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">About This Page</h1>
                    <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center gap-20">
                        <ScrollAnimator
                            start={{ opacity: 0, translateX: -40 }}
                            end={{ opacity: 1, translateX: 0 }}
                            transition={{ transitionDuration: 1.2, transitionTimingFunction: 'ease-in-out' }}
                        >
                            <Image
                                src="/next.svg"
                                alt="nextjs logo"
                                className="dark:invert"
                                width={360}
                                height={74}
                                priority
                            />
                        </ScrollAnimator>
                        <ScrollAnimator
                            start={{ opacity: 0, translateX: -40 }}
                            end={{ opacity: 1, translateX: 0 }}
                            transition={{ transitionDelay: 0.4,transitionDuration: 1.2, transitionTimingFunction: 'ease-in-out', }}
                        >
                            <Image
                                src="/icons/framer-motion.svg"
                                alt="Vercel Logo"
                                className="dark:invert"
                                width={180}
                                height={37}
                                priority
                            />
                            <p>Framer Motion</p>
                        </ScrollAnimator>
                        <ScrollAnimator
                            start={{ opacity: 0, translateX: -40 }}
                            end={{ opacity: 1, translateX: 0 }}
                            transition={{ transitionDelay: 0.8,transitionDuration: 1.2, transitionTimingFunction: 'ease-in-out' }}
                        >
                            <Image
                                src="/icons/shadcn.png"
                                alt="Vercel Logo"
                                className="dark:invert"
                                width={180}
                                height={37}
                                priority
                            />
                            <p>Shadcn/ui</p>
                        </ScrollAnimator>
                    </div>
                    <div>
                        <ScrollAnimator
                            start={{ opacity: 0, translateX: -40 }}
                            end={{ opacity: 1, translateX: 0 }}
                            transition={{ transitionDelay: 1.2,transitionDuration: 1.2, transitionTimingFunction: 'ease-in-out' }}
                        >
                            <h1 className="text-lg font-bold">This page utilizes frameworks, UI components, and animation libraries on the left.</h1>
                        </ScrollAnimator>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}




export default Thispage