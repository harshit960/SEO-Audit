// Create a provider component
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Create a context
type ResultContextType = {
    Failed: any[];
    Success: any[];
    // setFailed: React.Dispatch<React.SetStateAction<never[]>>;
    // setSuccess: React.Dispatch<React.SetStateAction<never[]>>;
    appendToFailed: (item: any) => void;
    appendToSuccess: (item: any) => void;
};

const ResultContext = createContext<ResultContextType>({} as ResultContextType);

// Create a provider component
export const OBProvider = ({ children }: { children: ReactNode }) => {
    const [Failed, setFailed] = useState<any[]>([]);
    const [Success, setSuccess] = useState<any[]>([]);

    const appendToFailed = (itemF: any) => {
        setFailed(prevFailed => [...prevFailed, itemF]);
        
    };

    const appendToSuccess = (itemS: any) => {
        setSuccess(prevSuccess => [...prevSuccess, itemS]);
        
        
    };
    return (
        <ResultContext.Provider value={{ Failed, appendToFailed,appendToSuccess,Success }}>
            {children}
        </ResultContext.Provider>
    );
}

// Create a custom hook to use the ResultContext
export const useResultContext = () => {
    return useContext(ResultContext);
}
