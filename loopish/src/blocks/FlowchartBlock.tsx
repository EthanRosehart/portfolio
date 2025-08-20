import type { Block } from '../store/schema';

export default function FlowchartBlock({ block }: { block: Block }) {
  return <div className="p-4 border rounded">Flowchart block</div>;
}
