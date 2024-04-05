"use client"; // use client side rendering
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu";

const Header = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-dark"
        data-bs-theme="dark"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/" as ={Link}>TechnoShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {menuItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  href={item.url}
                  as={Link}
                  prefetch={item.prefetch}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Link href="/dashboard">Dashboard</Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
