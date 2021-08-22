import React from "react";
import { message, Button, Space } from "antd";

function Message() {
  const success = () => {
    message.success("This is a success message");
  };

  const error = () => {
    message.error("This is an error message");
  };

  const warning = () => {
    message.warning("This is a warning message");
  };
  return (
    <div>
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </div>
  );
}

export default Message;
