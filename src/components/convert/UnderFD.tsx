import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const UnderFD = () => {
  return (
    <div className='mx-auto w-1/2 my-4 flex flex-wrap justify-between text-gray-400'>
      <ul className='flex flex-wrap space-x-10'>
        <li className='text-sm -my-.5'>Detected file</li>
        <li className='-my-4'>
          <ArrowRightAltOutlinedIcon style={{ fontSize: '48px' }} />
        </li>
        <li className='-my-1 text-white cursor-pointer'>
          <select className='bg-black' name='files' id='files'>
            <option value='csv'>.csv</option>
            <option value='doc'>.doc</option>
            <option value='docx'>.docx</option>
            <option value='gif'>.gif</option>
            <option value='gif'>.html</option>
            <option value='gif'>.jpeg</option>
            <option value='gif'>.jpg</option>
            <option value='json'>.json</option>
            <option value='mp3'>.mp3</option>
            <option value='mp4'>mp4</option>
            <option value='pdf'>.pdf</option>
            <option value='png'>.png</option>
            <option value='ppt'>.ppt</option>
            <option value='pptx'>.pptx</option>
          </select>
        </li>
      </ul>
      <button className='bg-black shadow color-changing-shadow -my-1 hover:text-white cursor-pointer'>
        Convert
      </button>
    </div>
  );
};

export default UnderFD;
