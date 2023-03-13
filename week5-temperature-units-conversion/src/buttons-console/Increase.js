import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {FaPlus} from 'react-icons/fa'
import './console.css';


class Increase extends Component {
    render() {
        return (
            <div>
               <Button className='button'>
                <FaPlus />
                </Button> 
            </div>
        );
    }
}

export default Increase;