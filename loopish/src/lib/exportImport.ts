import { doc } from '../store/ydoc';

export function exportWorkspace() {
  return JSON.stringify(doc.toJSON());
}

export function importWorkspace(_json: string) {
  // TODO: implement import logic
}
