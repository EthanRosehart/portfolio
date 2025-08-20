import { useEffect, useState } from 'react';
import { blocks as blocksMap } from '../store/ydoc';
import type { Block } from '../store/schema';
import BlockTree from '../canvas/BlockTree';
import SlashMenu from '../canvas/SlashMenu';

export default function Workspace() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  useEffect(() => {
    const update = () => {
      setBlocks(Array.from(blocksMap.values()));
    };
    blocksMap.observe(update);
    update();
    return () => blocksMap.unobserve(update);
  }, []);
  return (
    <div className="p-4">
      <SlashMenu />
      <BlockTree blocks={blocks} />
    </div>
  );
}
