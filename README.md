Description: This is an app for everyone who wants to compete or enjoy activities with others of similar ability.
Tech: React, React Native, Redux

To Do:

- Create an edit profile component

- Add functionality to the header menu button and home button

-create first draft of all components

-Configure User form - make form reactive, additional input fields will appear after submitting one input

-connect to backend api

store structure:
{
loggedin: false,
token: null,
screen: home
userData: {
userName: "",
password: "",
activities: [
{ name: "basketball", wins: "2", losses: "2", selfRating: "6"},
{name: "hiking", wins: "1", losses: "0", selfRating: "4"}
]
}
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
