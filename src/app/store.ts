import { configureStore, ThunkAction, Action, createStore } from '@reduxjs/toolkit';
export const store = createStore(() => ({
  birds: [
    {
      name: 'robin',
      views: 1
    }
  ]
}));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
