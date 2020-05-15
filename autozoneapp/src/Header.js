import React from 'react';
import './Header.css';


function Header(){
    return(
        <div className="headercompo">
            <a target="_blank" href="Autozonelogo.jpg">
            <img src={require('./images/Autozonelogo.jpg')} alt="AutoZone Logo"></img>
            </a>

            <address id= "adrsTag">4394 SUMMER AVE MEMPHIS,<br></br>
             TN 38122 (901) 761-0514<br></br>        
                 <span class= "strongclass">CLOSED Open at 7:30 AM</span></address>
        </div>

    )
}

export default Header;