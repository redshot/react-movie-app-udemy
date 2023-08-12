import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
  const { searchParam, handleOnChange, handleSubmit } = useContext(GlobalContext);

  return (
    <div className="search">
      <input
        name="search"
        value={searchParam}
        onChange={handleOnChange}
        placeholder="Enter movie keyword here"
      />
      <button disabled={searchParam.trim().length <= 2} onClick={handleSubmit}>Submit search</button>
    </div>
  );
};

export default Search;

/**
 * * We need to save the value that the user searches in the searchParam variable
 *  - Info: Inside any component that needs to access the GlobalContext context object, we can use the useContext() hook.
 *    The useContext() hook takes the context object as its argument and returns the current value of the context object.
 *    For example: <input value={searchParam} onChange={handleOnChange}/>
 *    - The useContext() hook will automatically update the value of the context object when it changes.
 *      This means that we don't need to worry about manually updating the value of the context object in our components.
 * 
 *  - To do that, we need to import the variables and methods from GlobalContext file
 *    - We destructure the contents of GlobalContext through
 *      const { searchParam, handleOnChange, handleSubmit } = useContext(GlobalContext);
 *  - Pass the value of the input through the searchParam as well as the handleOnChange function. 
 *    Example: <input value={searchParam} onChange={handleOnChange} />
 *  - Button click event is handled by handleSubmit
 * 
 */