import type { Meta, StoryObj } from '@storybook/react';
import TodoBlock from './TodoBlock';
import type { Block } from '../store/schema';

const meta: Meta<typeof TodoBlock> = { component: TodoBlock };
export default meta;

type Story = StoryObj<typeof TodoBlock>;

const block: Block = { id: '1', type: 'todo', props: { text: 'Todo item', done: false }, children: [], parentId: null };
export const Default: Story = { args: { block } };
