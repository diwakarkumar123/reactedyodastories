import React from 'react';
class Header extends React.Component{

  render(){
    return(
    <div>
          <header >
            <div class="navbar">
              <a>
                <div class="logo">
                EDYODA
                </div>
              <p class="logo-sub">Stories</p>
              </a>
              <div class="nav-bar-sub">
                <ul class="list">
                  
                  <li class="list-item">Explore Categories
                    
                  
                  </li>
                </ul>
                <ul class="list-sub">
                  
                  <li class="sublist-info">
                   <p> EdYoda is free learning and  knowledge.
                     <br></br>sharing platform for techies</p>
                    
                  </li>
                  <div class="sublistbtn">
                    <button class="sublist-btn">
                        Go To Main Website
                   </button>
                </div>

                </ul>
                 
              </div>
            </div>
            </header>
        
           </div>
    )
  }

}


export default Header;
