const {app,BrowserWindow}=require('electron');
const ejse=require('ejs-electron');

ejse.data({
    // pageName:"Garima",
    // pageHeader:"Deswal",
    row:200,
    col:150
    // async:true
});

app.whenReady().then(function(){
    const win=new BrowserWindow({
        width:800,
        height:600,
        show:false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.ejs').then(function(){
        win.webContents.openDevTools();
       win.removeMenu();
        win.maximize();
        win.show();
        // win.we
        
    })
})

