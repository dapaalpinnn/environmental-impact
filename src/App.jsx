import Header from "./components/Header";
import Impacts from "./components/Impacts";
import InteractiveTabs from "./components/InteractiveTabs";

export default function App() {
  return (
    <div className="dark:bg-stone-950 dark:text-slate-100">
      <Header />
      <main>
        <Impacts />
        <InteractiveTabs />
      </main>
    </div>
  );
}
