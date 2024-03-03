import type { FC } from 'react';
// import DesignPage from './DesignPage';
import { Card } from '@tremor/react';
import { classNames } from '../lib/utils';
import { RiArrowRightUpLine } from '@remixicon/react';

interface DataPageProps {
  activeTab: string;
}

const datas = [
  {
    name: 'Top Design of the Day',
    time: '23m 14s',
    change: '+6.1%',
    changeType: 'positive',
  },
  {
    name: 'Top Design of the Week',
    time: '1h 2m 3s',
    change: '+19.2%',
    changeType: 'positive',
  },
  {
    name: 'Worst Design Today',
    time: '8m',
    change: '-22.2%',
    changeType: 'negative',
  },
];

const object = [
  {
    name: 'T-shirt',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.png',
    bgColor: 'bg-emerald-100 dark:bg-emerald-500/20',
    brand: 'Puma',
    href: '#',
    details: [
      {
        type: 'Type',
        value: 'T-shirt',
      },
      {
        type: 'Active Time',
        value: '61s',
      },
    ],
  },
  {
    name: 'Jeans',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Levi%27s_logo.svg',
    bgColor: 'bg-fuchsia-100 dark:bg-fuchsia-500/20',
    brand: "Levi's",
    href: '#',
    details: [
      {
        type: 'Type',
        value: 'Jeans',
      },
      {
        type: 'Active Time',
        value: '20s',
      },
    ],
  },
  {
    name: 'Cargo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Nike_Logo.png',
    bgColor: 'bg-blue-100 dark:bg-blue-500/20',
    brand: 'Nike',
    href: '#',
    details: [
      {
        type: 'Type',
        value: 'Cargo',
      },
      {
        type: 'Active Time',
        value: '1h',
      },
    ],
  },
];

const DataPage: FC<DataPageProps> = ({ activeTab }) => {
    
  return (
    <>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {datas.map((item) => (
          <Card
            key={item.name}
            className='grainy shadow-2xl shadow-tremor-brand'
          >
            <p className='flex items-start justify-between'>
              <span className='text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                {item.time}
              </span>
              <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'bg-emerald-300 dark:bg-emerald-300 border-green-500'
                    : 'bg-red-300 dark:bg-red-300 border-red-400',
                  'text-xs font-medium rounded-md p-1 border-[0.1rem]'
                )}
              >
                {item.change}
              </span>
            </p>
            <p className='mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
              {item.name}
            </p>
          </Card>
        ))}
        {object.map((member, i) => (
          <Card
            key={i}
            className='group p-4 grainy shadow-2xl shadow-tremor-brand'
          >
            <div className='flex items-center space-x-4'>
              <span
                className={classNames(
                  member.bgColor,
                  'flex h-12 w-12 shrink-0 items-center justify-center rounded-tremor-full text-tremor-default font-medium'
                )}
                aria-hidden='true'
              >
                <img
                  src={member.image}
                  alt={member.name}
                />
              </span>
              <div className='truncate'>
                <p className='truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                  <a
                    href={member.href}
                    className='focus:outline-none'
                  >
                    <span
                      className='absolute inset-0'
                      aria-hidden='true'
                    />
                    Name of {member.name}
                  </a>
                </p>
                <p className='truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
                  {member.brand}
                </p>
              </div>
            </div>
            <div className='mt-6 grid grid-cols-2 divide-x divide-tremor-border border-t border-tremor-border dark:divide-dark-tremor-border dark:border-dark-tremor-border'>
              {member.details.map((item) => (
                <div
                  key={item.type}
                  className='truncate px-3 py-2'
                >
                  <p className='truncate text-tremor-label text-tremor-content dark:text-dark-tremor-content'>
                    {item.type}
                  </p>
                  <p className='truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <span
              className='pointer-events-none absolute right-4 top-4 text-tremor-content-subtle group-hover:text-tremor-content dark:text-dark-tremor-content-subtle group-hover:dark:text-dark-tremor-content'
              aria-hidden='true'
            >
              <RiArrowRightUpLine
                className='h-4 w-4'
                aria-hidden='true'
              />
            </span>
          </Card>
        ))}
      </div>
    </>
  );
};
export default DataPage;
