import { createContext, useEffect } from "react";
import axios from "axios"
const AppContext = createContext();

const AppProvider = ({ children }) => {
  useEffect(()=>{
axios.get("https://api.pujakaitem.com/api/products").then((res)=>{
  const response = res.data
})
  },[])
  return <AppContext.Provider value="pratham">{children}</AppContext.Provider>;
};
export { AppProvider,AppContext };
