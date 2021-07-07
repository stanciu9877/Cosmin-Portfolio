import { v4 as uuidv4 } from "uuid";
import AmazonClone from "../images/Amazon-Clone.PNG";
import CovidMap19 from "../images/CovidMap19.PNG";
import workinprogress from "../images/workinprogress.PNG";

const projects = [
  {
    id: uuidv4(),
    name: "Amazon Clone",
    desc: "A fully working Amazon clone, created using reactJs, express, and stripe",
    img: AmazonClone,
    host: "https://clone-8bc8e.web.app/",
  },
  {
    id: uuidv4(),
    name: "Covid19Traker",
    desc: "A simple website made using ReactJS and Material-Ui. It show the worldwide cases in real time on an interactive map made with Leaflet ",
    img: CovidMap19,
    host: "https://covidtracker19new.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "In progress...",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed efficitur ex. Pellentesque tempus est felis, non fermentum tortor facilisis eget. Morbi quis erat vitae magna dictum cursus nec nec purus",
    img: workinprogress,
  },
  {
    id: uuidv4(),
    name: "In progress...",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed efficitur ex. Pellentesque tempus est felis, non fermentum tortor facilisis eget. Morbi quis erat vitae magna dictum cursus nec nec purus",
    img: workinprogress,
  },
  {
    id: uuidv4(),
    name: "In progress",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed efficitur ex. Pellentesque tempus est felis, non fermentum tortor facilisis eget. Morbi quis erat vitae magna dictum cursus nec nec purus",
    img: workinprogress,
  },
];

export default projects;
