import { createContext, useState } from "react";

export const GlobalContext = createContext({
  searchParam: '', // value of the search input
  handleOnChange: () => {}, // method
  handleSubmit: () => {}, // method
  movieList: [], // to store the movies that we are getting from an API
  loading: false // this is a loading state to show a message while the API request is processing
});

const GlobalState = ({children}) => { // a React component that uses the Context API to manage global state.
  const [searchParam, setSearchParam] = useState('');
  const [movieList, setMovieList] = useState([]);
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setSearchParam(event.target.value);
  }
  const handleSubmit = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchParam}&apikey=d55443cb`);
    const data = await response.json();
    console.log(data);

    if (data) {
      setMovieList(data.Search);
    }
  }
  const contextValue = {
    searchParam, // value of the search input
    handleOnChange, // method
    handleSubmit, // method
    movieList, // to store the movies that we are getting from an API
    loading: false // this is a loading state to show a message while the API request is processing
  }

  return ( // parethesis is not needed if return statement is only one line
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalState;

/**
 * * When do you need context/useContext?
 *  - The main idea of using the context is to allow your components to access global data and re-render when that
 *    global data is changed. Context solves the props drilling problem: when you have to pass down props from
 *    parents to children.
 *  - Context has atleast 2 properties Consumer and Provider
 *    - Consumer - The Consumer component allows a component to subscribe to context changes.
 *      The consumer components allow to use data from the context. 
 *    - Provider - This will basically provide value to your components and subcomponents.
 * 
 * * GlobalContext Code flow:
 *  - Info: This code exports a context object called GlobalContext.
 *    - This context object has five properties: searchParam, handleOnChange, handleSubmit, movieList and loading
 *    - This context object can be used to share data and state between different components in our application.
 *      For example, we could use it to share the search input value between the search input component and
 *      the movie list component.
 *    - To use the GlobalContext context object, we need to wrap our application with a Provider component.
 *      The Provider component takes the context object as its value prop.
 *  - The properties inside GlobalContext variable are the things we need
 *    - This variable is also being exported for the proper file to use
 *  - The things we need for this file are the value of the search input and handleOnChange method of the input
 * 
 * * GlobalState Code flow:
 *  - Info: GlobalState is a React component that uses the Context API to manage global state
 *    - This component defines the following state: searchParam, handleOnChange, handleSubmit, movieList, movieList
 *    - This component also defines a contextValue object that contains all of the state values.
 *      This object is then passed to the GlobalContext.Provider component, which makes the state values available
 *      to all of the child components.
 *    - The GlobalState component can be used to share data between multiple components in a React application.
 *      For example, we have a search bar and a list of movies, we can use the GlobalState component to share the
 *      search parameter between the two components. This way, the list of movies will be updated automatically
 *      whenever the user changes the search parameter.
 * 
 *  - The variable GlobalState will return <GlobalContext.Provider></GlobalContext.Provider>
 *    - {children} is basically all the components being passed in the <GlobalContext.Provider></GlobalContext.Provider>
 *    - This variable is also being exported for the proper file to use
 *  - We need to pass the value in the GlobalState through the contextValue variable object
 *    - For now it contains the properties of GlobalContext since we have no state yet
 *  - Create a state
 *    - const [searchParam, setSearchParam] = useState(''); is using the React useState hook to create a state
 *      variable called searchParam. The initial value of the state variable is an empty string (''). The setSearchParam
 *      function is used to update the value of the state variable.
 *    - The searchParam variable is passed inside the contextValue variable
 *    - const [movieList, setMovieList] = useState([]); is a React hook that creates and manages a state variable called movieList.
 *      - The initial value of movieList is an empty array.
 *      - The setMovieList function is used to update the value of movieList.
 * 
 *  - handleOnChange() method is created
 *  - handleSubmit() method is created
 *  - contextValue is being passed as a value in <GlobalContext.Provider value={contextValue}></GlobalContext.Provider>
 *  - We need to grab this provider in our root component
 *    - Wrap the elements in index.js file with <GlobalState></<GlobalState>
 *  - The value that the user types in the search input will be saved in searchParam variables
 *    - Any change events in the input is handled by handleOnChange function
 *  - Read and search "We need to save the value that the user searches in the searchParam variable" in Search.jsx
 * 
 */