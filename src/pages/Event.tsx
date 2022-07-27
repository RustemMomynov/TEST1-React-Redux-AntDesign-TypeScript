import { Calendar, Layout, Row } from "antd";
import React, { FC } from "react";

const Event: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Calendar />
      </Row>
    </Layout>
  );
};

export default Event;
