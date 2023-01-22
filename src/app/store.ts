import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import birdsReducer from './features/birdsSlice';

/*export const store = createStore(() => ({
  birds: [
    {
      name: 'robin',
      views: 1
    }
  ]
}));
*/
export const store = configureStore({
  reducer: {
    birds: birdsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
