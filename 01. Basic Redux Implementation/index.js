// Our mutation (reducer) function creates
// a _new_ state based on the action passed
function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return Object.assign({}, state, { counter: state.counter + 1 });
        case 'DEC':
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
}

const initialState = {
    counter: 3
};

const store = Redux.createStore(reducer, initialState);

// Function to update view (this might be React or Angular in a real app)
function updateView() {
    document.querySelector('#counter').innerText = store.getState().counter;
}

store.subscribe(updateView);

// Update view for the first time
updateView();

// Listen to click events
document.getElementById('inc').onclick = () => store.dispatch({ type: 'INC' });
document.getElementById('dec').onclick = () => store.dispatch({ type: 'DEC' });

// function updateView() {
//     document.querySelector('#counter').innerText = state.counter;
// }
//
// //subscribe
// const listeners = [];
//
// function subscribe(callback) {
//     listeners.push(callback);
// }
// //reducer
// function reducer(state, action) {
//     switch (action) {
//         case 'INC':
//             return Object.assign({}, state, { counter: state.counter + 1 });
//         case 'DEC':
//             return Object.assign({}, state, { counter: state.counter - 1 });
//         default:
//             return state;
//     }
// }
//
// //dispatch
// let state = {counter:3};
//
// function dispatch(action) {
//     const newState = reducer(state, action);
//
//     if (newState !== state) {
//         state = newState;
//
//         listeners.forEach(listener => listener());
//     }
// }
// document.querySelector('#inc').onclick = () => dispatch('INC');
// document.querySelector('#dec').onclick = () => dispatch('DEC');
//
// //update
// updateView()
// subscribe(updateView)
