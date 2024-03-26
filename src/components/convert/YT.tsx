import React, { useCallback } from 'react';
import FileDrop from './FileDrop';
import UnderYT from './UnderYT';

const YT = () => {
  return (
    <div>
      <div className='border border-dashed border-gray-300 rounded flex flex-col justify-center items-center w-1/2 h-64 mx-auto my-4 p-6 cursor-pointer hover:border-blue-500 transition-all'>
        <input
          type='text'
          placeholder='https://www.youtube.com/'
          className='bg-black border p-4 w-2/3'
        />
      </div>
      <UnderYT />
    </div>
  );
};

export default YT;
