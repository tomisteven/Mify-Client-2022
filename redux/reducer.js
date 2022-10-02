import {
    ADD_CONSUMO,
    GET_ALL_DATA,
    GET_CONSUMOS,
    GET_CONSUMOS_BY_MONTH,
    GET_MESES,
    ADD_SALDO_1000_INCREMENTO,
    ADD_SALDO_1000_DECREMENTO
} from "./types"


import {
    REDUCER_ALL_DATA,
    REDUCER_MESES
} from "./types"

const initialState = {
    cash: [],
    consumos: [],
    meses: [],
}

export function cashReducer(state= initialState, action){
    switch(action.type){
        case GET_CONSUMOS:
            return {
                ...state,
                consumos: action.payload.map(consumo => ({consumo}))
            }
        case GET_ALL_DATA:
            return {
                ...state,
                cash: action.payload.map(cash => ({cash}))
            }
        case ADD_CONSUMO:
            
            return {
                ...state,
                consumos: [...state.consumos, action.payload]
            }
        case GET_MESES:
            return {
                ...state,
                meses: action.payload.map(mes => ({mes}))
            }

        default:
            return state
    }
}

export const useReducerDataInitialState = {
    meses: null,
    cash: null,
}

/* reducer */
export function useReducerData(state= useReducerDataInitialState, action) {
    switch (action.type) {
        case REDUCER_MESES:
            return {
                ...state,
                meses: action.payload.map(mes =>  mes )
            }
        case REDUCER_ALL_DATA:
            return {
                ...state,
                cash: action.payload.map(cash => ({ cash }))
            }
        default:
            return state
    }
}