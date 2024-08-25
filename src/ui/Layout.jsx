import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import SideBar from './SideBar.jsx';
import Genetics from './Genetics.jsx';
import Evolution from './Evolution.jsx';
import Light from './Light.jsx';


const Layout = () => (
  <Container fluid className="h-100">
    <Row className="h-100">
      <Col xs= {12} md={2} className="bg-light p-0 sidebar">
        <SideBar />
      </Col>
      <Col xs= {12} md={10} className="p-4">
        <Routes>
          <Route path="/genetica" element={<Genetics />} />
          <Route path="/evolucion" element={<Evolution />} />
          <Route path="/luz" element={<Light />} />
        </Routes>
      </Col>
    </Row>
  </Container>
);
export default Layout;