import { combineReducers } from '@reduxjs/toolkit'

import activePage from './activePage'
import balloons from './balloons'

export default combineReducers({
  activePage,
  balloons,
})
