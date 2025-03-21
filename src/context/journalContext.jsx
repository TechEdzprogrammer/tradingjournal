import React,{ useEffect, useState } from "react";

export const JournalContext = React.createContext();

export function JournalContextProvider({children}) {
  
  const [journal, setJournal] = useState([]);
  const [winTrades, setWinTrades] = useState(0);
  const [loseTrades, setLoseTrades] = useState(0);
  
  useEffect(() => {
    const journalEntries = localStorage.getItem('journals');
    const winTrades = localStorage.getItem('winTrades');
    const loseTrades = localStorage.getItem('loseTrades');
    setJournal(JSON.parse(journalEntries));
    setWinTrades(JSON.parse(winTrades));
    setLoseTrades(JSON.parse(loseTrades));
  },[]);    

  useEffect(() => {
    localStorage.setItem('journals', JSON.stringify(journal));
    localStorage.setItem('winTrades', JSON.stringify(winTrades));
    localStorage.setItem('loseTrades', JSON.stringify(loseTrades));
  },[journal,winTrades,loseTrades]);

  
  return (
    <JournalContext.Provider value={{journal, setJournal, setLoseTrades, setWinTrades, winTrades,loseTrades}}>
        {children}
    </JournalContext.Provider>
  );
}
