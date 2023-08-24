import Styles from "../Pages/ProductPage.module.css"
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action';
import { styled } from 'styled-components';
import { Button } from '@chakra-ui/button';
import { SideBarJewelry } from '../Components/SideBarJewelry';
import { useParams, useSearchParams } from 'react-router-dom';
import { MdProductionQuantityLimits } from 'react-icons/md';
import banner from '../home-image/banner11.jpg';
import SideBarWatches from '../Components/SideBarWatches';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/Navbar';
import ProductImg from '../product-image/ProductImg.png'
import Footer from '../Components/Footer';
import Pagination from '../Components/Pegination';
const ProductPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const width  = window.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth;
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;
  
  // console.log(width, height,"hey");
  const [toggle,setToggle]=useState(false);
  const { name } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(products)
  let paramsObj = {};
  if (name == "Jewelry" || "Watches") {
    paramsObj = {
      params: {
        _limit: 12,
        _page: page,
        name: name,
        category: searchParams.getAll("category"),
        brand: searchParams.getAll("brand"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        q: searchParams.getAll("search"),
      },
    };
  } else {
    paramsObj = {

      params: {
        _limit: 12,
        _page: page,
        category: name,
        // category: searchParams.getAll("category"),
        brand: searchParams.getAll("brand"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        q: searchParams.getAll("search"),
      },
    };
  }

  let store = useSelector((store: any) => store.productReducer)
  console.log(store, "data")
  let { products, isError, isLoading, totalPages } = useSelector((store: any) => {
    return {
      products: store.productReducer.products,
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
      totalPages: store.productReducer.totalPages
    }
  }, shallowEqual);
  console.log(products)
  // if (name == "Jewelry" || "Watches") {
  //   products = products.filter((ele: any) => ele.name == name)
  // } else {
  //   products = products.filter((ele: any) => ele.category == name)
  // }
  // console.log(products)

  useEffect(() => {
    dispatch(getProducts(paramsObj))

  }, [searchParams, page])

  // const totalPages = Math.ceil(products.length / 12);
  // console.log(totalPages, "total page");

  return (
    <div>
      <Navbar />

      

      <img src={ProductImg} alt="" style={{width:"100%",height:"400px",objectFit:"fill" }} />
      {
        <div className={Styles.filterSection}>
          <button onClick={()=>setToggle(prev=>!prev)}>Filter by Products</button>
 {
      toggle&&name == "Watches" ? <div className={Styles.filterby}>
          <SideBarWatches />
        </div> : toggle&&<div className={Styles.filterby}>
          <SideBarJewelry />
        </div>}

        </div>
       }
      <div className={Styles.productsection}>
       
        {name == "Watches" ? <div className={Styles.sidebar}>

          <SideBarWatches />
        </div> : <div className={Styles.sidebar}>
          <SideBarJewelry />
        </div>}


        <div className={Styles.productlist}>
          {isError && <h1>Error Occurs</h1>}
          {isLoading && <h1>Loading...</h1>}
          {products.length > 0 &&
            products.map((ele: any) => (<ProductCard key={ele.id} {...ele} />
            ))}

        </div>


      </div>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      <div>
        <Footer />
      </div>

    </div>
  )
}


export default ProductPage
