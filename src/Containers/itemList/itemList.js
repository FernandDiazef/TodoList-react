import { useState } from "react";
import { Card, Container } from 'react-bootstrap';
import AddTodo from '../../components/addTodo/addTodo';
import Item from '../../components/item/item';

const ItemList = () => {
    const [tasks, setTask] = useState([]);
    const [contador, setContador] = useState(1);
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState();

    const createNewTask = (text) => {
        const newTask = {
            identificador: contador,
            text: text,
            mark: false,
        }
        if (!text.trim()) {
            alert("No se pudo peejo")
        } else {
            setTask([...tasks, newTask]);
            setContador(contador + 1);
        }
    }

    const DeleteTask = (index) => {
        const newTaks = tasks.filter((item) => item.identificador !== tasks[index].identificador);
        setTask(newTaks);
    }

    const MarkCompleteTask = (index) => {
        const newTaks = tasks;
        newTaks[index].mark = !newTaks[index].mark;
        setTask([...newTaks]);
    }
    const EnabledIsEdit = (id) => {
        if (isEdit) {
            setId("");
        } else {
            setId(id);
        }
        setIsEdit(!isEdit);
    }
    const ActualizarTarea = (event, index) => {
        const newTaks = [...tasks];
        newTaks[index].text = event.target.value;
        setTask(newTaks);
    }

    return (
        <>
            <Container className="d-flex justify-content-center">
                <Card
                    bg='success'
                    key={1}
                    text={'dark'}
                    style={{ width: '40rem' }}
                    className="mb-2">
                    <Card.Header>To Do</Card.Header>
                    <Card.Body>
                        <div className="mb-5">
                            <AddTodo UnaPropiedad={createNewTask} />
                        </div>
                        <div>
                            {
                                tasks.map((item, index) => (
                                    <Item
                                        DeleteTask={DeleteTask}
                                        key={index}
                                        index={index}
                                        item={item}
                                        MarkCompleteTask={MarkCompleteTask}
                                        isEdit={isEdit}
                                        identificador={id}
                                        EnabledIsEdit={EnabledIsEdit}
                                        ActualizarTarea={ActualizarTarea}
                                    />
                                ))
                            }
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default ItemList;