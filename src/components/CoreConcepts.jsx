export default function CoreConcepts({
  imageSource,
  title,
  description,
  ...props
}) {
  return (
    <section className="text-center mt-4 rounded-xl p-4 ring-1 ring-slate-400 hover:ring-slate-600">
      <img
        src={imageSource}
        {...props}
        className="w-20 mx-auto origin-bottom"
      />
      <h4 className="font-semibold mt-4 text-black">{title}</h4>
      <p className="mt-2 leading-snug tracking-wide text-slate-600">
        {description}
      </p>
    </section>
  );
}
