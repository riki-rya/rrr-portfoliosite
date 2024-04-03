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
        <section className="section">
          <ScrollAnimator
            start={{ opacity: 0, translateX: 40, backgroundColor: '#f4f4f4' }}
            end={{ opacity: 1, translateX: 0, backgroundColor: '#f4f4f4' }}
            transition={{ transitionDuration: 0.6, transitionTimingFunction: 'ease-in-out' }}
          >
            <h2>Services</h2>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </ScrollAnimator>
        </section>
        </main>
    </div>
  );
};

export default App;