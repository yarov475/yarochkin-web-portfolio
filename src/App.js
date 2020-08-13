import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import  {Route, BrowserRouter} from "react-router-dom";
import Main from "./Components/Main/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header/>

        <div>

        <Route path='/main'
    render={() => <Main/>}/>
    <Route path='/portfolio' render={() =>
        <Portfolio/>}/>
    <Route path='/contacts'
           render={() =>
               <Contacts/>}/>


</div>
</div>
</BrowserRouter>
  );
}

export default App;
