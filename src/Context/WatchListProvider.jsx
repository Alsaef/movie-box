import { createContext, useState } from 'react';

export const WatchListContext = createContext()

const WatchListProvider = ({ children }) => {

    const [watchList,setWatchList]=useState(()=>{
        const saveWatchList=localStorage.getItem('watchList');
        return saveWatchList ? JSON.parse(saveWatchList):[]
    })

   
    
    return (
        <WatchListContext.Provider value={{watchList,setWatchList}}>
            {children}
        </WatchListContext.Provider>
    );
};

export default WatchListProvider;