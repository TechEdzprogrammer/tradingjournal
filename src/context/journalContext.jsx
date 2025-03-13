import React,{ useState } from "react";

export const JournalContext = React.createContext();

export function JournalContextProvider({children}) {
  
  const [journal, setJournal] = useState([]);

  return (
    <JournalContext.Provider value={{journal, setJournal}}>
        {children}
    </JournalContext.Provider>
  );
}
