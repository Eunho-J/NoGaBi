import React from 'react';
import '../css/PageHeader.css';
import menuIco from '../../../png/menuIco.png'
import adminIco from '../../../png/adminIco.png';

const PageHeader = ({menuClicked, onClickMenu}) => {
    var onClickAdmin = () => console.log('admin btn'); //header
    var onClickTitle = () => console.log('title btn'); //header

    return (
        <header className="header">
            <div className="header-left">
                <img className="header-left-menu" onClick={onClickMenu} src={menuIco} alt='MENU' style={{ background: menuClicked? 'rgba(143, 113, 58, 0.623)' : 'none' }}></img>
                <h1 className="header-left-title" onClick={onClickTitle}>Gabilog</h1>
                <div className="header-left-pageIndicator">
                    <div className="pageIndicator-list">홈</div>
                    <div className="pageIndicator-arrow">→</div>
                    <div className="pageIndicator-list">학업</div>
                    <div className="pageIndicator-arrow">→</div>
                    <div className="pageIndicator-list">예제입니당1</div>
                </div>
            </div>
            <div className="header-middle"></div>
            <div className="header-right">
                <img className="header-right-admin" onClick={onClickAdmin} alt='Admin' src={adminIco}></img>
            </div>
        </header>
    );
};



export default PageHeader;