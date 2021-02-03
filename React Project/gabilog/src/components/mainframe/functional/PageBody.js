import React from 'react';
import '../css/PageBody.css';

const PageBody = ({ menuClicked }) => {
  return (
    <div className="body">
      <div
        className="body-index"
        style={menuClicked ? {} : { display: 'none' }}
      >
        <ul className="body-index-h2">
          <li>
            <div className="pageIndicator-list">학업</div>
            <ul className="body-index-h3">
              <li>
                <div className="pageIndicator-list">예제입니당1</div>
              </li>
              <li>
                <div className="pageIndicator-list">예제입니당2</div>
              </li>
              <li>
                <div className="pageIndicator-list">예제입니당3</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="body-text"></div>
    </div>
  );
};

export default PageBody;
