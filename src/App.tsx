import { RiToolsFill } from '@remixicon/react';
import { Icon, Tab, TabGroup, TabList } from '@tremor/react';
import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <>
      <header className='relative top-4 z-10 w-11/12 py-6 px-4 flex justify-between items-center rounded-lg bg-opacity-10 border-[0.1rem] border-gray-200 backdrop-filter backdrop-blur-lg shadow-md'>
        <h1 className='text-3xl font-bold text-center'>Analytics Dashboard</h1>
        <Icon
          icon={RiToolsFill}
          variant='solid'
          tooltip='Settings'
          onClick={() => setActiveTab('settings')}
        />
      </header>
      <main className='rounded-md h-full overflow-y-scroll w-11/12 py-4 px-2 flex flex-col gap-y-4'>
        <Tabs setActiveTab={setActiveTab} />
        <Badges />
        {activeTab === '1' && <DesignPage />}
        {activeTab === '2' && <KioskPage />}
        {activeTab === '3' && <ShopPage />}
        {activeTab === 'settings' && <SettingsPage />}
      </main>
      <footer className='relative bottom-4 z-10 w-11/12 py-4 px-4 rounded-lg bg-opacity-10 border-[0.1rem] border-gray-200 backdrop-filter backdrop-blur-lg shadow-md'>
        <p className='text-center uppercase font-medium flex justify-between items-center'>
          <span className='hover:underline underline-offset-2'>
            <a href='http://twinverse.in'>Twinverse Technology &copy; 2024</a>
          </span>
          <span className='flex gap-x-2 items-center'>
            <span className='cursor-pointer hover:underline'>
              Privacy Policy
            </span>
            <span>&nbsp;|&nbsp;</span>
            <span className='cursor-pointer hover:underline'>
              Terms & Conditions
            </span>
          </span>
        </p>
      </footer>
    </>
  );
}

export default App;

const Tabs = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => (
  <div className='mx-auto max-w-5xl mt-2 sticky top-3 z-10 shadow-md rounded-lg'>
    <TabGroup>
      <TabList
        className='px-1'
        variant='solid'
        defaultValue='1'
      >
        <Tab
          onClick={() => setActiveTab('1')}
          value='1'
          className='text-lg px-6 py-2 uppercase tracking-wide font-medium'
        >
          Designs
        </Tab>
        <Tab
          onClick={() => setActiveTab('2')}
          value='2'
          className='text-lg px-6 py-2 uppercase tracking-wide font-medium'
        >
          Kiosks
        </Tab>
        <Tab
          onClick={() => setActiveTab('3')}
          value='3'
          className='text-lg px-6 py-2 uppercase tracking-wide font-medium'
        >
          Shops
        </Tab>
      </TabList>
    </TabGroup>
  </div>
);

import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiArrowUpSFill,
} from '@remixicon/react';
import DesignPage from './pages/DesignPage';
import KioskPage from './pages/KioskPage';
import SettingsPage from './pages/SettingsPage';
import ShopPage from './pages/ShopPage';

function Badges() {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-x-8 sticky top-16 z-10'>
        <div className='flex gap-x-4 items-center justify-center'>
          <span className='inline-flex items-center gap-x-2 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold text-emerald-700 ring-1 ring-tremor-background-emphasis dark:text-emerald-500 dark:ring-dark-tremor-ring backdrop-filter backdrop-blur-lg shadow-md'>
            <RiArrowUpSFill
              className='-ml-0.5 h-4 w-4'
              aria-hidden={true}
            />
            9.3%
          </span>
          <p className='text-tremor-label uppercase backdrop-filter backdrop-blur-lg p-2 rounded-lg'>
            Uptime
          </p>
        </div>
        <div className='flex gap-x-4 items-center justify-center'>
          <span className='inline-flex items-center gap-x-2 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold text-red-700 ring-1 ring-tremor-background-emphasis dark:text-red-500 dark:ring-dark-tremor-ring backdrop-filter backdrop-blur-lg shadow-md'>
            <RiArrowDownSFill
              className='-ml-0.5 h-4 w-4'
              aria-hidden={true}
            />
            1.9%
          </span>
          <p className='text-tremor-label uppercase backdrop-filter backdrop-blur-lg p-2 rounded-lg'>
            Downtime
          </p>
        </div>
        <div className='flex gap-x-4 items-center justify-center'>
          <span className='inline-flex items-center gap-x-2 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold text-gray-700 ring-1 ring-tremor-background-emphasis dark:text-gray-400 dark:ring-dark-tremor-ring backdrop-filter backdrop-blur-lg shadow-md'>
            <RiArrowRightSFill
              className='-ml-0.5 h-4 w-4'
              aria-hidden={true}
            />
            0.6%
          </span>
          <p className='text-tremor-label uppercase backdrop-filter backdrop-blur-lg p-2 rounded-lg'>
            Maintenance
          </p>
        </div>
      </div>
    </>
  );
}
