import React from 'react';
import './popup.css';
import { Link } from 'react-router-dom';

const Popup = () => {
 
return(
    <div className=''>
        <Link to='/birthdays'> <button className='btn btn-primary'>Show Birthdays</button></Link>
        <Link to='/birthdays'> <button className='btn btn-primary'>Show Anniversary</button></Link>
    </div>
)

}
export default Popup