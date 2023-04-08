import React from 'react';
import LandingNavbar from './LandingNavbar';
import "../Stylesheet/Mapping.css";
import top_players from "../media/Top_players.jpg"
import WL_Ratio from "../media/WL_Ratio.jpg"
const Reports=  ( )=>{
    return (
        <div>
            <LandingNavbar/>
            <div className='Mapbody' >
                <div className='title'> Reports :</div>
                <div className='subtitle'>Top 10 Players :</div>
                <div className='AboutImg'><img src={top_players}/></div>
                <div className='subtitle'>(Win/Loss) Ratio by Club Name :</div>
                <div className='AboutImg'><img src={WL_Ratio}/></div>
            </div>
        </div>
    );
}
export default Reports;