import { memo } from 'react';
import { ModalTheme } from '../../models';
import { useModal, useSetModal } from '../../hooks';
import { Portal, Modal, Icon } from '../shared';
import DeleteTodo from './DeleteTodo';
import { icons } from '../../utilities/icons';
import styles from './DeleteTodo.module.scss';

interface Props {
  id: string;
}

const DeleteTodoButton: React.FC<Props> = ({ id }) => {
    const modal = useModal();
    const setModal = useSetModal()!;

    const openModal = () => {        
        setModal(
            {
                show: true,
                theme: ModalTheme.LIGHT,
                todoId: id,
                name:'delete'
            }
        );
    }

    return (
        <>   
            <div className={styles["delete-todo-btn"]} onClick={ openModal }>
                <span className="sr-only">Delete</span>
                <Icon name="icon--sm" path={ icons.trash } />
            </div>
            { modal.show && modal.todoId === id && 
                <Portal>
                    <Modal>
                        <DeleteTodo />
                    </Modal>
                </Portal> } 
        </>
    )
}

export default memo(DeleteTodoButton);
