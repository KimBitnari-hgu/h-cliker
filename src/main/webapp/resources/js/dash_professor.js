Chart.defaults.global = {
  animation: true,
  animationSteps: 60,
  animationEasing: "easeOutBack",
  showScale: true,
  scaleOverride: false,
  scaleSteps: null,
  scaleStepWidth: null,
  scaleStartValue: null,
  scaleLineColor: "rgba(0,0,0,.1)",
  scaleLineWidth: 1,
  scaleShowLabels: true,
  scaleLabel: "<%=value%>",
  scaleIntegersOnly: true,
  scaleBeginAtZero: false,
  scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  scaleFontSize: 12,
  scaleFontStyle: "normal",
  scaleFontColor: "#666",
  responsive: true,
  maintainAspectRatio: true,
  showTooltips: true,
  customTooltips: false,
  tooltipEvents: ["mousemove", "touchstart", "touchmove"],
  tooltipFillColor: "rgba(0,0,0,0.8)",
  tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  tooltipFontSize: 14,
  tooltipFontStyle: "normal",
  tooltipFontColor: "#fff",
  tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  tooltipTitleFontSize: 14,
  tooltipTitleFontStyle: "bold",
  tooltipTitleFontColor: "#fff",
  tooltipYPadding: 6,
  tooltipXPadding: 6,
  tooltipCaretSize: 8,
  tooltipCornerRadius: 6,
  tooltipXOffset: 10,
  tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
  multiTooltipTemplate: "<%= value %>",
  onAnimationProgress: function() {},
  onAnimationComplete: function() {}
};

// BEGIN BAR CHART ============================================

var barData = {
  labels: ["9/21", "9/24", "9/28", "10/5", "10/8", "10/12", "10/15"],
  datasets: [{
    label: "My dataset",
    fillColor: "rgba(159, 131, 201,0.5)",
    strokeColor: "rgba(159, 131, 201,0.8)",
    highlightFill: "rgba(159, 131, 201,0.75)",
    highlightStroke: "rgba(159, 131, 201,1)",
    data: [35, 40, 30, 40, 40, 35, 40]
  }]
};
var barOptions = {
  scaleBeginAtZero: true,
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  barShowStroke: true,
  barStrokeWidth: 2,
  barValueSpacing: 5,
  barDatasetSpacing: 1,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

var barCtx = document.getElementById("myBarGraph").getContext("2d");
var myBarChart = new Chart(barCtx).Bar(barData, barOptions);


// BEGIN LINE CHART ============================================

var lineGraphData = {
  labels: ["1번", "2번", "3번", "4번", "5번", "6번", "7번"],
  datasets: [{
    label: "My First dataset",
    fillColor: "rgba(159, 131, 201,0.2)",
    strokeColor: "rgba(159, 131, 201,1)",
    pointColor: "rgba(159, 131, 201,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(159, 131, 201,1)",
    data: [30, 60, 100, 60, 10, 60, 40]
  }, {
    label: "My Second dataset",
    fillColor: "rgba(138, 138, 138,0.2)",
    strokeColor: "rgba(138, 138, 138,1)",
    pointColor: "rgba(138, 138, 138,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(138, 138, 138,1)",
    data: [30, 50, 60, 50, 10, 80, 60]
  }]
};
var lineGraphOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var lineCtx = document.getElementById("myGraph").getContext("2d");
var myLineChart = new Chart(lineCtx).Line(lineGraphData, lineGraphOptions);
