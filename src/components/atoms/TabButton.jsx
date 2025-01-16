export default function TabButton({
  children,
  onClick,
  isSelected = false,
  color = "bg-slate-600 hover:bg-slate-800",
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        isSelected ? "bg-black" : color
      } px-4 py-2 rounded-md font-medium text-sm text-slate-200 sm:text-base sm:px-6`}
    >
      {children}
    </button>
  );
}
