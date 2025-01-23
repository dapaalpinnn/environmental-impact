export default function TabButton({
  children,
  isSelected = false,
  color = "bg-slate-200 hover:ring-1 hover:ring-slate-500",
  ...props
}) {
  return (
    <button
      {...props}
      className={`${
        isSelected ? "bg-slate-300 text-black" : color
      } px-4 py-2 ring-1 ring-slate-400 text-slate-500 rounded-lg font-medium text-sm sm:text-base sm:px-6`}
    >
      {children}
    </button>
  );
}
