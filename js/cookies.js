window.addEventListener("load", function(){
window.cookieconsent.initialise({
  content: {
    header: 'Cookies used on the website!',
    message: 'We are using cookies to collect anonymous analytics data to help us improve our website.',
    dismiss: 'Confirm',
    allow: 'Allow cookies',
    deny: 'Decline',
    link: 'Learn more',
    href: 'http://cookiesandyou.com',
    close: '&#x274c;',
  },
  cookie: {
    expiryDays: 365
  },
  position: 'top'
});
$(".cc-banner").wrapInner("<div class='cc-container container'></div>");
});