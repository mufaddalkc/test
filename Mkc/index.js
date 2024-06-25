var count = 0
function next() {
    var element = document.getElementById('testimonials')
    count = count + 500
    element.scroll({left:count, top:0,behavior: 'smooth'})

}

function previous() {
    var element = document.getElementById('testimonials')
    count = count - 500
    element.scroll( {left:count, top:0,behavior: 'smooth'})

}



