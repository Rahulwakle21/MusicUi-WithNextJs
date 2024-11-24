'use client'

import React from 'react'
import courseData from '../data/music_course.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean 
}

const FeaturedCourses = () => {

 const featuredCourses =  courseData.courses.filter((course:Course)=> course.isFeatured)


  return (
    <div className='py-12 bg-gray-900'>
        <div>
                <div className="text-center">
                    <h2 className='text-teal-600 font-semibold  text-lg'>FEATURED COURSES</h2>
                    <p className='mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl'>Learn With The Best</p>
                </div>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center sm:m-5'>
                    {
                        featuredCourses.map((course:Course,)=>{
                            return(
                                <div key={course.id} className='flex justify-center'>
                                    <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                        <div className='p-4 sm:p-6  flex flex-col items-center text-center flex-grow'>
                                            <p className='text-lg sm:text-xl text-black mt-4 dark:text-neutral-200'>{course.title}</p>
                                            <p className='text-sm text-neutral-600 py-4 dark:text-neutral-400'>{course.description}</p>
                                            <Link href={`/courses/${course.slug}`}> LEarn More</Link>
                                        </div>
                                        </BackgroundGradient>
                                </div>
                            )
                        })
                    }
                    </div>                                  
                </div>
                <div className='mt-20 text-center'>
                    <Link href={'/courses'} className='py-2 border px-5 rounded-lg bg-white hover:bg-gray-400 text-neutral-900 
                      transition duration-700
                    '> View All Courses</Link>
                </div>
        </div>
    </div>
  )
}

export default FeaturedCourses
