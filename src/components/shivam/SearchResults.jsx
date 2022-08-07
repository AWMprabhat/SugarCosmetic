import React from 'react';
import styles from './Search.module.css';

const SearchResults = ({ searchResult }) => {
// console.log("Search Result",searchResult);

    return (
        <div className={styles.container}>
            {searchResult.map((product, index) =>
            (
                <div key={index} >
                    <img src={product.Product_Img} alt="" />
                    <h5>{product.ProductName}</h5>
                    <p>Rs.{product.price}</p>
                    <p>{product.d_flex}{product.d_flex2}</p>
                    {/* <p>{product.href}</p> */}
                    <p className={styles.shade}>{product.btn}</p>
                </div>
            )
            )}
        </div>
    )
}

export default SearchResults
