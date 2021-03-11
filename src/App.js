import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Shared/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Media from './pages/Media';
import Members from './pages/Members';
import Footer from './components/Shared/Footer';
import './App.css';

const App = () => (
    <BrowserRouter>
        <Navigation />
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2' />
                <div className='col-lg-8 mt-3 my-3 mb-5 p-3 main-content'>
                    <Switch>
                        <Route path='/tcbb/' exact component={Home} />
                        <Route path='/tcbb/about' component={About} />
                        <Route path='/tcbb/members' component={Members} />
                        <Route path='/tcbb/events' component={Events} />
                        <Route path='/tcbb/media' component={Media} />
                        <Route path='/tcbb/contact' component={Contact} />
                    </Switch>
                </div>
                <div className='col-lg-2' />
            </div>
        </div>
        <Footer />
    </BrowserRouter>
)

export default App;
