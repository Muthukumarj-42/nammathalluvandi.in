"use client";

import { useEffect, useState } from "react";

export function CartCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 65;
    const duration = 1200; // 1.2 seconds
    const stepTime = 16; // ~60fps
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <span className="en">{count}+ Carts</span>
      <span className="ta tamil-text">{count}+ வண்டிகள்</span>
    </>
  );
}
