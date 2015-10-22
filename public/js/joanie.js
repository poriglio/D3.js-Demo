var json = {
 "name": "CHAMPION!",
 "children": [
  {
   "name": "FINALS",
   "children": [
    {
     "name": "FINAL FOUR",
     "children": [
      {"name": "Team 1", "size": 3938},
      {"name": "Team 2", "size": 743}
     ]
    },
    {
     "name": "FINAL FOUR",
     "children": [
      {"name": "Team 3", "size": 7074},
      {"name": "Team 4", "size": 7074}

     ]
    }
   ]
  },
  {
   "name": "FINALS",
   "children": [
    {
     "name": "FINAL FOUR",
     "children": [
      {"name": "Team 5", "size": 1675},
      {"name": "Team 6", "size": 2042}
     ]
    },
      {
     "name": "FINAL FOUR",
     "children": [
      {"name": "Team 7", "size": 1983},
      {"name": "Team", "size": 2047},
     ]
    },
   ]
  },
 ]
};

var margin = {top: 20, right: 120, bottom: 20, left: 620},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [-d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

console.log(json)
d3.json(json, function(error, flare) {
  // if (error) throw error;
  console.log('its working')
  root = json;
  root.x0 = height / 2;
  root.y0 = 0;

  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  root.children.forEach(collapse);
  update(root);
});

// d3.select(self.frameElement).style("height", "800px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; }); // how long the lines extend.

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("id", "team01") // giving nodes an ID - for further customization
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "#14228A" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? 20 : 20; }) // changes text position
      .attr("dy", "-2em") // changes text positioning
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + -d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", 9.5)
      .style("fill", function(d) { return d._children ? "brown" : "#cf5300"; }); // changes color of circles/nodes

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("l", 1e-6); // changes the direction that the circle exit to

  // nodeExit.select("text")
  //     .style("fill-opacity", 1e-1);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g") // where the line intersects with the circle.
      .attr("class", "link") // makes the line thin, without fill and coming from the same point.
      .style("stroke-dasharray", ("5, 5"))//changes to dashed lines
      .attr("d", function(d) { // this function makes the circles and the lines move at the same time, like one movement, not two separate movements. 
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()  // removes the lines when nodes are removed.
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) { // the position and direction the lines move in to create the new branch
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}
