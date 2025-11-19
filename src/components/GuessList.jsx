export default function GuessList({ guesses, title }) {
  if (guesses.length === 0) return null;

  return (
    <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-5 border-2 border-green-200 shadow-sm animate-slide-up">
      <h3 className="font-semibold text-[#282a3e] mb-3 text-sm flex items-center gap-2">
        <span className="text-green-600">✓</span>
        <span>{title} ({guesses.length}/5)</span>
      </h3>
      <ul className="space-y-2.5">
        {guesses.map((guess, index) => (
          <li key={index} className="flex items-start text-[#282a3e] text-sm bg-white rounded-lg p-3 border border-green-100 shadow-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <span className="text-green-600 mr-2.5 mt-0.5 font-bold text-base">✓</span>
            <span className="flex-1">{guess}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

