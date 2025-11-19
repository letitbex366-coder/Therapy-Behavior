export default function ScreenContainer({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 pt-20 sm:pt-24 md:pt-28 animate-fade-in">
      <div className="w-full max-w-5xl">
        {children}
      </div>
    </div>
  );
}
