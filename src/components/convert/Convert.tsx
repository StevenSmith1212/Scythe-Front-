import React, { useState } from 'react';
import FileDrop from './FileDrop';
import YT from './YT';
import Under from './UnderFD';

const Convert = () => {
  // Initialize state to 'FileDrop' to show FileDrop component by default
  const [activeComponent, setActiveComponent] = useState('FileDrop');

  return (
    <div>
      <ul>
        <li
          onClick={() => setActiveComponent('FileDrop')}
          className={`cursor-pointer ${
            activeComponent === 'FileDrop' ? 'text-white' : 'text-gray-400'
          }`}
        >
          File Converter
        </li>
        <li
          onClick={() => setActiveComponent('YT')}
          className={`cursor-pointer ${
            activeComponent === 'YT' ? 'text-white' : 'text-gray-400'
          }`}
        >
          Youtube Converter
        </li>
      </ul>
      <div className='flex flex-col'>
        {activeComponent === 'FileDrop' && <FileDrop />}
        {activeComponent === 'YT' && <YT />}
      </div>
    </div>
  );
};

export default Convert;
