import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import type { page, element, attribute } from '@/types/pagebuilder'
import syncMiddleware from '@/features/pagebuilder/middleware'

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
const addElement = createAction('pagebuilder/add', (json: element) => ({
  payload: json,
}))
const removeElement = createAction('pagebuilder/remove', (index: number) => ({
  payload: index,
}))

const updateElement = createAction(
  'pagebuilder/update',
  (attrib: attribute, ele: string | number) => ({
    payload: { index: attrib, ele },
  })
)

const setActiveElement = createAction(
  'pagebuilder/setActive',
  (index: number) => ({
    payload: index,
  })
)
const updateElementOff = createAction(
  'pagebuilder/updateElementOff',
  (attrib: attribute, ele: string | number) => ({
    payload: { index: attrib, ele },
  })
)
const load = createAction(
  'pagebuilder/load',
  (json: { pagebuilder: page }) => ({
    payload: json,
  })
)

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
      state.pagebuilder.elements.forEach((el, index) => {
        if (el.id === action.payload) {
          state.pagebuilder.elements.splice(index, 1)
        }
      })
    })
    .addCase(updateElement, (state, action) => {
      state.pagebuilder.elements[state.pagebuilder.activeIndex].settings[
        action.payload.index
      ] = action.payload.ele
    })
    .addCase(setActiveElement, (state, action) => {
      state.pagebuilder.activeIndex = action.payload
    })
    .addCase(updateElementOff, (state, action) => {
      state.pagebuilder.elements[state.pagebuilder.activeIndex].settings[
        action.payload.index
      ] = action.payload.ele
    })
    .addCase(load, (state, action) => {
      console.log(action.payload)
      state.pagebuilder = action.payload.pagebuilder
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
export {
  addElement,
  removeElement,
  updateElement,
  setActiveElement,
  updateElementOff,
  load,
}
