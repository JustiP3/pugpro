function reducer(state = {loggedin: false, token: null, screen: 'home', userData: {}}, action) {

    switch (action.type) {
        case 'LOGIN':
            return ({
                ...state, 
                loggedIn: true,
                token: "4ADB8",
                userData: {
                    userName: action.data.userName
                },
                screen: 'landing'
            })
        case 'SIGNUP':
            return ({
                ...state, 
                loggedIn: true,
                token: "4ADB8",
                userData: {
                    userName: action.data.userName
                },
                screen: 'configureUser'
            })
        case 'LOGOUT':
                return ({
                    ...state, 
                    loggedIn: false,
                    token: null,
                    userData: {},
                    screen: 'home'
                })
        case 'CHANGE_SCREEN':
                    const newScreen = action.data.screen; 
                    if (state.loggedIn === true) {
                        return ({...state, screen: newScreen})
                    } else {
                        if (newScreen === 'login' || newScreen === 'signup') {
                            return ({...state, screen: newScreen})
                        } else {
                            return ({...state, screen: 'home'})
                        }
                    }
        case 'SET_USERDATA':
                //need to set user data
                break;
        default:
                return state 
    } 
}

