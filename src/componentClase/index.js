import { Component } from 'react';

class ComponentClase extends Component {
    state = { count: 0 }

    sumar() {
        this.setState({ count: this.state.count + 1 });
    }
    restar() {
        if(this.state.count > 0){
            this.setState({ count: this.state.count - 1});
        }
    }
    componentWillMount(){
        console.log('voy cargando un componente');
    }

    componentDidMount() {
        console.log('ya se cargo el componente');   
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState);
        if(nextState.count === 5){
            console.log('hola');
        }
        return true;
    }

    componentDidUpdate() {
        console.log("actualizado");
    }

    componentWillUnmount() {
        console.log("me mori");
    }

    render() {
        return (
            <>
            <button onClick={() => this.sumar()}> + </button>
            <button onClick={() => this.restar()}> - </button>
            {this.state.count}
            </>
        );
    }
}

export default ComponentClase;