import React, { Component } from 'react';
import '../css/Gabilog.css'
import PageHeaderContainer from '../../../containers/PageHeaderContainer';
import PageBodyContainer from '../../../containers/PageBodyContainer';
    
class Gabilog extends Component {
    
    render() {
        return (
            <div className="Gabilog">
                <PageHeaderContainer/>
                <PageBodyContainer/>
            </div>
        )
    }
}

export default Gabilog;