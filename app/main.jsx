'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './Routes';

import store from './store'


render (
  <Provider store={store}>
    {/* <Home /> */}
    {/* <Root/> */}
    <Routes />
  </Provider>,
  document.getElementById('main')
)
