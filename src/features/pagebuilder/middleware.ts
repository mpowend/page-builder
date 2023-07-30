import { Middleware } from '@reduxjs/toolkit'
import { RootState } from '@/features/pagebuilder/store'
import { element } from '@/types/pagebuilder'
import axios from 'axios'

const syncMiddleware: Middleware = store => next => action => {
  const result = next(action) as element
  const state = store.getState() as RootState

  // Replace with your own sync code
  axios.post('http://localhost:3001/page', state).catch(err => {
    console.error(err)
  })
  return result
}

export default syncMiddleware
