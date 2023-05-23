import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "react-bootstrap/Badge";
import EmployeeList from "./components/EmployeeList";

function App() {
  let employees = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "empleado01.png",
      img: "./img/avatar1.png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "empleado02.png",
      img: "./img/avatar2.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "empleado03.png",
      img: "./img/avatar3.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "empleado04.png",
      img: "./img/avatar4.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "empleado05.png",
      img: "./img/avatar5.png",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "empleado06.png",
      img: "./img/avatar6.png",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "empleado07.png",
      img: "./img/avatar7.png",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "empleado08.png",
      img: "./img/avatar8.png",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "empleado09.png",
      img: "./img/avatar9.png",
    },
  ];

  return (
    <div className="container d-flex flex-column align-items-center">
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
