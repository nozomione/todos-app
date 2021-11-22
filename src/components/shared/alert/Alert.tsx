import { useEffect, memo } from 'react';
import { AlertTheme } from '../../../models';
import { useAlert, useSetAlert } from '../../../hooks';
import { Icon } from '../icon';
import { icons } from'../../../utilities/icons';
import styles from './Alert.module.scss';

const Alert: React.FC = () => {
    const alert = useAlert();
    const setAlert = useSetAlert()!;

    useEffect(() => {
        const timer = setTimeout(()=> {
            closeAlert();
        }, 3500);
        return () => {
            clearTimeout(timer);
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alert]);

    const closeAlert = ()=> {
        setAlert({
            show: false,
            text: '',
            theme: AlertTheme.NONE,
            icon:false,
            iconName:'',
            iconClass:''
        });
    }

    return (
        <>
            { alert.show && 
                <div 
                    className={ styles["alert-overlay"]} 
                    onClick={ closeAlert }>
                    <div className={ `${styles["alert-box"]} 
                        ${styles["alert-box--"+alert.theme]}` }>
                        <div 
                            onClick={ closeAlert } 
                            className={styles.close}>
                            <span className="sr-only">Close</span>
                            <Icon name="icon--xxs" path={ icons.close } />
                        </div>
                        <div className={ styles["alert-content"] }>
                            <Icon name={ alert.iconClass } path={ icons[alert.iconName] } />
                            <p>{ alert.text }</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default memo(Alert);
