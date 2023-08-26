
const { getYearFromDate } = require("../../models/globals");
const { getSupplierNameById } = require("../../services/suppliers")
const globals = require("../../models/globals");

let curSupCount = globals.supCount;

// Copy the global arrays into local arrays
let names = globals.names.slice();
let numbers = globals.numbers.slice();

// Create an SVG container
const svg = d3.select("svg").attr("transform", "translate(40, 0)"); // Adjust the x value as needed;

// Create scales
const xScale = d3.scaleLinear()
    .domain([0, curSupCount + 1]) // Update the domain based on curSupCount
    .range([0, 300]);

const yScale = d3.scaleLinear()
    .domain([30, 0])
    .range([0, 300]);

function updateGraph(curSupCount) {
    const data = Array.from({ length: curSupCount }, (_, i) => ({ x: i + 1, y: numbers[i] }));
    const customTickValuesX = Array.from({ length: curSupCount }, (_, i) => names[i]); // Use the names array for x-axis labels

    svg.selectAll("circle").remove();
    svg.selectAll(".y-value-text").remove();

    // Create circles for data points
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.x))
        .attr("cy", d => yScale(d.y))
        .attr("r", 5);

    svg.selectAll(".y-value-text")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "y-value-text")
        .attr("x", d => xScale(d.x))
        .attr("y", d => yScale(d.y) - 10)
        .text(d => d.y);

    svg.select(".x-axis").remove();
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + 300 + ")")
        .call(d3.axisBottom(xScale)
            .tickValues(Array.from({ length: curSupCount }, (_, i) => i + 1))
            .tickFormat((_, i) => customTickValuesX[i]) // Use customTickValuesX for x-axis labels
        );
}


// Add x-axis
svg.append("g")
    .attr("class", "x-axis") // Add a class for selection
    .attr("transform", "translate(0," + 300 + ")")
    .call(d3.axisBottom(xScale)
        .tickValues(Array.from({ length: curSupCount }, (_, i) => i + 1)) // Set the desired tick values
    );

svg.append("g")
    .call(d3.axisLeft(yScale));

// Change curSupCount and update the graph
updateGraph(curSupCount);

