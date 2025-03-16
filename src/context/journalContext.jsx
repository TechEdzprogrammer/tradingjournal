import React,{ useState } from "react";

export const JournalContext = React.createContext();

export function JournalContextProvider({children}) {
  
  const [journal, setJournal] = useState([]);
  const [winTrades, setWinTrades] = useState(0);
  const [loseTrades, setLoseTrades] = useState(0);
  

  return (
    <JournalContext.Provider value={{journal, setJournal, setLoseTrades, setWinTrades, winTrades,loseTrades}}>
        {children}
    </JournalContext.Provider>
  );
}
