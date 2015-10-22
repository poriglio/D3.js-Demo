    var map = new Datamap({
        element: document.getElementById('container'),
        scope: "usa",
        fills: {
            defaultFill: '#C3C3C3',
        },
        data: states,
        geographyConfig : {
	        // popupTemplate: function(geography,states){
	        // 	return "<div class='hoverinfo'>" + geography.properties.name + "<strong>Number of Coffee Shops: </strong><br>" + states.stores
        	// },
        }
    });