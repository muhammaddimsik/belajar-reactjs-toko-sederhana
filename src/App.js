import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { NavbarComponent, ListCategory, Result, Menus } from "./components";
import { API_URL } from "./unitls/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { menus } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <Row className="mt-4">
          <ListCategory />
          <Col>
            <h4>List Product</h4>
            <hr className="mb-4" />
            <Row>
              {menus &&
                menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
            </Row>
          </Col>
          <Result />
        </Row>
      </div>
    );
  }
}
