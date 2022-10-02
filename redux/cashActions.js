import {
    GET_ALL_DATA,
    GET_CONSUMOS,
    GET_CONSUMOS_BY_MONTH,
    GET_MESES,
    ADD_CONSUMO,
    ADD_SALDO_1000_INCREMENTO,
    ADD_SALDO_1000_DECREMENTO
} from './types';



export const getAllData = (cashs) =>({type: GET_ALL_DATA, payload: cashs});
export const getMeses = (meses) =>({type: GET_MESES, payload: meses});
export const addConsumo = (consumo) =>({type: ADD_CONSUMO, payload: consumo});


/* reducer */


