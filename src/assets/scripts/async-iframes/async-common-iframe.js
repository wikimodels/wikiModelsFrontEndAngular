/*The following code is copyright to Shan Eapen Koshy
Report bugs at shaneapen@codegena.com
*/
var i, c, y, v, s, n;
var im = [];
v = document.getElementsByClassName("codegena_iframe");
for (n = 0; n < v.length; n++) {
    im[n] = v[n].hasAttribute("title") ? v[n].getAttribute("title") : "http://2.bp.blogspot.com/-krXgAqXpPPw/VgkPK7s9CMI/AAAAAAAAB1Y/IVvHmrRYMDI/s1600/dynamic_iframe.png";
}

if (v.length > 0) {
    s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = '.codegena_iframe{overflow:hidden;position:relative;cursor:hand;cursor:pointer; width:100%; height:350px}' +
        '.codegena_iframe .thumb{bottom:0;display:block;left:0;margin:auto;position:absolute;right:0;top:0;width:100%;height:350px;object-fit:cover;-webkit-filter: brightness(.8);}' +
        '.codegena_iframe .thumb:hover{transform: scale(1.3);transition: all 1s cubic-bezier(0.71, 0.15, 0.37, 0.82);}' +
        '.responsive_iframe{position:relative;padding-top:30px;height:290px;width:100%; -webkit-overflow-scrolling:touch;}.responsive_iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}';
    document.body.appendChild(s);
}

for (n = 0; n < v.length; n++) {
    y = v[n];
    if (y.getAttribute("data-responsive") == "true") {
        var sty = "height:" + y.style.height + ";width:100%;max-width:" + y.style.width + ";";
        y.setAttribute("style", sty);
    }
    i = document.createElement("img");
    i.setAttribute("src", im[n]);
    i.setAttribute("class", "thumb");
    /*c = document.createElement("div");
    c.setAttribute("class", "play");*/
    y.appendChild(i);
    /*  y.appendChild(c); 
     */
    y.onclick = function() {
            var t = document.createElement("iframe");
            var trackId = this.getAttribute("id");
            var url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackId +
                '&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true';

            t.setAttribute("src", url);
            t.setAttribute('frameborder', '0')
            t.setAttribute("style", this.getAttribute("data-css"));
            t.width = this.style.width;
            t.height = this.style.height;
            // t.classList.add('mat-elevation-z20');
            if (this.hasAttribute("data-Id") == true && this.getAttribute("data-Id") != "") {
                t.setAttribute("id", this.getAttribute("data-Id"));
            }
            if (this.hasAttribute("data-Class") == true && this.getAttribute("data-Class") != "") {
                t.setAttribute("class", this.getAttribute("data-Class"));
            }
            if (this.hasAttribute("data-name") == true && this.getAttribute("data-name") != "") {
                t.setAttribute("name", this.getAttribute("data-name"));
            }
            if (this.hasAttribute("data-srcdoc") == true && this.getAttribute("data-srcdoc") != "") {
                t.setAttribute("srcdoc", this.getAttribute("data-srcdoc"));
            }
            if (this.hasAttribute("data-sandbox") == true) {
                t.setAttribute("sandbox", this.getAttribute("data-sandbox"));
            }

            var div = document.createElement("div");

            div.setAttribute('class', 'mat-elevation-z20');
            div.appendChild(t);
            if (this.getAttribute("data-responsive") == "true") {
                div.setAttribute("class", "codegena_iframe responsive_iframe");
            }
            this.parentNode.replaceChild(div, this);

        }
        /*if(y.getAttribute("data-load")=="auto"){
         load_iframe(n+1)
        }*/

    function load_iframe(x) {
        v[x - 1].click();
    }

};