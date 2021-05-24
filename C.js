import React, { Component } from 'react';
import {mycontext} from './A';

class C extends Component {
    render() {
        return (
            <div>
              <h4>component C</h4> 
              <mycontext.Consumer>{data=><h3>{data.roll}</h3>}</mycontext.Consumer> 
            </div>
        );
    }
}

export default C;
