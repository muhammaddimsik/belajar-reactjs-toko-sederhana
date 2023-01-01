import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../unitls/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-4" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="mr-4" />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-4" />;
  return <FontAwesomeIcon icon={faUtensils} className="mr-4" />;
};

export default class ListCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoryChoosen } = this.props;
    return (
      <Col md={3}>
        <h4>List Category</h4>
        <hr />
        <ListGroup as="ul">
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                as="li"
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={
                  categoryChoosen === category.nama && "category-active"
                }
                style={{ cursor: "pointer" }}
              >
                <Icon nama={category.nama} />
                {category.nama}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
