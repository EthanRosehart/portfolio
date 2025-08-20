import TextBlock from './TextBlock';
import TodoBlock from './TodoBlock';
import TableBlock from './TableBlock';
import WhiteboardBlock from './WhiteboardBlock';
import FlowchartBlock from './FlowchartBlock';
import type { Block } from '../store/schema';

interface Props {
  block: Block;
}

export default function BlockWrapper({ block }: Props) {
  switch (block.type) {
    case 'text':
      return <TextBlock block={block} />;
    case 'todo':
      return <TodoBlock block={block} />;
    case 'table':
      return <TableBlock block={block} />;
    case 'whiteboard':
      return <WhiteboardBlock block={block} />;
    case 'flow':
      return <FlowchartBlock block={block} />;
    default:
      return null;
  }
}
