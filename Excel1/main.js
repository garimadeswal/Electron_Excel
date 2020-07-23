// const electron = require('electron');
// const app=electron.app;
// const BrowserWindow=electron.Window;
const {app,BrowserWindow}=require('electron');
const ejse=require('ejs-electron');

ejse.data({
    pageName:"Garima",
    pageHeader:"Deswal",
    rows:100,
    cols:120,
    // async:true
})

app.whenReady().then(function(){
    const win=new BrowserWindow({
        width:800,
        height:600,
        show:false
    });
    win.loadFile('index.ejs').then(function(){
        // win.webContents.openDevTools();
        win.maximize();
        win.show();
        
    })
})


// app.on('window-all-closed', () => {
//     // On macOS it is common for applications and their menu bar
//     // to stay active until the user quits explicitly with Cmd + Q
//     if (process.platform !== 'darwin') {
//       app.quit()
//     }
//   })
  
//   app.on('activate', () => {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow()
//     }
//   })




// npm start