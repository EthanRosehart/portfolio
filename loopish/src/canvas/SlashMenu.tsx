import { blockTypeLabels } from '../blocks/blockTypes';

export default function SlashMenu() {
  return (
    <div className="p-2 border rounded bg-white shadow">{Object.values(blockTypeLabels).join(', ')}</div>
  );
}
