import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../features/Main/Main'
import NotFound from './NotFound/NotFound'
import './App.scss'
import Layout from './Layout/Layout'
import Footer from '../components/Footer/Foot'
import Header from '../components/Header/Header'

function App() {
    return (
        <div>
            <h1>App</h1>
            <Layout header={<Header />} footer={<Footer />}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/oops-not-found" component={NotFound} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </div>
    )
}

export default App
