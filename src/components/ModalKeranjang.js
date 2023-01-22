import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { indonesianCurrencyFormat } from "../unitls/utils";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
}) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama}{" "}
            <strong>
              ({indonesianCurrencyFormat(keranjangDetail.product.harga)})
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Total Harga:</Form.Label>
              <p>
                <strong>
                  {indonesianCurrencyFormat(keranjangDetail.total_harga)}
                </strong>
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Jumlah</Form.Label>
              <br />
              <Button
                variant="primary"
                size="sm"
                className="mr-2"
                onClick={() => tambah()}
              >
                <FontAwesomeIcon icon={faPlus} className="m-0 p-0" />
              </Button>
              <strong className="mx-2">{jumlah}</strong>
              <Button
                variant="primary"
                size="sm"
                className="ml-2"
                onClick={() => kurang()}
              >
                <FontAwesomeIcon icon={faMinus} className="m-0 p-0" />
              </Button>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control
                name="keterangan"
                as="textarea"
                rows="3"
                placeholder="Contah: pedas gak pake nasi"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">
            <FontAwesomeIcon icon={faTrash} className="m-0" /> Hapus Pesanan
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
