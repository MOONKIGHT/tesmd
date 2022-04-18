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
global.owner = ['6282194424412']
global.pemilik = ['6282194424412', '6283140891091']
global.premium = ['6282194424412', '6283140891091']
global.creator = ['6282194424412', '6288292024190', '6283127014833']
global.pengguna = 'TakimTzy'
global.botnma = 'Viper Botz-Md'

global.grub1 = 'https://chat.whatsapp.com/KN91ApM2kIR09qRbiuXfEf'  //GRUB LU
global.grub2 = '-'  //GRUB LU

global.melcanz = 'melcantik'

global.footer = '© Bot WhatsApp⁰⁵⠀ ོ' //FooterText Biar Di Bawah Nya Ada Text 

global.web = 'https://wa.me/6282194424412' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://github.com/takimtod' //Ubah Jga Bebas Sama lu 
global.ganti = '𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐌𝐞' //Edit Terserah Lu Mau Apa
global.ganti2 = '𝐆𝐢𝐭𝐡𝐮𝐛 𝐌𝐞'

global.accestken = 'Takimtod'
global.ownernma = 'TakimTzy'
global.packname = ''
global.author = 'Created By @takimtod :)'

global.sessionName = 'takim'

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

global.setmenu = 'simpel'

global.mess = {
    success: '✓ S u c c e s s',
    admin: 'Fitur Khusus Admin Group!😞',
    prem: 'Fitur Khusus User Premium ❗',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!❌',
    owner: 'Fitur Khusus Owner Bot❌',
    group: 'Fitur Digunakan Hanya Untuk Group!❌',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!❌',
    bot: 'Fitur Khusus Pengguna Nomor Bot❌',
    wait: 'W a i t. . . Sedang Di Proses!!',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 15
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
