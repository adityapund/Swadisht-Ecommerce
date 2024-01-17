import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text t3"> Welcome to Swadisht, where every bite is a blend of wellness and flavor. Explore our tantalizing range of handpicked, nutritious delights that promise to nourish your body
             and tantalize your taste flavours ands buds.
            </div>
        </div>
        <div className="col"> 
             <div className="title">Contact</div>
             <div className="c-item">
                <FaLocationArrow />
                <div className="text">
                    Maruti Sankul, Datta Nagar, Xlo Point, Ambad, Nashik-422010
                </div>
             </div>
             <div className="c-item">
                <FaMobileAlt />
                <div className="text">
                    Phone No: 0571 272 0656
                </div>
             </div>
             <div className="c-item">
                <FaEnvelope />
                <div className="text">Email: pundaditya62@gmail.com</div>
             </div>
        
        </div>
        <div className="col"> <div className="title">Categories</div>
        <span className="text">Swadisht Special</span>
        <span className="text">Laddoos</span>
        <span className="text">Healthy</span>
        <span className="text">Namkin</span>
        <span className="text">Traditional</span>
        </div>
        <div className="col"> 
        <div className="title">Pages</div>
        <span className="text">Home</span>
        <span className="text">About</span>
        <span className="text">Privacy</span>
        <span className="text">Returns</span>
        <span className="text">Terms & Conditions</span>
        <span className="text">Contact Us</span>
        
        </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Swadisht Foods Co. Created By Aditya Pund (Fullstack MERN Developer)
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
