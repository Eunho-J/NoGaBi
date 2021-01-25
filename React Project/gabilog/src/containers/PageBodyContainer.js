//헤더의 메뉴 클릭 여부에 따라 바디의 props 중 menuClicked에 dispatch 해주는 Body Container
import React from 'react';
import { connect } from 'react-redux';
import PageBody from '../components/mainframe/functional/PageBody';

const PageBodyContainer = ({menuClicked}) => {
    return (
        <PageBody menuClicked={menuClicked}/>
    );
};

const mapStateToProps = state => ({
    menuClicked: state.menuClick.menuClicked
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageBodyContainer);