import { combineReducers } from '@reduxjs/toolkit'

import fruits from './fruits'
import activePage from './activePage'

export default combineReducers({
  fruits,
  activePage,
})
