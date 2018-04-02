import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducer"

import "./reset.css"
import Layout from "./layout"
import registerServiceWorker from "./registerServiceWorker"

const store = window.store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>, 
    document.getElementById("root")
)

registerServiceWorker()
