var url = window.location.href;
var name = 'redirect';
var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);

if (results && results[2]) {
    var redirect = decodeURIComponent(results[2].replace(/\+/g, " "));
    var el = document.querySelector(".login-button a");
    el.href = el.href + '?redirect=' + redirect;
}
