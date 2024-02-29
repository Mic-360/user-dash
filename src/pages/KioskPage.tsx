import type { FC } from 'react';

interface KioskPageProps {}

const KioskPage: FC<KioskPageProps> = () => {
    return (
      <div className='flex justify-evenly items-center py-4 px-10'>
        <div>
          <Sparks />
        </div>
        <Divider className='-rotate-90'> Status </Divider>
        <div className='flex flex-col gap-y-20'>
          <Monitor />
          <Monitor />
        </div>
      </div>
    );
}
export default KioskPage;

import { Card, Divider, SparkAreaChart } from '@tremor/react';
import { data, summary } from '../assets/constants';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Sparks() {
  return (
    <>
      <div className='space-y-6 sm:mx-auto sm:max-w-md'>
        {summary.map((stock) => (
          <Card
            key={stock.ticker}
            className='flex items-center justify-between space-x-4 p-4'
          >
            <div className='truncate'>
              <p className='truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                {stock.ticker}
              </p>
              <p className='truncate text-tremor-label text-tremor-content dark:text-dark-tremor-content'>
                {stock.description}
              </p>
            </div>
            <div className='flex items-center space-x-3'>
              <SparkAreaChart
                data={data}
                index='date'
                categories={[stock.ticker]}
                showGradient={true}
                colors={stock.changeType === 'positive' ? ['emerald'] : ['red']}
                className='h-8 w-24 flex-none sm:w-28'
              />
              <div
                className={classNames(
                  stock.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'flex w-28 items-center justify-end space-x-2 sm:w-32'
                )}
              >
                <span className='text-tremor-default font-medium'>
                  {stock.value}
                </span>
                <span
                  className={classNames(
                    stock.changeType === 'positive'
                      ? 'bg-emerald-100 dark:bg-emerald-400/10'
                      : 'bg-red-100 dark:bg-red-400/10',
                    'rounded px-1.5 py-1 text-tremor-label font-medium tabular-nums'
                  )}
                >
                  {stock.change}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

import { Tracker } from '@tremor/react';
import { trackerColors } from '../assets/constants';

function Monitor() {
  return (
    <Card className='mx-auto w-96'>
      <p className='text-tremor-default flex items-center justify-between'>
        <span className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium uppercase'>
          RN Mall Kiosk
        </span>
        <span className='text-tremor-content-strong dark:text-dark-tremor-content uppercase'>
          99.1% uptime
        </span>
      </p>
      <Tracker
        data={trackerColors}
        className='mt-2'
      />
      <p className='text-tremor-default flex items-center justify-between pt-2'>
        <span className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium'>
          60 days ago
        </span>
        <span className='text-tremor-content dark:text-dark-tremor-content'>
          Today
        </span>
      </p>
      <p className='flex pt-2 items-center gap-x-2 text-sm'>
        <p className='h-2 w-2 ring-4 ring-green-300 bg-green-500 rounded-full animate-pulse'></p>
        <p className='ml-2 text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium'>
          Running{' '}
          <span className='text-tremor-content font-normal'>
            / Next run: 1 hour and 2 minutes
          </span>
        </p>
      </p>
    </Card>
  );
}
