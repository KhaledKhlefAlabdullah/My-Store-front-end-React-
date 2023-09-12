import { createContext,  useState } from "react";

export const Show_Context = createContext({})

export function Show_Provider(props){
    const [show, setShow] = useState(false)

    return (
        <Show_Context.Provider value={{show, setShow}}>
            {props.children}
        </Show_Context.Provider>
    );
}