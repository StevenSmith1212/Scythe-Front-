import React from 'react';
import List from './List';
import FileInfo from './FileInfo';

function Almanac() {
  return (
    <div className='flex flex-row h-fit'>
      <div className='flex flex-col w-1/6'>
        <div className='flex justify-end'>
          <List />
        </div>
      </div>
      <div className='w-4/6 flex flex-col pl-8  py-3'>
        <div className='flex-1 border-gray-200 pl-8'>
          <FileInfo />
        </div>
      </div>
    </div>
  );
}

export default Almanac;
