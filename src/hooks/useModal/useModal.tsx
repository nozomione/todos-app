import { useContext } from 'react';
import { modalContext, setModalContext } from './../../contexts';

const useModal = () => useContext(modalContext);
const useSetModal = () => useContext(setModalContext);

export { useModal, useSetModal };