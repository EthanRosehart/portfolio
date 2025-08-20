import type { Meta, StoryObj } from '@storybook/react';
import FlowchartBlock from './FlowchartBlock';
import type { Block } from '../store/schema';

const meta: Meta<typeof FlowchartBlock> = { component: FlowchartBlock };
export default meta;

type Story = StoryObj<typeof FlowchartBlock>;

const block: Block = { id: '1', type: 'flow', props: {}, children: [], parentId: null };
export const Default: Story = { args: { block } };
