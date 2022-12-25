import "./App.css";
import { Row, Col } from "react-bootstrap";
import { NavbarComponent, ListCategory, Result } from "./components";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Row className="mt-4">
        <ListCategory />
        <Col>
          <h4>List Product</h4>
          <hr />
        </Col>
        <Result />
      </Row>
    </div>
  );
}

export default App;
