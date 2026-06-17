import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GeneralContext = createContext();

const getLocalStorageItem = (key) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem(key);
  }
  return null;
};

const setLocalStorageItem = (key, value) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(key, value);
  }
};

const clearLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.clear();
  }
};

const GeneralContextProvider = ({children}) => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');

  const [productSearch, setProductSearch] = useState('');
  const [cartCount, setCartCount] = useState(0);

  axios.interceptors.request.use((config) => {
    const token = getLocalStorageItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  useEffect(()=>{
    fetchCartCount();
  }, []);

  const fetchCartCount = async () =>{
    const userId = getLocalStorageItem('userId');
    if(userId){
      try {
        const response = await axios.get('http://localhost:6001/api/cart/fetch-cart');
        setCartCount(response.data.filter(item=> item.userId === userId).length);
      } catch (err) {
        console.error("Cart fetch error:", err);
      }
    }
  }

  const handleSearch = () =>{
    navigate('#products-body');
  }

  // 🟢 LOGIN
// 🟢 LOGIN
const login = async () => {
  if (!email || !password) {
    alert("Email and password are required!");
    return;
  }

  try {
    // Trim email to avoid leading/trailing spaces
    const loginInputs = {
      email: email.trim(),
      password: password
    };

    console.log("Login payload sent:", loginInputs); // ✅ Debug: see what is sent

    const res = await axios.post('http://localhost:6001/api/users/login', loginInputs);

    console.log("Login response:", res.data); // ✅ Debug: see response from backend

    // Save user data + token
    setLocalStorageItem('token', res.data.token);
    setLocalStorageItem('userId', res.data._id);
    setLocalStorageItem('userType', res.data.usertype);
    setLocalStorageItem('username', res.data.username);
    setLocalStorageItem('email', res.data.email);

    if (res.data.usertype === 'customer') {
      navigate('/');
    } else if (res.data.usertype === 'admin') {
      navigate('/admin');
    }
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Login failed!!");
  }
};

  // 🟢 REGISTER
  const inputs = {username, email, usertype, password};
  const register = async () =>{
    try {
      const res = await axios.post('http://localhost:6001/api/users/register', inputs);

      // Save user data + token
      setLocalStorageItem('token', res.data.token);   // ✅ Save JWT
      setLocalStorageItem('userId', res.data._id);
      setLocalStorageItem('userType', res.data.usertype);
      setLocalStorageItem('username', res.data.username);
      setLocalStorageItem('email', res.data.email);

      if(res.data.usertype === 'customer'){
        navigate('/');
      } else if(res.data.usertype === 'admin'){
        navigate('/admin');
      }
    } catch (err) {
      alert("Registration failed!!");
      console.error(err.response?.data || err.message);
    }
  }

  // 🟢 LOGOUT
  const logout = () =>{
    clearLocalStorage();
    navigate('/');
  }

  return (
    <GeneralContext.Provider 
      value={{
        login, register, logout,
        username, setUsername,
        email, setEmail,
        password, setPassword,
        usertype, setUsertype,
        productSearch, setProductSearch,
        handleSearch,
        cartCount,
         setCartCount,       // ✅ Expose setter so components can update count
      fetchCartCount  
      }}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContextProvider;
