import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import type { page, element } from '@/types/pagebuilder'
import syncMiddleware from '@/features/pagebuilder/middleware'

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

const addElement = createAction('pagebuilder/add', (json: element) => ({
  payload: json,
}))
const removeElement = createAction('pagebuilder/remove', (index: number) => ({
  payload: index,
}))

const updateElement = createAction(
  'pagebuilder/update',
  (index: number, ele: element) => ({
    payload: { index, ele },
  })
)

const initialState: page = {
  alignH: 'left',
  alignV: 'top',
  colSpace: 0,
  margin: 0,
  padding: 0,
  rounded: 0,
  colCount: 1,
  elements: [],
}

const pagebuilderReducer = createReducer(initialState, builder => {
  builder
    .addCase(addElement, (state, action) => {
      if (!state.elements.some(el => el.id == action.payload.id))
        state.elements.push(action.payload)
    })
    .addCase(removeElement, (state, action) => {
      state.elements.splice(action.payload, 1)
    })
    .addCase(updateElement, (state, action) => {
      state.elements[action.payload.index] = action.payload.ele
    })
})

const store = configureStore({
  reducer: {
    pagebuilder: pagebuilderReducer,
  },
  preloadedState: {
    pagebuilder: initialState,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(syncMiddleware),
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export {
  addElement as addPage,
  removeElement as removePage,
  updateElement as updatePage,
}
