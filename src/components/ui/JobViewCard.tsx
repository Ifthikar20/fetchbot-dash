import React from 'react';

const FigmaCourseCard = () => {
  return (
    <div className="max-w-md mx-auto rounded-3xl overflow-hidden shadow-md">
      {/* Top Section with clean background */}
      <div className="bg-gray-100 p-8 relative overflow-hidden">
        {/* Main text */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black">Unlock now.</h2>
          <h2 className="text-4xl font-bold text-black">your best creation.</h2>
        </div>
        
        {/* Figma logo */}
        <div className="absolute left-8 top-36">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10a4 4 0 118 0 4 4 0 01-8 0z" fill="#1ABCFE"/>
              <path d="M2 14a4 4 0 014-4h4v4a4 4 0 01-8 0z" fill="#0ACF83"/>
              <path d="M6 2h4v8H6a4 4 0 010-8z" fill="#FF7262"/>
              <path d="M14 2a4 4 0 010 8h-4V2h4z" fill="#F24E1E"/>
              <path d="M2 6a4 4 0 014-4h4v8H6a4 4 0 01-4-4z" fill="#A259FF"/>
            </svg>
          </div>
        </div>
        
        {/* White dots pattern */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-4 right-32 w-3 h-3 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-32 right-16 w-3 h-3 bg-white rounded-full opacity-60"></div>
        
        {/* Schedule Section - white box */}
        <div className="bg-white rounded-xl p-4 shadow-sm z-10 relative">
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <svg className="text-yellow-500 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="14" height="14" rx="2" stroke="#F9A826" strokeWidth="1.5" fill="none" />
                <path d="M3 8H17" stroke="#F9A826" strokeWidth="1.5" />
                <path d="M7 2V5" stroke="#F9A826" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M13 2V5" stroke="#F9A826" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-gray-700">15 April, 2024 - 25 April, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-yellow-500 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="#F9A826" strokeWidth="1.5" fill="none" />
                <path d="M10 6V10L13 12" stroke="#F9A826" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-gray-700">10:30AM - 11:30AM IST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Information */}
      <div className="p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">Learn Figma - UI/UX Design Essential Training</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Figma is a very powerful application that runs online. There are virtually no
          platform boundaries when it comes to using figma because you can...
        </p>

        {/* Instructor and Stats */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
              <img src="/api/placeholder/40/40" alt="Instructor" />
            </div>
            <span className="font-medium text-gray-800">Thomas Williams</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 2v8l6-4-6-4z" fill="#4CAF50" />
                </svg>
              </div>
              <span className="text-gray-700">46 videos</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z" fill="#FFC107" />
                  <path d="M6 7c-1.3 0-4 0.7-4 2v1h8v-1c0-1.3-2.7-2-4-2z" fill="#FFC107" />
                </svg>
              </div>
              <span className="text-gray-700">79 students</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1l1.5 3 3.5 0.5-2.5 2.2 0.6 3.3-3.1-1.5-3.1 1.5 0.6-3.3-2.5-2.2 3.5-0.5 1.5-3z" fill="#F44336" />
                </svg>
              </div>
              <span className="text-gray-700">3.5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaCourseCard;