export default function TextInput({ value, onChange, placeholder, className = '', onKeyDown }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#ef6461] focus:ring-2 focus:ring-[#ef6461]/20 focus:outline-none transition-all duration-200 bg-white text-[#282a3e] placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-md ${className}`}
    />
  );
}

