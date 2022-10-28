import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import {VictoryChart, VictoryLine} from 'victory';

// Close
// : 
// "143.429993"
// Date
// : 
// "9/21/21"
// High
// : 
// "144.600006"
// Low
// : 
// "142.779999"
// Open
// : 
// "143.929993"
// "Volume "
// : 
// "75834000\r"

const Victory = () => {

  return (
    <>
        <VictoryChart
        >
        <VictoryLine
            style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
            }}
            data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ]}
        />
        </VictoryChart>
    </>
  );
};


export default Victory;
