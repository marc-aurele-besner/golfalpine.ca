import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Navigation from './Components/Navigation'
import Footer from './Components/Footer'

import Accueil from './Pages/Accueil'
import Parcours from './Pages/Parcours'
import Tarifs from './Pages/Tarifs'
import PasseDeSaison from './Pages/PasseDeSaison'
import Services from './Pages/Services'
import NousContacter from './Pages/NousContacter'

import Page404 from './Pages/Page404'

// Covid-19
import Covid from './Pages/Covid'

import history from './routerHistory'
import './styles.css'

const App = () => {
    return (
        <div>
            <HelmetProvider>
                <Navigation />

                <Router history={history}>
                    <Switch>
                        <Route path="/" exact>
                            <Accueil />
                        </Route>
                        <Route path="/parcours">
                            <Parcours />
                        </Route>
                        <Route path="/tarifs">
                            <Tarifs />
                        </Route>
                        <Route path="/passeDeSaison">
                            <PasseDeSaison />
                        </Route>
                        <Route path="/services">
                            <Services />
                        </Route>
                        <Route path="/nousContacter">
                            <NousContacter />
                        </Route>

                        
                        <Route path="/index.php">
                            <Redirect to="/" />
                        </Route>
                        <Route path="/index.php/parcours/">
                            <Redirect to="/parcours" />
                        </Route>
                        <Route path="/index.php/tarifs/">
                            <Redirect to="/tarifs" />
                        </Route>
                        <Route path="/index.php/membres/">
                            <Redirect to="/passeDeSaison" />
                        </Route>
                        <Route path="/index.php/services/">
                            <Redirect to="/services" />
                        </Route>
                        <Route path="/index.php/nous-contacter/">
                            <Redirect to="/nousContacter" />
                        </Route>

                        {/* Covid-19 */}
                        
                        <Route path="/covid">
                            <Covid />
                        </Route>

                        <Page404 />
                    </Switch>
                </Router>
            </HelmetProvider>

            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
