import { legacy_createStore as createStore } from "redux";
import { portfolioInfo } from "./dataServer";
import { composeWithDevTools } from '@redux-devtools/extension';

const portfolioReducer = ( state = portfolioInfo, action ) => {
   if(action.type==='ADD_ISOPENBTN') {
      state.finishedWorks.forEach(item => {
         if(item.id===action.id){
            item.isOpenBtn=true
         }else{
            item.isOpenBtn=false
         }
      })
   }
   return state
}

export const store = createStore(portfolioReducer, composeWithDevTools())

// actions
export const addIsOpenBtn = (id) => ({
   type: 'ADD_ISOPENBTN',
   id
})

