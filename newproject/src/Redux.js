//for redux we need to write import redux from redux but its a normal js code so we will use the redux library
//like this,it provieds a method called createStore

const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

//action creator
function buyCake() {
    //returning the action
    return{
        type: BUY_CAKE,
}
}

//(previousState, action) => newState
const initialState = {
    numOfCakes: 10
}


//specify how the app's state changes in response to actions sent to the store
//Reducer is a function that accepts state and action as arguments, and return the next state of the application
//(previousState, action) => newState 

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, //first make the copy of the state object and then update the number of state, if there were other properties they would remain unchanged
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

//we are using the createStore method here , the initial state is required to make the state transition based on the action receive
const store = createStore(reducer)
console.log('initial state', store.getState())//getstate() will give the initial state or current state in the store
//any time the store updates we log the state to the console
store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake()) //dispatching the action
store.dispatch(buyCake())
store.dispatch(buyCake())



// unsubscribe()
