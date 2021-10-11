import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Template from "./Template";
import Contact from './Contact';
import Records from './Records';
import About from './About';
function Header(){
    return (
    <>  <Router><header id="header" className="header fixed-top">
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                        <a href="index.html" className="logo d-flex align-items-center">
                            <img src="assets/img/logo.png" alt="" />
                            <span>FlexStart</span>
                        </a>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><Link to={'/home'} className="nav-link">Home</Link></li>
                                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                                <li><Link to={'/about'} className="nav-link">About</Link></li>
                                <li><Link to={'/records'} className="nav-link">Records</Link></li>
                                <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                                <li><a className="nav-link" href="blog.html">Blog</a></li>
                                <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                    <ul>
                                        <li><a href="#">Drop Down 1</a></li>
                                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                            <ul>
                                                <li><a href="#">Deep Drop Down 1</a></li>
                                                <li><a href="#">Deep Drop Down 2</a></li>
                                                <li><a href="#">Deep Drop Down 3</a></li>
                                                <li><a href="#">Deep Drop Down 4</a></li>
                                                <li><a href="#">Deep Drop Down 5</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Drop Down 2</a></li>
                                        <li><a href="#">Drop Down 3</a></li>
                                        <li><a href="#">Drop Down 4</a></li>
                                    </ul>
                                </li>
                                <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                    </div>
                </header>
            <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/home' component={Template} />
                <Route path='/about' component={About} />
                <Route path='/records'>
                    <Records id={1} title="Good Day" rating={{ rate:45, count:56}} image="www.google.com" price={43} category="Hi there" description="Greeting" />
                </Route>
            </Switch>
                </Router>
                
            </>);
}
export default Header;