import { useContext, useEffect, useState, createContext } from 'react';
import axios from 'axios'
import decode from "jwt-decode";

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext)
}

function AuthProvider({ children }) {
  const [ token, setToken ] = useState(localStorage.getItem('token') || null);
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ isAuth, setIsAuth ] = useState(false);
 console.log(currentUser);
  useEffect(() => {
    const tokenCookie = localStorage.getItem('token');
    if(tokenCookie){
      setToken(tokenCookie)
      const decoded = decode(tokenCookie)
      setCurrentUser(decoded)
      setIsAuth(true)
    }
    return tokenCookie;
  }, [])

  function register(email, password){
    const URL_REGISTER = 'http://localhost:8080/api/v1/users/register';
    return axios
      .post(URL_REGISTER, { email, password })
      .then(response => response.data.user)
      .catch(error => error.message);
  }

  function login(email, password){
    const URL_LOGIN = 'http://localhost:8080/api/v1/users/login';
    return axios
      .post(URL_LOGIN, { email, password })
      .then(response => {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        const decoded = decode(response.data.token)
        setCurrentUser(decoded)
        setIsAuth(true)
        return decoded;
      })
      .catch(error => error.message);
  }

  function logout(){
    localStorage.removeItem('token')
    setCurrentUser(null)
    setIsAuth(false)
  }

  function updateProfile(name, email, password, imgUrl){
    const URL_UPDATE = `http://localhost:8080/api/v1/users/${currentUser.id}`;
    return axios
      .put(URL_UPDATE, { name, email, password, imgUrl })
      .then(response => response.data.user)
      .catch(error => error.message);
  }


const value = {
  currentUser,
  register,
  login,
  logout,
  updateProfile,
  token
}

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider }
