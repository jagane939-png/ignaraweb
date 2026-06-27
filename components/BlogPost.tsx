"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Block { type: string; text?: string; items?: string[] }
interface BlogPostProps {
  title: string; date: string; readTime: string; tag: string;
  content: Block[];
}

const tagColors: Record<string,string> = {
  "Infrastructure":"#60a5fa","Scheduling":"#22d3ee","Observability":"#34d399","Engineering":"#a5b4fc",
};

export function BlogPostLayout({ title, date, readTime, tag, content }: BlogPostProps) {
  const tc = tagColors[tag] ?? "#60a5fa";
  return (
    <div style={{ minHeight:"100vh", paddingTop:"88px" }}>
      <div style={{ maxWidth:"720px", margin:"0 auto", padding:"48px 24px 96px" }}>
        <Link href="/blog" style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"13px", color:"rgba(240,244,255,0.35)", textDecoration:"none", marginBottom:"32px" }}>
          <ArrowLeft size={13} aria-hidden="true" /> Engineering Blog
        </Link>
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"20px", flexWrap:"wrap" }}>
            <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:tc }}>{tag}</span>
            <span style={{ color:"rgba(240,244,255,0.2)" }}>·</span>
            <span style={{ fontSize:"13px", color:"rgba(240,244,255,0.3)" }}>{date}</span>
            <span style={{ color:"rgba(240,244,255,0.2)" }}>·</span>
            <span style={{ fontSize:"13px", color:"rgba(240,244,255,0.3)" }}>{readTime}</span>
          </div>
          <h1 style={{ fontSize:"clamp(28px,4.5vw,44px)", fontWeight:800, letterSpacing:"-0.04em", color:"#fff", lineHeight:1.1, marginBottom:"48px" }}>{title}</h1>
        </motion.div>
        <div>
          {content.map((block, i) => {
            if (block.type==="h2") return <h2 key={i} style={{ fontSize:"20px", fontWeight:700, letterSpacing:"-0.02em", color:"#fff", marginTop:"48px", marginBottom:"16px" }}>{block.text}</h2>;
            if (block.type==="p") return <p key={i} style={{ fontSize:"16px", lineHeight:1.85, color:"rgba(240,244,255,0.62)", marginBottom:"20px" }}>{block.text}</p>;
            if (block.type==="list") return (
              <ul key={i} style={{ margin:"0 0 24px", padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"10px" }}>
                {block.items?.map((item,ii) => (
                  <li key={ii} style={{ display:"flex", alignItems:"flex-start", gap:"12px" }}>
                    <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:tc, flexShrink:0, marginTop:"10px", display:"inline-block" }} aria-hidden="true" />
                    <span style={{ fontSize:"15px", lineHeight:1.75, color:"rgba(240,244,255,0.62)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            );
            return null;
          })}
        </div>
        <div style={{ marginTop:"64px", paddingTop:"32px", borderTop:"1px solid rgba(255,255,255,0.07)" }}>
          <Link href="/blog" style={{ display:"inline-flex", alignItems:"center", gap:"6px", fontSize:"14px", color:"rgba(240,244,255,0.4)", textDecoration:"none" }}>
            <ArrowLeft size={14} aria-hidden="true" /> Back to Engineering Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
