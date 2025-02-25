import React, { useState } from 'react'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Refer');
  
  const tabs = ['Refer', 'Benefits', 'FAQs', 'Support'];
  return (
    <div className="w-full flex justify-center px-4 py-2">
    <div className="w-full max-w-md bg-blue-50 rounded-full px-2 py-1">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => (
          <a
            key={tab}
            className={`relative px-4 py-2 text-lg font-medium rounded-full flex-1 text-center transition-colors duration-200 ${
              activeTab === tab 
                ? 'text-blue-600' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab(tab)}
            href = {`#${tab}`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
            )}
          </a>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Navbar