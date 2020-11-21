$.getJSON('data/data.json', function(data) {
    // json data is stored in 'result'
    handlebarsCallback(data);
});

function handlebarsCallback(jsonData) {
    $.get('index.hbs', function(data) {
        var template = Handlebars.compile(data);
        $("#body").html(template(jsonData));
    }, 'html');
};
/*

$.getJSON('data/data.json', function(data) {
    $('<div class="container" id="downloads"></div>').appendTo('body');
    $('<div class="container" id="about"></div>').appendTo('body');
    $('<div class="container" id="use-cases"></div>').appendTo('body');
    $('<div class="container" id="features"></div>').appendTo('body');

    data.downloads.forEach(function(data, index) {
        // console.log(data);
        $('<div class="row"> <div class="col-12"><h2>' +
                data.title + '</h2> <p>' +
                data.text + '</p><p><a href="' +
                data.link + '">' +
                data.linkText + '</a></p></div></div>')
            .appendTo('#downloads');

    });

    data.about.forEach(function(data, index) {
        // console.log(data);
        $('<div class="row"> <div class="col-12"><h2>' + data.title + '</h2> <p>' + data.text + '</p></div></div>').appendTo('#about');
    });
    data.useCases.forEach(function(data, index) {
        // console.log(data);
        $('<div class="row"> <div class="col-12"><h2>' + data.title + '</h2> <p>' + data.text + '</p></div></div>').appendTo('#use-cases');
    });
    data.features.forEach(function(data, index) {
        // console.log(data);
        $('<div class="row"> <div class="col-12"><h2>' + data.title + '</h2> <p>' + data.text + '</p></div></div>').appendTo('#features');
    });

    // $('#about').append('<div>hello</div>');
});*/