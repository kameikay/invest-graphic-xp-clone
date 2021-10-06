// VALORES
const valorPosFixado = document.getElementById("valorPosFixado").innerText;
const valorInflacao = document.getElementById("valorInflacao").innerText;
const valorInternacional =
  document.getElementById("valorInternacional").innerText;

// CHART
const counter = {
  id: "counter",
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
    } = chart;
    ctx.save();

    ctx.font = "1rem Open Sans";
    ctx.textAlign = "center";

    let text = `R$ ${outputEl.textContent}`;
    ctx.fillText("Investimento inicial:", width / 2, top + height / 2.2);
    ctx.fillText(text, width / 2, top + height / 1.8);
  },
};

const CHART = document.getElementById("myChart");
Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(CHART, {
  type: "doughnut",
  data: {
    labels: ["Pós Fixado", "Inflação", "Internacional"],
    datasets: [
      {
        label: "Points",
        backgroundColor: ["#6D7F99", "#DA7500", "#311B92"],
        data: [valorPosFixado, valorInflacao, valorInternacional],
        hoverBackgroundColor: "#26C281",
      },
    ],
  },
  options: {
    cutout: "80%",

    legend: {
      display: false,
    },
  },
  plugins: [counter],
});

// LINE CHART
const labels = [
  "MAR 18",
  "ABR 18",
  "MAIO 18",
  "JUN 18",
  "JUL 18",
  "AGO 18",
  "SET 18",
  "OUT 18",
  "NOV 18",
  "DEZ 18",
  "JAN 19",
  "FEV 19",
  "MAR 19",
  "ABR 19",
  "MAIO 19",
  "JUN 19",
  "JUL 19",
  "AGO 19",
  "SET 19",
  "OUT 19",
  "NOV 19",
  "DEZ 19",
  "JAN 20",
  "FEV 20",
  "MAR 20",
  "ABR 20",
  "MAIO 20",
  "JUN 20",
  "JUL 20",
  "AGO 20",
  "SET 20",
  "OUT 20",
  "NOV 20",
  "DEZ 20",
];

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
];
const lineChart = document.getElementById("lineChart");
Chart.defaults.scale.ticks.beginAtZero = true;

let rentabilidadeChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Rendimentos",
        data: data,
        borderColor: "#ffc709",
        tension: 0.1,
        fill: false,
      },
    ],
  },
});
