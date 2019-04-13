import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'; 
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 1, 
            bacon: 1,
            meat: 1, 
            cheese: 1 
        }
    }

    addIngredientHandler = (type) => {

    }

    addIngredientHandler = (type) => {

    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls />  
            </Aux> 
        ); 
    }
}

export default BurgerBuilder; 