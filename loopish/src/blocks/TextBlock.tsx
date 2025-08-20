import type { Block } from '../store/schema';

export default function TextBlock({ block }: { block: Block }) {
  return (
    <div contentEditable suppressContentEditableWarning>{block.props.text || ''}</div>
  );
}
