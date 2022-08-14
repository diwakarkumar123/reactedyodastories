import './App.css';
import './style.css'
import React from 'react';
import Header from './header';
import Category from './category';
import Card from './card';
import Footer from './footer';
class App extends React.Component{

  render(){
    return(
      <>
      <Header/>
            <Category/>
        <Card/>
<Footer/>
      </>
    )
  }

}


export default App;
