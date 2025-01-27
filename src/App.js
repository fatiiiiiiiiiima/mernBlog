import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Header from './Header';
import{Routes,Route} from "react-router-dom"
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import CreatePost from "./pages/CreatePost";
// import PostPage from "./pages/PostPage";
// import EditPost from "./pages/EditPost";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Post />} />

      <Route path='/login' element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/create" element={<CreatePost />} /> */}
          {/* <Route path="/post/:id" element={<PostPage />} /> */}
          {/* <Route path="/edit/:id" element={<EditPost />} /> */}


          </Route>
       
  
    </Routes>
  
  );
}

export default App;
