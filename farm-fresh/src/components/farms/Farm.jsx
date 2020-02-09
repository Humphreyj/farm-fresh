import React from 'react';
import styled from 'styled-components';


const Div = styled.div`

`

const Farm = (props) => {
    return (
        <Div>
            <div className="farm-name">
                <img src="https://source.unsplash.com/1600x900/?farms,agriculture" alt=""/>
            </div>
            <h3>{props.name}</h3>
        </Div>
    );
}

export default Farm;
