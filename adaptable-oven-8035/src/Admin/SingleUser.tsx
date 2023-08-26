import React from "react";
import Navbar from "./AdminNavbar";
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

export const SingleUser = () => {
  const { id } = useParams();

  const single = useSelector((state: any) => state.data.singleUser);
  const isload = useSelector((state: any) => state.data.singleuserLoad);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SingleUserFetch(id));
  }, []);

  let { name, email, password, addToCart, orderPlaced, address } = single;
  console.log(single, "address");
  // let add;
  //  if(address){
  //   add=address
  //  }

  //  console.log(typeof(add),"assdd");
  const handleDelete = () => {
    
  };

  return (
    <div>
      <Navbar />

      {isload ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Container maxW={"90%"} style={{ margin: "0 auto" }}>
          <br />
          <Card>
            <CardBody style={{ display: "flex" }}>
              <Wrap>
                <WrapItem>
                  <Avatar name={name} src="https://bit.ly/broken-link" />
                </WrapItem>
              </Wrap>

              <Heading as="h3" size="lg" color={"#3f6c9b"}>
                &nbsp;&nbsp;{name}
              </Heading>
            </CardBody>
          </Card>
          <br />

          {/*****************  address *******************/}

          <HStack spacing="24px">
            <Card width={"100%"} style={{ backgroundColor: "#d2f8d7" }}>
              <CardBody>
                <Heading as="h4" size="md">
                  Address Details
                </Heading>

                {address && address.length >0 ? (
                  <div>
                    <p>
                      <b>Name :</b>
                      {address[address.length - 1].name}
                    </p>
                    <p>
                      <b>Mobile No :</b>
                      {address[address.length - 1].mobile_number}
                    </p>
                    <p>
                      <b>Pincode :</b>
                      {address[address.length - 1].pincode}
                    </p>
                    <p>
                      <b>House No :</b>
                      {address[address.length - 1].house_no}
                    </p>
                    <p>
                      <b>Area :</b>
                      {address[address.length - 1].area}
                    </p>

                    <p>
                      <b>Town/City :</b>
                      {address[address.length - 1].town}
                    </p>
                  </div>
                ) : (
                  <p>No Address is added yet</p>
                )}
              </CardBody>
            </Card>
          </HStack>

          {/*****************  address-end *******************/}
          <br />

          <HStack spacing="24px">
{/* <=============================================== Product of Cart=================================================>           */}
            <Card
              width={"50%"}
              style={{
                backgroundColor: "#f0f7f8",
                border: "1px solid #cccccc7a",
              }}
            >
              <CardBody>
                <Heading as="h4" size="md">
                  Cart Details
                </Heading>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {addToCart && addToCart.length > 0 ? (
                    addToCart.map((el: any) => (
                      <div
                        key={el.id}
                        style={{
                          display: "flex",
                          gap: "10px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <div>
                          <img src={el.avatar} alt="" width={"100px"} />
                        </div>
                        <div>
                          <b>{el.name}</b>
                          <p>
                            <b>Price:</b> ₹{el.price}
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
                    ))
                  ) : (
                    <p>No items in the cart.</p>
                  )}
                </div>
              </CardBody>
            </Card>
{/* <==============================================OrderDetails===============================================> */}
            <Card width={"50%"} style={{ backgroundColor: "#d2f8d7" }}>
              <CardBody>
                <Heading as="h4" size="md">
                  Order Details
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
                        key={el.id}
                        style={{
                          display: "flex",
                          gap: "10px",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <div>
                          <img src={el.avatar} alt="" width={"100px"} />
                        </div>
                        <div>
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
                        <div>
                          <Button
                            colorScheme="red"
                            marginTop={"20px"}
                            onClick={handleDelete}
                          >
                            Order Delivered{" "}
                          </Button>
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
      )}
    </div>
  );
};
