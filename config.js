/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

//Apikey lolhuman
global.apikey = 'Wtfmen'


// Other
global.owner = ['94771323434']
global.pemilik = ['94771323434', '94711117547']
global.premium = ['94771323434', '94711117547']
global.creator = ['94771323434', '94711117547', '94771323434']
global.pengguna = 'TakimTzy'
global.botnma = 'PUKA BOT MD'

global.grub1 = 'https://chat.whatsapp.com/HYVx0YL6dTz7SeVzQ1Lak5'  //GRUB LU
global.grub2 = '-'  //GRUB LU

global.melcanz = 'melcantik'

global.footer = '© PUK BOT MD' //FooterText Biar Di Bawah Nya Ada Text 

global.web = 'https://wa.me/94771323434' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://chat.whatsapp.com/HYVx0YL6dTz7SeVzQ1Lak5' //Ubah Jga Bebas Sama lu 
global.ganti = '𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐌𝐞' //Edit Terserah Lu Mau Apa
global.ganti2 = '𝐌𝐞'

global.accestken = 'ims'
global.ownernma = 'imash'
global.packname = 'IMASH'
global.author = 'puka bot paco:)'

global.sessionName = 'takim'

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

global.setmenu = 'simpel'

global.mess = {
    success: '✓ S u c c e s s',
    admin: ' Admin Group!😞',
    prem: 'User Premium ❗',
    botAdmin: '❌',
    owner: 'Owner Bot❌',
    group: 'Group!❌',
    private: ' Chat!❌',
    bot: 'Bot❌',
    wait: 'W a i t. . .!!',
    endLimit: 'Limit',
}
global.limitawal = {
    premium: "Infinity",
    free: 200
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
