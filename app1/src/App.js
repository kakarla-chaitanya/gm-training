import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Body from './components/body';
import Header from './components/header';
import Profile from './components/profile';
import ProfileView, { Address, BasicDetails, Other } from './components/profile_view';
import Footer from './components/footer';

function App() {
  let name="Welcome";
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      height:'100vh',
      gap:'10px',
    }}>
    <Header />
    <Body />
    {/* <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/body' element={<Body />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/profile_view/:id' element={<ProfileView/>}>
        <Route index  element={<BasicDetails/>} />
        <Route path='address' element={<Address/>} />
        <Route path='other' element={<Other/>} />
      </Route>
      <Route path='*' element={< Error/>} />
    </Routes> */}
    <Footer />
    </div>

  );
}

function Error(){
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"100vh",
    }}>
      Not Valid Link
    </div>
  );
}
export default App;
