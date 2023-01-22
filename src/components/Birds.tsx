import { useAppSelector } from "../app/hooks";

export const Birds = () => {
  interface Bird {
    name: string; views: number ;
  }

  const birds = useAppSelector((state: any) => {
    return state.birds;
  });
  console.log("STATE:",birds);
  return (
    <section>
      <h1>Bird List</h1>
      <ul>
        {birds.map((bird: Bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>Views: {bird.views}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
