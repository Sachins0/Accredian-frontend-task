import React from 'react';
import moneyOne from '../assets/money1.png';
import heroImg from '../assets/heroimg.png';

const HeroSection = ({openReferralForm}) => {
  return (
    <div
      id="Refer"
      className="relative w-full bg-blue-50 rounded-3xl drop-shadow-xl overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={moneyOne}
          alt="money"
          className="w-14 h-14 absolute top-4 left-4 rotate-45"
          loading='lazy'
        />
        <img
          src={moneyOne}
          alt="money"
          className="w-14 h-14 absolute top-2 right-4 -rotate-12"
          loading='lazy'
        />
        <img
          src={moneyOne}
          alt="money"
          className="w-14 h-14 absolute bottom-8 right-8 rotate-45"
          loading='lazy'
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Let&apos;s Learn<br />&amp; Earn
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
            Get a chance to win <br />
            up-to <span className="text-blue-500 font-bold">Rs. 15,000</span>
          </p>
          <button
            onClick={openReferralForm}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
          >
            Refer Now
          </button>
        </div>

        <div className="md:w-1/2 w-0 flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Phone displaying Accredian website"
            className="w-2/3 md:w-full max-w-sm md:max-w-md"
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
