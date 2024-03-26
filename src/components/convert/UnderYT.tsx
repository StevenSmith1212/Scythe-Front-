import React, { Component } from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

export class UnderYT extends Component {
  render() {
    return (
      <div className='mx-auto w-1/2 my-4 flex justify-between text-gray-400'>
        <ul className='flex flex-wrap space-x-10'>
          <li className='text-sm -my-.5'>YT Video Title</li>
          <li className='-my-4'>
            <ArrowRightAltOutlinedIcon style={{ fontSize: '48px' }} />
          </li>
          <li className='-my-1 text-white cursor-pointer'>
            <select className='bg-black' name='files' id='files'>
              <option value='mp3'>.mp3</option>
              <option value='mp4'>.mp4</option>
              <option value='mp4'>Transcript</option>
            </select>
          </li>
        </ul>
        <button className='bg-black shadow color-changing-shadow -my-1 hover:text-white cursor-pointer'>
          Convert
        </button>
      </div>
    );
  }
}

export default UnderYT;
