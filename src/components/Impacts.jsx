import { environmentImpactItems } from "../utils/environment";
import CoreConcepts from "./CoreConcepts";

export default function Impacts() {
  return (
    <section className="font-inter max-w-xs mx-auto mt-12 rounded-3xl sm:max-w-xl sm:mt-12">
      <h1 className="text-2xl tracking-tight font-plex font-semibold text-center sm:text-2xl">
        Impacts
      </h1>
      <div className="grid gap-4 grid-cols-1 mt-4 text-sm">
        {environmentImpactItems.map((item) => (
          <CoreConcepts key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
