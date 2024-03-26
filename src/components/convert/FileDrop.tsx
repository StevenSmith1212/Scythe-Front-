import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Under from './UnderFD';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const FileDrop = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div
        {...getRootProps()}
        className='border wiggle border-dashed border-gray-300 rounded flex flex-col justify-center items-center w-1/2 h-64 mx-auto my-4 p-6 cursor-pointer hover:border-blue-500 transition-all'
      >
        <input {...getInputProps()} />
        <FileUploadOutlinedIcon
          className='mb-2 wiggle text-white transition-all'
          style={{ fontSize: '48px' }}
        />
        <p className='text-gray-400 text-sm'>
          {isDragActive
            ? 'Drop the files here ...'
            : 'Drag and drop some files here'}
        </p>
      </div>{' '}
      <Under />
    </div>
  );
};

export default FileDrop;
