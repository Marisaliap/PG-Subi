import React from "react";
/* import styles from "../../styles/Paged.css"; */

export default function Paged({
  usersPerPage,
  usuariosRegistrados,
  pagedTotal,
}) {
  const pageNumber = [];
  const paged = Math.ceil(usuariosRegistrados(usersPerPage));

  for (let i = 1; i <= paged; i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul /* className={styles.paged} */>
        {pageNumber?.map((num) => (
          <div /* className={styles.listContainer} */ key={num}>
            <li /* className={styles.number} */ key={num}>
              <a onClick={() => pagedTotal(num)} /* className={styles.link} */>
                {num}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}
