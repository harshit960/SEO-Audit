// Create a provider component
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Create a context
type ResultContextType = {
    Failed: any[];
    Success: any[];
    setFailed: React.Dispatch<React.SetStateAction<never[]>>;
    setSuccess: React.Dispatch<React.SetStateAction<never[]>>;
};

const ResultContext = createContext<ResultContextType>({} as ResultContextType);

// Create a provider component
export const OBProvider = ({ children }: { children: ReactNode }) => {
    const [Failed, setFailed] = useState([]);
    const [Success, setSuccess] = useState([]);

    return (
        <ResultContext.Provider value={{ Failed, setFailed,Success,setSuccess }}>
            {children}
        </ResultContext.Provider>
    );
}

// Create a custom hook to use the ResultContext
export const useResultContext = () => {
    return useContext(ResultContext);
}
