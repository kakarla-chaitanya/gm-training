import { useRef, useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Form from './components/form';
export default function App(){
  const formRef = useRef(null);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // NEW

  const handleEdit = (index) => {
    setEditIndex(index);
    formRef.current.style.visibility = 'visible';
  };

  const handleDelete = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className='app'>
      <Header />
      <Content data={data} onEdit={handleEdit} onDelete={handleDelete} />
      <Footer formRef={formRef} />
      <Form 
        setData={setData} 
        formRef={formRef} 
        data={data} 
        editIndex={editIndex} 
        setEditIndex={setEditIndex} 
      />
    </div>
  );
}

// import { createContext, useState } from 'react';
// import './App.css';
// import Form from './components/form';
// import Card from './components/card';

// const ThemeContext=createContext(null);
// const DataContext=createContext(null);

// function App() {
//   const [theme,setTheme]=useState('light');
//   const [data,setData]=useState({isData:false});
//   return (
//     <ThemeContext value={theme}>
//     <DataContext value={{data:data,setData:setData}} >
//       <div className={`app app-${theme}`}>
//         <div >
//           <input type='checkbox' checked={theme==="dark"} onClick={(e)=>{
//             if(e.target.checked){
//               setTheme("dark");
//             }else{
//               setTheme("light");
//             }
//           }}/>
//           Dark Mode
//         </div>
//         <Form />
//         {data.isData && <Card />}
//       </div>
//     </DataContext>
//     </ThemeContext>
//   );
// }

// export default App;

// export {ThemeContext,DataContext};
