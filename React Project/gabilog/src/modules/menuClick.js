//메뉴의 클릭 여부를 확인하여 인덱스 표시 여부를 결정하는 Redux Action
const MENUCLICKEDSTATE = 'menuClick/MENUCLICKEDSTATE';

export const menuClickedState = () => ({ type: MENUCLICKEDSTATE });

const initialState = {
    menuClicked: false
};

function menuClick(state = initialState, action) {
    switch (action.type) {
        case MENUCLICKEDSTATE:
            if (state.menuClicked)
                return { menuClicked: false };
            else
                return { menuClicked: true };
        default:
            return state;
    }
    
}

export default menuClick;