import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
const dispatch=useDispatch();
const history=useHistory();
const userName=useSelector(selectUserName);
const userPhoto=useSelector(selectUserPhoto);
};

 useEffect(()=>{
  auth.onAuthStateChanged(async(user)=>{
    if(user){
      setUser(user);
      history.push("./home");
    }
  })
 },[userName])
 const handleAuth=()=>{
  if(!userName){
    auth
    .signInWithPopup(provider)
    .then((result)=>{
      setUser(result.user);
    })
    .catch((error)=>{
      alert(error.message)
    })
  }
  else if(userName){
    auth
        .signOut()
        .then(()=>{
          dispatchEvent(setSignOutState());
          history.push("/")
        })
        .catch((err)=>alert(err.message))
  }
 };
 const setUser=(user)=>{
  dispatch(setUserLoginDetails({
    name:user.displayName,
    email:user.email,
    photo:user.photoURL
  })
  );
 };
