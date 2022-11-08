const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  checkDir: () => process.checkDir
  // we can also expose variables, not just functions
});

function checkDir(){
    let dirName = 'C:/Users/dgoldblum/Box/CellBio-MajorLab/Users/Danny/HELA GUI/checkDir Test';
    for(let file of fs.readdir(dirName)){
        fileName.innerText = file.name;
        if(fileName.includes("hela" && fileName.includes(".raw"))){
            return(fileName);
        }
    }
    
}
