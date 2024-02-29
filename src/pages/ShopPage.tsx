import type { FC } from 'react';

interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = () => {
  return (
    <div className='px-6 flex flex-col gap-y-4 relative overflow-hidden'>
      <KPICards />
      <Trends />
      <div className='-mt-96'>
        <Typewriter />
      </div>
    </div>
  );
};
export default ShopPage;

import { Card } from '@tremor/react';
import { KPIdata as data } from '../assets/constants';
import { classNames } from '../assets/utils';

function KPICards() {
  return (
    <>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map((item) => (
          <Card key={item.name}>
            <div className='flex items-center justify-between'>
              <p className='text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content'>
                {item.name}
              </p>
              <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                    : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
                  'inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset'
                )}
              >
                {item.change}
              </span>
            </div>
            <p className='text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              {item.stat}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}

// 'use client';
import {
  LineChart,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import {
  trendData as Tdata,
  trendSummary as summary,
} from '../assets/constants';
import Typewriter from '../assets/typewriter';

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

function Trends() {
  return (
    <>
      <h3 className='text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
        Portfolio performance
      </h3>
      <p className='mt-1 text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>
        $32,227.40
      </p>
      <p className='mt-1 text-tremor-default font-medium'>
        <span className='text-emerald-700 dark:text-emerald-500'>
          +$430.90 (4.1%)
        </span>{' '}
        <span className='font-normal text-tremor-content dark:text-dark-tremor-content'>
          Past 24 hours
        </span>
      </p>
      <LineChart
        data={Tdata}
        index='date'
        categories={[
          'ETF Shares Vital',
          'Vitainvest Core',
          'iShares Tech Growth',
        ]}
        colors={['blue', 'violet', 'fuchsia']}
        valueFormatter={valueFormatter}
        yAxisWidth={55}
        onValueChange={() => {}}
        className='mt-6 hidden h-96 sm:block'
      />
      <LineChart
        data={Tdata}
        index='date'
        categories={[
          'ETF Shares Vital',
          'Vitainvest Core',
          'iShares Tech Growth',
        ]}
        colors={['blue', 'violet', 'fuchsia']}
        valueFormatter={valueFormatter}
        showYAxis={false}
        showLegend={false}
        startEndOnly={true}
        className='mt-6 h-72 sm:hidden'
      />
      <Table className='mt-8'>
        <TableHead>
          <TableRow className='border-b border-tremor-border dark:border-dark-tremor-border'>
            <TableHeaderCell className='text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Name
            </TableHeaderCell>
            <TableHeaderCell className='text-right text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Value
            </TableHeaderCell>
            <TableHeaderCell className='text-right text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Invested
            </TableHeaderCell>
            <TableHeaderCell className='text-right text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Cashflow
            </TableHeaderCell>
            <TableHeaderCell className='text-right text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Gain
            </TableHeaderCell>
            <TableHeaderCell className='text-right text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Realized
            </TableHeaderCell>
            <TableHeaderCell className='text-right text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Dividends
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summary.map((item) => (
            <TableRow key={item.name}>
              <TableCell className='font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                <div className='flex space-x-3'>
                  <span
                    className={classNames(item.bgColor, 'w-1 shrink-0 rounded')}
                    aria-hidden='true'
                  />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell className='text-right'>{item.value}</TableCell>
              <TableCell className='text-right'>{item.invested}</TableCell>
              <TableCell className='text-right'>{item.cashflow}</TableCell>
              <TableCell className='text-right'>
                <span
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-red-700 dark:text-red-500'
                  )}
                >
                  {item.gain}
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <span
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-red-700 dark:text-red-500'
                  )}
                >
                  {item.realized}
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <span
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-red-700 dark:text-red-500'
                  )}
                >
                  {item.dividends}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
