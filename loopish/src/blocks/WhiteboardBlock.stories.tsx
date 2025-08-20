import type { Meta, StoryObj } from '@storybook/react';
import WhiteboardBlock from './WhiteboardBlock';
import type { Block } from '../store/schema';

const meta: Meta<typeof WhiteboardBlock> = { component: WhiteboardBlock };
export default meta;

type Story = StoryObj<typeof WhiteboardBlock>;

const block: Block = { id: '1', type: 'whiteboard', props: {}, children: [], parentId: null };
export const Default: Story = { args: { block } };
