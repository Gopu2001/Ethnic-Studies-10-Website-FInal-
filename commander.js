window.onload = function() {
    var start = true;
    var stcv = document.getElementById("st-canvas"); // import the canvas for access in this file
    var context = stcv.getContext("2d"); // get 2D drawing of this canvas
    stcv.width = 895;
    stcv.height = 800;
    var left = (window.innerWidth - stcv.width) / 2;
    var border = 10;
    
    var imgLib = "images/";
    var files = ["studious.jpg", "women_science.jpg", "youth_edu.jpeg", "tiger_mom.jpeg", "poverty.jpg", "help.jpg", "menial_labor.jpg", "biotech.jpeg", "money.jpg", "nationalities.jpg"];
    var about = "es10author.jpeg";
    var images = [];
    
    files.forEach(startImages);
    placeAbout();
    
    function startImages(fname, index) {
        if (index >= 7) {
            index += 1;
        }
        if (index == 10) {
            index += 1;
        }
        var row = index % 3;
        var col = Math.floor(index / 3);
        var img = new Image();
        img.src = imgLib + fname;
        img.onload = function() {
            img.left = 300 * row;
            img.top = 200 * col;
            context.drawImage(img, img.left += 2.5, img.top + 5, 290, 190);
        }
        start = false;
    }
    
    function placeAbout() {
        var img = new Image();
        img.src = imgLib + about;
        img.onload = function() {
            img.left = 300 * 1;
            img.top = 200 * 2;
            context.drawImage(img, img.left += 2.5, img.top + 5, 290, 390);
        }
    }
    
    window.onresize = adjustCanvas;
    
    function adjustCanvas() {
        left = (window.innerWidth - stcv.width) / 2;
    }
    
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
        stcv.style.background = "rgb(" + r + "," + g + "," + b + ")";
    }, 50);
    
    window.addEventListener("click", finallyCommanding);
    
    function finallyCommanding(event) {
        var x = event.clientX;
        var y = event.clientY;
        if (x > left) {
            if (x < 300 + left + border) {
                if (y < 200) {
                    //studious
                    window.open("articles/studious-children-in-professional-fields/index.html", '_blank');
                } else if (y < 400) {
                    //tiger mom
                    window.open("articles/tiger-mom-parenting-style/index.html", '_blank');
                } else if (y < 600) {
                    //menial labor
                    window.open("articles/menial-labor/index.html", '_blank');
                } else if (y < 800) {
                    //money
                    window.open("articles/all-about-money/index.html", '_blank');
                }
            } else if (x < 600 + left + border) {
                if (y < 200) {
                    //battling sex with stem
                    window.open("articles/battling-sex-with-stem-education/index.html", '_blank');
                } else if (y < 400) {
                    //poverty
                    window.open("articles/asian-american-bipolar-economy/index.html", '_blank');
                } else if (y < 800) {
                    //citizenship
                    window.open("articles/about/index.html", '_blank');
                }
            } else if (x < 900 + left + border) {
                if (y < 200) {
                    //youth education
                    window.open("articles/youth-education/index.html", '_blank');
                } else if (y < 400) {
                    //education struggles
                    window.open("articles/struggles-in-education/index.html", '_blank');
                } else if (y < 600) {
                    //professional fields
                    window.open("articles/professional-fields/index.html", '_blank');
                } else if (y < 800) {
                    //fighting for togetherness
                    window.open("articles/fight-for-togetherness/index.html", '_blank');
                }
            }
        }
    }
}
