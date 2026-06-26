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

    const GRID = 64;
    const NODES: { x: number; y: number; vx: number; vy: number; a: number; r: number; pulse: number }[] = [];
    for (let i = 0; i < 48; i++) {
      NODES.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        a: Math.random() * 0.4 + 0.08, r: Math.random() * 1.4 + 0.4,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Data streams
    const STREAMS: { x: number; y: number; len: number; speed: number; dir: number; a: number }[] = [];
    for (let i = 0; i < 8; i++) {
      STREAMS.push({
        x: Math.random() * W, y: Math.random() * H,
        len: Math.random() * 80 + 40, speed: Math.random() * 0.8 + 0.3,
        dir: Math.random() > 0.5 ? 1 : -1, a: Math.random() * 0.12 + 0.04,
      });
    }

    const draw = () => {
      t += 0.007;
      ctx.clearRect(0, 0, W, H);

      // Fine grid
      ctx.strokeStyle = "rgba(37,99,235,0.048)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= W; x += GRID) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y <= H; y += GRID) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Subtle radial glow at center-top
      const grd = ctx.createRadialGradient(W / 2, H * 0.35, 0, W / 2, H * 0.35, W * 0.5);
      grd.addColorStop(0, "rgba(37,99,235,0.06)");
      grd.addColorStop(0.5, "rgba(6,182,212,0.02)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Data streams (horizontal moving lines)
      STREAMS.forEach((s) => {
        s.x += s.speed * s.dir;
        if (s.x > W + s.len) s.x = -s.len;
        if (s.x < -s.len) s.x = W + s.len;
        const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.len * s.dir, s.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, `rgba(6,182,212,${s.a})`);
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x + s.len * s.dir, s.y); ctx.stroke();
      });

      // Node connections
      for (let i = 0; i < NODES.length; i++) {
        for (let j = i + 1; j < NODES.length; j++) {
          const dx = NODES[i].x - NODES[j].x;
          const dy = NODES[i].y - NODES[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            const alpha = (1 - d / 140) * 0.1;
            ctx.strokeStyle = `rgba(37,99,235,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(NODES[i].x, NODES[i].y); ctx.lineTo(NODES[j].x, NODES[j].y); ctx.stroke();
          }
        }
      }

      // Nodes
      NODES.forEach((n) => {
        n.pulse += 0.025;
        const pulse = Math.sin(n.pulse) * 0.2 + n.a;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${pulse})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
}
