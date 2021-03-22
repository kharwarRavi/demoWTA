import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const columns = [
  {
    name: "fullName",
    label: "Full Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "jobTitle",
    label: "Job Title",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "department",
    label: "Department",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "location",
    label: "Location",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "age",
    label: "Age",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "salary",
    label: "Salary",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "actions",
    label: "Actions",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const data = [
  { fullName: "Joe James", jobTitle: "Test Corp", department: "Yonkers", location: "NY", age: 28, salary: "12,00,000" },
  { fullName: "John Walsh", jobTitle: "Test Corp", department: "Hartford", location: "CT", age: 28, salary: "12,00,000" },
  { fullName: "Bob Herm", jobTitle: "Test Corp", department: "Tampa", location: "FL", age: 28, salary: "12,00,000" },
  { fullName: "James Houston", jobTitle: "Test Corp", department: "Dallas", location: "TX", age: 28, salary: "12,00,000" },
];

const options = {
  filterType: "radio",
};

const MaterialTable = () => {
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          paper: {
            background: "#252525 0% 0% no-repeat padding-box",
            color: "#FFFFFF",
          },
        },
        MUIDataTableSelectCell: {
          root: {
            background: "#252525 0% 0% no-repeat padding-box !important",
          },
          checkboxRoot: {
            color: "#FFFFFF",
          },
        },
        MUIDataTableHeadCell: {
          root: {
            background: "#252525 0% 0% no-repeat padding-box !important",
            color: "#FFFFFF",
          },
          toolButton: {
            color: "#FFFFFF",
          },
        },
        MUIDataTableBodyCell: {
          root: {
            background: "#252525 0% 0% no-repeat padding-box !important",
            color: "#FFFFFF",
          },
        },
        MUIDataTablePagination: {
          toolbar: {
            color: "#FFFFFF",
          },
          root: {
            color: "#FFFFFF",
          },
        },
      },
    });
  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={"List of Employees"}
        className="muiTable"
        data={data}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
  );
};

export default MaterialTable;
