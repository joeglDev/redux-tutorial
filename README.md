# React Redux notes

[Notes: ](https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-react-with-redux)

## Provider

Wrap top level of application in `<Provider> </Provider >` to access react-redux store.

## CreateStore

`src/ index.ts`

Import the createStore function from redux, then pass a function that returns an object. In this case, return an object with a field called birds that points to an array of individual birds. Each bird will have a name and a views count. Save the output of the function to a value called store, then pass the store to a prop called store in the Provider:

### Note:createStore is outdates use configureStore

## Displaying data with useSelector

`src/components/Birds.tsx`

Like with context, every child component will be able to access the store without any additional props. To access items in your Redux store, use a Hook called useSelector from the react-redux package. The useSelector Hook takes a selector function as an argument. The selector function will receive the state of your store as an argument that you will use to return the field you want: