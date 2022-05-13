import { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from "../types";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
    // actions: load, register, login, logout (user)
    const loadUser = async () => {
        // @todo - load token into gloabl headers
        try {
            const res = await axios.get("/api/auth");
            dispatch({ type: USER_LOADED, payload: res.data });

        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    };

    const login = () => console.log( "login");
    const logout = () => console.log( "logout");
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    const register = async formData => {
        const config = { headers : { "Content-type": "application/json"} }

        try {
            const res = await axios.post("/api/users", formData, config);
            dispatch ({ type: REGISTER_SUCCESS, payload: res.data });

        } catch (err) {
            dispatch ({ type: REGISTER_FAIL, payload: err.response.data.msg });
        };


    }
    return (
        <AuthContext.Provider value={{ token: state.token, isAuthenticated: state.isAuthenticated, loading: state.loading, user: state.user, error: state.error, login, logout, loadUser,clearErrors, register }}>
            { props.children }
        </AuthContext.Provider>
    );
};

export default AuthState;