import EmployeeRow from "./EmployeeRow";

function EmployeeList({ employees }) {
  return (
    <div className="container">
      {employees.map((employee) => (
        <EmployeeRow key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
