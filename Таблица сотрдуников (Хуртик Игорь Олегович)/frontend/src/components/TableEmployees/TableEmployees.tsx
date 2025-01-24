import React, { useState } from "react";
import "./TableEmployees.css";
import { useNavigate } from "react-router-dom";
import { Employees } from "../../App";

const TableEmployees = ({ employees }: { employees: Employees[] }) => {
  const [slice, setSlice] = useState<number>(1);
  const [startSlice, setStartSlice] = useState<number>(0);
  const [lastSlice, setLastSlice] = useState<number>(5);

  const navigate = useNavigate();

  const handleNextPage: React.ReactEventHandler = (): void => {
    setStartSlice(lastSlice);
    setLastSlice((prev) => prev + 5);
    setSlice((slice) => slice + 1);
  };

  const handlePrevPage: React.ReactEventHandler = (): void => {
    setLastSlice(startSlice);
    setStartSlice((prev) => prev - 5);
    setSlice((prev) => prev - 1);
  };

  return (
    <div className="table-container">
      <table>
        {employees.length === 0 && <div>Не работает сервер</div>}
        <thead>
          <tr>
            <th>Фамилия Имя Отчество</th>
            <th>Департамент</th>
            <th>Должность</th>
          </tr>
        </thead>
        <tbody>
          {employees.slice(startSlice, lastSlice).map((empl) => (
            <tr key={empl.id} onClick={() => navigate(`/employee/${empl.id}`)}>
              <td>
                {empl.lastName} {empl.firstName} {empl.middleName}
              </td>
              <td>{empl.department}</td>
              <td>{empl.post}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages-btn-container">
        {slice !== 1 && <button onClick={handlePrevPage}>назад</button>}
        {employees.length !== 0 && <p>{slice}</p>}
        {slice * 5 >= employees.length ? null : (
          <button onClick={handleNextPage}>дальше</button>
        )}
      </div>
    </div>
  );
};

export default TableEmployees;
