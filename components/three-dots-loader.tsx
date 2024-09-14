import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex justify-center items-center gap-2'>
        <div className='h-3 w-3 bg-[#329c4a] rounded-full animate-bounce' style={{ animationDelay: '-0.3s' }}></div>
        <div className='h-3 w-3 bg-[#329c4a] rounded-full animate-bounce' style={{ animationDelay: '-0.15s' }}></div>
        <div className='h-3 w-3 bg-[#329c4a] rounded-full animate-bounce'></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;