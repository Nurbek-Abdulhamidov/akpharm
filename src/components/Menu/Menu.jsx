import React from "react";
import "./menu.css";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Menu = () => {
  const { t, i18n } = useTranslation();
  const onLanguageHandle = (newLang) => {
    i18n.changeLanguage(newLang);
    window.localStorage.setItem("language", newLang);
  };

  return (
    <div className="menu">
      <Navbar bg="white" expand={false}>
        <Container>
          <Navbar.Toggle className="asdf"><GiHamburgerMenu/></Navbar.Toggle>
          
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/category">{t("navbar.product")}</Link>
                <Link to="/partner">{t("navbar.partner")}</Link>
                <NavDropdown title="Language" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item
                    href="#action3"
                    onClick={() => onLanguageHandle("uz")}
                  >
                    Ўзбек
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action4"
                    onClick={() => onLanguageHandle("ru")}
                  >
                    Русский
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action4"
                    onClick={() => onLanguageHandle("en")}
                  >
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Button variant="outline-success">{t("navbar.request")}</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
