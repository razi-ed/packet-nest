import { createElement, useCallback, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";

/* ***package imports above this***  */

import Logo from "@shared/assets/packet-nest.svg";
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

import SearchNavObject from "@package/search/search.constants";
import HomeNavObject from "@home/home.constants";
import { APP_NAME } from "@shared/constants";
/* ***enums, consts imports above this***  */

import type { MenuProps } from "antd";
import type { MenuInfo } from "rc-menu/lib/interface";
/* ***types imports above this***  */

import styles from "./app-layout.module.css";
/* ***style and styled components imports above this***  */

const { Header, Content, Footer, Sider } = Layout;
/* ***local declarations above this***  */

export default function AppLayout() {
  /* ***props decustructions above this***  */

  const { pathname } = useLocation();
  const navigate = useNavigate();
  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  const onNavItemClick: MenuProps["onClick"] = useCallback(
    (e: MenuInfo) => {
      navigate(e.key);
    },
    [navigate]
  );
  /* ***memoised functions initializations above this***  */

  const navItems = useMemo(() => {
    return [
      {
        key: HomeNavObject.path,
        icon: createElement(HomeNavObject.linkIcon),
        label: HomeNavObject.linkLabel,
      },
      {
        key: SearchNavObject.path,
        icon: createElement(SearchNavObject.linkIcon),
        label: SearchNavObject.linkLabel,
      },
    ];
  }, []);
  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */
  return (
    <Layout className={styles["AppLayout-container"]}>
      <Header className={styles["AppLayout-header"]}>
        <div className={styles["AppLayout-logo-container"]}>
          <img
            src={Logo}
            alt={`${APP_NAME} logo`}
            className={styles["AppLayout-logo"]}
          />
        </div>
        <Typography.Title level={2} className={styles["AppLayout-appname"]}>
          {APP_NAME}
        </Typography.Title>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className={styles["AppLayout-sider"]}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[pathname]}
            items={navItems}
            className={styles["AppLayout-nav-menu"]}
            onClick={onNavItemClick}
          />
        </Sider>
        <Layout>
          <Content className={styles["AppLayout-content"]}>
            <Outlet />
          </Content>
          <Footer
            className={styles["AppLayout-footer"]}
          >{`${APP_NAME} ©${new Date().getFullYear()}`}</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
