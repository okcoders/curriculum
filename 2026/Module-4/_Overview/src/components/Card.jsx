export default function Card({ header, body }) {
  return (
    <div className="card bg-base-100 w-full max-w-4xl h-[80vh] shadow-xl border border-base-300">
      <div className="card-body gap-6 overflow-hidden">
        <div className="card-title text-3xl block shrink-0">{header}</div>
        <div className="prose max-w-none text-lg leading-relaxed overflow-auto flex-1">
          {body}
        </div>
      </div>
    </div>
  );
}
