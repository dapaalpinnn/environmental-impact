export default function TabButton({
  children,
  isSelected = false,
  color = "bg-slate-600 hover:bg-slate-800",
  ...props
}) {
  return (
    <button
      {...props}
      className={`${
        isSelected ? "bg-black" : color
      } px-4 py-2 rounded-md font-medium text-sm text-slate-200 sm:text-base sm:px-6`}
    >
      {children}
    </button>
  );
}
