import type { Meta, StoryObj } from '@storybook/react';
import TableBlock from './TableBlock';
import type { Block } from '../store/schema';

const meta: Meta<typeof TableBlock> = { component: TableBlock };
export default meta;

type Story = StoryObj<typeof TableBlock>;

const block: Block = { id: '1', type: 'table', props: {}, children: [], parentId: null };
export const Default: Story = { args: { block } };
