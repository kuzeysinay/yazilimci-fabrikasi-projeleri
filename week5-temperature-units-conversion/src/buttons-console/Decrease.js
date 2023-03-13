import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {FaMinus} from 'react-icons/fa'
import './console.css';


class Decrease extends Component {
    decrease_temp = () =>{
        temperature-= 1;
    }

    
    render() {
        return (
            <div>
                <Button className='button' 
                onClick={this.decrease_temp}>
                    <FaMinus />
                    
                </Button>
            </div>
        );
    }
}

export default Decrease;