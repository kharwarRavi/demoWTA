import React from "react";
import MaterialTable from "../../components/materialTable";

const Employees = () => {
  return (
    <div className="contentBox">
      <div className="card">
        <div className="cardBox-1">
          <p>Department</p>
          <div></div>
        </div>
        <div className="cardBox-2">
          <p>Employees</p>
          <div className="dFlexBox">
            <div>
              <div></div>
              <p>Designers</p>
            </div>
            <div>
              <div></div>
              <p>Developers</p>
            </div>
            <div>
              <div></div>
              <p>Testers</p>
            </div>
            <div>
              <div></div>
              <p>Managers</p>
            </div>
          </div>
        </div>
      </div>
        <MaterialTable />
    </div>
  );
};

export default Employees;
