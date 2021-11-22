import { Icon } from '../shared';
import { icons } from '../../utilities/icons';

const TodosAppHeader: React.FC= () => {
    const headerStyle = {
        background: "#6d6875",
        borderRadius: "0 0 2px 2px",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        marginLeft: "2rem",
        padding: ".5rem",
    } as React.CSSProperties;

    const h1Style = {
        fontSize: ".7rem",
        margin:" .25rem 0 0 .2rem"
    } as React.CSSProperties;
    
    return (
        <header style={ headerStyle }>
            <Icon name="icon--xs" path={ icons.todo } /> 
            <h1 style={ h1Style }>TODO APP</h1>
        </header>
    )
}

export default TodosAppHeader;
