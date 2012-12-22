var widgets = require("widget");
var tabs = require("tabs");

var widget = widgets.Widget({
  id: "mozbuzz-link",
  label: "Rerport this in MozBuzz",
  contentURL: "http://www.mozilla.org/favicon.ico", // ToDo: another icon
  onClick: function(){
    let current = tabs.activeTab.url;
    tabs.open("https://www.mozilla-hispano.org/mozbuzz/mention/create?url=" + current);
  }
});
