import React from 'react';
import { useDispatch} from 'react-redux';
import { allRoutes} from '../actions';



export default NavBarFiltre = () => {
    const dispatch= useDispatch();
   
    
    const handleSelect = (e) => {
        dispatch(allRoutes(e.target.value));
     
    }

    var amenities =["petsAllowed","smokersAllowed","foodAllowed","twoMaxInTheBack,onlyWomen,kidsAllowed"]

return(
    <div>
         <div>
                <select  onChange={handleSelect} name="filter">
                    <option value="">Order By...</option>
                    <option value="time">Earliest Departure</option>
                    <option value="price">lowest Price</option>
                  
                </select>
            </div>
            <div >
                <select className={style.selects} onChange={handleSelect} name="filter">
                   {amenities.map(e=> <option value={e}>{e}</option>)}
                </select>
            </div>
    </div>
);
}