export const login = (userName, password) => ({
    type: "LOGIN", 
    data: {userName, password}
});

    
export const logout = () => ({
    type: "LOGOUT"
});


