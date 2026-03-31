document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("chartContainer");
  const canvas = document.getElementById("barChart");

  if (!container || !canvas) {
    console.warn("Chart elements missing");
    return;
  }

  let priceRangeCounts;

  try {
    priceRangeCounts = JSON.parse(container.dataset.ranges);
  } catch (err) {
    console.error("Invalid JSON data", err);
    return;
  }

  if (typeof priceRangeCounts !== "object") {
    console.error("Invalid chart data format");
    return;
  }

  const labels = priceRangeCounts.map(r => r._id.toString());
  const data = priceRangeCounts.map(r => r.count);

  const backgroundColors = labels.map(() =>
    `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.2)`
  );

  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Number of Products",
        data,
        backgroundColor: backgroundColors,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});