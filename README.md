Description: This is an app for everyone who wants to compete or enjoy activities with others of similar ability.
Tech: React, React Native, Redux

To Do:

-create first draft of all components

-Configure User form - make form reactive, additional input fields will appear after submitting one input

-connect to backend api

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
