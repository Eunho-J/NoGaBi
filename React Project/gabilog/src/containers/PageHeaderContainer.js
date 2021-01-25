//헤더의 props 중 menuClicked 와 onClickMenu를 dispatch하는 Header Container.
//menuClicked는 메뉴가 클릭된 시각적 상태를 보여주기 위한 Prop.
//onClickMenu는 PageBody에 인덱스를 보일지 여부와 menuClicked 를 바꾸어주기 위한 함수 prop.
import React from 'react';
import { connect } from 'react-redux';
import PageHeader from '../components/mainframe/functional/PageHeader';
import { menuClickedState } from '../modules/menuClick';

const PageHeaderContainer = ({menuClicked, onClickMenu}) => {
    return (
        <PageHeader menuClicked={menuClicked} onClickMenu={onClickMenu}/>
    );
};

const mapStateToProps = state => ({
    menuClicked: state.menuClick.menuClicked
});

const mapDispatchToProps = dispatch => ({
    onClickMenu: () => {
        dispatch(menuClickedState());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageHeaderContainer);