import { Link, useNavigate } from 'react-router-dom';
import Body from './body';
import ConditionalRendering from './conditional_rendering';
import Footer from './footer';
import Header from './header';
import UseState from './use_state';

export default function Home(){
    const navigate=useNavigate();
    return <div className='app'>
      {/* <Header/> */}
      <Link to="/body">body</Link>
      <button onClick={(e)=>{
        e.preventDefault();
        navigate("/body");
      }}>go to body</button>
      
      {/* <h3 className='header'>
        {name}
      </h3> */}
      {/* <Body />
      <Footer /> */}
      <UseState />
      <ConditionalRendering />
    </div>;
}