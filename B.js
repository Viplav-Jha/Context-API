import React, { Component } from 'react';
import {mycontext }from './A'

class B extends Component {
    render() {
        return (
            <div>
            <div> Component B</div>
            <mycontext.Consumer>
             {data =><h2>{data.name}</h2>}
            </mycontext.Consumer>
                
            </div>
        );
    }
}

export default B;
