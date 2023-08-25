import { styled } from "styled-components";

import img1 from "../AdminImges/img1.png";
import img10 from "../AdminImges/img10.png";
import img11 from "../AdminImges/img11.png";
import img2 from "../AdminImges/img2.png";
import img3 from "../AdminImges/img3.png";
import img4 from "../AdminImges/img4.png";
import img5 from "../AdminImges/img5.png";
import img6 from "../AdminImges/img6.png";
import img7 from "../AdminImges/img7.png";
import img8 from "../AdminImges/img8.png";
import img9 from "../AdminImges/img9.png";
import img12 from "../AdminImges/img12.png";
import Navbar from "./AdminNavbar";
const Dashboard = () => {
  return (
    // /Dashboard Componet
    <div>
      <div>
        <Navbar />
      </div>

      <DIV style={{ backgroundColor: "rgb(157, 159, 159)" }}>
        <div>
          <div className="dashboard" style={{ gap: "30px", width: "100%" }}>
            <img src={img1} alt="error" style={{ borderRadius: "15px" }} />
            <img src={img2} alt="error" style={{ borderRadius: "15px" }} />
            <img src={img3} alt="error" style={{ borderRadius: "15px" }} />
            <img style={{ borderRadius: "15px" }} src={img4} alt="error" />
          </div>
          <div
            className="dashboard1"
            style={{ paddingLeft: "200px", width: "100%" }}
          >
            <img
              className="img5"
              style={{ width: "40%" }}
              src={img5}
              alt="error"
            />
            <img src={img6} alt="error" />
            <img src={img7} alt="error" />
          </div>
          <div
            className="dashboard2"
            style={{ paddingLeft: "20px", width: "100%", paddingTop: "100px" }}
          >
            <img src={img8} alt="error" />

            <img style={{width:"30%"}} src={img12} alt="error" />
          </div>

          <div
            className="dashboard3"
            style={{ paddingLeft: "90px", width: "100%" }}
          >
            <img src={img9} alt="error" />
            <img src={img10} alt="error" />
            <img src={img11} alt="error" />
          </div>
        </div>
      </DIV>
    </div>
  );
};

export default Dashboard;

const DIV = styled.div`
  img {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
  
  .dashboard {
    display: flex;
    gap: 10px;
    padding-top: 100px;
padding-left: 100px;
  }
  .dashboard {
    display: flex;
    gap: 10px;
    padding-top: 100px;
  }
  .dashboard img {
    width: 15%;
    /* height: 200px; */
    /* background-attachment: fixed; */
  }
  .dashboard img:hover {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    transition: 1s ease;
  }
  .dashboard1 {
    display: flex;
    gap: 20px;
    padding-top: 100px;
  }
  .dashboard1 img {
    width: 20%;
    height: 40%;
    border-radius: 10px;
  }
  .dashboard1 img:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
  }
  .dashboard3 {
    display: flex;
    gap: 20px;
    padding-top: 100px;
    justify-content: space-evenly;
    padding-bottom: 50px;
  }
  .dashboard3 img {
    border-radius: 10px;
  }
  .dashboard3 img:hover {
    -webkit-transform: rotateZ(-10deg);
    -ms-transform: rotateZ(-10deg);
    transform: rotateZ(-10deg);
    transition: 1s ease;
  }
.dashboard2{
    display:flex;
    gap: 20px;
    margin-top:20px;
    padding-top: 50px;
    justify-content: space-evenly;
    padding-bottom: 50px;
    background-color:white
  }
  .dashboard2 img {
    width: 50%;
height:40vh
  }
  .dashboard2 img:hover {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    transition: 1s ease;
  }
@media (max-width: 900px) {
    .dashboard {
      flex-direction: column;
      align-items: flex-start;
    }
    .dashboard img {
      width: 80%;
    }
    .dashboard1 {
      flex-direction: column;
      align-items: flex-start;
      margin: auto;
    }
    .dashboard1 img {
      width: 80%;
    }
    .dashboard1 .img5 {
      display: none;
    }
    .dashboard2 img {
      display: none;
    }
    .dashboard3 {
      flex-direction: column;
      align-items: flex-start;
      margin: auto;
    }
    .dashboard3 img {
      width: 80%;
    }
  }
`;
