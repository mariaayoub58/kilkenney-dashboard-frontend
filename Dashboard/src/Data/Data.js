import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },

  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const CardsData = [
  {
    title: "Items Sold",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },

    value: "",
    png: UilChart,
    series: [
      {
        name: "Items Sold",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Transactions",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },

    value: "",
    png: UilChart,
    series: [
      {
        name: "Transactions",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Payments",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },

    value: "",
    png: UilChart,
    series: [
      {
        name: "Payments",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const CardsData1 = [
  {
    title: "Profit",
    color: {
      backGround: "linear-gradient(#33ccff 0%, #ff99ff -4%)",
      boxShadow: "0px 10px 20px 0px #ffccf2",
    },

    value: " ",
    png: UilChart,
    series: [
      {
        name: "Profit",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "ATV",
    color: {
      backGround: "linear-gradient(#33ccff 0%, #99ccff -4%)",
      boxShadow: "0px 10px 20px 0px #ccf2ff",
    },

    value: " ",
    png: UilChart,
    series: [
      {
        name: "ATV",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Margin",
    color: {
      backGround: "linear-gradient(#33ccff 0%, #33cccc -4%)",
      boxShadow: "0px 10px 20px 0px #ccfff2",
    },

    value: " ",
    png: UilChart,
    series: [
      {
        name: "Margin",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const locationlist = [
  "Dublin",
  "Bray",
  "Killarney",
  "Limerick",
  "Galway",
  "Wicklow",
];

export const chartdata = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },

  series: [
    {
      name: "series-1",
      data: {},
    },
  ],
};

export const bardata = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Men", "Women", "Kids"],
    },
  },

  series: [
    {
      name: "series-1",
      data: [30, 40, 45],
    },
  ],
};

export const piedata = {
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Jewellery", "Sports", "Books", "Cosmetcis", "Others"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
