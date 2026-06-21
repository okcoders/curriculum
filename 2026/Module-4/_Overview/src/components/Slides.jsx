import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

export default function Slides({ cards }) {
  const [index, setIndex] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setIndex(0);
  }, [pathname]);

  useEffect(() => {
    setIndex((i) => Math.min(i, cards.length - 1));
  }, [cards.length]);

  const go = useCallback(
    (delta) =>
      setIndex((i) => Math.min(Math.max(i + delta, 0), cards.length - 1)),
    [cards.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!cards || cards.length === 0) {
    return (
      <div className="min-h-full flex items-center justify-center bg-base-200">
        <p className="opacity-60">No cards yet.</p>
      </div>
    );
  }

  const current = cards[index];

  return (
    <div className="min-h-full flex flex-col bg-base-200">
      <main className="flex-1 flex items-center justify-center p-8">
        <Card header={current.header} body={current.body} />
      </main>

      <footer className="flex items-center justify-center gap-4 p-4 bg-base-100 border-t border-base-300">
        <button
          className="btn btn-sm"
          onClick={() => go(-1)}
          disabled={index === 0}
        >
          ← Prev
        </button>
        <span className="font-mono text-sm opacity-70">
          {index + 1} / {cards.length}
        </span>
        <button
          className="btn btn-sm"
          onClick={() => go(1)}
          disabled={index === cards.length - 1}
        >
          Next →
        </button>
      </footer>
    </div>
  );
}
