import React from 'react'
import { ChevronRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6" id='Support'>
      <div className="bg-blue-500 rounded-lg p-6 flex items-center justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <div className="absolute top-0 right-0 w-full h-full bg-blue-400 rounded-full opacity-20 transform translate-x-1/4 -translate-y-1/2 scale-150"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-blue-400 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3 scale-150"></div>
        </div>
        
        <div className="flex items-center space-x-4 z-10">
          <div className="bg-white p-2 rounded-lg">
            <div className="text-blue-500 w-8 h-8">
            <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47 16.6667C49.5774 16.6667 51.6666 18.756 51.6666 21.3334V30.6667C51.6666 33.2441 49.5774 35.3334 47 35.3334H44.5222C43.374 44.5414 35.519 51.6667 26 51.6667V47C33.7319 47 40 40.732 40 33V19C40 11.2681 33.7319 5.00004 26 5.00004C18.268 5.00004 12 11.2681 12 19V35.3334H4.99998C2.42265 35.3334 0.333313 33.2441 0.333313 30.6667V21.3334C0.333313 18.756 2.42265 16.6667 4.99998 16.6667H7.47772C8.62596 7.45865 16.4809 0.333374 26 0.333374C35.519 0.333374 43.374 7.45865 44.5222 16.6667H47ZM16.1053 34.8315L18.579 30.8737C20.7304 32.2212 23.2742 33 26 33C28.7258 33 31.2696 32.2212 33.4209 30.8737L35.8947 34.8315C33.0261 36.6281 29.6344 37.6667 26 37.6667C22.3656 37.6667 18.9739 36.6281 16.1053 34.8315Z" fill="#1A73E8"/>
            </svg>
            </div>
          </div>
          <div>
            <h3 className="text-white font-medium text-lg md:text-xl">Want to delve deeper into the program?</h3>
            <p className="text-white text-sm opacity-90">Share your details to receive expert insights from our program team!</p>
          </div>
        </div>
        
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg flex items-center space-x-1 font-medium text-sm hover:bg-blue-50 transition-colors z-10">
          <span>Get in touch</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default ContactSection