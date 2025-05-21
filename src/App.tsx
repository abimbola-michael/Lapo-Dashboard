import { useState } from "react";
import "./App.css";
import MenuItem from "./components/MenuItem";
import { svgPath } from "./utils/image_utils";
import SideMenu from "./views/SideMenu";
import QuickAccessItem from "./components/QuickAccessItem";
import AnalyticsItem from "./components/AnalyticsItem";
import MonthlyIssuanceBarChart from "./components/charts/MonthlyIssuanceBarChart";
import IncomeLineChart from "./components/charts/IncomingLineChart";
import CardStatusDonutChart from "./components/charts/CardStatusDonutChart";
import RecentCardsTable from "./components/charts/RecentCardsTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ChartItem from "./components/ChartItem";
import { motion } from "framer-motion";

function App() {
  const [search, setSearch] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-screen h-screen flex flex-row bg-white overflow-y-none">
      <motion.div
        className="hidden lg:flex flex-2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SideMenu />
      </motion.div>
      <motion.div
        className="flex-8 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-row items-center justify-between gap-[20px] bg-white border-b-[1.0px] border-[#DEDEDF]"
          variants={itemVariants}
        >
          <div className="pt-[5px] pl-[8px] lg:w-[200px]">
            <MenuItem icon="home.svg" title="Dashboard" />
          </div>
          <div className="flex-1 flex flex-row items-center justify-end gap-[16px] px-[10px]">
            <div
              className="hidden lg:flex lg:w-[214px] flex-row items-center gap-[8px] px-[13px] py-[7px] rounded-[97.99px] border-[0.98px] border-[#D0D5DD]"
              style={{ boxShadow: "0px 0.98px 1.96px 0px #1018280D" }}
            >
              <img src={svgPath("search.svg")} alt="Search icon" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none placeholder-[#344054] text-[11.76px] font-normal"
                placeholder="Search"
              />
            </div>
            <img
              src={svgPath("search.svg")}
              alt="Search icon"
              className={`lg:hidden w-[22px] h-[22px]`}
            />
            <img src={svgPath("bell.svg")} alt="Notification icon" />
            <img src={svgPath("profile.svg")} alt="Profile Photo icon" />
          </div>
        </motion.div>

        <motion.div
          className="flex-1 bg-[#F8FBFF] overflow-y-auto px-[12px] pt-[3px]"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col lg:flex-row gap-[8px] items-start lg:items-center justify-between pt-[6px]"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-[4px]">
              <h2 className="flex text-[18.0px] font-bold text-[#121212]">
                Hi Nazeer, what would you like to do today?
              </h2>
              <motion.span
                className="flex text-[12.0px] font-medium text-[#121212]"
                variants={itemVariants}
              >
                Last login: 26/11/2024 14:39:58
              </motion.span>
            </div>
            <div className="relative">
              <div
                className="flex flex-row items-center gap-[8px] rounded-[4.0px] border-[1.0px] border-[#D0D5DD] px-[13px] py-[8px] cursor-pointer"
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              >
                <div className="flex flex-row items-center gap-[4px]">
                  <img src={svgPath("calender.svg")} alt="Calender icon" />
                  <span className="flex text-[11.0px] font-medium text-[#121212]">
                    Today
                  </span>
                </div>
                <div className="h-[10px] w-[0.6px] bg-[#D0D5DD]"></div>
                <span className="flex text-[11.0px] font-normal text-[#121212]">
                  {formatDate(selectedDate)}
                </span>
              </div>
              {isDatePickerOpen && (
                <div className="absolute right-0 mt-2 z-10">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => {
                      if (date) {
                        setSelectedDate(date);
                        setIsDatePickerOpen(false);
                      }
                    }}
                    inline
                    calendarClassName="border border-[#D0D5DD] rounded-[4px] shadow-lg"
                  />
                </div>
              )}
            </div>
          </motion.div>
          {/* 
          <motion.span
            className="flex text-[12.0px] font-medium text-[#121212]"
            variants={itemVariants}
          >
            Last login: 26/11/2024 14:39:58
            <span className="flex font-normal text-[#121212]"></span>
          </motion.span> */}

          <motion.div
            className="flex flex-col gap-[8px] bg-white rounded-[10.0px] border-[1.0px] border-[#E2E2E2] p-[16px] mt-[12px]"
            variants={itemVariants}
          >
            <h3 className="flex text-[16.0px] font-medium text-[#121212]">
              Your Quick Access
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8px] items-center justify-stretch">
              <QuickAccessItem
                icon="credit-card-shield.svg"
                title="Manage a Card"
              />
              <QuickAccessItem
                icon="credit-card-02.svg"
                title="Issue Instant Card"
              />
              <QuickAccessItem
                icon="credit-card-edit.svg"
                title="Issue Personalized Card"
              />
              <QuickAccessItem
                icon="credit-card-plus.svg"
                title="Review Card Requests"
              />
            </div>
          </motion.div>

          <motion.h2
            className="flex text-[18.0px] font-bold text-black pt-[4px]"
            variants={itemVariants}
          >
            Analytics
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-[8px] items-center justify-stretch mt-[10px]"
            variants={itemVariants}
          >
            <AnalyticsItem
              icon="credit-card-check.svg"
              title="Total Active Cards"
              value="26,478"
              rate="+9%"
              duration="this month"
            />
            <AnalyticsItem
              icon="credit-card-edit-2.svg"
              title="Total Personalized Cards"
              value="15,703"
              rate="8.5%"
              duration="this month"
            />
            <AnalyticsItem
              icon="bank-note.svg"
              title="Today's Revenue"
              value="₦9.3M"
              rate="+6%"
              duration="vs yesterday"
            />
            <AnalyticsItem
              icon="hour-glass.svg"
              title="Pending Requests"
              value="38"
              info="Requires attention"
            />
          </motion.div>

          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-[8px] pt-[8px]"
            variants={itemVariants}
          >
            <ChartItem title="Monthly Issuance">
              <MonthlyIssuanceBarChart
                data={[
                  { month: "May", Instant: 50, Personalized: 10 },
                  { month: "Jun", Instant: 70, Personalized: 20 },
                  { month: "Jul", Instant: 25, Personalized: 5 },
                  { month: "Aug", Instant: 60, Personalized: 6 },
                  { month: "Sep", Instant: 50, Personalized: 7 },
                  { month: "Oct", Instant: 80, Personalized: 20 },
                  { month: "Nov", Instant: 75, Personalized: 5 },
                ]}
              />
            </ChartItem>
            <ChartItem title="Recent Card Requests">
              <RecentCardsTable
                data={[
                  {
                    branch: "Corporate",
                    cardType: "Instant",
                    quantity: 10,
                    status: "Ready",
                    action: "View",
                    statusBgColor: "#ECFDF3",
                    statusTextColor: "#067647",
                    statusBorderColor: "#ABEFC6",
                  },
                  {
                    branch: "Corporate",
                    cardType: "Personalized",
                    quantity: 10,
                    status: "In Progress",
                    action: "View",
                    statusBgColor: "#FFFAEB",
                    statusTextColor: "#B54708",
                    statusBorderColor: "#FEDF89",
                  },
                  {
                    branch: "Corporate",
                    cardType: "Personalized",
                    quantity: 10,
                    status: "Acknowledged",
                    action: "View",
                    statusBgColor: "#EFF8FF",
                    statusTextColor: "#175CD3",
                    statusBorderColor: "#B2DDFF",
                  },
                  {
                    branch: "Corporate",
                    cardType: "Instant",
                    quantity: 10,
                    status: "Pending",
                    action: "View",
                    statusBgColor: "#F9FAFB",
                    statusTextColor: "#344054",
                    statusBorderColor: "#EAECF0",
                  },
                ]}
                headers={[
                  "Branch",
                  "Card Type",
                  "Quantity",
                  "Status",
                  "Action",
                ]}
              />
            </ChartItem>
            <ChartItem title="This Week's Income">
              <IncomeLineChart
                data={[
                  { day: "Mon", income: 55 },
                  { day: "Tue", income: 35 },
                  { day: "Wed", income: 45 },
                  { day: "Thu", income: 58 },
                  { day: "Fri", income: 60 },
                  { day: "Sat", income: 30 },
                  { day: "Sun", income: 80 },
                ]}
              />
            </ChartItem>
            <ChartItem title="Card Status Distribution">
              <CardStatusDonutChart
                data={[
                  { name: "Active", value: 1905 },
                  { name: "Expired", value: 317.5 },
                  { name: "Inactive", value: 70.56 },
                  { name: "Blocked", value: 105.83 },
                  { name: "Lost", value: 141.11 },
                ]}
              />
            </ChartItem>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
