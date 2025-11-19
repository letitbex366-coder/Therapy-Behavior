export default function PrimaryButton({ children, onClick, disabled = false, className = '', variant = 'primary' }) {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#ef6461] to-[#e04d4a] text-white hover:from-[#e04d4a] hover:to-[#d13d3a] shadow-md hover:shadow-lg",
    secondary: "bg-white text-[#282a3e] hover:bg-gray-50 border-2 border-gray-300 hover:border-[#ef6461] shadow-sm hover:shadow-md",
    success: "bg-gradient-to-r from-[#10b981] to-[#059669] text-white hover:from-[#059669] hover:to-[#047857] shadow-md hover:shadow-lg",
    danger: "bg-gradient-to-r from-[#ef6461] to-[#e04d4a] text-white hover:from-[#e04d4a] hover:to-[#d13d3a] shadow-md hover:shadow-lg"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

