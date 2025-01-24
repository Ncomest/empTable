import React from "react";
import "./EmployeeCard.css";
import { useNavigate, useParams } from "react-router-dom";
import { Employees } from "../../App";

const EmployeeCard = ({ employees }: { employees: Employees[] }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const employee = employees.find((empl) => empl.id === Number(id));

  const dateString: string | undefined = employee?.birthDate;
  const date: Date = new Date(dateString!);
  const localDateBirthDayEmpl: string = date.toLocaleString();

  const photo = employee?.photo
    ? `data:image/jpeg;base64,${employee.photo}`
    : "https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_1280.png";

  if (!employee) return <p>Сотрудник не найден</p>;

  return (
    <div className="employee-container">
      <button onClick={() => navigate("/")}>вернуться к списку</button>
      <div className="employee-card">
        <div className="employee-photo">
          <img src={photo} alt="Фото сотрудника" />
        </div>
        <div className="employee-info">
          <h2>
            {employee.lastName} {employee.firstName} {employee.middleName}
          </h2>
          <p>
            <strong>Дата рождения:</strong>{" "}
            <span id="employeeBirthDate">{localDateBirthDayEmpl}</span>
          </p>
          <p>
            <strong>Департамент:</strong> <span>{employee.department}</span>
          </p>
          <p>
            <strong>Должность:</strong> <span>{employee.post}</span>
          </p>
          <p>
            <strong>з/п:</strong> <span>{employee.salary} руб.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
