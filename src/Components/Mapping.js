import React from 'react';
import LandingNavbar from './LandingNavbar';
import "../Stylesheet/Mapping.css";
import source from "../media/Mappings/source_table.jpg"
import League from "../media/Mappings/League.jpg"
import Club from "../media/Mappings/club.jpg"
import Country from "../media/Mappings/country.jpg"
import Match from "../media/Mappings/matches.jpg"
import Player from "../media/Mappings/player.jpg"
import time from "../media/Mappings/time.jpg"
import player_fact from "../media/Mappings/player_fact.jpg"
import team_fact from "../media/Mappings/team_fact.jpg"
const Mapping= ( )=>{
    return (
        <div>
            <LandingNavbar/>
            <div className='Mapbody' >
                <div className='title'> Source tables mapping :</div>
                
                <div className='AboutImg'><img src={source}/></div>
            
                <div className='title'> Dimension tables mapping :-</div>
                <div className='subtitle'>League table :</div>
                <div className='AboutImg'><img src={League}/></div>
                <div className='subtitle'>Club table :</div>
                <div className='AboutImg'><img src={Club}/></div>
                <div className='subtitle'>Country table :</div>
                <div className='AboutImg'><img src={Country}/></div>
                <div className='subtitle'>Match table :</div>
                <div className='AboutImg'><img src={Match}/></div>
                <div className='subtitle'>Player table :</div>
                <div className='AboutImg'><img src={Player}/></div>
                <div className='subtitle'>Time table :</div>
                <div className='AboutImg'><img src={time}/></div>
                <div className='title'> Fact tables mapping :-</div>
                <div className='subtitle'>Player Fact table :</div>
                <div className='FactAboutImg'><img src={player_fact}/></div>
                <div className='subtitle'>Team Fact table :</div>
                <div className='FactAboutImg'><img src={team_fact}/></div>
            </div>
        </div>
    );
}
export default Mapping