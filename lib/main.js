var widgets = require("widget");
var tabs = require("tabs");
const data = require("self").data

var widget = widgets.Widget({
  id: "mozbuzz-link",
  label: "Rerport this in MozBuzz",
  contentURL: data.url("mozhis.png"), // ToDo: another icon
  onClick: function(){
    let current = tabs.activeTab.url;
    tabs.open("https://www.mozilla-hispano.org/mozbuzz/mention/create?url=" + current);
  }
});
