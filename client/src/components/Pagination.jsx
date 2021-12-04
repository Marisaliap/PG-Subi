import React from "react";

export default function Pagination ({ routesPerPage, allRoutes, pagedTotal}) {
    const pageNumber = [];
    const paginate = Math.ceil (allRoutes(routesPerPage));

    for (let i= 1; i <= paginate; i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul> 
                { pageNumber?.map(num => (
                    <div key={num}>
                        <li key={num}> 
                        <a onClick={ () => pagedTotal(num)}>{num}</a>
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    )
}