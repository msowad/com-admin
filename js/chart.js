(function ($) {
  "use strict";

  const rrc = $("#recent-rep-chart");
  if (rrc) {
    rrc.height = 100;

    new Chart(rrc, {
      type: "line",
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        type: "line",
        defaultFontFamily: "Poppins",
        datasets: [
          {
            label: "Foods",
            data: [0, 30, 10, 120, 50, 63, 10],
            backgroundColor: "transparent",
            borderColor: "rgba(220, 53, 69, 0.75)",
            borderWidth: 3,
            pointStyle: "circle",
            pointRadius: 5,
            pointBorderColor: "rgba(220, 53, 69, 1)",
            pointBackgroundColor: "rgba(220, 53, 9, 0.6)",
          },
          {
            label: "Electronics",
            data: [0, 50, 30, 10, 70, 45, 60],
            backgroundColor: "transparent",
            borderColor: "rgba(0, 128, 0, 0.75)",
            borderWidth: 3,
            pointStyle: "circle",
            pointRadius: 5,
            pointBorderColor: "rgba(0, 128, 0, 1)",
            pointBackgroundColor: "rgba(0, 128, 0, 0.6)",
          },
        ],
      },
      options: {
        resposive: true,
        tooltips: {
          mode: "index",
          titleFontSize: 12,
          titleFontColor: "#000",
          bodyFontColor: "#000",
          backgroundColor: "#fff",
          titleFontFamily: "Poppins",
          bodyFontFamily: "Poppins",
          cornerRadius: 3,
          intersect: false,
        },
        legend: {
          display: false,
          labels: {
            usePointStyle: true,
            fontFamily: "Poppins",
          },
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                drawBorder: false,
              },
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              tricks: {
                fontFamily: "Poppins",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                drawBorder: false,
              },
              scaleLabel: {
                display: true,
                labelString: "Value",
                fontFamily: "Poppins",
              },
              tricks: {
                fontFamily: "Poppins",
              },
            },
          ],
        },
        title: {
          display: false,
          text: "Normal Legend",
        },
      },
    });
  }

  const rc = $("#radar-chart");
  if (rc) {
    rc.height = 200;
    var myChart = new Chart(rc, {
      type: "radar",
      data: {
        labels: [
          ["Eating", "Dinner"],
          ["Drinking", "Water"],
          "Sleeping",
          ["Designing", "Graphics"],
          "Coding",
          "Cycling",
          "Running",
        ],
        defaultFontFamily: "Poppins",
        datasets: [
          {
            label: "My First dataset",
            data: [65, 59, 66, 45, 56, 55, 40],
            borderColor: "rgba(0, 123, 255, 0.6)",
            borderWidth: "1",
            backgroundColor: "rgba(0, 123, 255, 0.4)",
          },
          {
            label: "My Second dataset",
            data: [28, 12, 40, 19, 63, 27, 87],
            borderColor: "rgba(0, 123, 255, 0.7",
            borderWidth: "1",
            backgroundColor: "rgba(0, 123, 255, 0.5)",
          },
        ],
      },
      options: {
        legend: {
          position: "top",
          labels: {
            fontFamily: "Poppins",
          },
        },
        scale: {
          ticks: {
            beginAtZero: true,
            fontFamily: "Poppins",
          },
        },
      },
    });
  }
})(jQuery);
