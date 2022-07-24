import { Layout, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <div style={{ color: "white" }}>Rustem</div>
              <Menu.Item
                onClick={() => {
                  navigate("../login", { replace: true });
                }}
                key={1}
              >
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => {}} key={1}>
                Логин
              </Menu.Item>
            </Menu>
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
