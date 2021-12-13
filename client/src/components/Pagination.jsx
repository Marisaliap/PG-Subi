import React from "react";
/* import styles from "../styles/Paged.module.css";  */
import "../Sass/Styles/Pagination.scss";

export default function Pagination ({ routesPerPage, getRoutes, pagedTotal}) {
    const pageNumber = [];
    const paginate = Math.ceil (getRoutes/routesPerPage);
  
    for (let i= 1; i <= paginate; i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className="paged"> 
                { pageNumber?.map(num => (
                    <div className="listContainer" key={num}>
                        <li className="number" key={num}> 
                        <a onClick={ () => pagedTotal(num)} className="linkPagination">{num}</a>
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    )
}