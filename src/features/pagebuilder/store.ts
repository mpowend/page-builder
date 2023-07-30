import { configureStore } from '@reduxjs/toolkit'

const pagebuilderReducer = (
  action: { type: string; payload: { id: string } },
  state: object[] = []
) => {
  switch (action.type) {
    case 'pagebuilder/add':
      return [...state, action.payload]
    case 'pagebuilder/remove':
      return state.filter(item => item.id !== action.payload)
    case 'pagebuilder/update':
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          }
        }
        return item
      })
    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    pagebuilder: pagebuilderReducer,
  },
  preloadedState: {
    pagebuilder: [],
  },
})

export default store
