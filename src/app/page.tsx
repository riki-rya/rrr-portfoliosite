"use client"


import React from 'react';
import { ScrollAnimator } from 'react-animate-observer';
import './App.css';
import Hero from './about/aboutcomp/hero';
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import Image from "next/image";
import Thispage from './about/aboutcomp/thispage';

const App = () => {
  return (
    <div>
        <ScrollAnimator
          start={{ opacity: 0, translateY: -40, }}
          end={{ opacity: 1, translateY: 0, }}
          transition={{ transitionDuration: 0.8, transitionTimingFunction: 'ease-in-out' }}
        >
          <Hero />
        </ScrollAnimator>
        <main className="main">
            <ScrollAnimator
            start={{ opacity: 0, translateX: -40 }}
            end={{ opacity: 1, translateX: 0 }}
            transition={{ transitionDuration: 0.6, transitionTimingFunction: 'ease-in-out' }}
            >
              <Thispage />
            </ScrollAnimator>

        </main>
    </div>
  );
};

export default App;