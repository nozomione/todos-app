import { createContext,  useState } from 'react';
import { ModalInterface } from '../models';

const initalState: ModalInterface = {
    show: false
}

export const modalContext = createContext<ModalInterface>(initalState);
export const setModalContext = createContext<React.Dispatch<React.SetStateAction<ModalInterface>> | null >(null);
const  ModalContextProvider = modalContext.Provider;
const  SetModalContextProvider = setModalContext.Provider;

const ModalProvider: React.FC = ({ children }) => {
    const [modal, setModal] = useState<ModalInterface>(initalState);

    return(
       <ModalContextProvider value={ modal }>
           <SetModalContextProvider value={ setModal }>   
                { children }
           </SetModalContextProvider>
        </ModalContextProvider>
    );
}

export default ModalProvider;