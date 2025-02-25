import React, { useState } from 'react'

const ReferralBenefitsSection = ({ openReferralForm }) => {
    const [selectedCategory, setSelectedCategory] = useState('ALL PROGRAMS');
    const [isEnrolled, setIsEnrolled] = useState(true);
    const [showAllPrograms, setShowAllPrograms] = useState(false);
    
    const categories = [
        'ALL PROGRAMS',
        'PRODUCT MANAGEMENT',
        'STRATEGY & LEADERSHIP',
        'BUSINESS MANAGEMENT',
        'FINTECH',
        'SENIOR MANAGEMENT',
        'DATA SCIENCE',
        'DIGITAL TRANSFORMATION',
        'BUSINESS ANALYTICS'
    ];

    const programsData = [
        {
          id: 1,
          name: 'Professional Certificate Program in Product Management',
          category: 'PRODUCT MANAGEMENT',
          referrerBonus: 7000,
          refereeBonus: 9000,
        },
        {
          id: 2,
          name: 'PG Certificate Program in Strategic Product Management',
          category: 'PRODUCT MANAGEMENT',
          referrerBonus: 9000,
          refereeBonus: 11000,
        },
        {
          id: 3,
          name: 'Executive Program in Data Driven Product Management',
          category: 'PRODUCT MANAGEMENT',
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
        {
          id: 4,
          name: 'Executive Program in Product Management and Digital Transformation',
          category: 'PRODUCT MANAGEMENT',
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
        {
          id: 5,
          name: 'Executive Program in Product Management',
          category: 'PRODUCT MANAGEMENT',
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
        {
          id: 6,
          name: 'Advanced Certification in Product Management',
          category: 'PRODUCT MANAGEMENT',
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
        {
          id: 7,
          name: 'Executive Program in Product Management and Project Management',
          category: 'PRODUCT MANAGEMENT',
          referrerBonus: 10000,
          refereeBonus: 10000,
        }
      ];

      const filteredPrograms = programsData.filter(program => 
        selectedCategory === 'ALL PROGRAMS' || program.category === selectedCategory
      );
      
      const displayPrograms = showAllPrograms 
        ? filteredPrograms 
        : filteredPrograms.slice(0, 5);
  return (
    <div className="w-full py-12 px-4" id='Benefits'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          What Are The <span className="text-blue-500">Referral Benefits?</span>
        </h2>
        
        <div className="flex justify-end items-center mb-4">
          <span className="mr-2 text-gray-700">Enrolled</span>
          <div 
            className={`relative inline-block w-12 h-6 transition-colors duration-200 ease-in-out rounded-full cursor-pointer ${isEnrolled ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setIsEnrolled(!isEnrolled)}
          >
            <span 
              className={`absolute left-1 top-1 w-4 h-4 transition-transform duration-200 ease-in-out bg-white rounded-full transform ${isEnrolled ? 'translate-x-6' : 'translate-x-0'}`}
            ></span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {categories.map((category, index) => (
                <div key={index}>
                  <button
                    className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                      selectedCategory === category 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span>{category}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </button>
                  {index < categories.length - 1 && <hr className="border-gray-200" />}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-grow md:ml-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="grid grid-cols-12">
                <div className="col-span-6 bg-blue-100 p-4 text-gray-700 font-semibold">
                  Programs
                </div>
                <div className="col-span-3 bg-blue-100 p-4 text-gray-700 font-semibold border-l border-blue-200">
                  Referrer Bonus
                </div>
                <div className="col-span-3 bg-blue-100 p-4 text-gray-700 font-semibold border-l border-blue-200">
                  Referee Bonus
                </div>
              </div>
              
              {displayPrograms.map((program, index) => (
                <div 
                  key={program.id} 
                  className={`grid grid-cols-12 ${index < displayPrograms.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="col-span-6 p-4 flex items-center">
                    <svg className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-8 6h16" />
                    </svg>
                    <span className="text-gray-700">{program.name}</span>
                  </div>
                  <div className="col-span-3 p-4 border-l text-gray-700">
                    ₹ {program.referrerBonus.toLocaleString()}
                  </div>
                  <div className="col-span-3 p-4 border-l text-gray-700">
                    ₹ {program.refereeBonus.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPrograms.length > 5 && (
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => setShowAllPrograms(!showAllPrograms)}
                  className="flex items-center px-4 py-2 text-blue-500 border border-blue-300 rounded-lg hover:bg-blue-50"
                >
                  <span>{showAllPrograms ? 'Show Less' : 'Show More'}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ml-1 transform transition-transform ${showAllPrograms ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <button 
            onClick={openReferralForm}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
          >
            Refer Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReferralBenefitsSection