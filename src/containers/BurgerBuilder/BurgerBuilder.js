import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'; 
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    lettuce: 0, 
    cheese: 1,
    meat: 1.5, 
    bacon: 1 
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 1, 
            bacon: 1,
            meat: 1, 
            cheese: 1 
        },
        totalPrice: 5
    }

    addIngredientHandler = (type) => {
        // Setting the count
        const oldCount = this.state.ingredients[type]; 
        const updatedCount = oldCount + 1;

        // Updating ingredients 
        const updatedIngredients = {
            ...this.state.ingredients
        }; 
        updatedIngredients[type] = updatedCount; 

        // Adding new price
        const priceAddition = INGREDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice + priceAddition; 
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        // Setting the count
        const oldCount = this.state.ingredients[type]; 
        const updatedCount = oldCount - 1; 

        // Updating ingredients
        const updatedIngredients = {
            ...this.state.ingredients
        }; 
        updatedIngredients[type] = updatedCount; 

        // Subtracting the price
        const priceReduction = INGREDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice - priceReduction; 
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }; 

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />  
            </Aux> 
        ); 
    }
}

export default BurgerBuilder; 