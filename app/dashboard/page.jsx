import React from "react";
import Card from "../ui/dashboard/card/card";
import slyles from "./dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

const Dashboard = () => {
  return (
    <div className={slyles.wrapper}>
      <div className={slyles.main}>
        <div className={slyles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={slyles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
