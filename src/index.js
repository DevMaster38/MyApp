
/*
const MyForm=()=>{
        const [name,setName]= useState(' ');
        const [age,setAge]=useState();
        const onChangeHandler= (event)=>{
                setName(event.target.value);
        };
        const onAgeChange= (event)=>{
                console.log(event.target.value);
                setAge=(event.target.value );
        };
        const onSubmitHandler=(event)=>{
                event.preventDefault();
                alert('The name you entered was $name  and the age is $age');
        };
        return(
                <>
                <form onSubmit={onSubmitHandler}>
                        <label>Enter your name: </label>
                <input type="text" value={name} onChange={onChangeHandler}/>
                <br/>
                <label>Enter your age</label>
                <input type='number' value={age} onChange={onAgeChange}></input>
                <br/>
                <input type="submit"></input>
                </form>
                </>
        );
};
        ReactDOM.render(<MyForm/>,document.getElementById('root'));
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contacts from './pages/Contacts';
import Nopage from './pages/Nopage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/*' element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));