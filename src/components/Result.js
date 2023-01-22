import { Component } from "react";
import { Badge, Row, Col, ListGroup, Card } from "react-bootstrap";
import { indonesianCurrencyFormat } from "../unitls/utils";
import ModalKeranjang from "./ModalKeranjang";
import TotalBayar from "./TotalBayar";
import { API_URL } from "../unitls/constants";
import axios from "axios";
import swal from "sweetalert";

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
      totalHarga: 0,
    };
  }

  handleShow = (menuKeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
      jumlah: menuKeranjang.jumlah,
      keterangan: menuKeranjang.keterangan,
      totalHarga: menuKeranjang.total_harga,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      totalHarga:
        this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
    });
  };
  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        totalHarga:
          this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleClose();
    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product: this.state.keranjangDetail.product,
      keterangan: this.state.keterangan,
    };

    axios
      .put(API_URL + "keranjangs/" + this.state.keranjangDetail.id, data)
      .then((res) => {
        this.props.getListKeranjang();
        swal({
          title: "Update Pesanan",
          text: "Sukses Update Pesanan " + data.product.nama,
          icon: "success",
          button: false,
          timer: 1400,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  hapusPesanan = (id) => {
    this.handleClose();
    axios
      .delete(API_URL + "keranjangs/" + id)
      .then((res) => {
        this.props.getListKeranjang();
        swal({
          title: "Hapus Pesanan",
          text:
            "Sukses Hapud Pesanan " + this.state.keranjangDetail.product.nama,
          icon: "error",
          button: false,
          timer: 1400,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3}>
        <h4>Hasil</h4>
        <hr />
        {keranjangs.length !== 0 && (
          <Card className="overvlow-auto hasil">
            <ListGroup variant="flush">
              {keranjangs.map((menuKeranjang) => (
                <ListGroup.Item
                  key={menuKeranjang.id}
                  onClick={() => this.handleShow(menuKeranjang)}
                >
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
              <ModalKeranjang
                handleClose={this.handleClose}
                {...this.state}
                tambah={this.tambah}
                kurang={this.kurang}
                changeHandler={this.changeHandler}
                handleSubmit={this.handleSubmit}
                hapusPesanan={this.hapusPesanan}
              />
            </ListGroup>
          </Card>
        )}
        <TotalBayar keranjangs={keranjangs} {...this.props} />
      </Col>
    );
  }
}
