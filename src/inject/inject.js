chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      console.log("Hello. This message was sent from scripts/inject.js");
      d3.select('.notifications-list .Box-header')
        .insert('a',':first-child')
        .text('Open all')
        .attr('class','btn btn-sm')
        .on("click", function() {
          d3.selectAll('.notification-unread')
            .classed('notification-unread',false)
            .classed('notification-read',true)
            .selectAll('a.notification-list-item-link')
            .each(function() {
              window.open(this.href);
            })
        });
    }
  }, 10);
});