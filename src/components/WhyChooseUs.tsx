"use client";

import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const musicSchoolContent = [
    {
      title: "Beginner's Music Theory",
      description:
        "Lay the foundation of your musical journey with our beginner-friendly theory classes. Understand notes, rhythms, and basic musical structures to build your skills step by step.",
    },
    {
      title: "Instrument Mastery",
      description:
        "Choose your instrument and embark on a personalized learning experience. Whether it's guitar, piano, violin, or drums, our expert instructors are here to guide you.",
    },
    {
      title: "Vocal Training",
      description:
        "Unlock the full potential of your voice with professional vocal training. From breathing techniques to stage performance, we help you find and refine your unique sound.",
    },
    {
      title: "Music Composition",
      description:
        "Learn the art of composing and arranging music. Explore melody, harmony, and rhythm to create your own songs and compositions with our comprehensive courses.",
    },
    {
      title: "Live Performance Workshops",
      description:
        "Gain confidence and stage presence with our live performance workshops. Practice performing in front of an audience and get valuable feedback to enhance your skills.",
    },
  ];
  

const WhyChooseUs = () => {
  return (
    <div>
            <StickyScroll content={musicSchoolContent} />

    </div>
  )
}

export default WhyChooseUs
