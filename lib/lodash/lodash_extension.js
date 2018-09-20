_.mixin({

  log: function (returnValue) {
    var console = window.console;
    console.log.apply(console, arguments);
    return returnValue;
  }

});
