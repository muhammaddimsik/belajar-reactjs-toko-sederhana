import "../index.css";
import React from "react";
import { Col, Card } from "react-bootstrap";
import { indonesianCurrencyFormat } from "../unitls/utils";

const Menus = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-4 kotak">
      <Card>
        <Card.Img
          className="img"
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>
            {menu.nama}
            <strong> {menu.kode}</strong>
          </Card.Title>
          <Card.Text>{indonesianCurrencyFormat(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
