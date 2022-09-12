import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export const TodoItem = ({ todo }) => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Tarea Completada" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }
    const onHide = (name) => {
        return dialogFuncMap[`${name}`](false);
    }
    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }
    const getStyle = () => {
        return{
            textDecoration: todo.done ? 'line-through': 'none',
        }
    }
  return (
    <div className="todo">

    <Button label={todo.titulo} onClick={() => onClick('displayBasic')} className="btn-todo" style={getStyle()} />
    
    <Dialog header={todo.titulo} visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
    <p>{todo.descripcion}</p>
    </Dialog> 

    <Button icon="pi pi-times" onClick={() => onHide(name)} className="btn-borrar" />
   
    </div>
  )
}
