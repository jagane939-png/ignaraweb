"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const GRID = 72;
    type Node = { x: number; y: number; vx: number; vy: number; a: number; r: number; p: number };
    const NODES: Node[] = [];
    for (let i = 0; i < 42; i++) {
      NODES.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18, a: Math.random() * 0.35 + 0.08, r: Math.random() * 1.2 + 0.4, p: Math.random() * Math.PI * 2 });
    }

    type Stream = { x: number; y: number; len: number; speed: number; dir: number; a: number };
    const STREAMS: Stream[] = [];
    for (let i = 0; i < 6; i++) {
      STREAMS.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight * 0.8, len: Math.random() * 100 + 60, speed: Math.random() * 0.6 + 0.25, dir: Math.random() > 0.5 ? 1 : -1, a: Math.random() * 0.1 + 0.03 });
    }

    const draw = () => {
      t += 0.006;
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "rgba(37,99,235,0.055)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= W; x += GRID) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y <= H; y += GRID) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // Radial glow
      const grd = ctx.createRadialGradient(W / 2, H * 0.38, 0, W / 2, H * 0.38, W * 0.52);
      grd.addColorStop(0, "rgba(37,99,235,0.08)");
      grd.addColorStop(0.4, "rgba(6,182,212,0.025)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Data streams
      STREAMS.forEach((s) => {
        s.x += s.speed * s.dir;
        if (s.x > W + s.len) s.x = -s.len;
        if (s.x < -s.len) s.x = W + s.len;
        const g = ctx.createLinearGradient(s.x, s.y, s.x + s.len * s.dir, s.y);
        g.addColorStop(0, "transparent"); g.addColorStop(0.5, `rgba(6,182,212,${s.a})`); g.addColorStop(1, "transparent");
        ctx.strokeStyle = g; ctx.lineWidth = 0.7;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x + s.len * s.dir, s.y); ctx.stroke();
      });

      // Connections
      for (let i = 0; i < NODES.length; i++) {
        for (let j = i + 1; j < NODES.length; j++) {
          const dx = NODES[i].x - NODES[j].x, dy = NODES[i].y - NODES[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            ctx.strokeStyle = `rgba(37,99,235,${(1 - d / 150) * 0.12})`; ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(NODES[i].x, NODES[i].y); ctx.lineTo(NODES[j].x, NODES[j].y); ctx.stroke();
          }
        }
      }

      // Nodes
      NODES.forEach((n) => {
        n.p += 0.022;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${Math.sin(n.p) * 0.18 + n.a})`;
        ctx.fill();
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true" />;
}
