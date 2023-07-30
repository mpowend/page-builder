import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import type { element } from '@/types/pagebuilder'

// const pagebuilderReducer: Reducer<object[], PayloadAction> = (
//   state: object[] | undefined,
//   action: { type: string; payload: void }
// ) => {
//   switch (action.type) {
//     case 'pagebuilder/add':
//       return [...state, action.payload]
//     case 'pagebuilder/remove':
//       return state.filter((item, index) => index !== action.payload.index)
//     case 'pagebuilder/update':
//       return state.map((item, index) => {
//         if (index === action.payload.index) {
//           return {
//             ...item,
//             ...action.payload,
//           }
//         }
//         return item
//       })
//     default:
//       return state
//   }
// }

const addPage = createAction('pagebuilder/add', (json: element) => ({
  payload: json,
}))
const removePage = createAction('pagebuilder/remove', (index: number) => ({
  payload: index,
}))
const updatePage = createAction(
  'pagebuilder/update',
  (index: number, ele: element) => ({
    payload: { index, ele },
  })
)

const initialState: { elements: element[] } = { elements: [] }

const pagebuilderReducer = createReducer(initialState, builder => {
  builder
    .addCase(addPage, (state, action) => {
      state.elements.push(action.payload)
    })
    .addCase(removePage, (state, action) => {
      state.elements.splice(action.payload, 1)
    })
    .addCase(updatePage, (state, action) => {
      state.elements[action.payload.index] = action.payload.ele
    })
})

const store = configureStore({
  reducer: {
    pagebuilder: pagebuilderReducer,
  },
  preloadedState: {
    pagebuilder: { elements: [] },
  },
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export { addPage, removePage, updatePage }
