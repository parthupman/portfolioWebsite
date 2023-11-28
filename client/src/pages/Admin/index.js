import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
const { TabPane } = Tabs;
function Admin() {
  const { portfolioData } = useSelector((state) => state.root);



  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl text-primary">Portfolio Admin</h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
       
      </div>
      {portfolioData && (
        <div className="px-5 pb-10">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
 
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;