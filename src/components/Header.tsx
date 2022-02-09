import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <NavbarBrand>React + TypeScript + Bootstrap</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;