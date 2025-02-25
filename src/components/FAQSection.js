import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react';
const FAQSection = () => {
    const [openQuestion, setOpenQuestion] = useState('prior-experience');

    const toggleQuestion = (id) => {
      setOpenQuestion(openQuestion === id ? null : id);
    };

    const faqItems = [
        {
          id: 'prior-experience',
          question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
          answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
        },
        {
          id: 'system-requirements',
          question: 'What is the minimum system configuration required?',
          answer: 'System requirements information would be displayed here.'
        }
    ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id='FAQs'>
    <h1 className="text-center md:text-2xl text-lg font-medium mb-8">
      Frequently Asked <span className="text-blue-500">Questions</span>
    </h1>

    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <div className="flex flex-col gap-4">
          <button 
            className="py-3 px-4 text-center rounded border border-gray-200 shadow-sm bg-white hover:bg-gray-50 text-blue-500"
          >
            Eligibility
          </button>
          
          <button 
            className="py-3 px-4 text-center rounded border border-gray-200 shadow-sm bg-white hover:bg-gray-50"
          >
            How To Use?
          </button>
          
          <button 
            className="py-3 px-4 text-center rounded border border-gray-200 shadow-sm bg-white hover:bg-gray-50"
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      <div className="md:w-2/3">
        <div className="flex flex-col gap-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b pb-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleQuestion(item.id)}
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                {openQuestion === item.id ? (
                  <ChevronUp className="flex-shrink-0 text-gray-500" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-500" />
                )}
              </button>
              
              {openQuestion === item.id && (
                <div className="mt-2 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default FAQSection