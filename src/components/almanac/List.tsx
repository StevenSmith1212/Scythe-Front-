import React from 'react';


// Props type definition
interface ListProps {
  fileTypes: string[];
  onSelect: (fileType: string) => void;
}

function List({ fileTypes, onSelect }: ListProps) {
  return (
    <div>
      <ul className='text-gray-400 cursor-pointer ease-in-out duration-500 m-2 p-2'>
        {fileTypes.map((fileType) => (
          <li
            key={fileType}
            className='m-1 hover:text-white'
            onClick={() => onSelect(fileType)}
          >
            {fileType}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
