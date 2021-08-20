import React, { useState } from "react";
import { Modal, Button } from "antd";

function MyModal(props) {
  //   const [props.isModalVisible, props.setIsModalVisible] = useState(false);

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
      >
        {props.children}
      </Modal>
    </div>
  );
}

export default MyModal;
