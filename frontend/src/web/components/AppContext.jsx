import config from "@/web/config.js"
import api from "@/web/services/api.js"
import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = (props) => {
  const nmapScan = async ({ IP, scanOption, option, scanResult }) => {
     await api.post("/scans", { IP, scanOption, option, scanResult })



  } 
  return (
    <AppContext.Provider
      {...props}
      value={{
        actions: { nmapScan }
      }}
    />
  )
}

export default AppContext
