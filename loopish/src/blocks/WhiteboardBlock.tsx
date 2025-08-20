import type { Block } from '../store/schema';
import { useRef, useEffect } from 'react';

export default function WhiteboardBlock({ block }: { block: Block }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  }, []);
  return <canvas ref={canvasRef} width={400} height={300} className="border" />;
}
