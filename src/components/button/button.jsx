import React from 'react'

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return  (
                <button className="btn"
                    onClick={() => this.props.handleClick
                    (this.props.children)}> 
                    {this.props.children}
                </button>
            
        );
    };
};

export default Button;