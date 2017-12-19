var readyStateCheckInterval = setInterval(function () {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    console.log("Hello. This message was sent from scripts/inject.js");
    d3.select('.notification-center .tabnav .float-right')
      .insert('a',':first-child')
      .text('Open all')
      .attr('class','btn btn-sm')
      .on("click", function() {
        d3.selectAll('.notifications-list .list-group-item.unread')
          .classed('unread',false)
          .classed('read',true)
          .selectAll('a.list-group-item-link')
          .each(function() {
            window.open(this.href);
          })
      });
  }
}, 10);