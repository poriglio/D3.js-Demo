console.log("hello")

var margin = {top: 40, right: 40, bottom: 40, left: 60},  //setting total margins
    width = 1500 - margin.left - margin.right,  //setting width of total graph
    height = 800 - margin.top - margin.bottom;  //setting heigh of total graph

    //start to define attributes:

    //Scales- functions that map from an input domain to an output range- scales are optional-but a good practice if you don't want to calculate the exact dimensions of the output.
    //2 types of scales-ordinal and quantitative.
    

var x0 = d3.scale.ordinal()             //ordinal scales have a discrete domain, or a set number of attributes that simplify the code to map the visual representation.
    .rangeRoundBands([0, width], .1);  //d3's rangeband calculates space evenly on the x-axis, using domain(data space) and range(display space)

var x1 = d3.scale.ordinal();  //simply defining x1 for later in the code

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.ordinal()   //using scale.ordinal to map the color attributes- the order is the exact order in which the bars will render
    .range(["#971A1A", "#113617", "#9b6212", "#b9ce00", "#aaaaaa", "#4a84d2", "#a95ede"]);

var xAxis = d3.svg.axis()  //defining and creating the svg x axis and scale (x0). SVG's are formatted to appear in the top left corner so orienting is a must
    .scale(x0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));

var svg = d3.select("body").append("svg")     //adding the scalable vector graphic by selecting 'body' and adding and "svg " attribute class
    .attr("width", width + margin.left + margin.right)   
    .attr("height", height + margin.top + margin.bottom)
  .append("g")     //adding the 'g' element, which is essentially the glue that groups svg elements together
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //The SVG Transform Attribute applies a list of transformations to an element and it's children , and then translate to the page

d3.csv("./js/joshData.csv", function(error, data) { //pulling in the csv data
  if (error) throw error;

  var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State"; });  //using 'd3.keys.data', d3 is turning the data into a standard, indexed array

  data.forEach(function(d) {   //d is the data
    d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });  //mapping the ages and making sure they are a number
  });

  x0.domain(data.map(function(d) { return d.State; }));  //setting up data for the x axis
  x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
  y.domain([0, d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); })]); //setting the domain to be the maximum value of the age data

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")      
      .call(xAxis);    //appending another "g element and giving it attributes "

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 8)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Population");     //giving our y axis the proper increments and spacing

  var state = svg.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; });  //giving the x-axis the proper labeling, spacing and incrementing

  state.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("width", x1.rangeBand())
      .attr("x", function(d) { return x1(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .style("fill", function(d) { return color(d.name); });

  var legend = svg.selectAll(".legend")
      .data(ageNames.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")      
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);  //adding the legend rects in the top right corner

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
.style("text-anchor", "end")
      .text(function(d) { return d; });  //setting legend text 

});