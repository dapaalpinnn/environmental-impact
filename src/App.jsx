import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import InteractiveTabs from "./components/InteractiveTabs";
import { environmentImpactItems } from "./utils/environment";

export default function App() {
  return (
    <>
      <Header />
      <main className="font-inter max-w-md mx-auto mt-8 p-8 rounded-3xl sm:max-w-xl sm:mt-12">
        <h1 className="text-2xl text-slate-800 tracking-tight font-plex font-semibold text-center sm:text-2xl">
          Impact
        </h1>
        <div className="grid gap-4 grid-cols-2 mt-4 text-sm">
          {environmentImpactItems.map((item) => (
            <CoreConcepts key={item.title} {...item} />
          ))}
        </div>
      </main>
      <InteractiveTabs />
    </>
  );
}
