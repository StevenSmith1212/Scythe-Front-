import { useState } from 'react';
import Convert from './convert/Convert';
import Almanac from './almanac/Almanac';
import Footer from './Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

type Tab = 'Convert' | 'Almanac';

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Convert');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Convert':
        return <Convert />;
      case 'Almanac':
        return <Almanac />;
      default:
        return null;
    }
  };

  const TabItem = ({ tab }: { tab: Tab }) => (
    <li
      className={`cursor-pointer mx-32 transition duration-500 ease-in-out ${
        activeTab === tab
          ? 'border-b-2 border-white'
          : 'border-b-2 border-transparent ease-in-out'
      }`}
      onClick={() => setActiveTab(tab)}
      role='tab'
      aria-selected={activeTab === tab}
    >
      {tab}
    </li>
  );

  return (
    <main className='flex flex-col items-center justify-center p-10 text-white w-full main-gradient'>
      <div className='flex flex-row space-x-2 top-0 m-2 mx-6 absolute justify-end right-0'>
        <GitHubIcon />
        <LightModeOutlinedIcon />
      </div>

      <h1 className='text-8xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent animate-text'>
        SCYTHE
      </h1>
      <div className='border-t border-gray-400 w-full my-2 p-2 wiggle'></div>
      <ul className='flex text-2xl mb-6' role='tablist'>
        <TabItem tab='Convert' />
        <TabItem tab='Almanac' />
      </ul>
      <section className='h-fit w-full'>{renderTabContent()} </section>
      <Footer />
    </main>
  );
};

export default Home;
