// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.exampleJsFunctions = {
  alert: function (message) {
    return window.alert(message);
  }
};
