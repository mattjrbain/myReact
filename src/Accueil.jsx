import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import App from "./App";
import Search from "./Search";

class Accueil extends Component {
    render() {
        return (
            <Router>
                <div className="Main">
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">Mon App React d'une supéritude à peine croyable</Link>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                                data-target="#collapsibleNavId"
                                aria-controls="collapsibleNavId"
                                aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Accueil <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search">Recherche</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="container">

                    <Switch>
                        <Route path="/search">
                            <Search/>
                        </Route>

                        <Route path="/">
                            <App/>
                        </Route>


                    </Switch>
                </div>
            </Router>

        );
    }
}

export default Accueil;