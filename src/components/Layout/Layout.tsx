import { Flex } from "@chakra-ui/react";
import Chatbar from "components/Chatbar/Chatbar";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import React, { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // initial state
  const [isCollapsed, setIsCollapsed] = useState(false);
  // initial width
  const [sidebarWidth, setSidebarWidth] = useState("240px");
  const [mainMarginLeft, setMainMarginLeft] = useState("240px");

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setSidebarWidth(isCollapsed ? "240px" : "50px");
    setMainMarginLeft(isCollapsed ? "240px" : "50px");
  };

  return (
    <Flex direction={"column"} minH={"100vh"}>
      <Navbar />
      <Sidebar
        sidebarWidth={sidebarWidth}
        isCollapsed={isCollapsed}
        handleCollapse={handleCollapse}
      />
      <main>
        <Flex bg={"gray"} ml={{ base: "50px", xl: mainMarginLeft }}>
          {children}
        </Flex>
      </main>
      <Chatbar />
    </Flex>
  );
};
export default Layout;
