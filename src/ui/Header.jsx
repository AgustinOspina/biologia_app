import { Container, Navbar } from 'react-bootstrap';

const Header = () => (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Biología APP</Navbar.Brand>
      </Container>
    </Navbar>
  );

export default Header;