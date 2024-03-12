import Checkbox from './Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  // tags: ['autodocs'],
};

export const Unchecked = {
  args: {
    label: 'Unchecked',
    checked: false,
  },
};

export const Checked = {
  args: {
    label: 'Checked',
    checked: true,
  },
};

export const Primary = {
  args: {
    label: 'Primary',
    checked: true,
  },
};
