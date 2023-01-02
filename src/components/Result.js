import { Component } from "react";
import { Badge, Row, Col, ListGroup } from "react-bootstrap";
import { indonesianCurrencyFormat } from "../unitls/utils";

export default class Result extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3}>
        <h4>Hasil</h4>
        <hr />
        {keranjangs.length !== 0 && (
          <ListGroup variant="flush">
            {keranjangs.map((menuKeranjang) => (
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>
                      <Badge pill variant="success">
                        {menuKeranjang.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col className=" text-start">
                    <h5>{menuKeranjang.product.nama}</h5>
                    <p>
                      {indonesianCurrencyFormat(menuKeranjang.product.harga)}
                    </p>
                  </Col>
                  <Col>
                    <strong className="float-end">
                      <p>
                        {indonesianCurrencyFormat(menuKeranjang.total_harga)}
                      </p>
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    );
  }
}
