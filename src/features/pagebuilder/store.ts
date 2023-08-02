import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import type { page, element, attribute } from '@/types/pagebuilder'
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
  (index: attribute, ele: string | number) => ({
    payload: { index, ele },
  })
)
const setActiveElement = createAction(
  'pagebuilder/setActive',
  (index: number) => ({
    payload: index,
  })
)

const initialState: { pagebuilder: page } = {
  pagebuilder: {
    lastID: 0,
    alignH: 'left',
    alignV: 'top',
    colSpace: 0,
    margin: 0,
    padding: 0,
    rounded: 0,
    colCount: 1,
    elements: [],
    activeIndex: 0,
  },
}

const pagebuilderReducer = createReducer(initialState, builder => {
  builder
    .addCase(addElement, (state, action) => {
      console.log(action)
      if (!state.pagebuilder.elements.some(el => el.id == action.payload.id)) {
        console.log('inside action')

        state.pagebuilder.elements.push(action.payload)
        state.pagebuilder.lastID += 1
      }
    })
    .addCase(removeElement, (state, action) => {
      state.pagebuilder.elements.splice(action.payload, 1)
    })
    .addCase(updateElement, (state, action) => {
      state.pagebuilder.elements[state.pagebuilder.activeIndex].settings[
        action.payload.index
      ] = action.payload.ele
    })
    .addCase(setActiveElement, (state, action) => {
      state.pagebuilder.activeIndex = action.payload
    })
})

const store = configureStore({
  reducer: pagebuilderReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(syncMiddleware),
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export { addElement, removeElement, updateElement }
