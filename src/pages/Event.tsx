import { Button, Calendar, Layout, Row, Modal } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Event: FC = () => {
  const { fetchGuests } = useActions();

  const { guests } = useTypedSelector((state) => state.event);

  useEffect(() => {
    fetchGuests();
  }, []);

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
            footer={null}
            onCancel={handleCancel}
          >
            <EventForm guests={guests} />
          </Modal>
        </Row>
      </Row>
    </Layout>
  );
};

export default Event;
