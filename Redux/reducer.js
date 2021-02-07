const initialState = {
    loggedIn: false, 
    token: null, 
    screen: 'home',
    userData: {
        userName: "",
        password: "",
        activities: [{name: "initial", wins: "2", losses: "2", selfRating: "6"}]
     }
    }

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN':
            return ({
                ...state, 
                loggedIn: true,
                token: "4ADB8",
                userData: {                    
                    userName: action.data.userName,
                    password: action.data.password,
                    activities: [...state.userData.activities]
                },
                screen: 'landing'
            })
        case 'SIGNUP':
            return ({
                ...state, 
                loggedIn: true,
                token: "4ADB8",
                userData: {
                    ...state.userData,
                    userName: action.data.userName,
                    password: action.data.password
                },
                screen: 'configureUser'
            })
        case 'LOGOUT':
            return ({
                loggedIn: false, 
                token: null, 
                screen: 'home',
                userData: {
                    userName: "",
                    password: "",
                    activities: [{name: "initial", wins: "2", losses: "2", selfRating: "6"}]
                    }
                })
        case 'CHANGE_SCREEN':
            const newScreen = action.data.screen; 
            
            if (state.loggedIn === true) {
                return ({...state, 
                    screen: newScreen,
                    userData: {
                        ...state.userData,
                        activities: [...state.userData.activities]
                    }})
            } else {
                if (newScreen === 'login' || newScreen === 'signup') {
                    return ({...state, 
                        screen: newScreen,
                        userData: {
                            ...state.userData,
                            activities: [...state.userData.activities]
                    }})
                } else {
                    return ({...state, 
                        screen: 'home',
                        userData: {
                            ...state.userData,
                            activities: [...state.userData.activities]
                    }})
                }
            }
        case 'ADD_ACTIVITY': 
            return(
                {...state, 
                    userData: {...state.userData, 
                        activities: [                                 
                            {
                                name: action.data.activity, 
                                selfRating: action.data.selfRating,
                                wins: "0",
                                losses: "0"
                            }
                        ]
                    }
                }
            )
                
        default:
            return state 
    } 
}

