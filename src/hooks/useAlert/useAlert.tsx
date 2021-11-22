import { useContext } from 'react';
import { alertContext, setAlertContext } from './../../contexts';

const useAlert = () => useContext(alertContext);
const useSetAlert = () => useContext(setAlertContext);

export { useAlert, useSetAlert};