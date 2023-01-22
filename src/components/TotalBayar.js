import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { API_URL } from "../unitls/constants";
import { indonesianCurrencyFormat } from "../unitls/utils";

export default class TotalBayar extends Component {
  submiTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses");
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h5>
              Total Bayar :{" "}
              <strong className="float-end mr-2">
                {" "}
                {indonesianCurrencyFormat(totalBayar)}
              </strong>
            </h5>
            <Button
              variant="primary"
              className="mb-2 mt-4 mr-2 penuh"
              size="lg"
              onClick={() => this.submiTotalBayar(totalBayar)}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="shop-chart" />
              <strong>Bayar</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
