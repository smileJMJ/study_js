// First create a store
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const useBearStore = create((set) => ({
  bear: 0,
  nuts: 0,
  honey: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}));

// Then bind your components, and that's it;
function BearCount() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears}</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>
}

const { nuts, honey } = useBearStore(useShallow((state) => ({ nuts: state.nuts, honey: state.honey })));
const [nuts, honey] = useBearStore(useShallow((state) => [state.nuts, state.honey]));
const treats = useBearStore(
  (state) => state.treats, 
  (oldTreats, newTreats) => compare(oldTreats, newTreats)
)