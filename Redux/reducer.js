const initialState = {
    loggedIn: false, 
    token: null, 
    screen: 'home',
    userData: {
        userName: "",
        password: "",
        location: 'example city',
        activities: [{name: "initial", wins: "0", losses: "0", selfRating: "0", id: "1"}],
        games: [{activity: "initial", date: "2/2/22", time: "5:00 pm", id: "1"}]
     }
    }

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN':
            return ({
                ...state, 
                loggedIn: true,
                token: "4ADB8",
                screen: 'landing',
                userData: { 
                    ...state.userData,                   
                    userName: action.data.userName,
                    password: action.data.password                   
                }                
            })
        case 'SIGNUP':
            return ({
                ...state, 
                loggedIn: true,
                token: "4ADB8",
                screen: 'configureUser',
                userData: {                    
                    userName: action.data.userName,
                    password: action.data.password,
                    ...state.userData
                }                
            })
        case 'LOGOUT':
            return (initialState)
        case 'CHANGE_SCREEN':
            const newScreen = action.data.screen; 
            
            if (state.loggedIn === true) {
                return ({
                    ...state, 
                    screen: newScreen
                    })
            } else {
                return ({
                    ...state, 
                    screen: 'home'
                })
            }            
        case 'ADD_ACTIVITY': 
            return(
                {
                    ...state, 
                    userData: {
                        ...state.userData, 
                        activities: [ 
                            ...state.userData.activities,                                
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
        case 'ADD_GAME':
            return ({
                ...state, 
                screen: 'landing',                
                userData: {
                    ...state.userData,
                    games: [
                        ...state.userData.games,
                        action.data.gameData
                    ]
                }                
            })
                
        default:
            return state 
    } 
}

