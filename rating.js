var xValues = [1,2,3,4,5];
var yValues = [1,8,17,22,18];
var barColors = ["pink", "violet","red","sky blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Rating of Scenery"
    }
  }
});

var xValues = [1,2,3,4,5];
var yValues = [1,8,17,22,18];
var barColors = ["red","violet","blue","pink"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Rating of Scenery and Crafts"
    }
  }
});
