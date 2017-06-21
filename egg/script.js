var egg = new Egg("t,e,c,h,i,o", function() {
    $('#egg').fadeIn(500, function() {
        window.setTimeout(function() { $('#egg').fadeOut(500, function() {}); }, 5000);
    });
}).listen();


var validate = new Egg("s,w,e,e,t", function() {
    swal("Easter Egg", "This is a sweet alert", "success");
}).listen();
