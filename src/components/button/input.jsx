import {React, Component} from 'react';

class Input extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='input'>
                {this.props.children}
            </div>
        )
    }
}

export default Input;