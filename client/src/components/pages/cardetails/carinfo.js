import React from 'react';

function Carinfo(props){ 
    console.log(props.props.props.title)
    
    return(
        <div>
            <h1>{props.props.props.title}</h1>
            <h1>{props.props.props.highest_bid}</h1>
            <h1>{props.props.props.ending_time}</h1>
            <h1>{props.props.props.engine}</h1>
            <h1>{props.props.props.transmission}</h1>
        </div>
    )
}
export default Carinfo