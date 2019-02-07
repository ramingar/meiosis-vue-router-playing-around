// Meiosis
import {P} from "patchinko";
import flyd from "flyd";
import {store} from "./store";

const update       = flyd.stream();
const initialState = JSON.parse(localStorage.getItem('state'));
const state        = Object.assign({}, store.state, initialState);
const states       = flyd.scan((oldState, patch) => {
    const newState = P(oldState, patch);
    localStorage.setItem('state', JSON.stringify(newState));
    return newState;
}, state, update);
const actions      = store.actions(update);

export {states, state, actions}
