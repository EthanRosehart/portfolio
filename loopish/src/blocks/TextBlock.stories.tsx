import type { Meta, StoryObj } from '@storybook/react';
import TextBlock from './TextBlock';
import type { Block } from '../store/schema';

const meta: Meta<typeof TextBlock> = { component: TextBlock };
export default meta;

type Story = StoryObj<typeof TextBlock>;

const block: Block = { id: '1', type: 'text', props: { text: 'Sample text' }, children: [], parentId: null };
export const Default: Story = { args: { block } };
