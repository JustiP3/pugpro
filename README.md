Description: This is an app for everyone who wants to compete or enjoy activities with others of similar ability.
Tech: React, React Native, Redux

To Do:
-implement redux

-create first draft of all components

-connect to backend api

function reducer(store, action) {
const updated = {...store}
//return updated store
}

store structure:
{
loggedin: false,
token: null,
screen: home
userData: {}
}

Actions:
{
type: "LOGIN",
data: {userName: "asdf", password: "asdf"}
}
{
type: "SIGNUP",
data: {userName: "asdf", password: "asdf"}
}
{
type: "LOGOUT"
}
{
type: "CHANGE_SCREEN",
data: {screen: "home"}
}
-login
-signup
-logout
-change screen
