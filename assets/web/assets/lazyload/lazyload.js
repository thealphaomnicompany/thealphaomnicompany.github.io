
document.addEventListener("DOMContentLoaded",function(c){function g(a){return new Promise(function(b,h){var d=new Image;d.src=a;d.onload=b;d.onerror=h})}function k(a){var b=a.dataset.src;a.src!=b&&-1!==a.className.search("img-loading")&&(a.classList.remove("img-loading"),""===a.getAttribute("class")&&a.removeAttribute("class"),g(b).then(function(){a.src=b}))}c=document.querySelectorAll("img");c.forEach(function(a){a.complete||(a.setAttribute("data-src",a.src),a.classList.add("img-loading"),a.setAttribute("src",
a.src.replace(/(?!.*\/)(.+)(\.jpe?g|\.png)/g,"$1_lr$2")))});document.querySelectorAll("div, section").forEach(function(a,b){-1!==getComputedStyle(a).backgroundImage.search(/\.jpg|\.jpeg|\.png/)&&(a.style.backgroundImage=a.style.backgroundImage.replace(/(.*?)(?!.*\/.+)((?:\.jpe?g|\.png).+)/i,"$1_lr$2"))});var e=document.querySelectorAll("iframe");e.forEach(function(a){a.setAttribute("data-src",a.src);a.removeAttribute("src")});var f=new IntersectionObserver(function(a,b){a.forEach(function(a){if(0<
a.intersectionRatio)if("IMG"===a.target.tagName)k(a.target);else if("DIV"===a.target.tagName||"SECTION"===a.target.tagName)a.target.style.backgroundImage.replace(/(url\s*\(["']?(?:\.|https?|file:).+?)_lr(?=\.(?:jpe?g|png)[?"')])/i,"$1");else if("IFRAME"===a.target.tagName){a=a.target;var b=a.dataset.src;a.src!==b&&(a.src=b)}})},{rootMargin:"0px",threshold:.1});c=document.querySelectorAll("img[data-src]");e=document.querySelectorAll("iframe[data-src]");setTimeout(function(){document.querySelectorAll("div, section").forEach(function(a){-1!==
getComputedStyle(a).backgroundImage.search(/\.jpg|\.jpeg|\.png/)&&f.observe(a)})},500);e.forEach(function(a){f.observe(a)});c.forEach(function(a){f.observe(a)})});
