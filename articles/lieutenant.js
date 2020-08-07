window.onload = function() {
    var r = 83;
    var g = 53;
    var b = 10;
    var rt = !!(Math.round(Math.random()));
    var gt = !!(Math.round(Math.random()));
    var bt = !!(Math.round(Math.random()));
    
    window.setInterval(function() {
        if(r == 255) {
          rt = false;
        } else if(r == 0) {
          rt = true;
        }
        if(g == 255) {
          gt = false;
        } else if(g == 0) {
          gt = true;
        }
        if(b == 255) {
          bt = false;
        } else if(b == 0) {
          bt = true;
        }
        
        if(rt) {
          r += 1;
        } else {
          r -= 1;
        }
        if(gt) {
          g += 1;
        } else {
          g -= 1;
        }
        if(bt) {
          b += 1;
        } else {
          b -= 1;
        }
        document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
    }, 50);
}
