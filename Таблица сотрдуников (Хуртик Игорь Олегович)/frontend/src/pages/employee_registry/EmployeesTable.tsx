import React, { useEffect, useState } from "react";
import "./employeeTable.css";
import TableEmployees from "../../components/TableEmployees/TableEmployees.tsx";
import { Employees } from "../../App.tsx";

const EmployeesTable = ({ employees }: { employees: Employees[] }) => {
  const [inputValue, setInputValue] = useState("");
  const [filterEmpl, setFilterEmpl] = useState<Employees[]>([]);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilterEmpl(employees);
    } else {
      const employeeFilter = employees.filter((empl) => {
        const fullName =
          `${empl.firstName} ${empl.lastName} ${empl.middleName}`.toLowerCase();
        return fullName.includes(inputValue.toLowerCase());
      });
      setFilterEmpl(employeeFilter);
    }
  }, [inputValue, employees]);

  return (
    <section className="main-container">
      <input
        type="text"
        className="employee-search-bar_input"
        placeholder="Введите ФИО сотрудника..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <TableEmployees employees={filterEmpl} />
    </section>
  );
};

export default EmployeesTable;
