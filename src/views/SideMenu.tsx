import React, { useState } from "react";
import { imagePath } from "../utils/image_utils";
import MenuItem from "../components/MenuItem";

export default function SideMenu() {
  const [selectedItem, setSelectedItem] = useState<string>("Dashboard");
  return (
    <div className="w-full h-full flex flex-col gap-[6px] bg-white border-r-1 border-[#DEDEDF] cursor-pointer overflow-y-hidden">
      <img
        src={imagePath("lapo.png")}
        alt="Lapo logo"
        className="mt-[27px] ml-[10px] mb-[15px] h-[45px] w-[138px]"
      />
      <div className="flex-1 flex flex-col items-start overflow-y-auto pt-[15px]">
        <div className="pl-[11px] pb-[16px]">
          <MenuItem
            icon="home.svg"
            title="Dashboard"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
        </div>

        <span className="flex text-[8.5px] font-medium text-[#7E8B9C] pl-[28px] pb-[8px]">
          MAIN MENU
        </span>
        <div className="flex flex-col gap-[4px] items-start pl-[11px]">
          <MenuItem
            icon="building.svg"
            title="Branches"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="user-shield.svg"
            title="Roles"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="user-group.svg"
            title="Users"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />

          <MenuItem
            icon="setting.svg"
            title="Card Scheme"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="credit-card-pos.svg"
            title="Card Profile"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="credit-card-accept.svg"
            title="Card Request"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="chart-bar-line.svg"
            title="Stock"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />

          <MenuItem
            icon="credit-card.svg"
            title="Cards"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="list.svg"
            title="Authorization List"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="layers-three.svg"
            title="Authorization Queue"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="map.svg"
            title="Trail"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
          <MenuItem
            icon="user.svg"
            title="Account"
            selectedItem={selectedItem}
            onClick={setSelectedItem}
          />
        </div>
        <div className="pl-[12px] pt-[165px]">
          <MenuItem
            icon="logout.svg"
            title="Logout"
            color="black"
            //   selectedItem={selectedItem}
            //   onClick={setSelectedItem}
          />
        </div>
      </div>

      <span className="flex text-[8.5px] font-medium text-[#808080] pl-[28px]">
        POWERED BY
      </span>
      <img
        src={imagePath("cardinfra.png")}
        alt="Cardinfra logo"
        className="ml-[28px] mb-[30px] h-[42px] w-[93px]"
      />
    </div>
  );
}
