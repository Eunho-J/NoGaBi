import React, { Component } from 'react';
import '../css/Gabilog.css'
import PageHeader from './PageHeader';

class Gabilog extends Component {
    render() {
        return (
            <div className="Gabilog">
                <PageHeader/>
                <div className="body">
                    <div className="body-index">
                    <ul className="body-index-h2">
                        <li>학업
                        <ul className="body-index-h3">
                            <li>예제입니당1</li>
                            <li>예제입니당2</li>
                            <li>예제입니당3</li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <div className="body-text">

                    </div>
                </div>
            </div>
        )
    }
}

export default Gabilog;