import React from "react";
import { Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css"
import DropdownItem from "./DropdownItem";

type Props = {};
const logo = process.env.PUBLIC_URL + "/images/tobeto-logo.png"
const Navigation = (props: Props) => {
  return (
    <Navbar expand="lg" className=" justify-content-between custom-navbar" bg="white" data-bs-theme="light">
      <Link to={"/"}>
        <Image src={logo} width={170} height={35}></Image>
      </Link>
      <Nav className="nav-style">
        <Link to={"/"} className="navbar-tab">
          Anasayfa
        </Link>
        <Link to={"/profilim"} className="navbar-tab">
          Profilim
        </Link>
        <Link to={"/degerlendirmeler"} className="navbar-tab">
          Değerlendirmeler
        </Link>
        <Link to={"/katalog"} className="navbar-tab">
          Katalog
        </Link>
        <Link to={"/takvim"} className="navbar-tab">
          Takvim
        </Link>
        <Link to={"https://tobeto.com/istanbul-kodluyor"} className="navbar-tab">
          İstanbul Kodluyor
        </Link>
      </Nav>
      <DropdownItem />
    </Navbar>
  );
};
export default Navigation;
