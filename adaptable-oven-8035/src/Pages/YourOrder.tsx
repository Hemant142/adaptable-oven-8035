import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ProductImg from "../product-image/ProductImg.png";
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
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { SingleUserFetch } from "../Redux/AdminReducer/action";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function YourOrder() {
  // const { id } = useParams();

  const single = useSelector((state: any) => state.data.singleUser);
  const isload = useSelector((state: any) => state.data.singleuserLoad);
  const id = useSelector((store: any) => store.authReducer.ActiveUser.id);
  // const name = useSelector((store: any) => store.authReducer.ActiveUser.name);

  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    dispatch(SingleUserFetch(id));
  }, []);

  let { name, email, password, addToCart, orderPlaced, address } = single;
  console.log(address[address.length - 1].house_no, "address");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleHover = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Navbar />
      <img
        src={
          "https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?cs=srgb&dl=pexels-dima-valkov-3266700.jpg&fm=jpg"
        }
        alt=""
        style={{ width: "100%", height: "400px", objectFit: "fill" }}
      />

      {isload ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Container maxW={"100%"} style={{ margin: "0 auto" }}>
          <HStack spacing="24px">
            {/* <==============================================OrderDetails===============================================> */}
            <Card
              width={"50%"}
              style={{ backgroundColor: "#d2f8d7", width: "100%" }}
            >
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
                      <div
                        style={{
                          // display: "flex",
                          // gap: "10px",
                          backgroundColor: "#b2b6b7",
                          // justifyContent:"space-evenly"
                          borderRadius: "15px",
                        }}
                      >
                        {/* <============================================Top Bar of Order Placed, Total && SHIP================>*/}
                        <div
                          style={{
                            marginLeft: "10px",
                            marginTop: "10px",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            <p>ORDER PLACED</p>
                            {el.orderDate}
                          </div>
                          <div
                            style={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            <p>TOTAL</p>
                            <p>₹{el.price}</p>
                          </div>

                          {/* <==========================================SHIP========================================================>                           */}
                          <div
                            style={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            <p>SHIP TO </p>
                            <p>
                              <button
                                className="name_address"
                                onMouseEnter={handleHover}
                                // onMouseLeave={handleClose}
                                title={
                                  isHovered
                                    ? `${address.house_no}/${address.area} ${address.town}`
                                    : ""
                                }
                              >
                                {name} <ChevronDownIcon />
                              </button>
                              <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                  <ModalHeader>{name}</ModalHeader>
                                  <ModalCloseButton />
                                  <ModalBody>
                                    {/* <Lorem count={2} /> */}
                                    {`${address[address.length - 1].house_no}/${
                                      address[address.length - 1].area
                                    } ${address[address.length - 1].town},${
                                      address[address.length - 1].pincod
                                    }, India `}
                                  </ModalBody>
                                </ModalContent>
                              </Modal>
                            </p>
                          </div>
                        </div>

                        {/* <============================================END=====================================================>*/}

                        <br />

                        {/* <================================================Lower MAin DIV=========================================>                        */}
                        <div
                          key={el.id}
                          style={{
                            display: "flex",
                            gap: "10px",
                            backgroundColor: "#ffffff",
                            // justifyContent:"space-evenly"
                          }}
                        >
                          <div style={{ border: "2px solid red" }}>
                            <img src={el.avatar} alt="" width={"150px"} />
                          </div>
                          <hr />
                          <div
                            style={{
                              border: "2px solid blue",
                              width: "30%",
                              padding: "20px",
                            }}
                          >
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
                           
                          </div>
                        </div>
                        {/* <=======================================================Lower MAin DIV ENds here=========================> */}
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
      )}
    </div>
  );
}
