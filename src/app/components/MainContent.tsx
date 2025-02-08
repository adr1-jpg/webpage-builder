import React from 'react';

interface MainContentProps {
  components: string[];
}

export default function MainContent({ components }: MainContentProps) {
  return (
    <div className="flex-1 p-4 bg-gray-50 overflow-auto h-[calc(100vh-48px)]">
      <header className='mb-4'>
        <h1 className="text-2xl font-bold">Page Title</h1>
        <p className="text-gray-600">Page description goes here</p>
      </header>
      <div 
        className="min-h-[700px] bg-white rounded-lg shadow-sm relative"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        {components.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t flex justify-between items-center bg-white/80 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <button className="text-gray-600">← Page 1 →</button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Save
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
