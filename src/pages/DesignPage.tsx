import { RiShapesFill } from '@remixicon/react';
import type { FC } from 'react';

interface DesignPageProps {}

const DesignPage: FC<DesignPageProps> = () => {
  return (
    <div className='px-8 py-4'>
      <Designs />
    </div>
  );
};
export default DesignPage;

import { RiArrowRightUpLine } from '@remixicon/react';
import { Card, Divider } from '@tremor/react';
import { designData as data } from '../assets/constants';
import { classNames } from '../assets/utils';

function Designs() {
  return (
    <>
      <div className='flex items-center justify-center space-x-2'>
        <h3 className='text-tremor-title font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong border-[0.1rem] border-black px-4 rounded-lg flex gap-x-2 items-center justify-center'>
          <RiShapesFill className='h-4 w-4' />
          Products
        </h3>
        <span className='inline-flex h-6 w-6 items-center justify-center rounded-tremor-full bg-tremor-background-subtle text-tremor-label font-medium text-tremor-content-strong dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-strong'>
          {data.length}
        </span>
      </div>
      <Divider className='my-4' />
      <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map((member) => (
          <Card
            key={member.name}
            className='group p-4'
          >
            <div className='flex items-center space-x-4'>
              <span
                className={classNames(
                  member.textColor,
                  member.bgColor,
                  'flex h-12 w-12 shrink-0 items-center justify-center rounded-tremor-full text-tremor-default font-medium'
                )}
                aria-hidden='true'
              >
                {member.initial}
              </span>
              <div className='truncate'>
                <p className='truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                  <a
                    href={member.href}
                    className='focus:outline-none'
                  >
                    {/* Extend link to entire card */}
                    <span
                      className='absolute inset-0'
                      aria-hidden='true'
                    />
                    {member.name}
                  </a>
                </p>
                <p className='truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
                  {member.email}
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
                aria-hidden={true}
              />
            </span>
          </Card>
        ))}
      </div>
    </>
  );
}
