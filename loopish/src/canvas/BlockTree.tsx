import type { Block } from '../store/schema';
import BlockWrapper from '../blocks/BlockWrapper';

export default function BlockTree({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-2">
      {blocks.map(b => (
        <BlockWrapper key={b.id} block={b} />
      ))}
    </div>
  );
}
