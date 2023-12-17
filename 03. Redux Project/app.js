import { createStore } from 'redux';

const initialState = {
    recipes: [{
        name: 'Omelette'
    }],
    ingredients: [{
        recipe: 'Omelette',
        name: 'Egg',
        quantity: 2
    }]
};

const reducer = (state, action) => state;
const store = createStore(reducer, initialState);

window.store = store;