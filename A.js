import React, { Component } from 'react';
import B from './B';
import C from './C';
export const mycontext = React.createContext();

class A extends Component {
    state = {
        name:"Viplav",
        roll:20
    }
    render() {
        return (
            <div>
              <h1>components A</h1>  

              <mycontext.Provider value={this.state}>
                <B/>
                <C/>
              </mycontext.Provider>

              {/* <B name={this.state.name} /> */}
            </div>
        );
    }
}

export default A;
