import React from 'react';
import '../Stylesheet/LandingNavbar.css';
import Logo from '../media/Logo.svg';
import { Link } from "react-router-dom";
const LandingNavbar = () => {
    return ( 
        <div className='LPNavMain'>
            <Link to ='/' className='Links'>
                <div className='LPNavlogo'>
                    <img src={Logo}/>
                    <span>FOOTBALL ANALYSIS</span>
                </div>
            </Link>
            <div className='LPNavLinks'>
                
                <Link to='/'className='box'><span>ABSTRACT</span></Link>
                <Link to='/Architecture'className='box'><span>DWH ARCHITECURE</span></Link>
                

                <Link to='/Mapping' className='box'><span>MAPPINGS</span></Link>
                <Link to='/Workflow'className='box'><span>WORKFLOWS</span></Link>
                <Link to='/Reports'className='box' ><span>REPORTS</span></Link>
            </div>
            
        </div>
     );
}
 
export default LandingNavbar;
