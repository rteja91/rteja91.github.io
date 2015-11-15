paper.install(window);
function testing() {
var myPoint = new Point(100, 200); 
var myPoint2 = new Point(300, 200);
var mypoint3 = new Point(180, 200); 
	// Get a reference to the canvas object
		var canvas = document.getElementById('MyAwesomeCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
	
	var circle1 = new Path.Circle({
	center: myPoint,
	radius: 60,
	strokeColor: 'black',
	strokeWidth: 10
});

	var incircle1 = new Path.Circle({
	center: myPoint,
	radius: 10,
	strokeColor: 'black',
	strokeWidth: 3
});


	var circle2 = new Path.Circle({
	center: myPoint2,
	radius: 60,
	strokeColor: 'black',
	strokeWidth: 10
});

var incircle2 = new Path.Circle({
	center: myPoint2,
	radius: 10,
	strokeColor: 'black',
	strokeWidth: 3
});

var myPath = new Path();
myPath.strokeColor = 'black';
myPath.strokeWidth = 2;
myPath.add(new Point(100, 200));
myPath.add(new Point(190, 197));

var myPath2 = new Path();
myPath2.strokeColor = 'black';
myPath2.strokeWidth = 2;
myPath2.add(new Point(100, 200));
myPath2.add(new Point(150, 120));

var myPath3 = new Path();
myPath3.strokeColor = 'black';
myPath3.strokeWidth = 2;
myPath3.add(new Point(190, 197));
myPath3.add(new Point(140, 100));
myPath3.add(new Point(155, 95));


var myPathq = new Path();
myPathq.strokeColor = 'black';
myPathq.strokeWidth = 2;
myPathq.add(new Point(140, 100));
myPathq.add(new Point(135, 100));
myPathq.smooth();

var myPath4 = new Path();
myPath4.strokeColor = 'black';
myPath4.strokeWidth = 2;
myPath4.add(new Point(250, 110));
myPath4.add(new Point(150, 120));

var myPath5 = new Path();
myPath5.strokeColor = 'black';
myPath5.strokeWidth = 2;
myPath5.add(new Point(260, 130));
myPath5.add(new Point(190, 197));

var myPath6 = new Path();
myPath6.strokeColor = 'black';
myPath6.strokeWidth = 2;
myPath6.add(new Point(233, 80));
myPath6.add(myPoint2);

var myPath7 = new Path();
myPath7.strokeColor = 'black';
myPath7.strokeWidth = 2;
myPath7.add(new Point(203, 75));
myPath7.add(new Point(213, 65));
myPath7.add(new Point(263, 100));
myPath7.add(new Point(253, 110));

myPath7.smooth();
function onFrame(event) {
	// Each frame, rotate the path by 3 degrees:
	circle1.rotate(3);
	circle2.rotate(3);

}


function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}
	}

testing();

