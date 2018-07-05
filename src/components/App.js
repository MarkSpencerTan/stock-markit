import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

import '../css/App.css';
import TopStocks from './TopStocks'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <TopStocks/>
                </Grid>
            </div>
        );
    }
}

export default App;
