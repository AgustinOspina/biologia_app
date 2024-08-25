import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => (
    <Nav className="col-md-12 d-md-block bg-light sidebar"
         activeKey="/biologia"
         onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link as={Link} to="/genetica">Genética</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/evolucion">Evolución</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/luz">Luz</Nav.Link>
      </Nav.Item>
    </Nav>
  );
export default SideBar;