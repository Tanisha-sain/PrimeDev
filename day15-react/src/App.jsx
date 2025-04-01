import React, { useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState({});
  const [currPage, setCurrPage] = useState(1);
  
  const getData = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${10*(currPage-1)}`);
      const da = await res.json();
      setData(da);
      console.log(data);
    } catch (error) {
      console.log("Error:", error.message);
    } finally{
      console.log("Completed successfully")
    }

    // const pr1 = fetch("https://dummyjson.com/products");
    // pr1.then((res) => {
    //   const pr2 = res.json();
    //   pr2.then((data) => {
    //     console.log("Data:", data);
    //   })
    //   .catch((err) => {
    //     console.log("Error:", err.message);
    //   })
    // })
    // .catch((err) => {
    //   console.log("Error:", err.message)
    // })

    
    // pr1
    // .then((res) => {
    //   return res.json();
    // })
    // .then((data) => {
    //   console.log("Data:", data);
    // })
    // .catch((err) => {
    //   console.log("Error:", err.message);
    // })
  }
  // getData();

  useEffect(() => {
    getData();
  }, [currPage]);

  const totalPages = Math.ceil(data.total/data.limit);
  const pages = [];
  for(let i = 0; i<totalPages; i++){
    pages.push(i+1);
  }
  return (
    <>
      <h1>Hello</h1>
      {/* <button onClick={getData}>Show data</button> */}
      <hr />
      <select onChange={(e) => {setCurrPage(e.target.value)}}>
        {pages.map((pageNumber) => (
          <option value={pageNumber}>{pageNumber}</option>
        ))}
      </select>
      <div style={{margin: "10px 20px", display: "flex", flexWrap: "wrap", gap: "10px"}}>
      {data.products?.map((obj) => (<Card title={obj.title} price={obj.price} thumbnail={obj.thumbnail} />))}
      </div>
      
    </>
  )
}

export default App
// Document fragment
// Optional Chaining
// Conditional rendering
// Nullish coalescing