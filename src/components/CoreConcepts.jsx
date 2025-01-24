export default function CoreConcepts({
  imageSource,
  title,
  description,
  ...props
}) {
  return (
    <section className="max-w-xs mx-auto text-center mt-4 rounded-xl p-4 ring-1 ring-slate-400 hover:ring-slate-600 sm:text-base dark:ring-slate-600 dark:hover:ring-slate-400">
      <img
        src={imageSource}
        {...props}
        className="w-20 mx-auto origin-bottom sm:w-24 sm:mt-4 dark:invert"
      />
      <h4 className="font-semibold mt-4 text-black sm:text-lg sm:mt-6 dark:text-slate-100">
        {title}
      </h4>
      <p className="mt-2 leading-tight text-slate-600 sm:leading-tight dark:text-slate-400">
        {description}
      </p>
    </section>
  );
}
