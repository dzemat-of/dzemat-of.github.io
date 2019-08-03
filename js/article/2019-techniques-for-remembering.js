var data = [
  {
	type: 'bar',
  	x: [1., 25., 25., 80.],
  	y: [
  		'Grupa 1 ', 
  		'Grupa 2 ', 
  		'Grupa 3 ',
  		'Grupa 4 '
  	],
  	orientation: 'h',
    marker:{
      color: ['rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(222,45,38,0.8)']
    },
  }
];

var layout = {
  title: {
    text: 'Procenat upamćenih riječi po grupi',
    side: 'bottom'
  },
  autosize: true,
  margin: {
    l: 100,
    r: 50,
    b: 50,
    t: 50,
    pad: 5
  }
  // paper_bgcolor: '#7f7f7f',
  // plot_bgcolor: '#c7c7c7'
};

Plotly.newPlot("plot", data, layout);