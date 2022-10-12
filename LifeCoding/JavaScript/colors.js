function LinksSetColor(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //     console.log(alist[i]);
    //     alist[i].style.color = color;
    //     i++;
    // }
    $('a').css('color', color)
}
var Body = {
    setColor: function (dayNight) {
        var target = document.querySelector('body')
        if (dayNight) {
            target.style.backgroundColor = 'black';
            target.style.color = 'white';
        } else {
            target.style.backgroundColor = 'white';
            target.style.color = 'black';
        }

    }
}
function dayNightHandler(self) {
    if (self.value === 'night') {
        Body.setColor(true);
        LinksSetColor('powderblue');
        self.value = 'day';
    } else {
      Body.setColor(false);
        LinksSetColor('blue');
        self.value = 'night';
    }
}