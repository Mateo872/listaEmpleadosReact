import Badge from "react-bootstrap/Badge";
import EmployeeAvatar from "./EmployeeAvatar";

function EmployeeRow({ employee }) {
  return (
    <div className="container_employees d-flex align-items-center gap-2 my-4">
      <EmployeeAvatar src={employee.img} alt="Avatar" />
      <div className="employees_features">
        <h3 className="mb-0">{employee.fullName}</h3>
        <div className="employees desc d-flex align-items-center gap-1">
          <p className="mb-0">{employee.title}</p>
          <Badge className="primary">{employee.department}</Badge>
        </div>
      </div>
    </div>
  );
}

export default EmployeeRow;
