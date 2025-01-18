export default function TabButton({
  children,
  isSelected = false,
  color = "bg-slate-50 hover:bg-slate-100",
  ...props
}) {
  return (
    <button
      {...props}
      className={`${
        isSelected ? "bg-black text-slate-100" : color
      } px-4 py-2 text-slate-500 rounded-xl font-medium text-sm sm:text-base sm:px-6`}
    >
      {children}
    </button>
  );
}
