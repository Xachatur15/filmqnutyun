iimport React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Single from './Pages/Single';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Leiaute/>}>
        <Route index element={<App />}/>
        <Route path="/single/:id" element={<Single/>} />  
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

