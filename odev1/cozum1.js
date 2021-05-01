// görev 1
for (let i = 0; i < 3; i++) {
    $('#gorev1 ul').append($('<li></li>').text($('article h2')[i].innerHTML));
}

// görev 2
$('#gorev2 input').val($('article h2').length)

// görev 3
$('#gorev3 input').val($('h1').text());

// görev 4
for (let i = 0; i < $('article h2').length; i++) {
    $('article h2')[i].innerHTML += ' (' + $('article p')[i].innerHTML.length + ' karakter)';
}

// görev 5
$('article h2:odd').css('color', 'blue')
$('article h2:even').css('color', 'orange')
$('article h1').css('color', 'red')

// görev 6
$('article h2:first').fadeOut('slow')

// görev 7 ??
$('article').filter(function () {
    $('h2', this).innerHTML == 'can'
})

// görev 8
$(function () {
    $('article p:first').load('lorem.html')
})

// görev 9 ??
$('h2').mouseover(function () {
    $('#gorev9 input').val($('article p').text())
})

// görev 10
$('body').append($('<img src="check.png" width="100">').css(
    {
        'z-index': '+1',
        'float': 'right',
        'position': 'absolute',
        'bottom': '10px',
        'right': '50px'
    })
)