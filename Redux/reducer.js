function reducer(state, action) {
    if (action.type === 'LOGIN') {
        return ({
            ...state, 
            loggedIn: true,
            token: "4ADB8",
            userData: {
                userName: action.data.userName
            },
            screen: 'landing'
        })
    } else if (action.type === 'SIGNUP') {
        return ({
            ...state, 
            loggedIn: true,
            token: "4ADB8",
            userData: {
                userName: action.data.userName
            },
            screen: 'configureUser'
        })
    } else if (action.type === 'LOGOUT') {
        return ({
            ...state, 
            loggedIn: false,
            token: null,
            userData: {},
            screen: 'home'
        })
    } else if (action.type === 'CHANGE_SCREEN') {
        const newScreen = action.data.screen; 
        if (state.loggedIn === true) {
            return ({...state, screen: newScreen})
        } else {
            if (newScreen === '' || newScreen === 'signup') {
                return ({...state, screen: newScreen})
            } else {
                return ({...state, screen: 'home'})
            }
        }
    }  else if (action.type === 'SET_USERDATA') {
        // need to add userdata to state 
    } 
}

