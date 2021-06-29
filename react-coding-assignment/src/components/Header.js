import React from "react";
import { Link } from "react-router-dom";
import { Item, TabList, Tabs, Flex, View, Button } from "@adobe/react-spectrum";
import exchange from "../assets/exchange.png";
import "../styles/header.css";
import Sidebar from "./Sidebar";

const Header = () => {
  const bgColor = { backgroundColor: "white" };
  return (
    <>
      <nav className="header-content">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignContent="center"
          UNSAFE_style={bgColor}
          height="size-600"
          gap="size-100"
        >
          <Flex
            direction="row"
            justifyContent="space-between"
            height="size-600"
            gap="size-100"
          >
            <View marginTop="size-100">
              <img src={exchange} alt="logo" height="35px" width="80px" />
            </View>
            <View width="100%" marginStart="size-1000">
              <Tabs aria-label="Tabs">
                <TabList>
                  <Item key="experience">
                    <Link to={`/experience`}>Experience cloud</Link>
                  </Item>
                  <Item key="creative">
                    <Link to={`/creative`}> Creative cloud</Link>
                  </Item>
                  <Item key="document">
                    <Link to={`/document`}>Document cloud</Link>
                  </Item>
                </TabList>
              </Tabs>
            </View>
          </Flex>
          <Flex direction="row" height="size-800" gap="size-100">
            <View width="size-2000">
              <Button variant="cta" marginTop="size-100" marginStart="size-500">
                Sign In
              </Button>
            </View>
          </Flex>
        </Flex>
      </nav>
      <nav className="sidenav">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignContent="center"
          UNSAFE_style={bgColor}
          height="size-600"
          gap="size-100"
        >
          <Sidebar />
          <button className="btn-mobile-view">Sign in</button>
        </Flex>
      </nav>
    </>
  );
};

export default Header;
