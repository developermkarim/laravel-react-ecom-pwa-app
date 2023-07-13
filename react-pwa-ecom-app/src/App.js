import './App.css';
import axios from 'axios';
import  Button  from 'react-bootstrap/Button';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';


/* axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token'); */

function App() {
  return (
 <Fragment>
   <BrowserRouter>

   <AppRoutes/>

   </BrowserRouter>
 </Fragment>
   

  );
}

export default App;
