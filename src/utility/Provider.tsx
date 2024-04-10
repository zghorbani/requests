import { createContext, useContext, useState } from 'react';
import { ContextProps, Items } from './type';

const MyContext = createContext<ContextProps>({
    items: {
        isForce: false,
        results: []
    },
    setItems: () => null
});

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<Items>({
        isForce: false,
        results: []
    });
    return (
        <MyContext.Provider value={{ items, setItems }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);

