    var map = new Datamap({
        element: document.getElementById('container'),
        scope: "usa",
        fills: {
            defaultFill: '#C3C3C3',
        },
        data: states,
    });