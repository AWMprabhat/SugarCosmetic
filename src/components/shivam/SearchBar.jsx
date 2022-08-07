import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';
// import { MdOutlineSort,MdArrowDownward,MdArrowUpward } from "react-icons/md";

const SearchBar = ({setShowSearchResult, setSearchResult}) => {
  const [products, setProducts] = useState([]);
  const [record, setRecord] = useState("");

  const showRecords = async () => {
    axios.get("http://localhost:8080/products")
      .then(r => {
        setProducts(r.data);
      });
  }
  useEffect(() => {
    showRecords();
  }, []);

  const searchRecords = () => {
    const data = products.filter((value) => {
      return value.ProductName.toLowerCase().includes(record.toLowerCase());
    });
    // axios.get(`http://localhost:8080/products/?MovieName=${record}`)
    //   .then(r => {  });
    setShowSearchResult(true);
    setSearchResult(data.slice(0,20));
    setRecord("")
  }

  return (
    <>
      <div>
        <input type="text" placeholder='   Try "Liquid Lipstick"' value={record} onChange={(e) => setRecord(e.target.value)} className={styles.input} />
        <button onClick={searchRecords} className={styles.btn}>Search</button>

     {/* <select>
      <option value="">  sort </option>
     <option value="">Price - High to Low </option>
     <option value="">Price - Low to High</option>
     </select> */}
     {/* <MdOutlineSort/>
     <MdArrowDownward/>
     <MdArrowUpward/> */}
     
      </div>

     
    </>
  );
}

export default SearchBar