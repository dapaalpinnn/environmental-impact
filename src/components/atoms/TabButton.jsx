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
      } px-4 py-2 ring-1 ring-slate-400 text-slate-500 rounded-lg font-manrope font-medium text-sm sm:text-base sm:px-6 dark:bg-black dark:text-slate-400 dark:ring-slate-400 dark:hover:ring-slate-200 dark:hover:text-stone-200`}
    >
      {children}
    </button>
  );
}
