import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
  pro17
} from "../utils";

// export const navLists = ["Store", "Mac", "iPhone", "Support"];
export const navLists = [
  { label: "Store", url: "https://www.apple.com/store" },
  { label: "Mac", url: "https://www.apple.com/mac" },
  { label: "iPhone", url: "https://www.apple.com/iphone" },
    { label: "Support", url: "https://support.apple.com/" },
  // Add more if needed
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A19 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 17 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
  // {
  //   id: 5,
  //   textLists: ["All-new Action button.", "What will yours do?."],
  //   video: pro17,
  //   videoDuration: 5,
  // },
];

export const models = [
  {
    id: 1,
    title: "iPhone 17 Pro Max in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 17 Pro Max in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 17 Pro Max in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 17 Pro Max in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];