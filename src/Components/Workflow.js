import React from 'react';
import LandingNavbar from './LandingNavbar';
import "../Stylesheet/Workflow.css";
import dim_table from "../media/Mappings/Dimension tables workflow.jpg";
import fact_table from "../media/Mappings/Fact_tables Workflow.jpg"
const Workflow= ( )=>{
    return (

        <div>
            <LandingNavbar/>
            <div className='Mapbody' >
                <div className='title'> Dimension tabe Workflows :</div>
                
                <div className='AboutImg'><img src={dim_table}/></div>
                <div className='title'> Fact tabe Workflows :</div>
                
                <div className='AboutImg'><img src={fact_table}/></div>

            </div>


        </div>
    );
}
export default Workflow