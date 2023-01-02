import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

export default class Sukses extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/success.png" width="500" />
        <h4>Pesanan Sukses</h4>
        <p>Terimakasih sudah memesan</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
