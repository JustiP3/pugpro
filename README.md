Description: This is an app for everyone who wants to compete or enjoy activities with others of similar ability.
Tech: React, React Native, Redux

To Do:

- Add a relavent form to Edit Profile Component

- Landing Header menu button should display a dropdown menu

- How to get location? Use that to populate userData

- How to access time? How to handle pastgames / upcoming games?

- create first draft of all components - other user's profile, create game, search/add friends

- Configure User form - make form reactive, additional input fields will appear after submitting one input

- connect to backend api

store structure:
{
loggedin: false,
token: null,
screen: home
userData: {
userName: "",
password: "",
location: "",
activities: [
{ name: "basketball", wins: "2", losses: "2", selfRating: "6"},
{name: "hiking", wins: "1", losses: "0", selfRating: "4"}
],
games: []
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
