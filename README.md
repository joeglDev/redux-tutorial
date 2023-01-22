# React Redux notes

[Notes: ](https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-react-with-redux)

## 1. Provider

`index.tsx`

Wrap top level of application in `<Provider> </Provider >` to access react-redux store.

## 2. configureStore

`src/app/store.ts`

Using configureStore should not need any additional typings. You will, however, want to extract the RootState type and the Dispatch type so that they can be referenced as needed. Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings.

Since those are types, it's safe to export them directly from your store setup file such as app/store.ts and import them directly into other files.

# 3. Reducers

`src/app/features/slice`

Each slice file should define a type for its initial state value, so that createSlice can correctly infer the type of state in each case reducer.

All generated actions should be defined using the PayloadAction<T> type from Redux Toolkit, which takes the type of the action.payload field as its generic argument.

You can safely import the RootState type from the store file here. It's a circular import, but the TypeScript compiler can correctly handle that for types. This may be needed for use cases like writing selector functions.


## 4. Displaying data with useSelector

`src/components/Birds.tsx`

Like with context, every child component will be able to access the store without any additional props. To access items in your Redux store, use a Hook called useSelector from the react-redux package. The useSelector Hook takes a selector function as an argument. The selector function will receive the state of your store as an argument that you will use to return the field you want:

## 5. Modifying a state

``src/app/features/slice``

Reducers are functions that will determine how a state should change based on actions. The actions don’t make changes themselves; the reducers will take the state and make changes based on actions.

A reducer receives two arguments: the current state and the action. The current state refers to the state for a particular section of the store. Generally, the name of the reducer will match with a field in the store