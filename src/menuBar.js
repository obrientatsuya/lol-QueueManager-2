const { ipcRenderer } = require('electron')
const ipc = ipcRenderer
const mySidebar = document.getElementById('mySidebar')
const menuList = document.getElementById('menuList')
var MenuLeft = true
var items = true

// close app
closeBtn.addEventListener('click', ()=>{
	ipc.send('closeApp')
})

// minimize

minimizeBtn.addEventListener('click', ()=>{
	ipc.send('minimizeApp')
})

showHideMenus.addEventListener('click', ()=>{
	if(MenuLeft) {
		mySidebar.style.width = '0px'
		MenuLeft = false
	} else {
		mySidebar.style.width = '280px'
		MenuLeft = true
	}
})
