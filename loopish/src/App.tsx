import { useStore } from './state/useStore';

function App() {
  const addPage = useStore((s) => s.addPage);
  const pages = useStore((s) => s.pages);

  const handleAdd = () => {
    addPage('New Page');
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Loopish</h1>
      <button
        className="mt-4 rounded bg-blue-500 px-3 py-1 text-white"
        onClick={handleAdd}
      >
        Add Page
      </button>
      <ul className="mt-4 list-disc pl-5">
        {Object.values(pages).map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
