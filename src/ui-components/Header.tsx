import React from "react";

const Header = () => {
  return (
    <nav className="absolute top-0">
      <ul className="flex justify-between">
        <li className="bg-blue p-6 hover:bg-sky-700">
          <a href="/home">Home</a>
        </li>
        <li className="bg-blue p-6 bg-header">
          <a href="/nutrition">Nährungswerte</a>
        </li>

        <li className="bg-blue p-6 hover:bg-sky-700">
          <a href="/gymplan">Trainingsplan</a>
        </li>
        <li className="bg-blue p-6 hover:bg-sky-700">
          <a href="/progress">Fortschritt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
