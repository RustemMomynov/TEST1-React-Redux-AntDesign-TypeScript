import { Button, Calendar, Layout, Row, Modal } from "antd";
import React, { FC, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";

const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <EventCalendar events={[]} />
        <Row justify="center">
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal
            title="Добавить событие"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <EventForm />
          </Modal>
        </Row>
      </Row>
    </Layout>
  );
};

export default Event;
