import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Post from './Components/Post';
import Home from './Components/Home';
import AddPost from './Components/AddPost';
import AddStory from './Components/AddStory';
import ShowProfile from './Components/ShowProfile';
import SinglePost from './Components/SinglePost';
import EditProfile from './Components/EditProfile';
import Header from './Components/Header';
import ShowComments from './Components/ShowComments';
import Story from './Components/Story';
import SavedPosts from './Components/SavedPosts';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import defaultImage from "./Assets/Images/postDefault.png"

function App() {
  return (
    <>
      <Header isLoggedIn={true} />
      <Box sx={{ mt: 10 }} />  {/* margin between header and other components */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="addStory" element={<AddStory />} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="profile" element={<ShowProfile userPosts={[defaultImage, defaultImage, defaultImage, defaultImage]} isMe={true}/>} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="post" element={<Post />} />
          <Route path="story" element={<Story />} />
          <Route path="myComments" element={<ShowComments />} />
          <Route path="savedPosts" element={<SavedPosts />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
