import { Middleware } from '@reduxjs/toolkit'
import { RootState } from '@/features/pagebuilder/store'
import { element } from '@/types/pagebuilder'
import axios from 'axios'

const syncMiddleware: Middleware =
  store => next => (action: { type: string }) => {
    const result = next(action) as element
    const state = store.getState() as RootState
    if (
      action.type == 'pagebuilder/update' ||
      action.type == 'pagebuilder/add' ||
      action.type == 'pagebuilder/remove'
    )
      axios.post('http://localhost:5174/page', state).catch(err => {
        console.error(err)
      })
    return result
  }

export default syncMiddleware
