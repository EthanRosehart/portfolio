import type { Block } from '../store/schema';

export default function TodoBlock({ block }: { block: Block }) {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" checked={!!block.props.done} onChange={() => {}} />
      <span>{block.props.text || ''}</span>
    </label>
  );
}
