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
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

