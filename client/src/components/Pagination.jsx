import React from "react";
import styles from "../styles/Paged.css"; 

export default function Pagination ({ routesPerPage, getRoutes, pagedTotal}) {
    const pageNumber = [];
    const paginate = Math.ceil (getRoutes/routesPerPage);
  
    for (let i= 1; i <= paginate; i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className={styles.paged}> 
                { pageNumber?.map(num => (
                    <div className={styles.listContainer} key={num}>
                        <li className={styles.number} key={num}> 
                        <a onClick={ () => pagedTotal(num)} className={styles.link}>{num}</a>
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    )
}