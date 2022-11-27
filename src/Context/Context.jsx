import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/productReducer'
import axios from "axios"
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const initialState = {
  isLoading: false,
  isError: false,
  Products: [],
  featuredProducts: [],
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const getProducts = async (URL) => {
    dispatch({ type: "SET_LOADING" });

    try {

      const res = await axios.get(URL)
      const products = await res.data
      // console.log(products)
      dispatch({ type: "SET_API_DATA", payload: products })

    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }

  }


  useEffect(() => {
    getProducts(API)
  }, [])
  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

// ! custom hooks for accessing the context data directly

const useProductContext = () => {
  return useContext(AppContext)
}


export { AppProvider, AppContext, useProductContext };
