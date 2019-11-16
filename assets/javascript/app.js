var items = ["skiing",
    "mountain biking",
    "hiking",
    "weight lifting",
    "kayaking",
    "rock climbing",
    "back packing",
    "snow boarding"
];

var gifTastic = {
    items: items,
    title: "Gif-tastic",
    newImage: "",

    // Create a button for each item in an array
    createButtons: function () {
        for (i = 0; i < this.items.length; i++) {
            var newButton = $("<button data-subject=\"" + this.items[i] + "\" class=\"btn\">");
            console.log(newButton);
            newButton.text(this.items[i]);
            $("#btn-group").append(newButton);
        }
        var gifArea = $("<div id=\"gif-area\">gifArea</div>");
    }
};


    // Create our query string
    var queryURL = "https://ridb.recreation.gov/api/v1/activities?query=Hiking&limit=50&offset=0&apikey=14410cf0-d2bb-40b9-b5d5-f28b35c1598b";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(JSON.stringify(response));
    });
