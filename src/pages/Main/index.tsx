import React, { Component } from 'react';
import { Header } from '../../layers/Header';

export class Main extends Component {
    constructor(props: {}) {
        super(props);
    }

    render () {
        return (
            <div className="Main">
                <Header />
            </div>
        );
    }
}