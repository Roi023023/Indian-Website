
const { getNumPerPriceRange } = require("../../models/globals");

async function fetchDataAndRenderGraph() {
    //data for the graph
    const priceRange1Count = await getNumPerPriceRange(1);
    const priceRange2Count = await getNumPerPriceRange(2);
    const priceRange3Count = await getNumPerPriceRange(3);

    const data = [
        { x: 0.4, y: priceRange1Count },
        { x: 1.8, y: priceRange2Count },
        { x: 3, y: priceRange3Count },
    ];




    //graph styling code

// Create an SVG container
const svg = d3.select("svg").attr("transform", "translate(40, 0)"); // Adjust the x value as needed;

// Create scales
const xScale = d3.scaleLinear()
    .domain([0, 3])
    .range([0, 550]);

const yScale = d3.scaleLinear()
    .domain([10, 0])
    .range([0, 300]);

const customTickValues = ["1 - 10$", "11 - 20$", "21 - 30$"];

// Create circles for data points
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 5);

// Add axes
svg.append("g")
    .attr("transform", "translate(0," + 300 + ")")
    .call(
d3.axisBottom(xScale)
    .tickValues([0.4, 1.8, 3]) // Set the desired tick values
    .tickFormat((d, i) => customTickValues[i]) // Custom tick labels
);

svg.selectAll(".y-value-text")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "y-value-text")
    .attr("x", d => xScale(d.x))
    .attr("y", d => yScale(d.y) - 10) // Adjust the value as needed
    .text(d => d.y);


svg.append("g")
    .call(d3.axisLeft(yScale));
}
fetchDataAndRenderGraph();