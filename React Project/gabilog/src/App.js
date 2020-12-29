import './App.css';
import menuIco from './png/menuIco.png';
import adminIco from './png/adminIco.png';

var onClickAdmin = () => console.log('admin btn');
var onClickMenu = () => console.log('menu btn');

function App() {
  return (
    <div className="Gabilog">
      <header className="header">
        <div className="header-left">
          <img className="header-left-menu" onClick={onClickMenu} src={menuIco} alt='MENU'></img>
          <text className="header-left-title">Gabilog</text>
          <div className="header-left-pageIndicator">홈</div>
        </div>
        <div className="header-middle"></div>
        <div className="header-right">
          <img className="header-right-admin" onClick={onClickAdmin} alt='Admin' src={adminIco}></img>
        </div>
      </header>
      <div className="body">
        <div className="body-index">
            {/* TODO */}
        </div>
        <div className="body-text">

        </div>
      </div>
    </div>
  );
}


export default App;