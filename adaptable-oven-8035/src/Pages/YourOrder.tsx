import React from 'react'
import Navbar from '../Components/Navbar'
import ProductImg from '../product-image/ProductImg.png'
// import React from "react";
// import Navbar from "./AdminNavbar";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { UserObjectNew } from "../constrain";
import {
  Container,
  HStack,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { Card, CardBody } from "@chakra-ui/card";
import { Avatar, Button, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { SingleUserFetch } from "../Redux/AdminReducer/action";
export default function YourOrder() {
  const { id } = useParams();

  const single = useSelector((state: any) => state.data.singleUser);
  const isload = useSelector((state: any) => state.data.singleuserLoad);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(SingleUserFetch(id));
  }, []);

  let { name, email, password, addToCart, orderPlaced, address } = single;
  console.log(orderPlaced, "address");
  // let add;
  //  if(address){
  //   add=address
  //  }

  //  console.log(typeof(add),"assdd");
  const handleDelete = () => {
    
  };
  return (
    <div>
      <Navbar/>
      <img src={'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?cs=srgb&dl=pexels-dima-valkov-3266700.jpg&fm=jpg'} alt="" style={{width:"100%",height:"400px",objectFit:"fill" }} />
    
      {/* {isload ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : ( */}
        <Container maxW={"100%"} style={{ margin: "0 auto" }}>
         

          <HStack spacing="24px">

{/* <==============================================OrderDetails===============================================> */}
            <Card width={"50%"} style={{ backgroundColor: "#d2f8d7", width:"100%" }}>
              <CardBody>
                <Heading as="h4" size="md">
                  {/* Order Details */}
                </Heading>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                   
                  }}
                >
                  {orderPlaced && orderPlaced.length > 0 ? (
                    orderPlaced.map((el: any) => (
                      <div  style={{
                        // display: "flex",
                        // gap: "10px",
                        backgroundColor: "#b2b6b7",
                        // justifyContent:"space-evenly"
                        borderRadius:"15px"
                      }}>
                        <div style={{marginLeft:"10px", marginTop:"10px", display:"flex" , justifyContent:"space-between"}}>
                        <div>
                            <p>Order Placed:</p> 
                            <p>12/12/12</p>
                          </div>
                          <div>
                            <p>Total</p> 
                            <p>₹{el.price}</p>
                          </div>
                          <div>
                            <p>Order Placed:</p> 
                            {/* <p>12/12/12</p> */}
                          </div>
                        </div>
                        <br />
                      <div
                        key={el.id}
                        style={{
                          display: "flex",
                          gap: "10px",
                          backgroundColor: "#ffffff",
                          // justifyContent:"space-evenly"
                        
                        }}
                      >
                        <div style={{border:"2px solid red"}}>
                          <img src={el.avatar} alt="" width={"150px"} />
                        </div>
                        <hr />
                        <div style={{border:"2px solid blue", width:"30%", padding:"20px"}}>
                          <b>{el.name}</b>
                          <p>
                            <b>Price:</b> {el.price}
                          </p>
                          <p>
                            <b>Category:</b> {el.category}
                          </p>
                          <p>
                            <b>About:</b> {el.about}
                          </p>
                          {el.info && (
                            <p>
                              <b>Info:</b> {el.info}
                            </p>
                          )}
                          <p>
                            <b>Date:</b>
                          </p>
                        </div>
                        {/* <div style={{border:"2px solid green", marginLeft:"40%"}}>
                          <Button
                            colorScheme="red"
                            marginTop={"20px"}
                            onClick={handleDelete}
                          >
                            Order Delivered{" "}
                          </Button>
                        </div> */}
                      </div>
                      </div>
                    ))
                  ) : (
                    <p>No items in the cart.</p>
                  )}
                </div>
              </CardBody>
            </Card>
          </HStack>
        </Container>
      
    </div>
  )
}
