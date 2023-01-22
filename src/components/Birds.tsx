import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export const Birds = () => {
 
  interface BirdsSlice {
    name: string;
    views: number;
    }

  const birds = useAppSelector((state: RootState) => {
    return state.birds;
  });
  console.log("STATE:",birds);
  return (
    <section>
      <h1>Bird List</h1>
      <ul>
        {birds.map((bird: BirdsSlice) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>Views: {bird.views}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
