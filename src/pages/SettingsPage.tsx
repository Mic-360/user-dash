import type { FC } from 'react';

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = () => {
  return (
    <>
      <Settings />
    </>
  );
};
export default SettingsPage;

import { Divider, Tab, TabGroup, TabList, TextInput } from '@tremor/react';

function Settings() {
  return (
    <TabGroup className='my-6'>
      <TabList>
        <Tab aria-current>
          <div className='flex flex-col items-start'>
            <p className='mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content'>
              Manage your personal details.
            </p>
            <p className='text-xl font-medium'>Account Settings</p>
          </div>
        </Tab>
      </TabList>
      <div className='mt-8 space-y-8 text-start'>
        <form
          action='#'
          method='POST'
        >
          <div>
            <h4 className='font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>
              Email
            </h4>
            <p className='mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
              Update your email address associated with this workspace.
            </p>
            <div className='mt-6'>
              <label
                htmlFor='email'
                className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
              >
                Update email address
              </label>
              <TextInput
                type='email'
                id='email'
                name='email'
                placeholder='john@company.com'
                className='mt-2 w-full rounded-tremor-small sm:max-w-lg'
              />
            </div>
            <button
              type='submit'
              className='mt-6 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis'
            >
              Update email
            </button>
          </div>
        </form>
        <Divider />
        <form
          action='#'
          method='POST'
        >
          <h4 className='font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>
            Password
          </h4>
          <p className='mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
            Update your password associated with this workspace.
          </p>
          <div className='mt-6'>
            <label
              htmlFor='current-password'
              className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
            >
              Current password
            </label>
            <TextInput
              type='password'
              id='current-password'
              name='current-password'
              placeholder=''
              className='mt-2 w-full rounded-tremor-small sm:max-w-lg'
            />
          </div>
          <div className='mt-4'>
            <label
              htmlFor='new-password'
              className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
            >
              New password
            </label>
            <TextInput
              type='password'
              id='new-password'
              name='new-password'
              placeholder=''
              className='mt-2 w-full rounded-tremor-small sm:max-w-lg'
            />
          </div>
          <button
            type='submit'
            className='mt-6 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis'
          >
            Update password
          </button>
        </form>
      </div>
    </TabGroup>
  );
}
