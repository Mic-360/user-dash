import { RiToolsFill } from '@remixicon/react';
import { Icon, Tab, TabGroup, TabList } from '@tremor/react';
import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('M');
  return (
    <>
      <header className='relative top-4 z-10 w-11/12 py-6 px-4 flex justify-between items-center rounded-lg bg-opacity-50 border-[0.1rem] border-gray-200 shadow-md grainy'>
        <a
          href='/'
          className='border-2 rounded-full p-[0.125rem] animate-pulse'
        >
          <img
            src='/favicon.png'
            alt='logo'
            className='h-8 w-8'
          />
        </a>
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
        <DataPage activeTab={activeTab} />
        {activeTab === 'settings' && <SettingsPage />}
      </main>
      <footer className='relative bottom-4 z-10 w-11/12 py-4 px-4 rounded-lg bg-opacity-50 border-[0.1rem] border-gray-200 shadow-md grainy'>
        <p className='text-center uppercase font-medium flex justify-between items-center'>
          <span className='hover:text-gray-600'>
            <a href='http://twinverse.in'>Twinverse Technology &copy; 2024</a>
          </span>
          <span className='flex gap-x-2 items-center'>
            <span className='cursor-pointer hover:text-gray-600'>
              Privacy Policy
            </span>
            <span>&nbsp;|&nbsp;</span>
            <span className='cursor-pointer hover:text-gray-600'>
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
        className='px-1 grainy'
        variant='solid'
        defaultValue='1'
      >
        <Tab
          onClick={() => setActiveTab('M')}
          value='1'
          className='text-lg px-6 py-2 uppercase tracking-wide font-medium'
        >
          Kiosk(M)
        </Tab>
        <Tab
          onClick={() => setActiveTab('T')}
          value='2'
          className='text-lg px-6 py-2 uppercase tracking-wide font-medium'
        >
          Kiosk(T)
        </Tab>
        <Tab
          onClick={() => setActiveTab('W')}
          value='3'
          className='text-lg px-6 py-2 uppercase tracking-wide font-medium'
        >
          Kiosk(W)
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
import DataPage from './pages/DataPage';
import SettingsPage from './pages/SettingsPage';
import DesignPage from './pages/DesignPage';

function Badges() {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-x-8'>
        <div className='flex gap-x-4 items-center justify-center grainy rounded-lg px-2 shadow-2xl'>
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
        <div className='flex gap-x-4 items-center justify-center grainy rounded-lg px-2 shadow-2xl'>
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
        <div className='flex gap-x-4 items-center justify-center grainy rounded-lg px-2 shadow-2xl'>
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
