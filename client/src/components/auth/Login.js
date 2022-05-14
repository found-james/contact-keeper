import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";


function Login() {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    let navigate = useNavigate();
    
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    const [user, setUser] = useState({
    
        email: "",
        password: ""
    });

    const { email, password} = user;

    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        if (email === "" || password === ""){
            setAlert("Please enter all fields", "danger");
        } else {
            login({ email, password });
        }
    }
    useEffect(() => {
        if (isAuthenticated){
            navigate("/");
            
        }

        if (error === "user already exists"){
            setAlert(error, "danger");
            clearErrors();
        }
        // eslint-disable-next-line 
    }, [error, isAuthenticated]);

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={ onSubmit }>
            
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                
                <button className="btn btn-primary btn-block">Login</button>
            </form>
        </div>
    );
};

export default Login;