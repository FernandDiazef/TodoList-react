import { useState } from 'react';

const ComponentFuntion = () => {
    let [state, setState] = useState({count: 0});
    const sumar = () => {
        setState({count: state.count + 1 });
    }
    const restar = () => {
        if(state.count > 0){
            setState({count: state.count - 1 });
        }   
    }
    return (
        <>
            <button onClick={() => sumar()}> + </button>
            <button onClick={() => restar()}> - </button>
            {state.count}
        </>
    );
}


export default ComponentFuntion;