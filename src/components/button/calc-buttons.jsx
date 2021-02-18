import {React, Component} from 'react';
import './calculator.styles.scss';
import  {add, multi, sub, div} from '../../components/calculator/calculator.component';
import Button from './button';
import Input from './input.jsx';

class Calculator extends Component {
    constructor(props){
        super(props);
        
        
        this.state ={
            input: '',
            prewNum: '',
            currNum: '',
            operator: ''
        };
    }  

    updateInput = value => {
        this.setState((prevState, prevProps) => {
            return {input: prevState.input + value}},
            () => console.log("input: ", this.state.input)
        );
    };

    updateOperator = op => {
        this.setState((prevState, prevProps) => {
        return {operator: op}},
        () => console.log("operator: ", this.state.operator)
        );
        
        this.updatePrewNumber();
        this.setState({input: ''});
        console.log("update input: ", this.state.input);
    }
    
    updatePrewNumber = () => {
        this.setState((prevState, prevProps) => {
            return {prewNum: prevState.input}},
            () => console.log("prewNum: ", this.state.prewNum)
            );
    };

    clear = () => {
        this.setState({input: ''})
        this.setState({currNum: ''})
        this.setState({prewNum: ''})
        this.setState({operator: ''})
    }
    updateDot = value => {
        var temp = this.state.input *1.0;
        this.setState({input: temp })

    }

    calculate = () => {
        this.setState((prevState, prevProps) => {
            return {currNum: prevState.input}},
            () => console.log("currNum: ", this.state.currNum)
        );
        var num
        if(this.state.operator === 'x'){
            num = multi(this.state.prewNum, this.state.input);
            this.setState({input: num});
        }

        else if(this.state.operator === '+'){
            num = add(this.state.prewNum, this.state.input);
            this.setState({input: num});
        }

        else if(this.state.operator === '-'){
            num = sub(this.state.prewNum, this.state.input);
            this.setState({input: num});
        }   
        else if(this.state.operator === '/'){
            num = div(this.state.prewNum, this.state.input);
            this.setState({input: num});
        }   
    }
    

    render () {
        return (
            <div className='app'>
                <div className='btn-wrapper'> 

                <div className ='input-row'>
                    <Input>{this.state.input}</Input>
                </div>
                <div className ='btn-row'>
                    <Button handleClick={this.updateInput}>7</Button>
                    <Button handleClick={this.updateInput}>8</Button>
                    <Button handleClick={this.updateInput}>9</Button>
                    <Button handleClick={this.updateOperator}>x</Button>
                </div>
                <div className ='btn-row'>
                    <Button handleClick={this.updateInput}>4</Button>
                    <Button handleClick={this.updateInput}>5</Button>
                    <Button handleClick={this.updateInput}>6</Button>
                    <Button handleClick={this.updateOperator}>-</Button>
                </div>
                <div className ='btn-row'>
                    <Button handleClick={this.updateInput}>1</Button>
                    <Button handleClick={this.updateInput}>2</Button>
                    <Button  handleClick={this.updateInput}>3</Button>
                    <Button handleClick={this.updateOperator}>+</Button>
                </div>
               
                <div className ='btn-row'>
                    <Button handleClick={this.updateInput}>0</Button>
                    <Button handleClick={this.updateInput}>.</Button>
                    <Button handleClick={this.calculate}>=</Button>
                    <Button handleClick={this.updateOperator}>/</Button>
                </div>
                <div className ='btn-row-clear'>
                <Button handleClick={this.clear}>Clear</Button>
                </div>
            </div>
        </div>
    
        )
    };
};

export default Calculator;