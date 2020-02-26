import React from "react";
import { useTransactionHistory } from "../../hooks/useTransactionHistory";
import { useEffect } from "react";
import Chart from "chart.js";

export default function UserDashboard() {
  const { transactions } = useTransactionHistory();

  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
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
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="row">
        <div className="column other">
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
        <div className="column container-transactions ">
          <div className="transactions-container">
            <table className="table">
              <thead>
                <tr>
                  <th className="th-border" scope="col">
                    Account number
                  </th>
                  <th className="th-border" scope="col">
                    Transfer amount
                  </th>
                  <th className="th-border" scope="col">
                    Transaction date
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions &&
                  transactions.map(transaction => {
                    return (
                      <tr key={transaction.id}>
                        <td>{transaction.accountNumber}</td>
                        <td>{transaction.transferAmount}</td>
                        <td>{transaction.transactionDate}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
