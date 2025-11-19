export default function Header({ title = "Behavior Exchange" }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm text-[#282a3e] py-3 sm:py-4 px-4 sm:px-6 shadow-md border-b border-gray-200/50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">{title}</h1>
      </div>
    </header>
  );
}

