import Button from './button';
import { linkTo } from '@storybook/addon-links';

/**
 * Button Component for explanation of StoryBook
 */


export default {
  title: 'Practice',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
    docs: {
      description: {
        component: '説明用のボタンコンポーネント',
      },
    },
    // layout: 'centered',
  },
  argTypes: {
    color: {
      options: ['primary', 'default', 'danger'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

const Template = (args) => <Button {...args} />
// const Template = (args) => {
//   return <Button {...args} handleClick={linkTo('Common/Test', 'Danger')} />;
// };
export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  color: 'danger',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Small',
  color: 'primary',
  size: 'sm',
};

// export const PrimaryLarge = Template.bind({});
// PrimaryLarge.args = {
//   children: 'Large',
//   color: 'primary',
//   size: 'lg',
// };
export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...PrimarySmall.args,
  children: 'Large',
  size: 'lg',
};
