var ipcRenderer = require('electron').ipcRenderer

ipcRenderer.on('notify', function (event, title, message) {
  new Notification(title, {
      title: title,
      body: message
    })
})
