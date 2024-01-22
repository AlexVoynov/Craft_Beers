import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginPage from "./components/LoginPage/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import UserPage from "./components/UserPage/UserPage";
import SearchPage from "./components/SearchPage/SearchPage";
import { ref, getDownloadURL } from "firebase/storage";
import { auth, storage } from "./helpers/firebaseConfig";

function App() {
  
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const [profilePhoto, setProfilePhoto] = useState<string>("/");

  const [newProfilePhoto, setNewProfilePhoto] = useState<File>();

  useEffect(() => {
    if (loggedIn && auth.currentUser) {
      const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
      getDownloadURL(storageRef).then((url) => {
        setProfilePhoto(url);
      });
    }
  }, [loggedIn, newProfilePhoto]);

  return (
    <div className="App">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar loggedIn={loggedIn} profilePhoto={profilePhoto} />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RegisterForm
                setNewProfilePhoto={setNewProfilePhoto}
                src={profilePhoto}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage
                setNewProfilePhoto={setNewProfilePhoto}
                src={profilePhoto}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/user"
            element={
              <UserPage
                setNewProfilePhoto={setNewProfilePhoto}
                src={profilePhoto}
                loggedIn={loggedIn}
              />
            }
          />
          <Route path="/search" element={<SearchPage loggedIn={loggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
