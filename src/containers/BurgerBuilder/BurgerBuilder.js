import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'; 
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'; 
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'; 

const INGREDIENT_PRICES = {
    lettuce: 0, 
    cheese: 1,
    meat: 1.50, 
    bacon: 1 
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0, 
            bacon: 0,
            meat: 0, 
            cheese: 0 
        },
        totalPrice: 0, 
        purchaseable: false, 
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0); 

        this.setState({purchaseable: sum > 1});
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
        this.updatePurchaseState(updatedIngredients); 
    }

    removeIngredientHandler = (type) => {
        // Setting the count
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {return;} 
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
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} 
                    />
                </Modal> 
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                />  
            </Aux> 
        ); 
    }
}

export default BurgerBuilder; 