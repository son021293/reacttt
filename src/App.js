import React, {Component} from 'react';
import {Home} from "./js/home/Home";
import {Person} from "./js/person/Person";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/person/:username" component={Person} />
                </div>
            </Router>
        );
    }
}

export default App;
