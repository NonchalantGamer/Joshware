import React, { useRef, useEffect, useState } from 'react';
import { RotateCw, Play, Pause, Eye, Box, Compass, Sparkles } from 'lucide-react';

interface Cosmo3DCanvasProps {
  interactive?: boolean;
}

export const Cosmo3DCanvas: React.FC<Cosmo3DCanvasProps> = ({ interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [renderMode, setRenderMode] = useState<'wireframe' | 'solid' | 'points'>('solid');
  const [geometryType, setGeometryType] = useState<'icosahedron' | 'torus' | 'octahedron'>('icosahedron');
  const [isRotating, setIsRotating] = useState(true);
  const [fps, setFps] = useState(60);

  // Rotation angles
  const rotX = useRef(0.5);
  const rotY = useRef(0.5);
  const rotZ = useRef(0.2);
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCount = 0;

    // Resize handler for high DPR
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Generate 3D Geometries
    const getVerticesAndFaces = () => {
      if (geometryType === 'icosahedron') {
        const phi = (1 + Math.sqrt(5)) / 2;
        const rawVerts = [
          [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
          [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
          [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
        ];
        const scale = 1.1;
        const vertices = rawVerts.map(([x, y, z]) => [x * scale, y * scale, z * scale]);
        const faces = [
          [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
          [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
          [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
          [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
        ];
        return { vertices, faces };
      } else if (geometryType === 'octahedron') {
        const s = 1.6;
        const vertices = [
          [s, 0, 0], [-s, 0, 0], [0, s, 0], [0, -s, 0], [0, 0, s], [0, 0, -s]
        ];
        const faces = [
          [0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2],
          [1, 4, 2], [1, 3, 4], [1, 5, 3], [1, 2, 5]
        ];
        return { vertices, faces };
      } else {
        // Torus Ring
        const vertices: number[][] = [];
        const faces: number[][] = [];
        const R = 1.4;
        const r = 0.55;
        const segU = 16;
        const segV = 10;

        for (let i = 0; i < segU; i++) {
          const u = (i / segU) * Math.PI * 2;
          for (let j = 0; j < segV; j++) {
            const v = (j / segV) * Math.PI * 2;
            const x = (R + r * Math.cos(v)) * Math.cos(u);
            const y = (R + r * Math.cos(v)) * Math.sin(u);
            const z = r * Math.sin(v);
            vertices.push([x, y, z]);
          }
        }

        for (let i = 0; i < segU; i++) {
          for (let j = 0; j < segV; j++) {
            const nextI = (i + 1) % segU;
            const nextJ = (j + 1) % segV;
            const idx1 = i * segV + j;
            const idx2 = nextI * segV + j;
            const idx3 = nextI * segV + nextJ;
            const idx4 = i * segV + nextJ;
            faces.push([idx1, idx2, idx3]);
            faces.push([idx1, idx3, idx4]);
          }
        }
        return { vertices, faces };
      }
    };

    const render = (time: number) => {
      // FPS calculation
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }

      if (isRotating && !isDragging.current) {
        rotX.current += 0.008;
        rotY.current += 0.012;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const zoom = Math.min(width, height) * 0.28;

      const { vertices, faces } = getVerticesAndFaces();

      // Rotation matrix applications
      const cosX = Math.cos(rotX.current);
      const sinX = Math.sin(rotX.current);
      const cosY = Math.cos(rotY.current);
      const sinY = Math.sin(rotY.current);
      const cosZ = Math.cos(rotZ.current);
      const sinZ = Math.sin(rotZ.current);

      // Light vector (Normalized)
      const light = [0.577, 0.577, 0.577];

      // Projected vertices
      const projected = vertices.map(([x, y, z]) => {
        // Rot Y
        let x1 = x * cosY + z * sinY;
        let y1 = y;
        let z1 = -x * sinY + z * cosY;

        // Rot X
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rot Z
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        // Perspective
        const fov = 4.0;
        const scale = fov / (fov + z3);
        const px = cx + x3 * zoom * scale;
        const py = cy + y3 * zoom * scale;

        return { px, py, z: z3, x3, y3 };
      });

      // Render faces with painter's algorithm
      if (renderMode === 'solid' || renderMode === 'wireframe') {
        const sortedFaces = faces
          .map((face) => {
            const zAvg = face.reduce((sum, idx) => sum + projected[idx].z, 0) / face.length;
            return { face, zAvg };
          })
          .sort((a, b) => b.zAvg - a.zAvg);

        sortedFaces.forEach(({ face }) => {
          const v0 = projected[face[0]];
          const v1 = projected[face[1]];
          const v2 = projected[face[2]];

          // Surface normal calculation
          const ax = v1.x3 - v0.x3;
          const ay = v1.y3 - v0.y3;
          const az = v1.z - v0.z;
          const bx = v2.x3 - v0.x3;
          const by = v2.y3 - v0.y3;
          const bz = v2.z - v0.z;

          const nx = ay * bz - az * by;
          const ny = az * bx - ax * bz;
          const nz = ax * by - ay * bx;
          const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
          const unx = nx / len;
          const uny = ny / len;
          const unz = nz / len;

          // Dot product for diffuse illumination
          const dot = Math.max(0.15, unx * light[0] + uny * light[1] + unz * light[2]);

          ctx.beginPath();
          ctx.moveTo(v0.px, v0.py);
          for (let i = 1; i < face.length; i++) {
            ctx.lineTo(projected[face[i]].px, projected[face[i]].py);
          }
          ctx.closePath();

          if (renderMode === 'solid') {
            const rVal = Math.floor(251 * dot * 0.9 + 20);
            const gVal = Math.floor(191 * dot * 0.9 + 15);
            const bVal = Math.floor(36 * dot * 0.9 + 10);
            ctx.fillStyle = `rgba(${rVal}, ${gVal}, ${bVal}, ${0.85 * dot + 0.15})`;
            ctx.strokeStyle = `rgba(251, 191, 36, 0.35)`;
            ctx.lineWidth = 1;
            ctx.fill();
            ctx.stroke();
          } else {
            // Wireframe only
            ctx.strokeStyle = 'rgba(251, 191, 36, 0.75)';
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        });
      }

      if (renderMode === 'points') {
        projected.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.px, p.py, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#fbbf24';
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [geometryType, renderMode, isRotating]);

  // Pointer interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!interactive) return;
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !interactive) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    rotY.current += deltaX * 0.01;
    rotX.current += deltaY * 0.01;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      id="cosmo3d-viewport-container"
      className="relative w-full h-[360px] sm:h-[420px] rounded-2xl border border-[#1e222d] bg-[#0a0c10] text-neutral-200 overflow-hidden transition-all duration-300 flex flex-col justify-between p-4"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top HUD Telemetry */}
      <div className="relative z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono backdrop-blur-sm bg-neutral-900/60 border-neutral-700/60 text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>WebGL 3D Core</span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
            FPS: {fps} | 60Hz
          </span>
        </div>

        <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
          Cosmo3D :: Live Engine
        </div>
      </div>

      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        id="cosmo3d-interactive-canvas"
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Bottom Interactive Toolbar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 pointer-events-auto">
        {/* Geometry Selector */}
        <div className="flex items-center gap-1 p-1 rounded-lg border backdrop-blur-md bg-neutral-900/80 border-neutral-800">
          {(['icosahedron', 'torus', 'octahedron'] as const).map((geo) => (
            <button
              key={geo}
              type="button"
              onClick={() => setGeometryType(geo)}
              className={`px-2.5 py-1 text-[11px] font-mono capitalize rounded-md transition-colors ${
                geometryType === geo
                  ? 'bg-amber-400 text-neutral-950 font-bold'
                  : 'text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800'
              }`}
            >
              {geo}
            </button>
          ))}
        </div>

        {/* Shading / Wireframe Toggle & Play/Pause */}
        <div className="flex items-center gap-1 p-1 rounded-lg border backdrop-blur-md bg-neutral-900/80 border-neutral-800">
          <button
            type="button"
            onClick={() => setRenderMode('solid')}
            title="Solid Shading"
            className={`p-1.5 rounded-md text-[11px] font-mono transition-colors ${
              renderMode === 'solid' ? 'bg-amber-400 text-neutral-950' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setRenderMode('wireframe')}
            title="Wireframe Matrix"
            className={`p-1.5 rounded-md text-[11px] font-mono transition-colors ${
              renderMode === 'wireframe' ? 'bg-amber-400 text-neutral-950' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setRenderMode('points')}
            title="Vertex Points"
            className={`p-1.5 rounded-md text-[11px] font-mono transition-colors ${
              renderMode === 'points' ? 'bg-amber-400 text-neutral-950' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
          </button>

          <div className="w-px h-3.5 bg-neutral-700 mx-0.5" />

          <button
            type="button"
            onClick={() => setIsRotating(!isRotating)}
            title={isRotating ? 'Pause Rotation' : 'Resume Rotation'}
            className="p-1.5 rounded-md text-[11px] font-mono text-neutral-300 hover:text-amber-400 transition-colors"
          >
            {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
