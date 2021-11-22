import { ReactNode, memo } from 'react'
import { useModal, useSetModal } from '../../../hooks';
import { Icon } from '../icon';
import { icons } from'../../../utilities/icons';
import styles from './Modal.module.scss';

type Props = {
    children: ReactNode
}
const Modal: React.FC<Props> = ({ children }) => {
    const modal = useModal();
    const setModal = useSetModal()!;

    const closeModal = () => {
        setModal({ show: false });
    }

    return (
        <>
         { modal.show && 
            <div className={ `${styles.modal} ${styles["modal--"+modal.theme]}` }>
                <div onClick={closeModal} className={ styles.close }>
                    <span className="sr-only">Close</span>
                    <Icon name="icon--sm" path={ icons.close } />
                </div>
                <div className={ styles["modal-content"] }>
                    { children }
                </div>
            </div>
         } 
        </>
    )
}

export default memo(Modal);
