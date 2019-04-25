import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios'
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


//-------------------------action---------------------------------------------
export const getStdsuccess = (std) => {
    return {
        type: "GET_STD_SUCCESS",
        payload:std
    }
}

export const getStdFail = () => {
    return {
        type: "GET_STD_FAIL"
    }
}

//create data
export const addStdup = (value) => {
    return {
        type : "ADD_STD_SUCCESS",
        payload: value
    }
}

export const addStdFail = () => {
    return {
        type : "ADD_STD_FAIL"
    }
}

export const getvalueById = (value) => {
    return {
        type:"GET_BY_ID_SUCESS",
        payload : value

    }
}

export const getbyidFail = () => {
    return {
        type:"GET_BY_ID_FAIL"
    }
}

//UPDATE
export const updatebyId = (value) => {
    return {
        type:"UPDATE_BY_ID_SUCCESS",
        payload:value
        
    }
}

export const updatebyIdFail = () => {
    return {
        type:"UPDATE_BY_ID_FAIL"
    }
}

//DELETE
export const delbyId = () => {
    return {
        type:"DEL_BY_ID_SUCCESS"
    }
}

export const delbyIdFail = () => {
    return {
        type:"DEL_BY_ID_FAIL"
    }
}

//-------------------------function---------------------------------------------
//show all data
export const getStd = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:8000/api/psu`)
        const resBody = await res.data
        dispatch( getStdsuccess (resBody))
        console.log('load')
    }
    catch(error){
        console.log('not load')
        dispatch (getStdFail())
    }
}

//create date
export const addStd = (value) => async (dispatch) => {
    try{
        const res = await axios.post(`http://localhost:8000/api/psu` , value)
        const resBody = await res.data
        dispatch( addStdup (resBody))
        console.log('ok')
    }
    catch(error){
        console.log('not ok')
        dispatch(addStdFail())
        
    }
}


//Request
export const getId = (id) => async (dispatch) => {
    console.log("data pass :" + id)
    try{
        const res = await axios.get(`http://localhost:8000/api/psu/${id}`)
        const resBody = await res.data
        dispatch(getvalueById(resBody))
        console.log(resBody)
    }catch(error){
        dispatch( getbyidFail())
    }
}

//update
export const updatevaluebyId = (id,value) => async(dispatch) =>{
    try {
        const res = await axios.put(`http://localhost:8000/api/psu/${id}`,value)
        const resBody = await res.data
        dispatch( updatebyId(resBody))
    }catch(error){
        dispatch(updatebyIdFail)
    }
}

//delete
export const deletevaluebyId = (id) => async(dispatch) =>{
    try{
        const res = await axios.delete(`http://localhost:8000/api/psu/${id}`)
        const resBody = await res.data
        dispatch (delbyId(resBody))
    }
    catch(error){
        dispatch(delbyIdFail())
    }
}


//-------------------------reducer---------------------------------------------
export const stdReducer = (state = [] , action) => {
    switch(action.type){
        case "GET_STD_SUCCESS" :
            return action.payload
        case "GET_STD_FAIL" :
            return state

        case "ADD_STD_SUCCESS" :
            return action.payload
        case "ADD_STD_FAIL":
            return state

        case "GET_BY_ID_SUCESS":
            return action.payload
        case "GET_BY_ID_FAIL":
            return state

        case "UPDATE_BY_ID_SUCCESS" :
            return action.payload
        case "UPDATE_BY_ID_FAIL":
            return state

        case "DEL_BY_ID_SUCCESS" :
            return state
        case "DEL_BY_ID_FAIL":
            return state

        default : return state
    }
}


//--------------------------rootReducer---------------------------------------------
export const rootReducer = combineReducers({
    std:stdReducer
})

//-------------------------Store---------------------------------------------
export const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(<Provider store = {store}>
                    <App /> 
                </Provider>
                , document.getElementById('root'));
serviceWorker.unregister();
