import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import booksReducer from './modules/books/books-reducer'

const store = createStore(booksReducer,applyMiddleware(thunk))
window.sstore = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
