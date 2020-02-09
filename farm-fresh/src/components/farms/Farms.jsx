import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../tools/axiosAuth';
import styled from 'styled-components';
import Farm from './Farm';
import { connect } from 'react-redux';
import { fetchFarms } from'../../redux/farms/farmAction';

const Div  = styled.div`


`

const Farms = (props) => {

    

    useEffect(()=> {
    
        props.fetchFarms()
        console.log(props.farms)
    
    },[props.farms])
    return (
        <Div>
            {
               props.farms && props.farms.map(farm => {
                   console.log(farm)
                   return (
                       <Farm
                       name={farm.farm_name}
                       address={farm.address}
                       city={farm.city}
                       state={farm.state}
                       zip={farm.zipcode}
                       phone={farm.phone_number}
                       email={farm.email}

                        />
                   )
                   
                })
            }
            
        </Div>
    );
}

const mapStateToProps = state => {
    return {
        farms: state.farms
    }
}

export default connect(mapStateToProps,{fetchFarms})(Farms);
