import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Route} from "react-router-dom"

import Layout from "./pages/Layout"
import Todos from "./pages/Todos"
import Favorites from "./pages/Favolites"
import Settings from "./pages/Settings"


const app = document.getElementById('app')

ReactDOM.render(
    <BrowserRouter>
        <Layout>
            <Route path="/" component={Todos}></Route>
            <Route path="/favorites" component={Favorites}></Route>
            <Route path="/settings" component={Settings}></Route>
        </Layout>
    </BrowserRouter>
    ,app)