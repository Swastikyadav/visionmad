export function contactWidget(d, s, id){
  var js, el = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = 'https://widget.rasayel.io/v1/widget.min.js';
  el.parentNode.insertBefore(js, el);
  js.onload = function () {
    var w = window.RasayelOmniWidget;
    w.create({"title":"VisionMad","message":"We cannot wait to help you","minimal":false,"channels":[{"friendlyName":"WhatsApp","identifier":"9971780581","type":"WABA"},{"friendlyName":"Email us","identifier":"visionmadworks@gmail.com","type":"EMAIL"}]})
  }
}
