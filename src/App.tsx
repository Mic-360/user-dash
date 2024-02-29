import { Tab, TabGroup, TabList } from '@tremor/react';
import './App.css';

function App() {
  return (
    <>
      <header className='relative top-4 w-10/12 py-2 rounded-lg bg-opacity-10 border-[0.1rem] border-gray-300 backdrop-filter backdrop-blur-lg shadow-md'>
        <h1 className='text-3xl font-bold text-center uppercase font-mono tracking-wider'>
          Analytics
        </h1>
      </header>
      <main className='border-2 rounded-md h-full w-11/12 py-4 px-2 flex flex-col gap-y-4'>
        <Tabs />
        <Badges />
        <KioskPage />
      </main>
      <footer className='relative bottom-4 w-10/12 py-2 rounded-lg bg-opacity-10 border-[0.1rem] border-gray-300 backdrop-filter backdrop-blur-lg shadow-md'>
        <p className='text-center  uppercase font-mono tracking-wider'>
          &copy; 2024 Twinverse
        </p>
      </footer>
    </>
  );
}

export default App;

const Tabs = () => (
  <div className='mx-auto max-w-5xl mt-2'>
    <TabGroup>
      <TabList
        variant='solid'
        defaultValue='1'
      >
        <Tab
          value='1'
          className='text-lg px-10 py-2 uppercase tracking-wide font-medium'
        >
          Kiosks
        </Tab>
        <Tab
          value='2'
          className='text-lg px-10 py-2 uppercase tracking-wide font-medium'
        >
          Designs
        </Tab>
        <Tab
          value='3'
          className='text-lg px-10 py-2 uppercase tracking-wide font-medium'
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
import KioskPage from './pages/KioskPage';

function Badges() {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-x-8'>
        <div className='flex gap-x-4 items-center justify-center'>
          <span className='inline-flex items-center gap-x-2 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold text-emerald-700 ring-1 ring-tremor-background-emphasis dark:text-emerald-500 dark:ring-dark-tremor-ring'>
            <RiArrowUpSFill
              className='-ml-0.5 h-4 w-4'
              aria-hidden={true}
            />
            9.3%
          </span>
          <p className='text-tremor-label uppercase'>Uptime</p>
        </div>
        <div className='flex gap-x-4 items-center justify-center'>
          <span className='inline-flex items-center gap-x-2 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold text-red-700 ring-1 ring-tremor-background-emphasis dark:text-red-500 dark:ring-dark-tremor-ring'>
            <RiArrowDownSFill
              className='-ml-0.5 h-4 w-4'
              aria-hidden={true}
            />
            1.9%
          </span>
          <p className='text-tremor-label uppercase'>Downtime</p>
        </div>
        <div className='flex gap-x-4 items-center justify-center'>
          <span className='inline-flex items-center gap-x-2 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold text-gray-700 ring-1 ring-tremor-background-emphasis dark:text-gray-400 dark:ring-dark-tremor-ring'>
            <RiArrowRightSFill
              className='-ml-0.5 h-4 w-4'
              aria-hidden={true}
            />
            0.6%
          </span>
          <p className='text-tremor-label uppercase'>Maintenance</p>
        </div>
      </div>
    </>
  );
}
