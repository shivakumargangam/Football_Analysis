import React from 'react';
import Football_match from '../media/football_match.jpg';
import '../Stylesheet/LandingBody.css';
import {Link} from 'react-router-dom';
const LandingBody = () => {
    return ( 
        <div className='LPbodyDiv'>
           <div className='LPTextdiv'>
               <div className='LPHeading'>
                   <b><span>ABSTRACT :-</span></b>
               </div>
               <div className='LPdesc'>
                
                   <span><br/>Football is a globally played team sport that heavily relies on teamwork, strategies, and game plans.<br/><br/> The effectiveness of these strategies and plans can be enhanced with good statistics and analysis, which require reliable reports.<br/><br/> This project aims to develop a comprehensive Analysis and Reporting System for Football, which generates various reports to analyze both club and individual player performance. <br/><br/>The generated reports include information on top performers, foul makers, and the club's win-loss ratio, among others. <br/><br/>The system collects data on various attributes such as country, goals scored, penalties, wins, positions, and leagues, with countries further divided into regions like Europe and South America for region-wise analysis.<br/><br/> This system provides a detailed understanding of the sport, enabling coaches, players, and analysts to optimize performance and achieve success on the field.
 </span>
               </div>
               
           </div>
           <div className='LPImagediv'>
               <img src={Football_match}/>
           </div>
        </div>
     );
}
 
export default LandingBody;