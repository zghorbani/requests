import { createContext, useContext, useState } from 'react';
import { ContextProps, Item } from './type';

const MyContext = createContext<ContextProps>({
    items: []
    ,
    setItems: () => null
});

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<Item[]>([]);
    return (
        <MyContext.Provider value={{ items, setItems }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);

