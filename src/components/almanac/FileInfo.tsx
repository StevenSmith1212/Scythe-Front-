import React from 'react';
import List from './List';

// Define a type for the file type information to ensure type safety.
type FileTypeInformation = {
  'Name and Extension': string | null;
  'MIME Type': string | null;
  Format: string | null;
  Specification: string | null;
  Usage: string | null;
  Compatibility: string | null;
  Programs: string | null;
  Structure: string | null;
  Compression: string | null;
  Quality: string | null;
  Advantages: string | null;
  Limitations: string | null;
  Security: string | null;
  Conversion: string | null;
  'Standards and Governance': string | null;
  'History and Development': string | null;
  Licensing: string | null;
  Accessibility: string | null;
  Metadata: string | null;
  'Best Practices': string | null;
  'Associated Risks': string | null;
  'Future Outlook': string | null;
};

interface FileInfoProps {
  fileType: string;
  info: FileTypeInformation;
}

function FileInfo({ fileType, info }: FileInfoProps) {
  return (
    <div className='m-4 p-4 border rounded shadow-lg'>
      <h1 className='text-3xl m-2'>{fileType}</h1>
      <List fileTypes={[]} onSelect={function (fileType: string): void {
        throw new Error('Function not implemented.');
      } }>
        {Object.entries(info).map(([key, value]) => (
          <li key={key} className='my-1'>
            <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>{' '}
            {value || 'Not specified'}
          </li>
        ))}
      </List>
    </div>
  );
}

export default FileInfo;
