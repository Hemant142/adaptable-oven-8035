import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Styles from "../Components/Panel.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'


const Panel = () => {
  
  const [searchParams, setSearchParams] = useSearchParams()
 
  const initialBrand = searchParams.getAll("brand");
  const initalCategory = searchParams.getAll("category");
  const initalOrder = searchParams.get("order");
  const initalSearch=searchParams.getAll("search")

  const [brand, setBrand] = useState(initialBrand|| []);
  const [order, setOrder] = useState(initalOrder || "");
  const [category,setCategory]=useState(initalCategory || []);
  const [search,setSearch]=useState("")
  const{name}:any=useParams()
 console.log(name,"NAme")

// console.log(order,"Category")
  useEffect(() => {
   
    const params:any = {
      category,
      brand,
      
      order,
    };
 if(search){
  params.search=search
 }

    setSearchParams(params);
  }, [category, brand, order,search]);
console.log(category,"params for panel")
  const handleCategory = (e:any):void => {
    let { value } = e.target;
    // value=name
    

    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
   setCategory(name)
      setCategory(newCategory);
   
   
  
  };

  return (
    <DIV >
     <div className={Styles.panel}>
     {/* <label> */}
            <input
              type="checkbox"
              value={"Rings"}
              onChange={handleCategory}
              checked={category.includes("Rings")}
            />
            Rings
          {/* </label> */}
      <div className={Styles.rightpanel}></div>
     </div>
     <button>Clear Filter</button>
     <button>Apply Filter</button>
    </DIV>
  )
}

export default Panel
const DIV=styled.div`
 width:90%;
   height:95%;
    border:2px solid red;
   margin:auto;
`