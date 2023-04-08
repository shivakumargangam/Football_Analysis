import React from 'react';
import LandingNavbar from './LandingNavbar';
import "../Stylesheet/Architecture.css";
import team from "../media/architecture.png";
const Architecture = () => {
    return(
        <div>
        <LandingNavbar/>
        <div className='Mapbody' >
            <div className='title'> Dimension tabe Workflows :</div>

                <div className='ArchiImg'><img src={team}/></div>
                
    


                </div>
                </div>
                


    );
}
export default Architecture;