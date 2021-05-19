// function importBubble()
// {
//     d3.json("", function (data) 
//     {
//         var canvas = d3.select(".dataContainer")
//         .append("svg")
//         .attr("height", 700)
//         .attr("width", 1000);

//         canvas.selectAll("rect")
//             .data(data)
//             .enter()
//             .append("rect")
//             .attr("width", function (d)
//             {
//                 return d.rank * 60;
//             })
//             .attr("height", 50)
//             .attr("y", function(d, i)
//             {
//                 return i * 80
//             })
//             .attr("fill", "red");

//         canvas.selectAll("text")
//             .data(data)
//             .enter()
//             .append("text")
//             .attr("fill", "#ffffff")
//             .attr("y", function (d, i)
//             {
//                 return i * 88 + 25;
//             })
//             .attr("x", 5)
//             .text(function (d) 
//             {
//                 return d.name + "rank : " + d.rank;
//             })
//     })

// }


const canvas = d3.select(".canva");

const svg = canvas.append("svg")
                .attr('width', "500")
                .attr("height", "250");

svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 50)
    .attr("fill", "blue");

svg.append("rect")
    .attr("width", 10)
    .attr("height", 50)
    .attr("x", 150)
    .attr("y", 80);

