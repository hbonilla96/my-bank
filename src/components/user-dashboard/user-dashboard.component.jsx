import React from "react";
import { useTransactionHistory } from "../../hooks/useTransactionHistory";
import { useEffect, useState } from "react";
import Chart from "chart.js";
import { useExpenses } from "../../hooks/useExpenses";
import dayjs from "dayjs";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function UserDashboard() {
  const { transactions } = useTransactionHistory();
  const { expenses } = useExpenses();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let date = dayjs("");
  let date1 = dayjs().format("YYYY MM DD");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (expenses) {
      var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "# of Votes",
              data: [
                expenses.january,
                expenses.february,
                expenses.march,
                expenses.april,
                expenses.may,
                expenses.june
              ],
              backgroundColor: [
                "rgba(255, 99, 132)",
                "rgba(54, 162, 235)",
                "rgba(255, 206, 86)",
                "rgba(75, 192, 192)",
                "rgba(153, 102, 255)",
                "rgba(255, 159, 64)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true
        }
      });
    }
  }, [expenses]);

  const setDate = date => {
    return dayjs(date).format("DD/MM/YYYY");
  };

  return (
    <div className="dashboard-container">
      <div className="row row-container ">
        <div className="column container-transactions">
          <canvas
            className="title-font"
            id="myChart"
            width="400"
            height="400"
          ></canvas>
        </div>
        <div className="column container-transactions bs-select">
          <div className="transactions-container">
            <Paper className={(classes.root, "border-shadow-none")}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="title-font">
                        Account number
                      </TableCell>
                      <TableCell className="title-font">
                        Transfer amount
                      </TableCell>
                      <TableCell className="title-font">
                        Transfer date
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions &&
                      transactions
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map(transaction => {
                          return (
                            <tr key={transaction.id}>
                              <td className="title-font td-padding">
                                {transaction.accountNumber}
                              </td>
                              <td className="title-font td-paddingth-padding">
                                {transaction.transferAmount}
                              </td>
                              <td className="title-font td-padding">
                                {setDate(transaction.transactionDate)}
                              </td>
                            </tr>
                          );
                        })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={transactions ? transactions.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
