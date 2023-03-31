import { combineReducers } from '@reduxjs/toolkit'

import activePage from './activePage'
import balloons from './balloons'
import prizes from './prizes'

export default combineReducers({
  activePage,
  balloons,
  prizes,
})
