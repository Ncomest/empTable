import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import EmployeesTable from "./pages/employee_registry/EmployeesTable.tsx";
import EmployeeCard from "./pages/employee_card/EmployeeCard.tsx";
import { API_URL } from "./CONST.ts";

export type Employees = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  department: string;
  post: string;
  salary: number;
  photo?: string | undefined;
};

function App() {
  const [employees, setEmployees] = useState<Employees[]>([]);

  useEffect(() => {
    const fetchEmpl = async () => {
      try {
        const response = await fetch(`${API_URL}/employee`);
        const data = await response.json();
        setEmployees(data.employee);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmpl();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeesTable employees={employees} />} />
        <Route
          path="/employee/:id"
          element={<EmployeeCard employees={employees} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
