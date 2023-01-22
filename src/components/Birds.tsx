import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { useState } from "react";
import {addBirdCase} from '../app/features/birdsSlice'

export const Birds = () => {
  //states
  const [birdName, setBird] = useState("");

  //interfaces
  interface BirdsSlice {
    name: string;
    views: number;
  }

  //methods
  const dispatch = useAppDispatch();

  /**
   * Adds new bird.name to global birdState in redux store.
   * 
   * @param event mouseclick event for submit
   */
  const handleSubmit = (event: any) => {
    event.preventDefault();
   dispatch(addBirdCase(birdName))
    setBird(''); //change state back
  };

  /**
   * Gets birds state from redux store.
   */
  const birds = useAppSelector((state: RootState) => {
    return state.birds;
  });


  return (
    <section>
      <h1>Bird List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Add Bird</p>
          <input
            type="text"
            onChange={(e) => setBird(e.target.value)}
            value={birdName}
          />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {birds.map((bird: BirdsSlice) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>Views: {bird.views}</div>
            <div>
              Views: {bird.views}
              <button>
                <span role="img" aria-label="add">
                  ➕
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
