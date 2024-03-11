import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import BarChart from "../chart/BarChart";
import { TfiStatsUp } from "react-icons/tfi";
import LineChart from "../chart/LineChart";
import PieChart from "../chart/DoughnutChart";
import { BsThreeDotsVertical } from "react-icons/bs";

import "./style.css";
import DoughnutChart from "../chart/DoughnutChart";

const DashboardContent = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>

      <div className="box-barchart-container">
        <div className="main-boxes-container">
          {/* <h1>hello</h1> */}
          <div className="container-data-box">
            <div className="data-box">
              <div className="left">
                <h3 className="box-heading">Customers</h3>
                <span className="number">256,893</span>
                <div>
                  <div className="profit">
                    <IoIosArrowRoundUp color="green" fontSize={22} />
                    <h5>6.25 %</h5>
                  </div>
                  <h6>Since last Week</h6>
                </div>
              </div>
              <div className="right">
                <BsPeopleFill className="customer-icon" />
              </div>
            </div>
            <div className="data-box">
              <div className="left">
                <h3 className="box-heading">Orders</h3>
                <span className="number">8,392</span>
                <div>
                  <div className="loss">
                    <IoIosArrowRoundDown color="red" fontSize={22} />
                    <h5>6.25 %</h5>
                  </div>
                  <h6>Since last Week</h6>
                </div>
              </div>
              <div className="right">
                <FaCartShopping className="customer-icon" />
              </div>
            </div>
          </div>
          <div className="container-data-box">
            <div className="data-box">
              <div className="left">
                <h3 className="box-heading">Revenue</h3>
                <span className="number">$12,468</span>
                <div>
                  <div className="profit">
                    <IoIosArrowRoundUp color="green" fontSize={22} />
                    <h5>5.24 %</h5>
                  </div>
                  <h6>Since last Week</h6>
                </div>
              </div>
              <div className="right">
                <FaDollarSign className="customer-icon" />
              </div>
            </div>
            <div className="data-box">
              <div className="left">
                <h3 className="box-heading">Growth</h3>
                <span className="number">+23,16%</span>
                <div>
                  <div className="profit">
                    <IoIosArrowRoundUp color="green" fontSize={22} />
                    <h5>6.72 %</h5>
                  </div>
                  <h6>Since last Week</h6>
                </div>
              </div>
              <div className="right">
                <TfiStatsUp className="customer-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="main-barchart-container">
          <div className="chart-top-container">
            <h3>Sales Trands</h3>
            <BsThreeDotsVertical fontSize={20} />
          </div>
          <div className="barchart">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="linechart-doughnutchart-container">
        <div className="main-linechart">
          <div className="chart-top-container">
            <h3>Revenue</h3>
            <BsThreeDotsVertical fontSize={20} />
          </div>
          <div className="revenue-container">
            <div className="revenue-box">
              <div className="sub-revenue-content">
                <h5>Current Week</h5>
                <span className="span1"></span>
              </div>
              <h3>$48,658</h3>
            </div>
            <div className="revenue-box">
              <div className="sub-revenue-content">
                <h5>Last Week</h5>
                <span className="span2"></span>
              </div>
              <h3>$48,658</h3>
            </div>
          </div>
          <div
           
          >
            <LineChart />
          </div>
        </div>
        <div className="main-doughnut-chart">
          <h3 className="doughnut-heading">Total Earnings</h3>
          <div className="DouggnutChart">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
