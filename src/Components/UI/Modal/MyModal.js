import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";

function MyModal(props) {
  //   const [props.isModalVisible, props.setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false)

//   const showModal = () => {
//     props.setIsModalVisible(true);
//   };

  const handleOk = () => {
    props.setIsModalVisible(false);
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
  };
  return (
    <div>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title="Order Summary"
        visible={props.isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              <Link to="/checkout">
              Continue
              </Link>
            </Button>,]}
      >
        {props.children}
        <p>Continue to checkout ?</p>
      </Modal>
    </div>
  );
}

export default MyModal;
