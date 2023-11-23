import React from "react";
import "./Home.css";
import { Tilt } from "react-tilt";
import styled from "styled-components";
import logo from "../images/Screenshot from 2023-11-22 09-46-52.png";
import downArrow from "../images/down-arrow.png";
import image1 from "../images/Screenshot from 2023-11-22 10-24-01.png";
import DashboradIcon from "../images/dashboard.png";
import ProfileImg from "../images/Profile-Picture.jpg";
import rightArrowIco from "../images/right-arrow.png";
import PearksIcon from "../images/herb.png";
import AddonsIcon from "../images/puzzle.png";
import FAQIcon from "../images/help.png";
import SupportIcon from "../images/help.png";
import User from "../images/user.png";
import CouldImg from "../images/cloud-computing.png";
import EmailIcon from "../images/envelope.png";
import NotificationIcon from '../images/notification.png';
import addIcon from '../images/plus.png'

const Main = styled.div`
  background-color: #34adff;
  background-image: -webkit-linear-gradient(150deg, #e0ffff 87%, #ffff 35%);
  min-height: 100vh;
`;

const Navbar = styled.div`
  display: flex;
  height: 17vh;
  justify-content: space-between;
  width: 100%;
`;
function Home() {
  return (
    <Main>
      <Navbar>
        <div className="logo">
          <img src={logo} alt="..." />
        </div>
        <div className="drop-menu">
          <div className="box1">
            <img src={image1} alt="...." />
            <p>XYZ Enterprises Pvt.Ltd</p>
          </div>
          <div className="box2">
            <img src={downArrow} alt="drop-icon" />
          </div>
        </div>
      </Navbar>

      <div className="main-page">
        <div className="container1">
          <div className="profile-section">
            <img src={ProfileImg} alt="profile" />
            <p className="name">
              Ram Mohan
              <span>
                <img src={rightArrowIco} alt="..."></img>
              </span>
            </p>
            <p className="mail">rammohan2@gmail.com</p>
          </div>

          <div className="menu-items">
            <div className="Item1">
              <img src={DashboradIcon} alt="dashboard" className="item-img" />
              <p>Dashboard</p>
            </div>
            <div className="Item1">
              <img src={PearksIcon} alt="dashboard" className="item-img" />
              <p>Perks</p>
            </div>
            <div className="Item1">
              <img src={AddonsIcon} alt="dashboard" className="item-img" />
              <p>Addons</p>
            </div>
            <div className="Item1">
              <img src={FAQIcon} alt="dashboard" className="item-img" />
              <p>FAQ</p>
            </div>
            <div className="Item1">
              <img src={SupportIcon} alt="dashboard" className="item-img" />
              <p>Support</p>
            </div>
          </div>
          <div className="button-container">
            <button>Logout</button>
          </div>
        </div>
        <div className="container2">
          <div className="Header-container2">
            <div className="text">
              <p>Choose a plan that's just right for you !</p>
            </div>
            <div class="b-container">
              <button class="tab-button1" id="monthly-tab">
                Monthly
              </button>
              <button class="tab-button2" id="annually-tab">
                Annually
              </button>
            </div>
          </div>

          {/* Card 1 */}
          <div className="Card1-container2">
            <Tilt>
              <div className="card">
                <div className="card-heading">Basic</div>
                <div className="price-line">
                  <span className="price">$89.99/mo</span>
                  <div className="red-line"></div>
                </div>
                <div className="larger-price">$9.99/mo</div>
                <button className="get-started-button1">
                  Get Started <span className="arrow">&#8594;</span>
                </button>
                <div className="divider-line"></div>
                <div className="features">
                  <p className="feature-heading">What you'll get:</p>
                  <div className="card-i">
                    <img src={User} alt="..." />
                    <p>Upto 25 Users</p>
                  </div>
                  <div className="card-i">
                    <img src={CouldImg} alt="..." />
                    <p>Upto 25gb Storage</p>
                  </div>
                  <div className="card-i">
                    <img src={EmailIcon} alt="..." />
                    <p>Email Support</p>
                  </div>
                </div>
                <div className="footer-text">
                  <p>EXPLORE FEATURE</p>
                </div>
              </div>
            </Tilt>

            <Tilt>
              <div className="card">
                <div className="card-heading">Standard</div>
                <div className="price-line">
                  <span className="price">$89.99/mo</span>
                  <div className="red-line"></div>
                </div>
                <div className="larger-price">$99.99/mo</div>
                <button className="get-started-button2">
                  Get Started <span className="arrow">&#8594;</span>
                </button>
                <div className="divider-line"></div>
                <div className="features">
                  <p className="feature-heading">What you'll get:</p>
                  <div className="card-i">
                    <img src={User} alt="..." />
                    <p>Upto 50 Users</p>
                  </div>
                  <div className="card-i">
                    <img src={CouldImg} alt="..." />
                    <p>Upto 60gb Storage</p>
                  </div>
                  <div className="card-i">
                    <img src={EmailIcon} alt="..." />
                    <p>Email+Chat Support</p>
                  </div>
                </div>
                <div className="footer-text">
                  <p>EXPLORE FEATURE</p>
                </div>
              </div>
            </Tilt>

            <Tilt>
              <div className="card">
                <div className="card-heading">Premium</div>
                <div className="price-line">
                  <span className="price">$389.99/mo</span>
                  <div className="red-line"></div>
                </div>
                <div className="larger-price">$199.99/mo</div>
                <button className="get-started-button3">
                  Get Started <span className="arrow">&#8594;</span>
                </button>
                <div className="divider-line"></div>
                <div className="features">
                  <p className="feature-heading">What you'll get:</p>
                  <div className="card-i">
                    <img src={User} alt="..." />
                    <p>Upto 75 Users</p>
                  </div>
                  <div className="card-i">
                    <img src={CouldImg} alt="..." />
                    <p>Upto 100gb Storage</p>
                  </div>
                  <div className="card-i">
                    <img src={EmailIcon} alt="..." />
                    <p>Email+Chat+Whatsapp Support</p>
                  </div>
                </div>
                <div className="footer-text">
                  <p>EXPLORE FEATURE</p>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Card Container 2 */}
          <div className="Card2-container2">
              <div className="card2">
                <div className="left-side">
                  <div className="green-text1">
                    <p>Free forever</p>
                  </div>
                  <h1>Free Starter</h1>
                  <p>This is a paragraph about the Free Starter plan.</p>
                  <button className="get-started-button4">
                    Get Started <span className="arrow">&#8594;</span>
                  </button>
                </div>
                <div className="right-side">
                  <div className="what-you-get">
                    <h4>What you will get:</h4>
                    <div className="card-i">
                      <img src={User} alt="..." />
                      <p>Upto 8 Users</p>
                    </div>

                    <div className="card-i">
                      <img src={CouldImg} alt="..." />
                      <p>Upto 3gb Storage</p>
                    </div>

                    <div className="card-i">
                      <img src={EmailIcon} alt="..." />
                      <p>Email Support</p>
                    </div>
                  </div>
                  <p>This is a paragraph about what users will get.</p>
                </div>
              </div>
              <div className="card2">
                <div className="left-side">
                  <div className="green-text2">
                    <p>Lets Contact</p>
                  </div>
                  <h1>Enterprise Plan</h1>
                  <p>This is a paragraph about the Free Starter plan.</p>
                  <button className="get-started-button5">
                    Get Started <span className="arrow">&#8594;</span>
                  </button>
                </div>
                <div className="right-side">
                  <div className="what-you-get">
                    <h4>What you will get:</h4>
                    <div className="card-i">
                      <img src={User} alt="..." />
                      <p>More than 75 Users</p>
                    </div>
                  </div>
                  <p>This is a paragraph about what users will get.</p>
                </div>
              </div>
          </div>
        </div>
        <div className="container3">
          <div className="Notification-icon">
            <img src={NotificationIcon} alt="..."/>
          </div>
          <div>
          <div className="white-box"></div>
          <div className="add-icon">
            <img src={addIcon} alt="..."/>
          </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;
