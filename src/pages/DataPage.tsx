import { RiArrowRightUpLine, RiShapesFill } from '@remixicon/react';
import { Card, Divider } from '@tremor/react';
import axios from 'axios';
import { useEffect, useState, type FC } from 'react';
import { classNames } from '../lib/utils';

interface DataPageProps {
  activeTab: string;
}

interface AssetData {
  assetData: {
    image: string;
    name: string;
    brand: string;
    id: string;
    date: string;
    active_time: number;
    type: string;
  };
  user_id: string;
  kiosk_id: string;
  i: number;
}

const DataPage: FC<DataPageProps> = ({ activeTab }) => {
  const [objectData, setObjectData] = useState<AssetData[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/web-analytics');
      setObjectData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const bestOfTheDay = objectData.find(
    ({ assetData }) =>
      assetData.active_time ===
      Math.max(...objectData.map(({ assetData }) => assetData.active_time))
  );

  const worstOfTheDay = objectData.find(
    ({ assetData }) =>
      assetData.active_time ===
      Math.min(...objectData.map(({ assetData }) => assetData.active_time))
  );

  const filteredData = [bestOfTheDay, bestOfTheDay, worstOfTheDay];

  const convertActiveTime = (activeTime: number): string => {
    const seconds = activeTime % 60;
    const minutes = Math.floor(activeTime / 60) % 60;
    const hours = Math.floor(activeTime / 3600);

    let timeString = '';

    if (hours > 0) {
      timeString += `${hours}h `;
    }

    if (minutes > 0) {
      timeString += `${minutes}m `;
    }

    timeString += `${seconds}s`;

    return timeString;
  };
  const datas = [
    {
      name: 'Top Design of the Day',
      change: '+6.1%',
      changeType: 'positive',
    },
    {
      name: 'Top Design of the Week',
      change: '+19.2%',
      changeType: 'positive',
    },
    {
      name: 'Worst Design Today',
      change: '-22.2%',
      changeType: 'negative',
    },
  ];

  const StatsData = [
    ...filteredData.map((data) => {
      return {
        ...data,
        assetData: {
          ...data?.assetData,
          active_time: convertActiveTime(data?.assetData.active_time as number),
        },
      };
    }),
    ...datas.map((datum) => {
      return {
        ...datum,
      };
    }),
  ];

  StatsData.map((data) => {});
  console.log(StatsData);

  const KioskData = objectData.filter(({ kiosk_id }) => kiosk_id === activeTab);

  const modifiedKioskData = KioskData.map((data) => {
    return {
      ...data,
      assetData: {
        ...data.assetData,
        active_time: convertActiveTime(data.assetData.active_time),
      },
    };
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {StatsData.map((data, i) => (
          <Card
            key={i}
            className='grainy shadow-2xl shadow-tremor-brand'
          >
            <p className='flex items-start justify-between'>
              <span className='text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                {data?.assetData.active_time}
              </span>
              <span
                className={classNames(
                  data?.topDesignOfDay.changeType === 'positive'
                    ? 'bg-emerald-300 dark:bg-emerald-300 border-green-500'
                    : 'bg-red-300 dark:bg-red-300 border-red-400',
                  'text-xs font-medium rounded-md p-1 border-[0.1rem]'
                )}
              >
                {data?.topDesignOfDay.change}
              </span>
            </p>
            <p className='mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
              {data?.topDesignOfDay.name}
            </p>
          </Card>
        ))}
        {StatsData.map((data, i) => {
          return (
            <Card
              key={i}
              className='group p-4 grainy shadow-2xl shadow-tremor-brand'
            >
              <div className='flex items-center space-x-4'>
                <span
                  className='flex h-12 w-12 shrink-0 items-center justify-center rounded-tremor-full text-tremor-default font-medium bg-fuchsia-100 dark:bg-fuchsia-500/20'
                  aria-hidden='true'
                >
                  <img
                    src={data?.assetData.image}
                    alt={data?.assetData.name}
                  />
                </span>
                <div className='truncate'>
                  <p className='truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                    <a
                      href={`/assets`}
                      className='focus:outline-none'
                    >
                      <span
                        className='absolute inset-0'
                        aria-hidden='true'
                      />
                      Name of {data?.assetData.name}
                    </a>
                  </p>
                  <p className='truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
                    {data?.assetData.brand}
                  </p>
                </div>
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
          );
        })}
      </div>
      <div className='text-black pb-8 flex flex-col'>
        <div className='flex items-center justify-center space-x-2 mt-10'>
          <h3 className='text-tremor-title font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong border-[0.1rem] border-black px-4 rounded-lg flex gap-x-2 items-center justify-center shadow-2xl'>
            <RiShapesFill className='h-4 w-4' />
            Designs
          </h3>
          <span className='inline-flex h-6 w-6 items-center justify-center rounded-tremor-full bg-tremor-background-subtle text-tremor-label font-medium text-tremor-content-strong dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-strong shadow-2xl'>
            {KioskData.length}
          </span>
        </div>
        <Divider />
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {modifiedKioskData.map((data, i) => {
            return (
              <Card
                key={i}
                className='group p-4 grainy shadow-2xl shadow-tremor-brand'
              >
                <div className='flex items-center space-x-4'>
                  <span
                    className='flex h-12 w-12 shrink-0 items-center justify-center rounded-tremor-full text-tremor-default font-medium bg-fuchsia-100 dark:bg-fuchsia-500/20'
                    aria-hidden='true'
                  >
                    <img
                      src={data?.assetData.image}
                      alt={data?.assetData.name}
                    />
                  </span>
                  <div className='truncate'>
                    <p className='truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                      <a
                        href={`/assets/${data?.user_id}/${data?.kiosk_id}`}
                        className='focus:outline-none'
                      >
                        <span
                          className='absolute inset-0'
                          aria-hidden='true'
                        />
                        Name of {data?.assetData.name}
                      </a>
                    </p>
                    <p className='truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
                      {data?.assetData.brand}
                    </p>
                  </div>
                </div>
                <div className='mt-6 grid grid-cols-2 divide-x divide-tremor-border border-t border-tremor-border dark:divide-dark-tremor-border dark:border-dark-tremor-border'>
                  <div
                    key={i}
                    className='truncate px-3 py-2'
                  >
                    <p className='truncate text-tremor-label text-tremor-content dark:text-dark-tremor-content'>
                      Type
                    </p>
                    <p className='truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                      {data?.assetData.type}
                    </p>
                  </div>
                  <div
                    key={i}
                    className='truncate px-3 py-2'
                  >
                    <p className='truncate text-tremor-label text-tremor-content dark:text-dark-tremor-content'>
                      Active Time
                    </p>
                    <p className='truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>
                      {data?.assetData.active_time}
                    </p>
                  </div>
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
            );
          })}
        </div>
      </div>
    </>
  );
};
export default DataPage;
