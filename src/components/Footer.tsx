import React from 'react';

function Footer() {
  return (
    <footer className='bottom-0 dark:text-gray-400 w-full absolute my-6 flex flex-row justify-center'>
      <ul className='flex justify-center items-center text-sm font-medium sm:mt-0 space-x-10'>
        <li>
          <a href='#' className='hover:text-white me-4 md:me-6'>
            About
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-white me-4 md:me-6'>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-white me-4 md:me-6'>
            Licensing
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-white'>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
