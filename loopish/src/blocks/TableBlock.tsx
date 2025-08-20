import type { Block } from '../store/schema';

export default function TableBlock({ block }: { block: Block }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <tbody>
          <tr>
            <td className="p-2">Table block</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
