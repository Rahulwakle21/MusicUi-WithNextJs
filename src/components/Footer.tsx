import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-500 p-12'>
        <div className=' max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis sunt, quos aspernatur sapiente excepturi sit porro totam ul.</p>
            </div>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
                <ul>
                    <li><a href="#" className='hover:text-white transition-colors duration-500'> Home</a></li>
                    <li><a href="#" className='hover:text-white transition-colors duration-500'> About</a></li>
                    <li><a href="#" className='hover:text-white transition-colors duration-500'> Contact</a></li>
                    <li><a href="#" className='hover:text-white transition-colors duration-500'> Courses</a></li>
                </ul>

            </div>
            <div> 
                <h2 className='text-white text-lg font-semibold mb-4'>Social</h2>
                <p>Insta</p>
                <p>Facebook</p>
            </div>
            <div>
                <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>
                <p>Nagpur,Maharashtra</p>
                <p>email: r@gamil.com</p>
                <p>Number: 123457896</p>

            </div>

        </div>
            <p className='text-white text-center mt-5 text-xs'> rahul@2024 aceternity UI All Rights Reserved</p>
    </footer>
  )
}

export default Footer
