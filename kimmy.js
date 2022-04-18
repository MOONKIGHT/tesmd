/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const request = require('request');
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const {color } = require('./lib/color')
const maker = require('mumaker')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")


//settings

apikey = `${global.apikey}`
modelmenu = `${global.setmenu}`
let kahfz = fs.readFileSync('./media/Lycho.jpg')
let btn = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🛑 𝗥𝗨𝗟𝗘𝗦',
                                    id: 'rules'
                                }
                            }]                        
let butn = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🛒 SEWA BOT',
                                    id: 'sewabot'
                                }
                            }]


//ADD DATABASE SATU PERSATU
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/ban.json'))

// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []


	
module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	    const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    const groupMembers = m.isGroup ? groupMetadata.participants : ''



	// waktu
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌅'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌞'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 ☀️'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌠'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat Malam!'
}


//Ini Remplay  
const reply = async(teks) => {
		try {
                    ppuser = await hisoka.profilePictureUrl(m.sender, 'image')
                } catch (err) {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
               ppumser = await getBuffer(ppuser)
               hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Hallo ${pushname} ${ucapanWaktu}`,"body": `𝐽𝑎𝑛𝑔𝑎𝑛 𝐿𝑢𝑝𝑎 𝑆𝑎𝑣𝑒 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 𝑀𝑒`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppumser, "sourceUrl": `https://wa.me/6282194424412`}}}, { quoted: m})
        }     
        
const replay = (teks) => {
            hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Hallo ${pushname} ${ucapanWaktu}`,"body": `Huuuuu`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Lycho.jpg`),"sourceUrl": `https://chat.whatsapp.com/KN91ApM2kIR09qRbiuXfEf`}}}, { quoted: m})
        }
	

//QUOTED
const troli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6282363250061-1627622544@g.us" } : {})},message: {orderMessage: {itemCount : 2022, status: 1,surface : 2,message: ` Hii ${pushname}\n𝐶𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 𝑡𝑎𝑘𝑖𝑚-𝑡𝑜𝑑`,orderTitle: `Hi kak`,thumbnail: fs.readFileSync('./media/Lycho.jpg'), sellerJid: `0@s.whatsapp.net`}}}
const fkontak2 = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6282363250061-1627622544@g.us" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/Lycho.jpg')}}}


        //TEXT BUMTON
       // TextTeplate 
        const textTemplateButtons = (from, text, footer, buttons) => {
            return hisoka.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        }
        
        // SEEND FILE URL
const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return hisoka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return hisoka.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return hisoka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return hisoka.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return hisoka.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
 


       // Seend Sticker Jadi Lebih Ezz
const sendStickerUrl = async(to, url) => {
            console.log(chalk.black(chalk.bgWhite('[ Otw Build ]')))
              var names = getRandom('.webp')
              var namea = getRandom('.png')
              var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
              };
              download(url, namea, async function () {
                let filess = namea
                let asw = names
                require('./lib/exif.js')
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
                let media = fs.readFileSync(asw)
                hisoka.sendMessage(to, {sticker:media} )
                console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
                });
                });
              });
            }
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
                }
                let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('autoread' in setting)) setting.autoread = false
		if (!('autoketik' in setting)) setting.autoketik = false
		if (!('autorecord' in setting)) setting.autoketik = false
		if (!('autoonline' in setting)) setting.autoonline = false
		if (!('autooffline' in setting)) setting.autooffline = false
	    } else global.db.settings[botNumber] = {
		status: 0,
		autobio: false,
		autoread: false,
		autoketik: false,
		autorecord: false,
		autoonline: false,
		autooffline: false,
	    }
        } catch (err) {
            console.error(err)
        }
	    

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }
      
       // Detect User Banned
        if (ban[m.sender] && isCmd) {
            await hisoka.sendText(m.chat, `Maaf @${m.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`, m, { contextInfo: { mentionedJid: [m.sender] }})
            return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	

	//Level Nyah Blom Jadi, Jadi gw Pasang Jika Lu tau Cara Fix nya oke!! Next Jika Yang Gak Tau Next Vidio Gua Tmbahin 
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
	  }
	
	//AUTO UPDET BIO ( RUNTIME BIO )
	let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)

	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.setStatus(`Hello I am a bot👋🏻 || 🏃Runtime: ${runtime(process.uptime())} || 🕌Tanggal Islam: ${dateIslamic} || User : KahfzXzy`)
		setting.status = new Date() * 1
	    }
	}
	
	//Auto Read
	if (db.settings[botNumber].autoread) {
		hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
}
//Auto Ketik
if (db.settings[botNumber].autoketik) {
	hisoka.sendPresenceUpdate('composing', m.chat)
	}
	//Antilink Nya
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               reply('*L I N K  T E R D E T E K S I*\nWahh Nakal sekaliii, Grup ini Sudah dipasang Antilink yak..,\nGood Bye Untukmu..👋🏻')
               let sianj = m.sender
               await hisoka.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 ANTI LINK WA.ME 」\n\nKamu terdeteksi mengirim link wa.me, maaf kamu akan di kick !`)
          if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link wa.me ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

	// Mute Chat
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
	


        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
        	
//===============[ CASECASE NYA ]=============================
 
case 'listsurah':
reply(mess.wait)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                
                                
case 'asmaulhusna':
reply(mess.wait)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

                    // Downloader //
                
                
                case 'tiktokmusic': case 'tiktokaudio': case 'tiktokmp3':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${ini_link}`)
                    hisoka.sendMessage(m.chat, {audio: get_audio, mimetype: 'audio/mpeg', fileName: `${q}.mp3`}, { quoted : m })
                    break
                case 'spotify':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${apikey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt += `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    get_audio = await getBuffer(get_result.link)
                    hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                         
                    break
                case 'spotifysearch':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    get_audio = await getBuffer(get_result.audio[0].link)
                    hisoka.sendMessage(m.chat, {audio: get_audio, mimetype: 'audio/mpeg', fileName: `${get_result.title}.mp3`}, { quoted : m })
                    break
                
                
case 'ig':
reply (mess.wait)
if (!q) return reply ('Linknya?')
igreel = q.includes("https://www.instagram.com/reel/")

if(igreel){
Download.insta_reel(q).then(async (data) => {
await hisoka.sendMessage(m.chat, { video: { url: data.url, caption: `*INSTAGRAM*` } }, { quoted: m })                        
//sendFileFromUrl(`${data.url}`, video, {quoted: m, caption: `*INSTAGRAM*`})
console.log(data)
console.log(data.url)
})
} else {
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(err => {
return reply(mess.error.api)
})
console.log(res)
await hisoka.sendMessage(m.chat, { video: { url: res.result.link, caption: `*INSTAGRAM*` } }, { quoted: m })                        
///sendMediaURL (from, res.result.link, res.result.desc) 
}
break

case 'ig2':
reply (mess.wait)
if (!q) return reply ('Linknya?')
igreel = q.includes("https://www.instagram.com/reel/")

if(igreel){
Download.insta_reel(q).then(async (data) => {
await hisoka.sendMessage(m.chat, { video: { url: data.url, caption: `*INSTAGRAM*` } }, { quoted: m })                        
//sendFileFromUrl(`${data.url}`, video, {quoted: m, caption: `*INSTAGRAM*`})
console.log(data)
console.log(data.url)
})
} else {
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(err => {
return reply(mess.error.api)
})
console.log(res)
await hisoka.sendMessage(m.chat, { image: { url: res.result.link, caption: `*INSTAGRAM*`} }, { quoted: m})                  
}
break
 

                case 'twtdl':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    hisoka.sendMessage(m.chat, { video: { url: ini_buffer }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: '*TWITTER*' }, { quoted: m })                   
                    break
                case 'fbdl':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    hisoka.sendMessage(m.chat, { video: { url: ini_buffer }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: '*FACEBOOK*' }, { quoted: m })                   
                    break
                case 'zippyshare':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: m})                  
                    break
                case 'pinterest2':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: m})                  
                    }
                    break
                case 'pinterestdl':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: m})                  
                    break
                case 'pixiv':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${apikey}&query=${query}`)
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: '*NIH*' }, { quoted: m})                  
                    break
                case 'pixivdl':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${apikey}`)
                     await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: '*NIH*' }, { quoted: m})                  
                    break
                case 'xhamstersearch':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break
                case 'xnxxsearch':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break

                    // AniManga //
                case 'character':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break
                case 'manga':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break
                case 'anime':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break
                
                case 'kusonime':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                case 'kusonimesearch':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break
                case 'otakudesu':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    hisoka.sendMessage(m.chat, {document: ini_buffer, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m})                   
                    break
                case 'nhentaisearch':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                case 'nekopoisearch':
                reply(mess.wait)
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break

                    // Information //
                case 'kbbi':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${args.join(" ")}`)
                    lila = get_result.result
                    ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
                    ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
                    ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
                    ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
                    for (var x of lila) {
                        ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                        ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                        ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                        ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                        ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
                    }
                    reply(ini_txt)
                    break
                case 'brainly2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly2?apikey=${apikey}&query=${args.join(" ")}`)
                    lala = get_result.result
                    ini_txt = "Beberapa Pembahasan Dari Brainly :\n\n"
                    for (var x of lala) {
                        ini_txt += `==============================\n`
                        ini_txt += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
                        ini_txt += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
                        ini_txt += `==============================\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jarak':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                    pauls = args.join(" ")
                    teks1 = pauls.split("-")[0].trim()
                    teks2 = pauls.split("-")[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${teks1}&kota2=${teks2}`)
                    x = get_result.result
                    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                    ini_txt += `\`\`\`◪ Asal :\`\`\` ${x. m.chat.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x. m.chat.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x. m.chat.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   ╭───────────────❏\n`
                    ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `❍┤ Mobil : ${x.mobil}\n`
                    ini_txt += `❍┤ Motor : ${x.motor}\n`
                    ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   ╰───────────────❏\n`
                    reply(ini_txt)
                    break
                case 'urbandictionary':
                    urb = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/urdict?apikey=${apikey}&query=${urb}`)
                    lilu = get_result.result
                    for (var x of lilu) {
                        ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
                        ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
                        ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
                        ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
                        ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
                        ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
                        ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
                        ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
                        ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
                        ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'chord':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    reply(ini_txt)
                    break
                case 'heroml':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                   await hisoka.sendMessage(m.chat, { image: ini_icon, caption: ini_txt }, { quoted: m})                  
                    break
                case 'mlstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${apikey}`)
                    reply(get_result.result)
                    break
                case 'genshin':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.title}\n`
                    ini_txt += `Intro : ${get_result.intro}\n`
                    ini_txt += `Icon : ${get_result.icon}\n`
                    ini_icon = await getBuffer(get_result.cover1)
                    await hisoka.sendMessage(m.chat, { image: ini_icon, caption: ini_txt }, { quoted: m})                  
                    ini_voice = await getBuffer(get_result.cv[0].audio[0])
                    hisoka.sendMessage(m.chat, {audio: ini_voice, mimetype: 'audio/mpeg', fileName: `${get_result.title}.mp3`}, { quoted : m })
                    break
                
                case 'wikipedia':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                
                case 'brainly':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await hisoka.sendMessage(m.chat, { image: get_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                case 'lirik':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                //    await hisoka.sendMessage( m.chat, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: m })
                    reply(ini_txt)
                    break
                case 'covidindo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                

                    // Movie & Story
                case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hisoka.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m})                  
                    break

                    // Random Text //
                case 'quotes':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${apikey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apikey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${apikey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
                    await hisoka.sendMessage(m.chat, { image: get_result, caption: '*NIH QUOTES IMAGE*' }, { quoted: m})                  
                    break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${apikey}`)
                    reply(anu.result)
                    break

                    // Searching
                case 'gimage':
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${apikey}&query=${query}`)
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: `*Hasil Pencarian Dari:* ${q}` }, { quoted: m})                  
                    break
                case 'gimage2':
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: `*Hasil Pencarian Dari:* ${q}` }, { quoted: m})                  
                    }
                    break
                case 'konachan':
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${apikey}&query=${query}`)
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: 'Nih' }, { quoted: m})                  
                    break
                case 'wallpapersearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${apikey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: 'Nih' }, { quoted: m})                  
                    break
                case 'wallpapersearch2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${apikey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    hisoka.sendMessage(m.chat, { image: ini_buffer }, { quoted: m})        
                    break
                case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                

                    // Primbon
                case 'artinama':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${apikey}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'weton':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
                try{
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                   } catch (err) {
console.log(err)
return reply (`eorr`)}    
  break
                case 'tebakumur':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                   get_result = get_result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break

                    // Entertainment
                case 'asupan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${apikey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await hisoka.sendMessage(m.chat, { video: { url: ini_buffer, caption: 'Asupan Kak' } }, { quoted: m })                        
                    break
           
                case 'wasted':
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${apikey}&img=${ini_url}`)
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: 'Nih' }, { quoted: m})                  
                    break
                
                case 'ktpmaker':
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    hisoka.sendMessage(m.chat, { image: ini_buffer, caption: `*KTP MAKER*` }, { quoted: m})
                    break

                    // Converter
                
                
                    // Stalk
                case 'stalkig':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    hisoka.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})
                    break
                case 'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                case 'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    await hisoka.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                
                case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${apikey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case 'spamsms':
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${apikey}&nomor=${nomor}`)
                    reply("Success")
                    break

                
                
                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
           getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`).then((gambar) => {
                        hisoka.sendMessage(m.chat, { image: gambar, caption: `${q}` }, { quoted: m})
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
                    getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`).then((gambar) => {
                        hisoka.sendMessage(m.chat, { image: gambar, caption: `${q}` }, { quoted: m})
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
           getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`).then((gambar) => {
                        hisoka.sendMessage(m.chat, { image: gambar, caption: `${q}` }, { quoted: m})
                    })
                    break

                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                     getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        hisoka.sendMessage(m.chat, { image: gambar, caption: `${q}` }, { quoted: m})
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
           getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        hisoka.sendMessage(m.chat, { image: gambar, caption: `${q}` }, { quoted: m})
                    })
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
           getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        hisoka.sendMessage(m.chat, { image: gambar, caption: `${q}` }, { quoted: m})
                    })
                    break
                
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
           getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        hisoka.sendMessage(m.chat, { image: gambar, caption: `${q}` }, { quoted: m})
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
            if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
              hisoka.sendMessage(m.chat, { image: gambar, caption: `${q}` }, { quoted: m})
                    })
                    break
                    
 case 'blackpink': case 'neon': case 'thunder': {
 m.reply (mess.wait)
 if (args.length == 0) return m.reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
 bufffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${ini_txt}`)
                 hisoka.sendMessage(m.chat, { image: bufffer,caption: `${global.footer}` }, { quoted: m})
                 }
 break





case 'developer':
let developer = [
                            { "nama": "T A K I M", "nomor": "6282194424412" },
                            { "nama": "D I K A", "nomor": "6288292024190" },
                            { "nama": "K A H F Z", "nomor": "6283127014833" },
                            ]
let xensz = []
for (let i = 0; i < developer.length; i++){
    const getnumber = developer [i].nama
    const cyanz = developer [i].nomor
    const f = { displayName: getnumber, vcard: 'BEGIN:VCARD\n' + 
    'VERSION:3.0\n' + 
    'FN:' + getnumber + '\n' + 
    'item1.TEL;waid=' + cyanz + ':+' + cyanz + '\n' + 
    'item1.X-ABLabel:Telepon\n\n' +       
    'item2.ADR:;; Makassar;;;;\n' +
    'item2.X-ABLabel:🏙️ Kota\n' + 
    'item3.URL:https://instagram.com/zyee_ez\n'+
    'item3.X-ABLabel:Instagram Owner\n\n' +
    'item4.ADR:;;Indonesia;;;;\n' +
    'item4.X-ABLabel:🌐Region\n\n' +     
    'item5.X-ABLabel:Developer Botz\n' +
    'item6.URL:https://takimtod@gmail.com\n'+    
    'END:VCARD'.trim()}
    xensz.push(f)
}
       hisoka.sendMessage(m.chat, { contacts: xensz}, { quoted: m }).then((res) => hisoka.sendMessage(m.chat, `*Developer Botz*`, { quoted: m }))
       break

case 'getpp':       	
case 'malingpp': {
	if (!m.isGroup) return reply(mess.group)
         if (!m.quoted) return reply ('replay chat yg ingin di maling pp nya!')
        anu = await hisoka.profilePictureUrl(m.quoted.sender, 'image')
        hisoka.sendMessage(m.chat, { image: { url: anu, caption: 'Nih', quoted: m }})
       }
break

case 'loli': 
           case 'neko': 
           if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
              await reply (('Loading..'))
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,`Ni ${pushname} ${command} nya`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command} Error: \n\n` + err)
                    }
                    reply ('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
		break
          
          case 'shinobu': 
          case 'megumin': 
          case 'bully': 
          case 'cuddle': 
          case 'cry': 
          case 'hug': 
          case 'awoo': 
          case 'kiss': 
          case 'lick': 
          case 'pat': 
          case 'smug': 
          case 'bonk': 
          case 'yeet': 
          case 'blush': 
          case 'smile': 
          case 'wave': 
          case 'highfive': 
          case 'handhold': 
          case 'nom': 
          case 'bite': 
          case 'glomp': 
          case 'slap': 
          case 'kill': 
          case 'happy': 
          case 'wink': 
          case 'poke': 
          case 'dance': 
          case 'cringe': 
          if (!isPremium && !mek.key.fromMe && !isCreator) return reply(mess.prem)
              await reply ('Loading..')
              let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
                await sendFileFromUrl(from,waifu.url,`Done`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${prefix+command} Error: \n\n` + err)
                    }
                    reply('Sedang Error !! Coba Beberapa Saat Lagi')
                })
		break
                          


	        case 'ttnowm': case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                anu = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${text}`)
              let message = await prepareWAMessageMedia({ video : { url: anu.result.video.nowm } }, { upload:   hisoka.waUploadToServer })
               const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: `Berhasil Download Video Tiktok`,
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code Video',
                                    url: `${text}`
                                }
                                },{ quickReplyButton: {
                                    displayText: '♫ AUDIO',
                                    id: `${prefix}tiktokmp3 ${text}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            

case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
ini_buffer = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
hisoka.sendMessage(m.chat, {audio: ini_buffer, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break











//============================[ ]=============================




case'readmore': case 'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
 if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break

case 'berkas':
case 'pile':
if (m.isGroup) throw mess.private
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari file apa kak*")
sendfile = `${q}`
anuu = fs.readFileSync(sendfile)
hisoka.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `${q}`}, {quoted:m})                  
///hisoka.sendMessage(m.chat, anuu, document, {mimetype: "application/octet-stream", filename: `${q}`, quoted: m})
break 

case 'getcase':
if (m.isGroup) throw mess.private
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari case apa kak*") 
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("kimmy.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply (`${getCase(q)}`)
break

case 'getidgc':
if (!m.isGroup) return reply(mess.group)
reply (`${m.chat}`)
break
    

case 'hu':
case 'culik':
if (!m.isGroup) return reply(mess.group)
         if (!isCreator) return reply(mess.owner)
  if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
  let pantek = []
  for (let i of groupMembers) {
      pantek.push(i.jid)
  }
  await hisoka.groupParticipantsUpdate(m.chat, [pantek], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 // hisoka.groupAdd(q, pantek)
  break

	

   case 'afk': {
   	if (!m.isGroup) return reply(mess.group)
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) return reply(mess.group)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            
case 'delttc': case 'delttt': {
       	if (!m.isGroup) return reply(mess.group)
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            reply('rusak')
            }
            }
            break
            
case 'suitpvp': case 'suit': {
	if (!m.isGroup) return reply(mess.group)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    
            
case 'sc': {
                reply(`
👾 Script Ori : https://github.com/DikaArdnt/Hisoka-Morou
🌐 Penyusun Script : Takimtod && KahfzXzyy
`)
            }
            break
            case 'chat': {
                if (!isCreator) return reply(mess.owner)
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		if (!m.isGroup) return reply(mess.group)
                if ('family100'+m.chat in _family100) {
                    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
            	if (!m.isGroup) return reply(mess.group)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
            	if (!m.isGroup) return reply(mess.group)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) return reply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) return reply(mess.owner)
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return reply(mess.owner)
                await hisoka.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		reply (`Asek Dapat Jatah Kick :v`)
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	reply (`aowkaowk byee :v`)
}
	break
	case 'add': {
		reply (`Berhasil menambahkan peserta grub :v`)
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	reply (`*CIE BUAT SI ${users} DAH JADI ADMIN :V, KLO DH NAIK PANGKAT JGN JADI BEBAN GRUB JUGA Y`)
}
	break
	case 'demote': {
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'shutdown':
 if (!isCreator) return 
reply(`Bye...`)
 await sleep(3000)
 process.exit()
 break
 case 'restart':
 if (!isCreator) return 
reply(mess.wait)
 exec(`node index`)
 reply('_Restarting Bot Success_')
 break
        case 'block': {
		if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'ban': case 'banned': {
			if (!isCreator) return reply(mess.owner)
			let who
			if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = true
			m.reply('Sukse Membanned '+who)
		}
		break
		case 'unban': case 'unbanned': {
			if (!isCreator) return reply(mess.owner)
			let who
			if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = false
			m.reply('Sukses Unban '+who)
		}
		break
        case 'unblock': {
		if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) return reply(mess.owner)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case 'grupinfo':
                if (!m.isGroup) return reply(mess.group)
try{
 var pic = await hisoka.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P I N F O*

*System* 
AntiLink : *${isAntiLink ? 'Aktif✅' : 'Mati❌'}*
Mute : *${db.chats[m.chat].mute ? 'Aktif✅' : 'Mati❌'}* 
Anti wa.me : *${db.chats[m.chat].wame ? 'Aktif✅' : 'Mati❌'}*

*Name :* ${groupName}
*ID Grup :* ${m.chat}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Owner Grup :* @${groupMetadata.owner.split('@')[0]}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${participants.length}
*Desc :* 
${groupMetadata.desc}`
ds = await getBuffer(pic)
hisoka.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case 'tagall': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `┋➟ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {      
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `┋➟ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return reply(mess.group)
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

            }
            }
            break
case 'antilink':
	        if (!m.isGroup) return reply(`Khusus Grup`)
			if (!isAdmins) return reply(`Khusus Admin Om`)
			if (!isBotAdmins) return reply(`Jdiin Admin Dlu Bjir`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						hisoka.sendMessage(m.chat,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					case 'antiwame': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Aktif !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, hisoka.user.name, m)
                }
             }
             break
					   case 'mute': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
                db.chats[m.chat].mute = true
                reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.chats[m.chat].mute = false
                reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
             }
             break
case 'autobio': {
                if (!isCreator) return reply(mess.owner)
                if (args[0] === "on") {
                if (db.settings[botNumber].autobio) return reply(`Sudah Aktif Sebelumnya`)
                db.settings[botNumber].autobio = true
                reply(`Sukses`)
                } else if (args[0] === "off") {
                if (!db.settings[botNumber].autobio) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.settings[botNumber].autobio = false
                reply(`Sukses`)
                } else {
                 let buttons = [
                        { buttonId: 'autobio on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'autobio off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Auto Bio`, hisoka.user.name, m)
                }
             }
             break
case 'autoketik': {
                if (!isCreator) return reply(mess.owner)
                if (args[0] === "on") {
                if (db.settings[botNumber].autoketik) return reply(`Sudah Aktif Sebelumnya`)
                db.settings[botNumber].autoketik = true
                reply(`Sukses`)
                } else if (args[0] === "off") {
                if (!db.settings[botNumber].autoketik) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.settings[botNumber].autoketik = false
                reply(`Sukses`)
                } else {
                 let buttons = [
                        { buttonId: 'autoketik on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'autoketik off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Auto Ketik`, hisoka.user.name, m)
                }
             }
             break
case 'autoread': {
                if (!isCreator) return reply(mess.owner)
                if (args[0] === "on") {
                if (db.settings[botNumber].autoread) return reply(`Sudah Aktif Sebelumnya`)
                db.settings[botNumber].autoread = true
                reply(`Sukses`)
                } else if (args[0] === "off") {
                if (!db.settings[botNumber].autoread) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.settings[botNumber].autoread = false
                reply(`Sukses`)
                } else {
                 let buttons = [
                        { buttonId: 'autoread on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'autoread off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Auto Read`, hisoka.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) return reply(mess.group)
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝑴𝒆',
                                    url: 'https://wa.me/6282194424412'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑶𝒘𝒏𝒆𝒓',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Lycho.jpg')
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, fatihgans, btn)
                    }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
                if (!isCreator) return reply(mess.owner)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '𝑪𝑶𝑴𝑴𝑨𝑵𝑫',
                                    id: 'menu'
                                }
                            }]
                    let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    hisoka.sendMessage(i, { sticker: { url: media } }, { quoted: fkontak })
                    } else if (/image/.test(mime)) {
                    let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
                    hisoka.send5ButImg(i, junn, `${global.footer}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
                    hisoka.send5Vid(i, junn, `${global.footer}`, buffer, butoon)
                    } else if (/audio/.test(mime)) {
                    hisoka.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : fvn })
                    } else {
                    reply(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return reply(mess.owner)
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))
		    let btn = [{
                                urlButton: {
                                    displayText: '𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝑴𝒆',
                                    url: 'https://wa.me/6282194424412'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑪𝒐𝒎𝒎𝒂𝒏𝒅',
                                    id: 'menu'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Lycho.jpg')
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5Loc(yoi, txt, `Broadcast Bot ${global.pengguna}`, fatihgans, btn)
		}
		reply('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break
case 'bctext': {
                if (!isCreator) return reply(mess.owner)
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))
		    let btn = [{
                                urlButton: {
                                    displayText: '𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝑴𝒆',
                                    url: 'https://wa.me/6282194424412'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑪𝒐𝒎𝒎𝒂𝒏𝒅',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Text 」\n\n${text}`
                      textTemplateButtons(yoi, txt, `Broadcast Bot ${global.pengguna}`, btn)
		}
		reply('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break
            case 'infochat': {
                if (!m.quoted) reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `┋➟ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━┋➟ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ┋➟ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `✅ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `✅ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '┋➟ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'ttp':

		db.users[m.sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh #ttp ${pushname}`)
var anjay = `https://hadi-api.herokuapp.com/api/canvas/ttp?text=${text}`
sendStickerUrl(m.chat, anjay)
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
arg = args.join(' ')
mee = await hisoka.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'memegen': case 'smeme2': {
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
m.reply(mess.wait)
arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
let abeb = await hisoka.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./lib/uploader')
let abe = await TelegraPh(abeb)
let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
let mengmeme = await hisoka.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(mengmeme)
}
break
case 'attp':
if (args.length < 1) return reply(`Teks Nya Mana Bruh?\nContoh #${command} kahfz`)
var kahfz = `https://hadi-api.herokuapp.com/api/canvas/attp?text=${text}`
let encmedia = await hisoka.sendVideoAsSticker(m.chat, kahfz, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {            	
            	if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `┋➟ No : ${no++}\n┋➟ Type : ${i.type}\n┋➟ Video ID : ${i.videoId}\n┋➟ Title : ${i.title}\n┋➟ Views : ${i.views}\n┋➟ Duration : ${i.timestamp}\n┋➟ Upload At : ${i.ago}\n┋➟ Author : ${i.author.name}\n┋➟ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `┋➟ *Title* : ${g.title}\n`
                teks += `┋➟ *Description* : ${g.snippet}\n`
                teks += `┋➟ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
🕵️ Title : ${anu.title}
🥀 Ext : Search
🍁 ID : ${anu.videoId}
🌺 Duration : ${anu.timestamp}
👀 Viewers : ${anu.views}
💌 Upload At : ${anu.ago}
🗣️ Author : ${anu.author.name}
🧑‍💻 Channel : ${anu.author.url}
🔎 Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   hisoka.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝑳𝒊𝒏𝒌 𝑽𝒊𝒅𝒆𝒐',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝐀𝐮𝐝𝐢𝐨',
                                    id: `ytmp3 ${anu.url} 128kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '𝐕𝐢𝐝𝐞𝐨',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `➟ Title : ${media.title}\n➟ File Size : ${media.filesizeF}\n➟ Url : ${isUrl(text)}\n➟ Ext : MP3\n➟ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➟ Title : ${media.title}\n➟ File Size : ${media.filesizeF}\n➟ Url : ${isUrl(text)}\n➟ Ext : MP3\n➟ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `➟ Title : ${media.title}\n┋➟ File Size : ${media.filesizeF}\n┋➟ Url : ${isUrl(text)}\n┋➟ Ext : MP3\n┋➟ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `┋➟ Title : ${media.title}\n┋➟ File Size : ${media.filesizeF}\n┋➟ Url : ${isUrl(text)}\n┋➟ Ext : MP3\n┋➟ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '┋➟ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '𝐍𝐞𝐱𝐭'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
/*LOGO NYAAA !!!!
*/
case 'nuliskiri': {
                if (args.length < 1) return await reply(`Example: ${prefix + command} KahfzXy`)
                reply("Tunggu Sebentar, Sedang Proses....")
                kahfz = await getBuffer(`https://hardianto.xyz/api/nuliskiri?text=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Nulis ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
                break
break
case 'nuliskanan': {
                if (args.length < 1) return await reply(`Example: ${prefix + command} KahfzXy`)
                reply("Tunggu Sebentar, Sedang Proses....")
                kahfz = await getBuffer(`https://hardianto.xyz/api/nuliskanan?text=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Nulis ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'foliokiri': {
                if (args.length < 1) return await reply(`Example: ${prefix + command} KahfzXy`)
                reply("Tunggu Sebentar, Sedang Proses....")
                kahfz = await getBuffer(`https://hardianto.xyz/api/foliokiri?text=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Nulis ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
                case 'foliokanan': {
                if (args.length < 1) return await reply(`Example: ${prefix + command} KahfzXy`)
                reply("Tunggu Sebentar, Sedang Proses....")
                kahfz = await getBuffer(`https://hardianto.xyz/api/foliokanan?text=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Nulis ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'gura-logo': {
	reply(mess.wait)
	if (args.length < 1) return reply(`Masukan Nama!! Contoh\n ${prefix + command} kahfz`)
	kahfz = await getBuffer(`https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${text}`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Gura ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'sadboy-logo': {
	reply(mess.wait)
	if (args.length < 1) return reply(`Masukan Nama!! Contoh\n ${prefix + command} kahfz Tod`)
  text1 = args[0]
  text2 = args[1]
	kahfz = await getBuffer(`https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${text1}&text2=${text2}`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: `Sadboy Logo ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'logo1': {
	reply(mess.wait)
	if (args.length < 1) return reply(`Masukan Nama!! Contoh\n ${prefix + command} kahfz`)
	kahfz = await getBuffer(`https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${text}`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: kahfz,
                    caption: ` Logo ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
// RANDOM CECAN
case 'cecan': {
	anu = await getBuffer(`https://api.zacros.my.id/asupan/cecan `)
	let buttons = [
                    {buttonId: `cecan`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: anu,
                    caption: `Cecan ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
            case 'wallpaper': {
                if (!text) throw 'Mau Cari Walpaper apakak?'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `➟ Title : ${result.title}\n➟ Category : ${result.type}\n➟ Detail : ${result.source}\n➟ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Mau cari apa kak'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `┋➟ Title : ${result.title}\n┋➟ Source : ${result.source}\n┋➟ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'meme': {
	buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')
	let buttons = [
                    {buttonId: `meme`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: buff ,
                    caption: `meme ${global.botnma}`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
	}
	break
case 'darkjoke': {
	buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=IkyOgiwara')
	let buttons = [
                    {buttonId: `darkjoke`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: buff ,
                    caption: `Dark Cuy`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
	}
	break
case 'ppcouple': case 'ppcp': {
	anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
buff1 = await getBuffer(anu.result.male)
buff2 = await getBuffer(anu.result.female)
let buttons = [
                    {buttonId: `ppcp`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                
let buttonMessage = {
                    image: buff1 ,
                    caption: `Cowok Nya`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
await sleep(1000)
let buttonMessagee = {
                    image: buff2 ,
                    caption: `Cwek Nya`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessagee, { quoted: m })
}
break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker': case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             	if (!text) throw `Example : ${prefix + command} hisoka`
             	m.reply(mess.wait)
             	let link
             	if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             	if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             	if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             	if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             	if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             	if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             	if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             	if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             	if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             	if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             	if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             	if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             	if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             	if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             	if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             	if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             	if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             	if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             	if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             	if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             	if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             	if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             	if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             	if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             	if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             	if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             	if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             	if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             	if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             	if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             	if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             	if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             	if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             	if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             	if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             	if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             	if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             	if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             	if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             	if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             	if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             	if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             	if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             	if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             	if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             	if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             	if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             	if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             	if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             	if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             	if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             	if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             	if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             	if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             	if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             	if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             	let anu = await maker.textpro(link, _<text>_)
                hisoka.sendMessage(m.chat, { image: { url: anu }, caption: 'Nih Gan' }, { quoted: m })
             }
             break
//[ Maker Menu ]//



case 'blackpink':case 'halloween':case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':case 'fireworksparkle':case 'skeleton':case 'ultragloss':case 'denim':
case 'decorategreen':case 'peridot':case 'rock':case 'lava':
case 'rainbowequalizer':case 'purpleglass':case 'decorativeglass':
case 'chocolatecake':case 'strawberry':case 'koifish':case 'bread':case '3dbox':
case 'freeadvancedglow':case 'honey':case 'marble':case 'marbleslabs':case 'icecold':case 'fruitjuice':case 'abstragold':
case 'biscuit':case 'bagel':case 'wood':case 'hexagolden':case '3ddeepseametal':case 'leddisplayscreen':case 'wonderfulgraffitiart':

if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
reply(mess.wait)
anu = await getBuffer(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=NisaaCantik&text=${text}`)
let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: anu,
                    caption: `Maker ☕`,
                    footer: `Created Bot By ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6282194424412`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nomor HP :* ${anu.message.nomer_hp}\n┋➟ *Angka Shuzi :* ${anu.message.angka_shuzi}\n┋➟ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n┋➟ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Mimpi :* ${anu.message.mimpi}\n┋➟ *Arti :* ${anu.message.arti}\n┋➟ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama Anda :* ${anu.message.nama_anda.nama}\n┋➟ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n┋➟ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n┋➟ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n┋➟ *Hasil :* ${anu.message.result}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama Anda :* ${anu.message.nama_anda.nama}\n┋➟ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n┋➟ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n┋➟ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n┋➟ *Hasil :* ${anu.message.result}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama Suami :* ${anu.message.suami.nama}\n┋➟ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n┋➟ *Nama Istri :* ${anu.message.istri.nama}\n┋➟ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n┋➟ *Hasil :* ${anu.message.result}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama Anda :* ${anu.message.nama_anda.nama}\n┋➟ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n┋➟ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n┋➟ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n┋➟ *Sisi Positif :* ${anu.message.sisi_positif}\n┋➟ *Sisi Negatif :* ${anu.message.sisi_negatif}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama :* ${anu.message.nama}\n┋➟ *Arti :* ${anu.message.arti}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama :* ${anu.message.nama}\n┋➟ *Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Life Path :* ${anu.message.life_path}\n┋➟ *Destiny :* ${anu.message.destiny}\n┋➟ *Destiny Desire :* ${anu.message.destiny_desire}\n┋➟ *Personality :* ${anu.message.personality}\n┋➟ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `┋➟ *Nama Anda :* ${anu.message.nama_anda}\n┋➟ *Nama Pasangan :* ${anu.message.nama_pasangan}\n┋➟ *Sisi Positif :* ${anu.message.sisi_positif}\n┋➟ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Tanggal Pernikahan :* ${anu.message.tanggal}\n┋➟ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Lahir :* ${anu.message.hari_lahir}\n┋➟ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Lahir :* ${anu.message.hari_lahir}\n┋➟ *Rezeki :* ${anu.message.rejeki}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Lahir :* ${anu.message.hari_lahir}\n┋➟ *Pekerjaan :* ${anu.message.pekerjaan}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Analisa :* ${anu.message.analisa}\n┋➟ *Angka Akar :* ${anu.message.angka_akar}\n┋➟ *Sifat :* ${anu.message.sifat}\n┋➟ *Elemen :* ${anu.message.elemen}\n┋➟ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Analisa :* ${anu.message.analisa}\n┋➟ *Sektor :* ${anu.message.sektor}\n┋➟ *Elemen :* ${anu.message.elemen}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `┋➟ *Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Simbol Tarot :* ${anu.message.simbol_tarot}\n┋➟ *Arti :* ${anu.message.arti}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama :* ${anu.message.nama}\n┋➟ *Lahir :* ${anu.message.tahun_lahir}\n┋➟ *Gender :* ${anu.message.jenis_kelamin}\n┋➟ *Angka Kua :* ${anu.message.angka_kua}\n┋➟ *Kelompok :* ${anu.message.kelompok}\n┋➟ *Karakter :* ${anu.message.karakter}\n┋➟ *Sektor Baik :* ${anu.message.sektor_baik}\n┋➟ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Kala Tinantang :* ${anu.message.kala_tinantang}\n┋➟ *Info :* ${anu.message.info}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Hasil :* ${anu.message.result}\n┋➟ *Info :* ${anu.message.info}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Hari Lahir :* ${anu.message.hari_lahir}\n┋➟ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Hari Naas :* ${anu.message.hari_naas}\n┋➟ *Info :* ${anu.message.catatan}\n┋➟ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Hari Lahir :* ${anu.message.hari_lahir}\n┋➟ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Hari Lahir :* ${anu.message.hari_lahir}\n┋➟ *tanggal Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Arah Rezeki :* ${anu.message.arah_rejeki}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama :* ${anu.message.nama}\n┋➟ *Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n┋➟ *Hasil :* ${anu.message.result}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Tanggal :* ${anu.message.tanggal}\n┋➟ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n┋➟ *Watak Hari :* ${anu.message.watak_hari}\n┋➟ *Naga Hari :* ${anu.message.naga_hari}\n┋➟ *Jam Baik :* ${anu.message.jam_baik}\n┋➟ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama :* ${anu.message.nama}\n┋➟ *Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Nama :* ${anu.message.nama}\n┋➟ *Lahir :* ${anu.message.tgl_lahir}\n┋➟ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Tanggal :* ${anu.message.tgl_memancing}\n┋➟ *Hasil :* ${anu.message.result}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Hasil :* ${anu.message.result}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Zodiak :* ${anu.message.zodiak}\n┋➟ *Nomor :* ${anu.message.nomor_keberuntungan}\n┋➟ *Aroma :* ${anu.message.aroma_keberuntungan}\n┋➟ *Planet :* ${anu.message.planet_yang_mengitari}\n┋➟ *Bunga :* ${anu.message.bunga_keberuntungan}\n┋➟ *Warna :* ${anu.message.warna_keberuntungan}\n┋➟ *Batu :* ${anu.message.batu_keberuntungan}\n┋➟ *Elemen :* ${anu.message.elemen_keberuntungan}\n┋➟ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n┋➟ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `┋➟ *Hasil :* ${anu.message}`, m)
            }
            break
case 'zippyshare': case 'zippydl': {
                if (!text) throw `Example : ${prefix + command} https://www69.zippyshare.com/v/MRLWO4qB/file.html#!/N27zvKSgDG46JQ6`
                let anu = await zippyDownloader(isUrl(text)[0])
                if (Number(anu.size.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
                hisoka.sendText(m.chat, util.format(anu), m)
                hisoka.sendMedia(m.chat, anu.link, '', m)
            }
            break
            case 'mediafire': case 'mediafiredl': {
                if (!text) throw `Example : ${prefix + command} http://www.mediafire.com/file/naqy6ofoqkb6poi/Anime_MUGEN_300_Characters_by_Makoto_Itou_%2526_Kizuma_Gaming.apk/file`
                let anu = await mediafireDownloader(isUrl(text)[0])
                if (Number(anu.filesize.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
		hisoka.sendText(m.chat, util.format(anu), m)
                hisoka.sendMedia(m.chat, anu.link, '', m)
            }
            break
			
           
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `┋➟ Title : ${anu.result.lagu}\n┋➟ Album : ${anu.result.album}\n┋➟ Singer : ${anu.result.penyanyi}\n┋➟ Publish : ${anu.result.publish}\n┋➟ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `┋➟ Title : ${anu.result.title}\n┋➟ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `┋➟ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
┋➟ Title : ${anu.title}
┋➟ Author : ${anu.author.name}
┋➟ Like : ${anu.like}
┋➟ Caption : ${anu.caption}
┋➟ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `┋➟ Title : ${anu.title}\n┋➟ Author : ${anu.author.name}\n┋➟ Like : ${anu.like}\n┋➟ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
/*case 'alkitab': 
if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
*/
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return reply(mess.owner)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report But',
                                    url: 'https://wa.me/6283127014833?text=bang+report+bug'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Start Anonymous',
                                    id: 'start'
                                }
                            }]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `_Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner_`)
                    throw false
                }
                let profile = await hisoka.profilePictureUrl(room.b)
                let status = await hisoka.fetchStatus(room.b)
                let msg = await hisoka.sendImage(room.a, profile, `Nama : ${await hisoka.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                hisoka.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `_Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `_Partner Telah Meninggalkan Sesi Anonymous_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `_Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda_`, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `_Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan_`, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `_Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan_`, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `_Mohon Tunggu Sedang Mencari Partner_`, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return reply(mess.owner)
                hisoka.public = true
                reply('Sukse Ubah Ke mode public')
            }
            break
case 'setmenu':
if (!isCreator) return reply(mess.owner)
                            if (!q) return reply(`Masukan opts :\n⭔location\n⭔simple\n⭔ gif`)
                            if (q == "location") {
                            modelmenu = "location"
                            reply("Done change menu to "+q)
                            } 

                            else if (q == "gif") {
                          modelmenu = "gif"
                            reply("Done change menu to "+q)
                            } 
                            
                              else if (q == "simpel") {
                          modelmenu = "simpel"
                            reply("Done change menu to "+q)
                            } 

                            else {
                           reply(`Masukan opts :
⭔location
⭔simpel
⭔gif`)
                            }
                            break
            case 'self': {
                if (!isCreator) return reply(mess.owner)
                hisoka.public = false
                reply('Sukses Change To Self Usage')
            }
            break

//FITUR TOOLS 
case 'ssweb-hp': {
		if(args.length < 1) return reply(`Url Nya Mana?`)
		anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
	let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: anu ,
                    caption: `Ssweb Url ( HP )`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
  case 'ssweb-pc': {
                	if(args.length < 1) return reply(`Url Nya Mana?`)
                	anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
                ]
                let buttonMessage = {
                    image: anu ,
                    caption: `Ssweb Url ( PC )`,
                    footer: `Bot Created by ${global.pengguna}`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
                break
case 'translate':
if (args.length < 1) return reply(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
m.reply('process')
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
  break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'owner': {
                hisoka.sendContact(m.chat, global.pemilik, m)
            }
            break

case 'creator': {
                hisoka.sendContact(m.chat, global.creator, m)
            }
            break
                  case 'reportbug': case 'bug': case 'report': {
                    	if(!text) throw `Masukan Bug Nya Contoh\n\n${command} Menu Error `
                    	hisoka.sendMessage(`6282194424412@s.whatsapp.net`, {text: `*Bug Report Dari:* wa.me/${m.sender.split("@")[0]}
_Pesan Report:_ ${text}` })
reply(` Sukses Lapor ${command} Kepada Owner Silahkan Tunggu Dalam Waktu 24 Jam\n\nJika Main - Main Dengan Fitur Ini Maka Anda Mendapatkan Block Nomor Selama 2 Hari !`)
                    }
                    break 
                    
                    // Fitur Gak Penting Di Sinj
case 'tes':
reply(`On bang`)
break
case 'rules':
reply(` *SYARAT KETENTUAN BOTZ

1. ❌ DI LARANG MENYEPAM BOT DENGAN BUTTON YANG TERSEDIA
SANKSI = BLOCK 1 HARI ✅

2. ❌ DI LARANG SPAM BUG / VIRTEX DLL😡 
SANKSI = BLOCK ✅

3. ❌ DILARANG MEMBANDINGKAN BOT 😞 
SANKSI = BANNED ✅

4. ❌ DILARANG CALL BOT 
SANKSI = BLOCK ✅
      ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
ANDA DAPAT MENYEWA BOT INI KEDALAM GRUB SILAHKAN CHAT NO. OWNER DENGAN KETIK .owner
`)
     break
case 'tambahlimit': 
if (!global.db.users[m.sender].limit < 1) return reply(`S u k s e s Menambah Limit`) // respon ketika limit habis
db.users[m.sender].limit += 1
break
case 'ceklimit': 
reply(`Limit Kamu : *${global.db.users[m.sender].limit}*`)
break
            
case 'list': case 'menu': case 'help': case '?': {
           	if (modelmenu == 'location') {
                anu = `
Hi ${pushname}
Semoga Harimu Menyenangkan

Limit Kamu : *${global.db.users[m.sender].limit}*

Saya Adalah Bot Whatsapp Ciptaan ${global.ownernma}
Dan Kamu Adalah Pengguna Bot Ini 
Silahkan Gunakan Bot Dengan Bijak 🥰

`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/Lycho.jpg')},
                            hydratedFooterText: `${global.botnma} Created By : ${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝑹𝒆𝒑𝒐𝒓𝒕 𝑩𝒖𝒈',
                                    url: 'https://wa.me/6282194424412?text=Bang+Lapor+Ada+Bug'
                                }
                            }, {
                            	urlButton: {
                                displayText: `${global.ganti2}`, 
                                    url: `${global.web2}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: '𝐑𝐮𝐥𝐞𝐬 𝑩𝐨𝐭',
                                    id: `${prefix}rules`
                                }           
                                }, {
                                quickReplyButton: {
                                    displayText: '𝐕𝐢𝐭𝐮𝐫 𝐁𝐨𝐭',
                                    id: `${prefix}command`
                                }                               
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })                    
       }
       else if (modelmenu == 'gif') {
       	pref = 1
       	anu = `
────[USER INFO]────
Nama : ${pushname}
Nomor : _wa.me/${m.sender.split("@")[0]}_
Limit Kamu : *${global.db.users[m.sender].limit}*
────────────────────────

────[BOT INFO]────
 *› Library :* _Baileys MD_
 *› Runtime :* _${runtime(process.uptime())}_
 *› Hijriah :* _${dateIslamic}_
────────────────────────

──────[ *_LIST MENU_* ]───────

🛠️ *Random Vitur
${pref++} ${prefix}readmore



📥 *Downloader Menu*

${pref++} ${prefix}tiktoknowm _<url>_
${pref++} ${prefix}tiktokwm _<url>_
${pref++} ${prefix}tiktokmp3 _<url>_
${pref++} ${prefix}ig _<url>_
${pref++} ${prefix}ig2    _<link>_
${pref++} ${prefix}play _<query>_
${pref++} ${prefix}yts _<query>_
${pref++} ${prefix}ytmp3 _<url>_
${pref++} ${prefix}ytmp4 _<url>_
${pref++} ${prefix}getmusic _<query>_
${pref++} ${prefix}getvideo _<query>_
${pref++} ${prefix}umma _<url>_
${pref++} ${prefix}joox _<query>_
${pref++} ${prefix}soundcloud _<url>_
${pref++} ${prefix}spotify    _<link>_
${pref++} ${prefix}spotifysearch    _<teks>_
${pref++} ${prefix}jooxplay    _<teks>_
${pref++} ${prefix}twtdl    _<link>_
${pref++} ${prefix}fbdl    _<link>_
${pref++} ${prefix}lirik    _<teks>_
${pref++} ${prefix}zippyshare    _<teks>_
${pref++} ${prefix}pinterestdl    _<link>_
${pref++} ${prefix}pixiv    _<teks>_
${pref++} ${prefix}pixivdl    _<link>_
${pref++} ${prefix}playstore    _<teks>_



🛒 *Store*

${pref++} ${prefix}sewabot    _<teks>_
${pref++} ${prefix}jadibot    _<teks>_
${pref++} ${prefix}jasarun    _<teks>_
${pref++} ${prefix}masukgc    _<teks>_



🔍 *Search Menu*

${pref++} ${prefix}ssweb-hp
${pref++} ${prefix}ssweb-pc
${pref++} ${prefix}translate
${pref++} ${prefix}meme
${pref++} ${prefix}ppcouple
${pref++} ${prefix}wikimedia _<query>_
${pref++} ${prefix}ringtone _<query>_
${pref++} ${prefix}ktpmaker
${pref++} ${prefix}google    _<teks>_
${pref++} ${prefix}shopee    _<teks>_
${pref++} ${prefix}kodepos    _<namadaerah>_
${pref++} ${prefix}gimage    _<teks>_        Ⓟ︎
${pref++} ${prefix}gimage2    _<teks>_        Ⓟ︎
${pref++} ${prefix}pinterest    _<teks>_       Ⓟ︎
${pref++} ${prefix}pinterest2    _<teks>_        Ⓟ︎
${pref++} ${prefix}kbbi    _<teks>_
${pref++} ${prefix}cuaca    _<nama daerah>_
${pref++} ${prefix}brainly    _<teks>_
${pref++} ${prefix}brainly2    _<teks>_
${pref++} ${prefix}jarak    _<teks>_
${pref++} ${prefix}shortlink    _<link>_
${pref++} ${prefix}urbandictionary
${pref++} ${prefix}chord
${pref++} ${prefix}heroml
${pref++} ${prefix}genshin
${pref++} ${prefix}wikipedia    _<teks>_



🎐 *Quotes Menu*

${pref++} ${prefix}quotes
${pref++} ${prefix}quotesanime
${pref++} ${prefix}quotesdilan
${pref++} ${prefix}quotesimage
${pref++} ${prefix}faktaunik
${pref++} ${prefix}katabijak
${pref++} ${prefix}pantun
${pref++} ${prefix}bucin
${pref++} ${prefix}coffe
${pref++} ${prefix}quotesanime
${pref++} ${prefix}motivasi
${pref++} ${prefix}dilanquote
${pref++} ${prefix}bucinquote
${pref++} ${prefix}katasenja
${pref++} ${prefix}puisi



🌠 *Anime Menu*

${pref++} ${prefix}character    _<teks>_   Ⓟ︎
${pref++} ${prefix}manga    _<teks>_   Ⓟ︎
${pref++} ${prefix}anime
${pref++} ${prefix}kusonime    _<teks>_   Ⓟ︎
${pref++} ${prefix}kusonimesearch    _<teks>_   Ⓟ︎
${pref++} ${prefix}otakudesu    _<teks>_   Ⓟ︎
${pref++} ${prefix}otakudesusearch    _<teks>_   Ⓟ︎
${pref++} ${prefix}konachan    _<teks>_   Ⓟ︎



🖌️ *Text Pro Menu*

${pref++} ${prefix}3dchristmas
${pref++} ${prefix}3ddeepsea
${pref++} ${prefix}americanflag
${pref++} ${prefix}3dscifi
${pref++} ${prefix}3drainbow
${pref++} ${prefix}3dwaterpipe
${pref++} ${prefix}halloweenskeleton
${pref++} ${prefix}sketch
${pref++} ${prefix}bluecircuit
${pref++} ${prefix}space
${pref++} ${prefix}metallic
${pref++} ${prefix}fiction
${pref++} ${prefix}greenhorror
${pref++} ${prefix}transformer
${pref++} ${prefix}berry
${pref++} ${prefix}thunder
${pref++} ${prefix}magma
${pref++} ${prefix}3dcrackedstone
${pref++} ${prefix}3dneonlight
${pref++} ${prefix}impressiveglitch
${pref++} ${prefix}naturalleaves
${pref++} ${prefix}fireworksparkle
${pref++} ${prefix}matrix
${pref++} ${prefix}dropwater
${pref++} ${prefix}harrypotter
${pref++} ${prefix}foggywindow
${pref++} ${prefix}neondevils
${pref++} ${prefix}christmasholiday
${pref++} ${prefix}3dgradient
${pref++} ${prefix}blackpink
${pref++} ${prefix}gluetext
${pref++} ${prefix}blackpink    _<teks>_
${pref++} ${prefix}neon    _<teks>_
${pref++} ${prefix}greenneon    _<teks>_
${pref++} ${prefix}advanceglow    _<teks>_
${pref++} ${prefix}futureneon    _<teks>_
${pref++} ${prefix}sandwriting    _<teks>_
${pref++} ${prefix}sandsummer    _<teks>_
${pref++} ${prefix}sandengraved    _<teks>_
${pref++} ${prefix}metaldark    _<teks>_
${pref++} ${prefix}neonlight    _<teks>_
${pref++} ${prefix}holographic    _<teks>_
${pref++} ${prefix}text1917    _<teks>_
${pref++} ${prefix}minion    _<teks>_
${pref++} ${prefix}deluxesilver    _<teks>_
${pref++} ${prefix}newyearcard    _<teks>_
${pref++} ${prefix}bloodfrosted    _<teks>_
${pref++} ${prefix}halloween    _<teks>_
${pref++} ${prefix}jokerlogo    _<teks>_
${pref++} ${prefix}fireworksparkle    _<teks>_
${pref++} ${prefix}natureleaves    _<teks>_
${pref++} ${prefix}bokeh    _<teks>_
${pref++} ${prefix}toxic    _<teks>_
${pref++} ${prefix}strawberry    _<teks>_
${pref++} ${prefix}box3d    _<teks>_
${pref++} ${prefix}roadwarning    _<teks>_
${pref++} ${prefix}breakwall    _<teks>_
${pref++} ${prefix}icecold    _<teks>_
${pref++} ${prefix}luxury    _<teks>_
${pref++} ${prefix}cloud    _<teks>_
${pref++} ${prefix}summersand    _<teks>_
${pref++} ${prefix}horrorblood    _<teks>_
${pref++} ${prefix}thunder    _<teks>_
${pref++} ${prefix}pornhub    _<teks>_
${pref++} ${prefix}glitch    _<teks>_
${pref++} ${prefix}avenger    _<teks>_
${pref++} ${prefix}space    _<teks>_
${pref++} ${prefix}ninjalogo    _<teks>_
${pref++} ${prefix}marvelstudio    _<teks>_
${pref++} ${prefix}lionlogo    _<teks>_
${pref++} ${prefix}wolflogo    _<teks>_
${pref++} ${prefix}steel3d    _<teks>_
${pref++} ${prefix}wallgravity    _<teks>_



🎨 *Photo Oxy Menu*


${pref++} ${prefix}romantic
${pref++} ${prefix}burnpapper
${pref++} ${prefix}naruto
${pref++} ${prefix}lovemsg
${pref++} ${prefix}grassmsg
${pref++} ${prefix}lovetext
${pref++} ${prefix}coffecup
${pref++} ${prefix}butterfly
${pref++} ${prefix}harrypotter
${pref++} ${prefix}retrolol
${pref++} ${prefix}shadow    _<teks>_
${pref++} ${prefix}cup    _<teks>_
${pref++} ${prefix}cup1    _<teks>_
${pref++} ${prefix}romance    _<teks>_
${pref++} ${prefix}smoke    _<teks>_
${pref++} ${prefix}burnpaper    _<teks>_
${pref++} ${prefix}lovemessage    _<teks>_
${pref++} ${prefix}undergrass    _<teks>_
${pref++} ${prefix}love    _<teks>_
${pref++} ${prefix}coffe    _<teks>_
${pref++} ${prefix}woodheart    _<teks>_
${pref++} ${prefix}woodenboard    _<teks>_
${pref++} ${prefix}summer3d    _<teks>_
${pref++} ${prefix}wolfmetal    _<teks>_
${pref++} ${prefix}nature3d    _<teks>_
${pref++} ${prefix}underwater    _<teks>_
${pref++} ${prefix}golderrose    _<teks>_
${pref++} ${prefix}summernature    _<teks>_
${pref++} ${prefix}letterleaves    _<teks>_
${pref++} ${prefix}glowingneon    _<teks>_
${pref++} ${prefix}fallleaves    _<teks>_
${pref++} ${prefix}flamming    _<teks>_
${pref++} ${prefix}harrypotter    _<teks>_
${pref++} ${prefix}carvedwood    _<teks>_
${pref++} ${prefix}arcade8bit    _<teks>_
${pref++} ${prefix}battlefield4    _<teks>_
${pref++} ${prefix}pubg    _<teks>_



📸 *Ephoto Menu*

${pref++} ${prefix}ffcover
${pref++} ${prefix}crossfire
${pref++} ${prefix}galaxy
${pref++} ${prefix}glass
${pref++} ${prefix}neon
${pref++} ${prefix}beach
${pref++} ${prefix}blackpink
${pref++} ${prefix}igcertificate
${pref++} ${prefix}ytcertificate
${pref++} ${prefix}wetglass
${pref++} ${prefix}multicolor3d
${pref++} ${prefix}watercolor
${pref++} ${prefix}luxurygold
${pref++} ${prefix}galaxywallpaper
${pref++} ${prefix}lighttext
${pref++} ${prefix}beautifulflower
${pref++} ${prefix}puppycute
${pref++} ${prefix}royaltext
${pref++} ${prefix}heartshaped
${pref++} ${prefix}birthdaycake
${pref++} ${prefix}galaxystyle
${pref++} ${prefix}hologram3d
${pref++} ${prefix}greenneon
${pref++} ${prefix}glossychrome
${pref++} ${prefix}greenbush
${pref++} ${prefix}metallogo
${pref++} ${prefix}noeltext
${pref++} ${prefix}glittergold
${pref++} ${prefix}textcake
${pref++} ${prefix}starsnight
${pref++} ${prefix}wooden3d
${pref++} ${prefix}textbyname
${pref++} ${prefix}writegalacy
${pref++} ${prefix}galaxybat
${pref++} ${prefix}snow3d
${pref++} ${prefix}birthdayday
${pref++} ${prefix}goldplaybutton
${pref++} ${prefix}silverplaybutton
${pref++} ${prefix}freefire



✈️ *Fun Menu*

${pref++} ${prefix}halah
${pref++} ${prefix}hilih
${pref++} ${prefix}huluh
${pref++} ${prefix}heleh
${pref++} ${prefix}holoh
${pref++} ${prefix}jadian
${pref++} ${prefix}delttt
${pref++} ${prefix}tictactoe
${pref++} ${prefix}family100
${pref++} ${prefix}tebak [option]
${pref++} ${prefix}math [mode]
${pref++} ${prefix}suitpvp [@tag]



📑 *Primbon Menu*

${pref++} ${prefix}randomnama    _<teks>_
${pref++} ${prefix}jodoh
${pref++} ${prefix}weton
${pref++} ${prefix}jadian
${pref++} ${prefix}tebakumur
${pref++} ${prefix}nomorhoki
${pref++} ${prefix}artimimpi
${pref++} ${prefix}artinama
${pref++} ${prefix}ramaljodoh
${pref++} ${prefix}ramaljodohbali
${pref++} ${prefix}suamiistri
${pref++} ${prefix}ramalcinta
${pref++} ${prefix}cocoknama
${pref++} ${prefix}pasangan
${pref++} ${prefix}jadiannikah
${pref++} ${prefix}sifatusaha
${pref++} ${prefix}rezeki
${pref++} ${prefix}pekerjaan
${pref++} ${prefix}nasib
${pref++} ${prefix}penyakit
${pref++} ${prefix}tarot
${pref++} ${prefix}fengshui
${pref++} ${prefix}haribaik
${pref++} ${prefix}harisangar
${pref++} ${prefix}harisial
${pref++} ${prefix}nagahari
${pref++} ${prefix}arahrezeki
${pref++} ${prefix}peruntungan
${pref++} ${prefix}weton
${pref++} ${prefix}karakter
${pref++} ${prefix}keberuntungan
${pref++} ${prefix}memancing
${pref++} ${prefix}masasubur
${pref++} ${prefix}zodiak
${pref++} ${prefix}shio



🌀 *Convert Menu*

${pref++} ${prefix}toimage
${pref++} ${prefix}removebg
${pref++} ${prefix}sticker
${pref++} ${prefix}emojimix
${pref++} ${prefix}tovideo
${pref++} ${prefix}togif
${pref++} ${prefix}tourl
${pref++} ${prefix}tovn
${pref++} ${prefix}tomp3
${pref++} ${prefix}toaudio
${pref++} ${prefix}ebinary
${pref++} ${prefix}dbinary
${pref++} ${prefix}styletext
${pref++} ${prefix}ttp 




⭕ *18+*

${pref++} ${prefix}asupan    _<teks>_   Ⓟ︎
${pref++} ${prefix}xhamstersearch    _<teks>_   Ⓟ︎ 
${pref++} ${prefix}xhamster    _<link>_   Ⓟ︎
${pref++} ${prefix}xnxxsearch    _<teks>_   Ⓟ︎
${pref++} ${prefix}xnxx    _<link>_   Ⓟ︎
${pref++} ${prefix}nhentai    _<link>_   Ⓟ︎
${pref++} ${prefix}nhentaipdf    _<link>_   Ⓟ︎
${pref++} ${prefix}nhentaisearch    _<teks>_   Ⓟ︎
${pref++} ${prefix}nekopoi    _<link>_   Ⓟ︎
${pref++} ${prefix}nekopoisearch    _<teks>_   Ⓟ︎



🎧 *Random Sound*
────────────────────────
${pref++} ${prefix}sound1
${pref++} ${prefix}sound2
${pref++} ${prefix}sound3
${pref++} ${prefix}sound4
${pref++} ${prefix}sound5
${pref++} ${prefix}sound6
${pref++} ${prefix}sound7
${pref++} ${prefix}sound8
${pref++} ${prefix}sound9
${pref++} ${prefix}sound10
${pref++} ${prefix}sound11
${pref++} ${prefix}sound12
${pref++} ${prefix}sound13
${pref++} ${prefix}sound14
${pref++} ${prefix}sound15
${pref++} ${prefix}sound16
${pref++} ${prefix}sound17
${pref++} ${prefix}sound18
${pref++} ${prefix}sound19
${pref++} ${prefix}sound20
${pref++} ${prefix}sound21
${pref++} ${prefix}sound22
${pref++} ${prefix}sound23
${pref++} ${prefix}sound24
${pref++} ${prefix}sound25
${pref++} ${prefix}sound26
${pref++} ${prefix}sound27
${pref++} ${prefix}sound28
${pref++} ${prefix}sound29
${pref++} ${prefix}sound30
${pref++} ${prefix}sound31
${pref++} ${prefix}sound32
${pref++} ${prefix}sound33
${pref++} ${prefix}sound34
${pref++} ${prefix}sound35
${pref++} ${prefix}sound36
${pref++} ${prefix}sound37
${pref++} ${prefix}sound38
${pref++} ${prefix}sound39
${pref++} ${prefix}sound40
${pref++} ${prefix}sound41
${pref++} ${prefix}sound42
${pref++} ${prefix}sound43
${pref++} ${prefix}sound44
${pref++} ${prefix}sound45
${pref++} ${prefix}sound46
${pref++} ${prefix}sound47
${pref++} ${prefix}sound48
${pref++} ${prefix}sound49
${pref++} ${prefix}sound50
${pref++} ${prefix}sound51
${pref++} ${prefix}sound52
${pref++} ${prefix}sound53
${pref++} ${prefix}sound54
${pref++} ${prefix}sound55
${pref++} ${prefix}sound56
${pref++} ${prefix}sound57
${pref++} ${prefix}sound58
${pref++} ${prefix}sound59
${pref++} ${prefix}sound60
${pref++} ${prefix}sound61
${pref++} ${prefix}sound62
${pref++} ${prefix}sound63
${pref++} ${prefix}sound64
${pref++} ${prefix}sound65
${pref++} ${prefix}sound66
${pref++} ${prefix}sound67
${pref++} ${prefix}sound68
${pref++} ${prefix}sound69
${pref++} ${prefix}sound70
${pref++} ${prefix}sound71
${pref++} ${prefix}sound72
${pref++} ${prefix}sound73
${pref++} ${prefix}sound74



📁 *Database Menu*

${pref++} ${prefix}setcmd
${pref++} ${prefix}listcmd
${pref++} ${prefix}delcmd
${pref++} ${prefix}lockcmd
${pref++} ${prefix}addmsg
${pref++} ${prefix}listmsg
${pref++} ${prefix}getmsg
${pref++} ${prefix}delmsg



🗣️ *Anonymous Menu*

${pref++} ${prefix}anonymous
${pref++} ${prefix}start
${pref++} ${prefix}next
${pref++} ${prefix}keluar
${pref++} ${prefix}sendkontak



🕌 *Islamic Menu*

${pref++} ${prefix}iqra
${pref++} ${prefix}hadist
${pref++} ${prefix}alquran
${pref++} ${prefix}juzamma
${pref++} ${prefix}tafsirsurah
${pref++} ${prefix}listsurah
${pref++} ${prefix}asmaulhusna
${pref++} ${prefix}kisahnabi   _<Muhammad>_
${pref++} ${prefix}jadwalsholat   _<Makassar>_



📺 *Jadwal Tv && Berita*

${pref++} ${prefix}jadwaltv    _<teks>_
${pref++} ${prefix}jadwaltvnow
${pref++} ${prefix}newsinfo
${pref++} ${prefix}jadwalbola
${pref++} ${prefix}indbeasiswa
${pref++} ${prefix}hoax
${pref++} ${prefix}cnnindonesia
${pref++} ${prefix}cnnnasional
${pref++} ${prefix}cnninternasional
${pref++} ${prefix}infogempa    _<nama daerah>_
${pref++} ${prefix}covidindo
${pref++} ${prefix}covidglobal



🎞️ *Movie && Story*

${pref++} ${prefix}lk21
${pref++} ${prefix}drakorongoing
${pref++} ${prefix}wattpad    _<link>_
${pref++} ${prefix}wattpadsearch    _<teks>_
${pref++} ${prefix}cerpen    _<teks>_
${pref++} ${prefix}ceritahoror



🖼️ *Wallpaper Vitur*

${pref++} ${prefix}wallpaper _<query>_
${pref++} ${prefix}wallpapersearch    _<teks>_
${pref++} ${prefix}wallpapersearch2    _<teks>_



🛸 *Random Anime*

${pref++} ${prefix}loli     Ⓟ︎
${pref++} ${prefix}neko     Ⓟ︎
${pref++} ${prefix}art     Ⓟ︎
${pref++} ${prefix}bts     Ⓟ︎
${pref++} ${prefix}exo     Ⓟ︎
${pref++} ${prefix}elf     Ⓟ︎
${pref++} ${prefix}neko     Ⓟ︎
${pref++} ${prefix}shota     Ⓟ︎
${pref++} ${prefix}husbu     Ⓟ︎
${pref++} ${prefix}sagiri     Ⓟ︎
${pref++} ${prefix}shinobu     Ⓟ︎
${pref++} ${prefix}megumin     Ⓟ︎
${pref++} ${prefix}wallnime     Ⓟ︎
${pref++} ${prefix}chiisaihentai     Ⓟ︎
${pref++} ${prefix}trap     Ⓟ︎
${pref++} ${prefix}blowjob     Ⓟ︎
${pref++} ${prefix}yaoi     Ⓟ︎
${pref++} ${prefix}ecchi     Ⓟ︎
${pref++} ${prefix}hentai     Ⓟ︎
${pref++} ${prefix}ahegao     Ⓟ︎
${pref++} ${prefix}hololewd     Ⓟ︎
${pref++} ${prefix}sideoppai     Ⓟ︎
${pref++} ${prefix}animefeets     Ⓟ︎
${pref++} ${prefix}animebooty     Ⓟ︎
${pref++} ${prefix}animethighss     Ⓟ︎
${pref++} ${prefix}hentaiparadise     Ⓟ︎
${pref++} ${prefix}animearmpits     Ⓟ︎
${pref++} ${prefix}hentaifemdom     Ⓟ︎
${pref++} ${prefix}lewdanimegirls     Ⓟ︎
${pref++} ${prefix}biganimetiddies     Ⓟ︎
${pref++} ${prefix}animebellybutton     Ⓟ︎
${pref++} ${prefix}hentai4everyone     Ⓟ︎
${pref++} ${prefix}bj     Ⓟ︎
${pref++} ${prefix}ero     Ⓟ︎
${pref++} ${prefix}cum     Ⓟ︎
${pref++} ${prefix}feet     Ⓟ︎
${pref++} ${prefix}yuri     Ⓟ︎
${pref++} ${prefix}trap     Ⓟ︎
${pref++} ${prefix}lewd     Ⓟ︎
${pref++} ${prefix}feed     Ⓟ︎
${pref++} ${prefix}eron     Ⓟ︎
${pref++} ${prefix}solo     Ⓟ︎
${pref++} ${prefix}gasm     Ⓟ︎
${pref++} ${prefix}poke     Ⓟ︎
${pref++} ${prefix}anal     Ⓟ︎
${pref++} ${prefix}holo     Ⓟ︎
${pref++} ${prefix}tits     Ⓟ︎
${pref++} ${prefix}kuni     Ⓟ︎
${pref++} ${prefix}kiss     Ⓟ︎
${pref++} ${prefix}erok     Ⓟ︎
${pref++} ${prefix}smug     Ⓟ︎
${pref++} ${prefix}baka     Ⓟ︎
${pref++} ${prefix}solog     Ⓟ︎
${pref++} ${prefix}feetg     Ⓟ︎
${pref++} ${prefix}lewdk     Ⓟ︎
${pref++} ${prefix}waifu     Ⓟ︎
${pref++} ${prefix}pussy     Ⓟ︎
${pref++} ${prefix}femdom     Ⓟ︎
${pref++} ${prefix}cuddle     Ⓟ︎
${pref++} ${prefix}hentai     Ⓟ︎
${pref++} ${prefix}eroyuri     Ⓟ︎
${pref++} ${prefix}cum_jpg     Ⓟ︎
${pref++} ${prefix}blowjob     Ⓟ︎
${pref++} ${prefix}erofeet     Ⓟ︎
${pref++} ${prefix}holoero     Ⓟ︎
${pref++} ${prefix}classic     Ⓟ︎
${pref++} ${prefix}erokemo     Ⓟ︎
${pref++} ${prefix}fox_girl     Ⓟ︎
${pref++} ${prefix}futanari     Ⓟ︎
${pref++} ${prefix}lewdkemo     Ⓟ︎
${pref++} ${prefix}wallpaper     Ⓟ︎
${pref++} ${prefix}pussy_jpg     Ⓟ︎
${pref++} ${prefix}kemonomimi     Ⓟ︎
${pref++} ${prefix}nsfw_avatar     Ⓟ︎



🥀 *Waifu Vitur*

${pref++} ${prefix}waifu     Ⓟ︎
${pref++} ${prefix}shinobu      Ⓟ︎
${pref++} ${prefix}megumin      Ⓟ︎
${pref++} ${prefix}bully      Ⓟ︎
${pref++} ${prefix}cuddle      Ⓟ︎
${pref++} ${prefix}cry      Ⓟ︎
${pref++} ${prefix}hug      Ⓟ︎
${pref++} ${prefix}awoo      Ⓟ︎
${pref++} ${prefix}kiss      Ⓟ︎
${pref++} ${prefix}lick      Ⓟ︎
${pref++} ${prefix}pat      Ⓟ︎
${pref++} ${prefix}smug      Ⓟ︎
${pref++} ${prefix}bonk      Ⓟ︎
${pref++} ${prefix}yeet      Ⓟ︎
${pref++} ${prefix}blush      Ⓟ︎
${pref++} ${prefix}smile      Ⓟ︎
${pref++} ${prefix}wave      Ⓟ︎
${pref++} ${prefix}highfive      Ⓟ︎
${pref++} ${prefix}handhold      Ⓟ︎
${pref++} ${prefix}nom      Ⓟ︎
${pref++} ${prefix}bite      Ⓟ︎
${pref++} ${prefix}glomp      Ⓟ︎
${pref++} ${prefix}slap      Ⓟ︎
${pref++} ${prefix}kill      Ⓟ︎
${pref++} ${prefix}happy      Ⓟ︎
${pref++} ${prefix}wink      Ⓟ︎
${pref++} ${prefix}poke      Ⓟ︎
${pref++} ${prefix}dance      Ⓟ︎
${pref++} ${prefix}cringe      Ⓟ︎



🎠 *Stalk Vitur*

${pref++} ${prefix}stalkig    _<nama>_
${pref++} ${prefix}stalkgithub    _<nama>_
${pref++} ${prefix}stalktwitter    _<nama>_
${pref++} ${prefix}mlstalk    _<nama>_



*Voice Changer*

${pref++} ${prefix}bass
${pref++} ${prefix}blown
${pref++} ${prefix}deep
${pref++} ${prefix}earrape
${pref++} ${prefix}fast
${pref++} ${prefix}fat
${pref++} ${prefix}nightcore
${pref++} ${prefix}reverse
${pref++} ${prefix}robot
${pref++} ${prefix}slow
${pref++} ${prefix}tupai



👥 *Group Menu*

${pref++} ${prefix}linkgroup
${pref++} ${prefix}getidgc
${pref++} ${prefix}getpp  _<reply>_
${pref++} ${prefix}ephemeral [option]
${pref++} ${prefix}setppgc [image]
${pref++} ${prefix}setname _<text>_
${pref++} ${prefix}setdesc _<text>_
${pref++} ${prefix}group [option]
${pref++} ${prefix}editinfo [option]
${pref++} ${prefix}add @user
${pref++} ${prefix}kick @user
${pref++} ${prefix}hidetag _<text>_
${pref++} ${prefix}tagall _<text>_
${pref++} ${prefix}antilink [on/off]
${pref++} ${prefix}antiwame [on/off]
${pref++} ${prefix}mute [on/off]
${pref++} ${prefix}promote @user
${pref++} ${prefix}demote @user
${pref++} ${prefix}vote _<text>_
${pref++} ${prefix}devote
${pref++} ${prefix}upvote
${pref++} ${prefix}cekvote
${pref++} ${prefix}hapusvote



⛓️ *Main Menu*

${pref++} ${prefix}ping
${pref++} ${prefix}owner
${pref++} ${prefix}menu / ${prefix}help / ${prefix}?
${pref++} ${prefix}delete
${pref++} ${prefix}infochat
${pref++} ${prefix}sewabot
${pref++} ${prefix}listpc
${pref++} ${prefix}listgc
${pref++} ${prefix}listonline



*Owner Menu*

${pref++} ${prefix}culik
${pref++} ${prefix}chat [option]
${pref++} ${prefix}join [link]
${pref++} ${prefix}leave
${pref++} ${prefix}block @user
${pref++} ${prefix}unblock @user
${pref++} ${prefix}bcgroup _<text>_
${pref++} ${prefix}bcall _<text>_
${pref++} ${prefix}bcimg _<text>_
${pref++} ${prefix}bcvidio _<text>_
${pref++} ${prefix}bcaudio _<text>_
${pref++} ${prefix}setppbot [image]
${pref++} ${prefix}setexif
${pref++} ${prefix}restart
${pref++} ${prefix}wasted   _<reply gambar>_
${pref++} ${prefix}spamsms   _<nomor target>_   Ⓟ︎
${pref++} ${prefix}shutdown
${pref++} ${prefix}autobio On/Off
${pref++} ${prefix}autoread On/Off
${pref++} ${prefix}autoketik On/Off
`
	let message = await prepareWAMessageMedia({ video: { url: "./media/KahfzXzy.mp4" }, gifPlayback: true, gifAttribution: "TENOR" }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: `${anu}`,
                            hydratedFooterText: `${global.footer}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                }, {
                                quickReplyButton: {
                                    displayText: 'Rules Bot',
                                    id: `${prefix}rules`
                                }           
                                }, {
                                quickReplyButton: {
                                    displayText: 'Sewa Bot',
                                    id: `${prefix}sewabot`
                                    }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
} else if (modelmenu == 'simpel') {  

let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname} ${ucapanWaktu}`,
                    description: `
*USER-INFO*                   
女 : Nama                  › ${pushname}
女 : Nomor                 › ${m.sender.split("@")[0]}
女 : Limit                    › ${global.db.users[m.sender].limit}

*BOT-INFO*
女 : Library                › _Baileys MD_
女 : Creator               › Takimtod
女 : Runtime              › ${runtime(process.uptime())}

*TIME-INFO*
女 : Hari                      › ${week} ${weton}
女 : Tanggal               › ${date} 
女 : Hijriah                  › ${dateIslamic}

*GROUP-BOT*
女 : Grub 1 : ${global.grub1}
女 : Grub 2 : ${global.grub2} `,
                    buttonText: "LIST",
               //     footerText: `${global.footer}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								 "title": "Syarat Dan Ketentuan Botz",
								     "rows": [{
										"title": "[🛸] RULES BOTZ",
										"description": "Menampilkan Syarat && Ketentuan Botz",
										"rowId": `${prefix}rules`
										},
									   {
										"title": "[ ⛓️ ] MAIN MENU",
										"description": "Menampilkan Fitur",
										"rowId": `${prefix}mainmenu`
									}]
							},
						    {
								"title": "Bot Menu",
								"rows": [{
										"title": "[ 📚 ] ALL MENU",
										"description": "Menampilkan Semua Fitur!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "[ 📥 ] DOWNLOAD FITUR",
										"description": "Menampilkan Download Menu",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "[ 🔍 ] SEARCH FITUR",
										"description": "Menampilkan Search Fitur",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "[ 🎐 ] QUOTES FITUR",
										"description": "Menampilkan Quotes Fitur",
										"rowId": `${prefix}ranomquotes`
										},
										{
										"title": "[👥] GRUP FITUR",
										"description": "Menampilkan Fitur Grup",
										"rowId": `${prefix}grupmenu`
										},
                                       {
                                       	"title": "[ 🌠 ] ANIME FITUR",
										"description": "Menampilkan Anime Fitur",
										"rowId": `${prefix}imagemenu`
										},
										{
										"title": "[ 🖌️ ] TEXT PRO FITUR",
										"description": "Menampilkan TextPro Fitur",
										"rowId": `${prefix}textpromenu`
										},
										{
										"title": "[ 🎨 ] PHOTO OXY  FITUR",
										"description": "Menampilkan Photo Oxy Fitur",
										"rowId": `${prefix}photooxy`
										},
										{
										"title": "[ 🎧 ] RANDOM SOUND",
										"description": "Menampilkan List Sound",
										"rowId": `${prefix}listsound `
										},
										{
										"title": "[ 📸 ] EPHOTO FITUR",
										"description": "Menampilkan Ephoto Fitur",
										"rowId": `${prefix}ephotomenu`
										},
										{
										"title": "[ ✈️ ] FUN VITUR",
										"description": "Menampilkan Fun Fitur",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "[ 📑 ] PRIMBON FITUR",
										"description": "Menampilkan Primbon Fitur",
										"rowId": `${prefix}primbonmenu`
										},
										{
										"title": "[ 🌀 ] CONVERT FITUR",
										"description": "Menampilkan Convert Fitur",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "[ ⭕ ] 18+ FITUR",
										"description": "Menampilkan 18+ Fitur",
										"rowId": `${prefix}18+`
										},
										{
										"title": "[ 📁 ] DATABASE FITUR",
										"description": "Menampilkan Database Fitur",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "[ 🗣️ ] ANONYMOUS CHAT",
										"description": "menampilkan Fitur Anonymous Chat",
										"rowId": `${prefix}anonymouschatmenu`
										},
										{
										"title": "[ 🕌 ] ISLAMI FITUR",
										"description": "menampilkan Islami Fitur",
										"rowId": `${prefix}islmi`
										},
										{
										"title": "[ 📺 ] JADWAL TV && BERITA",
										"description": "menampilkan Jadwal && Berita",
										"rowId": `${prefix}jdwaltv`
										},
										{
										"title": "[ 🎞️ ] MOVIE && STORY",
										"description": "menampilkan Movie Fitur",
										"rowId": `${prefix}moviee`
										},
										{
										"title": "[ 🖼️ ] WALLPAPER VITUR",
										"description": "menampilkan Wallpapers Fitur",
										"rowId": `${prefix}walmenu`
										},
										{
										"title": "[ 🛸 ] RANDOM ANIME",
										"description": "menampilkan Random Anime",
										"rowId": `${prefix}rndomanime`
										},
										{
										"title": "[ 🥀 ] RANDOM WAIFU",
										"description": "menampilkan Random Waifu",
										"rowId": `${prefix}rndomwaifu`
										},
										{
										"title": "[ 🎠 ] STALK FITUR",
										"description": "menampilkan Stalk Vitur",
										"rowId": `${prefix}stalkv`
										},
										{
										"title": "[🎙️] VOICE CHANGER FITUR",
										"description": "Menampilkan Voice Changer Fitur",
										"rowId": `${prefix}voicemenu`
										} ,
                                        {
                                        "title": "[ 🛡️ ] OWNER FITUR",
										"description": "menampilkan Vitur Owner",
										"rowId": `${prefix}owmervitur`
										}    
								]
							},
							{
								"title": "Group Botz",
								"rows": [
									{
										"title": "[ 🛩️ ] GROUP BOTZ",
										"description": "menampilkan Group-Group Botz",
										"rowId": `${prefix}groubbot`
									}
								]
							},
							{
								"title": "Pemilik Botz Ini",
								"rows": [
									{
										"title": "[ 🤵 ] OWNER BOTZ",
										"description": "menampilkan Kontak Pemilik Botz",
										"rowId": `${prefix}owner`
									}
								]
							},
							{
								"title": "Developer && Creator Botz",
								"rows": [
									{
										"title": "[ 🤴 ] DEVELOPER && CREATOR",
										"description": "menampilkan Kontak Developer Botz",
										"rowId": `${prefix}creator`
									}
								]
							},
							{
								"title": "Thanks To",
								"rows": [
									{
										"title": "[ 🌟 ] CONTRIBUTOR",
										"description": "menampilkan Nama Teman - Teman Saya Yang Sudah Membantu Merakit Bot Ini !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {userJid: m.chat, quoted: troli})
            hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id})
            } 
                }
break


case 'allmenu': {
pref = 1
anu = `
────[USER INFO]────
Nama : ${pushname}
Nomor : _wa.me/${m.sender.split("@")[0]}_
Limit Kamu : *${global.db.users[m.sender].limit}*
────────────────────────

────[BOT INFO]────
 *› Library :* _Baileys MD_
 *› Runtime :* _${runtime(process.uptime())}_
 *› Hijriah :* _${dateIslamic}_
────────────────────────

──────[ *_LIST MENU_* ]───────

🛠️ *Random Vitur
${pref++} ${prefix}readmore


📥 *Downloader Menu*

${pref++} ${prefix}tiktoknowm _<url>_
${pref++} ${prefix}tiktokwm _<url>_
${pref++} ${prefix}tiktokmp3 _<url>_
${pref++} ${prefix}ig _<url>_
${pref++} ${prefix}ig2    _<link>_
${pref++} ${prefix}play _<query>_
${pref++} ${prefix}yts _<query>_
${pref++} ${prefix}ytmp3 _<url>_
${pref++} ${prefix}ytmp4 _<url>_
${pref++} ${prefix}getmusic _<query>_
${pref++} ${prefix}getvideo _<query>_
${pref++} ${prefix}umma _<url>_
${pref++} ${prefix}joox _<query>_
${pref++} ${prefix}soundcloud _<url>_
${pref++} ${prefix}spotify    _<link>_
${pref++} ${prefix}spotifysearch    _<teks>_
${pref++} ${prefix}jooxplay    _<teks>_
${pref++} ${prefix}twtdl    _<link>_
${pref++} ${prefix}fbdl    _<link>_
${pref++} ${prefix}lirik    _<teks>_
${pref++} ${prefix}zippyshare    _<teks>_
${pref++} ${prefix}pinterestdl    _<link>_
${pref++} ${prefix}pixiv    _<teks>_
${pref++} ${prefix}pixivdl    _<link>_
${pref++} ${prefix}playstore    _<teks>_



🛒 *Store*

${pref++} ${prefix}sewabot    _<teks>_
${pref++} ${prefix}jadibot    _<teks>_
${pref++} ${prefix}jasarun    _<teks>_
${pref++} ${prefix}masukgc    _<teks>_



🔍 *Search Menu*

${pref++} ${prefix}ssweb-hp
${pref++} ${prefix}ssweb-pc
${pref++} ${prefix}translate
${pref++} ${prefix}meme
${pref++} ${prefix}ppcouple
${pref++} ${prefix}wikimedia _<query>_
${pref++} ${prefix}ringtone _<query>_
${pref++} ${prefix}ktpmaker
${pref++} ${prefix}google    _<teks>_
${pref++} ${prefix}shopee    _<teks>_
${pref++} ${prefix}kodepos    _<namadaerah>_
${pref++} ${prefix}gimage    _<teks>_        Ⓟ︎
${pref++} ${prefix}gimage2    _<teks>_        Ⓟ︎
${pref++} ${prefix}pinterest    _<teks>_       Ⓟ︎
${pref++} ${prefix}pinterest2    _<teks>_        Ⓟ︎
${pref++} ${prefix}kbbi    _<teks>_
${pref++} ${prefix}cuaca    _<nama daerah>_
${pref++} ${prefix}brainly    _<teks>_
${pref++} ${prefix}brainly2    _<teks>_
${pref++} ${prefix}jarak    _<teks>_
${pref++} ${prefix}shortlink    _<link>_
${pref++} ${prefix}urbandictionary
${pref++} ${prefix}chord
${pref++} ${prefix}heroml
${pref++} ${prefix}genshin
${pref++} ${prefix}wikipedia    _<teks>_



🎐 *Quotes Menu*

${pref++} ${prefix}quotes
${pref++} ${prefix}quotesanime
${pref++} ${prefix}quotesdilan
${pref++} ${prefix}quotesimage
${pref++} ${prefix}faktaunik
${pref++} ${prefix}katabijak
${pref++} ${prefix}pantun
${pref++} ${prefix}bucin
${pref++} ${prefix}coffe
${pref++} ${prefix}quotesanime
${pref++} ${prefix}motivasi
${pref++} ${prefix}dilanquote
${pref++} ${prefix}bucinquote
${pref++} ${prefix}katasenja
${pref++} ${prefix}puisi



🌠 *Anime Menu*

${pref++} ${prefix}character    _<teks>_   Ⓟ︎
${pref++} ${prefix}manga    _<teks>_   Ⓟ︎
${pref++} ${prefix}anime
${pref++} ${prefix}kusonime    _<teks>_   Ⓟ︎
${pref++} ${prefix}kusonimesearch    _<teks>_   Ⓟ︎
${pref++} ${prefix}otakudesu    _<teks>_   Ⓟ︎
${pref++} ${prefix}otakudesusearch    _<teks>_   Ⓟ︎
${pref++} ${prefix}konachan    _<teks>_   Ⓟ︎



🖌️ *Text Pro Menu*

${pref++} ${prefix}3dchristmas
${pref++} ${prefix}3ddeepsea
${pref++} ${prefix}americanflag
${pref++} ${prefix}3dscifi
${pref++} ${prefix}3drainbow
${pref++} ${prefix}3dwaterpipe
${pref++} ${prefix}halloweenskeleton
${pref++} ${prefix}sketch
${pref++} ${prefix}bluecircuit
${pref++} ${prefix}space
${pref++} ${prefix}metallic
${pref++} ${prefix}fiction
${pref++} ${prefix}greenhorror
${pref++} ${prefix}transformer
${pref++} ${prefix}berry
${pref++} ${prefix}thunder
${pref++} ${prefix}magma
${pref++} ${prefix}3dcrackedstone
${pref++} ${prefix}3dneonlight
${pref++} ${prefix}impressiveglitch
${pref++} ${prefix}naturalleaves
${pref++} ${prefix}fireworksparkle
${pref++} ${prefix}matrix
${pref++} ${prefix}dropwater
${pref++} ${prefix}harrypotter
${pref++} ${prefix}foggywindow
${pref++} ${prefix}neondevils
${pref++} ${prefix}christmasholiday
${pref++} ${prefix}3dgradient
${pref++} ${prefix}blackpink
${pref++} ${prefix}gluetext
${pref++} ${prefix}blackpink    _<teks>_
${pref++} ${prefix}neon    _<teks>_
${pref++} ${prefix}greenneon    _<teks>_
${pref++} ${prefix}advanceglow    _<teks>_
${pref++} ${prefix}futureneon    _<teks>_
${pref++} ${prefix}sandwriting    _<teks>_
${pref++} ${prefix}sandsummer    _<teks>_
${pref++} ${prefix}sandengraved    _<teks>_
${pref++} ${prefix}metaldark    _<teks>_
${pref++} ${prefix}neonlight    _<teks>_
${pref++} ${prefix}holographic    _<teks>_
${pref++} ${prefix}text1917    _<teks>_
${pref++} ${prefix}minion    _<teks>_
${pref++} ${prefix}deluxesilver    _<teks>_
${pref++} ${prefix}newyearcard    _<teks>_
${pref++} ${prefix}bloodfrosted    _<teks>_
${pref++} ${prefix}halloween    _<teks>_
${pref++} ${prefix}jokerlogo    _<teks>_
${pref++} ${prefix}fireworksparkle    _<teks>_
${pref++} ${prefix}natureleaves    _<teks>_
${pref++} ${prefix}bokeh    _<teks>_
${pref++} ${prefix}toxic    _<teks>_
${pref++} ${prefix}strawberry    _<teks>_
${pref++} ${prefix}box3d    _<teks>_
${pref++} ${prefix}roadwarning    _<teks>_
${pref++} ${prefix}breakwall    _<teks>_
${pref++} ${prefix}icecold    _<teks>_
${pref++} ${prefix}luxury    _<teks>_
${pref++} ${prefix}cloud    _<teks>_
${pref++} ${prefix}summersand    _<teks>_
${pref++} ${prefix}horrorblood    _<teks>_
${pref++} ${prefix}thunder    _<teks>_
${pref++} ${prefix}pornhub    _<teks>_
${pref++} ${prefix}glitch    _<teks>_
${pref++} ${prefix}avenger    _<teks>_
${pref++} ${prefix}space    _<teks>_
${pref++} ${prefix}ninjalogo    _<teks>_
${pref++} ${prefix}marvelstudio    _<teks>_
${pref++} ${prefix}lionlogo    _<teks>_
${pref++} ${prefix}wolflogo    _<teks>_
${pref++} ${prefix}steel3d    _<teks>_
${pref++} ${prefix}wallgravity    _<teks>_



🎨 *Photo Oxy Menu*


${pref++} ${prefix}romantic
${pref++} ${prefix}burnpapper
${pref++} ${prefix}naruto
${pref++} ${prefix}lovemsg
${pref++} ${prefix}grassmsg
${pref++} ${prefix}lovetext
${pref++} ${prefix}coffecup
${pref++} ${prefix}butterfly
${pref++} ${prefix}harrypotter
${pref++} ${prefix}retrolol
${pref++} ${prefix}shadow    _<teks>_
${pref++} ${prefix}cup    _<teks>_
${pref++} ${prefix}cup1    _<teks>_
${pref++} ${prefix}romance    _<teks>_
${pref++} ${prefix}smoke    _<teks>_
${pref++} ${prefix}burnpaper    _<teks>_
${pref++} ${prefix}lovemessage    _<teks>_
${pref++} ${prefix}undergrass    _<teks>_
${pref++} ${prefix}love    _<teks>_
${pref++} ${prefix}coffe    _<teks>_
${pref++} ${prefix}woodheart    _<teks>_
${pref++} ${prefix}woodenboard    _<teks>_
${pref++} ${prefix}summer3d    _<teks>_
${pref++} ${prefix}wolfmetal    _<teks>_
${pref++} ${prefix}nature3d    _<teks>_
${pref++} ${prefix}underwater    _<teks>_
${pref++} ${prefix}golderrose    _<teks>_
${pref++} ${prefix}summernature    _<teks>_
${pref++} ${prefix}letterleaves    _<teks>_
${pref++} ${prefix}glowingneon    _<teks>_
${pref++} ${prefix}fallleaves    _<teks>_
${pref++} ${prefix}flamming    _<teks>_
${pref++} ${prefix}harrypotter    _<teks>_
${pref++} ${prefix}carvedwood    _<teks>_
${pref++} ${prefix}arcade8bit    _<teks>_
${pref++} ${prefix}battlefield4    _<teks>_
${pref++} ${prefix}pubg    _<teks>_



📸 *Ephoto Menu*

${pref++} ${prefix}ffcover
${pref++} ${prefix}crossfire
${pref++} ${prefix}galaxy
${pref++} ${prefix}glass
${pref++} ${prefix}neon
${pref++} ${prefix}beach
${pref++} ${prefix}blackpink
${pref++} ${prefix}igcertificate
${pref++} ${prefix}ytcertificate
${pref++} ${prefix}wetglass
${pref++} ${prefix}multicolor3d
${pref++} ${prefix}watercolor
${pref++} ${prefix}luxurygold
${pref++} ${prefix}galaxywallpaper
${pref++} ${prefix}lighttext
${pref++} ${prefix}beautifulflower
${pref++} ${prefix}puppycute
${pref++} ${prefix}royaltext
${pref++} ${prefix}heartshaped
${pref++} ${prefix}birthdaycake
${pref++} ${prefix}galaxystyle
${pref++} ${prefix}hologram3d
${pref++} ${prefix}greenneon
${pref++} ${prefix}glossychrome
${pref++} ${prefix}greenbush
${pref++} ${prefix}metallogo
${pref++} ${prefix}noeltext
${pref++} ${prefix}glittergold
${pref++} ${prefix}textcake
${pref++} ${prefix}starsnight
${pref++} ${prefix}wooden3d
${pref++} ${prefix}textbyname
${pref++} ${prefix}writegalacy
${pref++} ${prefix}galaxybat
${pref++} ${prefix}snow3d
${pref++} ${prefix}birthdayday
${pref++} ${prefix}goldplaybutton
${pref++} ${prefix}silverplaybutton
${pref++} ${prefix}freefire



✈️ *Fun Menu*

${pref++} ${prefix}halah
${pref++} ${prefix}hilih
${pref++} ${prefix}huluh
${pref++} ${prefix}heleh
${pref++} ${prefix}holoh
${pref++} ${prefix}jadian
${pref++} ${prefix}delttt
${pref++} ${prefix}tictactoe
${pref++} ${prefix}family100
${pref++} ${prefix}tebak [option]
${pref++} ${prefix}math [mode]
${pref++} ${prefix}suitpvp [@tag]



📑 *Primbon Menu*

${pref++} ${prefix}randomnama    _<teks>_
${pref++} ${prefix}jodoh
${pref++} ${prefix}weton
${pref++} ${prefix}jadian
${pref++} ${prefix}tebakumur
${pref++} ${prefix}nomorhoki
${pref++} ${prefix}artimimpi
${pref++} ${prefix}artinama
${pref++} ${prefix}ramaljodoh
${pref++} ${prefix}ramaljodohbali
${pref++} ${prefix}suamiistri
${pref++} ${prefix}ramalcinta
${pref++} ${prefix}cocoknama
${pref++} ${prefix}pasangan
${pref++} ${prefix}jadiannikah
${pref++} ${prefix}sifatusaha
${pref++} ${prefix}rezeki
${pref++} ${prefix}pekerjaan
${pref++} ${prefix}nasib
${pref++} ${prefix}penyakit
${pref++} ${prefix}tarot
${pref++} ${prefix}fengshui
${pref++} ${prefix}haribaik
${pref++} ${prefix}harisangar
${pref++} ${prefix}harisial
${pref++} ${prefix}nagahari
${pref++} ${prefix}arahrezeki
${pref++} ${prefix}peruntungan
${pref++} ${prefix}weton
${pref++} ${prefix}karakter
${pref++} ${prefix}keberuntungan
${pref++} ${prefix}memancing
${pref++} ${prefix}masasubur
${pref++} ${prefix}zodiak
${pref++} ${prefix}shio



🌀 *Convert Menu*

${pref++} ${prefix}toimage
${pref++} ${prefix}removebg
${pref++} ${prefix}sticker
${pref++} ${prefix}emojimix
${pref++} ${prefix}tovideo
${pref++} ${prefix}togif
${pref++} ${prefix}tourl
${pref++} ${prefix}tovn
${pref++} ${prefix}tomp3
${pref++} ${prefix}toaudio
${pref++} ${prefix}ebinary
${pref++} ${prefix}dbinary
${pref++} ${prefix}styletext
${pref++} ${prefix}ttp 




⭕ *18+*

${pref++} ${prefix}asupan    _<teks>_   Ⓟ︎
${pref++} ${prefix}xhamstersearch    _<teks>_   Ⓟ︎ 
${pref++} ${prefix}xhamster    _<link>_   Ⓟ︎
${pref++} ${prefix}xnxxsearch    _<teks>_   Ⓟ︎
${pref++} ${prefix}xnxx    _<link>_   Ⓟ︎
${pref++} ${prefix}nhentai    _<link>_   Ⓟ︎
${pref++} ${prefix}nhentaipdf    _<link>_   Ⓟ︎
${pref++} ${prefix}nhentaisearch    _<teks>_   Ⓟ︎
${pref++} ${prefix}nekopoi    _<link>_   Ⓟ︎
${pref++} ${prefix}nekopoisearch    _<teks>_   Ⓟ︎



🎧 *Random Sound*

${pref++} ${prefix}sound1
${pref++} ${prefix}sound2
${pref++} ${prefix}sound3
${pref++} ${prefix}sound4
${pref++} ${prefix}sound5
${pref++} ${prefix}sound6
${pref++} ${prefix}sound7
${pref++} ${prefix}sound8
${pref++} ${prefix}sound9
${pref++} ${prefix}sound10
${pref++} ${prefix}sound11
${pref++} ${prefix}sound12
${pref++} ${prefix}sound13
${pref++} ${prefix}sound14
${pref++} ${prefix}sound15
${pref++} ${prefix}sound16
${pref++} ${prefix}sound17
${pref++} ${prefix}sound18
${pref++} ${prefix}sound19
${pref++} ${prefix}sound20
${pref++} ${prefix}sound21
${pref++} ${prefix}sound22
${pref++} ${prefix}sound23
${pref++} ${prefix}sound24
${pref++} ${prefix}sound25
${pref++} ${prefix}sound26
${pref++} ${prefix}sound27
${pref++} ${prefix}sound28
${pref++} ${prefix}sound29
${pref++} ${prefix}sound30
${pref++} ${prefix}sound31
${pref++} ${prefix}sound32
${pref++} ${prefix}sound33
${pref++} ${prefix}sound34
${pref++} ${prefix}sound35
${pref++} ${prefix}sound36
${pref++} ${prefix}sound37
${pref++} ${prefix}sound38
${pref++} ${prefix}sound39
${pref++} ${prefix}sound40
${pref++} ${prefix}sound41
${pref++} ${prefix}sound42
${pref++} ${prefix}sound43
${pref++} ${prefix}sound44
${pref++} ${prefix}sound45
${pref++} ${prefix}sound46
${pref++} ${prefix}sound47
${pref++} ${prefix}sound48
${pref++} ${prefix}sound49
${pref++} ${prefix}sound50
${pref++} ${prefix}sound51
${pref++} ${prefix}sound52
${pref++} ${prefix}sound53
${pref++} ${prefix}sound54
${pref++} ${prefix}sound55
${pref++} ${prefix}sound56
${pref++} ${prefix}sound57
${pref++} ${prefix}sound58
${pref++} ${prefix}sound59
${pref++} ${prefix}sound60
${pref++} ${prefix}sound61
${pref++} ${prefix}sound62
${pref++} ${prefix}sound63
${pref++} ${prefix}sound64
${pref++} ${prefix}sound65
${pref++} ${prefix}sound66
${pref++} ${prefix}sound67
${pref++} ${prefix}sound68
${pref++} ${prefix}sound69
${pref++} ${prefix}sound70
${pref++} ${prefix}sound71
${pref++} ${prefix}sound72
${pref++} ${prefix}sound73
${pref++} ${prefix}sound74



📁 *Database Menu*

${pref++} ${prefix}setcmd
${pref++} ${prefix}listcmd
${pref++} ${prefix}delcmd
${pref++} ${prefix}lockcmd
${pref++} ${prefix}addmsg
${pref++} ${prefix}listmsg
${pref++} ${prefix}getmsg
${pref++} ${prefix}delmsg



🗣️ *Anonymous Menu*

${pref++} ${prefix}anonymous
${pref++} ${prefix}start
${pref++} ${prefix}next
${pref++} ${prefix}keluar
${pref++} ${prefix}sendkontak



🕌 *Islamic Menu*

${pref++} ${prefix}iqra
${pref++} ${prefix}hadist
${pref++} ${prefix}alquran
${pref++} ${prefix}juzamma
${pref++} ${prefix}tafsirsurah
${pref++} ${prefix}listsurah
${pref++} ${prefix}asmaulhusna
${pref++} ${prefix}kisahnabi   _<Muhammad>_
${pref++} ${prefix}jadwalsholat   _<Makassar>_



📺 *Jadwal Tv && Berita*

${pref++} ${prefix}jadwaltv    _<teks>_
${pref++} ${prefix}jadwaltvnow
${pref++} ${prefix}newsinfo
${pref++} ${prefix}jadwalbola
${pref++} ${prefix}indbeasiswa
${pref++} ${prefix}hoax
${pref++} ${prefix}cnnindonesia
${pref++} ${prefix}cnnnasional
${pref++} ${prefix}cnninternasional
${pref++} ${prefix}infogempa    _<nama daerah>_
${pref++} ${prefix}covidindo
${pref++} ${prefix}covidglobal



🎞️ *Movie && Story*

${pref++} ${prefix}lk21
${pref++} ${prefix}drakorongoing
${pref++} ${prefix}wattpad    _<link>_
${pref++} ${prefix}wattpadsearch    _<teks>_
${pref++} ${prefix}cerpen    _<teks>_
${pref++} ${prefix}ceritahoror



🖼️ *Wallpaper Vitur*

${pref++} ${prefix}wallpaper _<query>_
${pref++} ${prefix}wallpapersearch    _<teks>_
${pref++} ${prefix}wallpapersearch2    _<teks>_



🛸 *Random Anime*

${pref++} ${prefix}loli     Ⓟ︎
${pref++} ${prefix}neko     Ⓟ︎
${pref++} ${prefix}art     Ⓟ︎
${pref++} ${prefix}bts     Ⓟ︎
${pref++} ${prefix}exo     Ⓟ︎
${pref++} ${prefix}elf     Ⓟ︎
${pref++} ${prefix}neko     Ⓟ︎
${pref++} ${prefix}shota     Ⓟ︎
${pref++} ${prefix}husbu     Ⓟ︎
${pref++} ${prefix}sagiri     Ⓟ︎
${pref++} ${prefix}shinobu     Ⓟ︎
${pref++} ${prefix}megumin     Ⓟ︎
${pref++} ${prefix}wallnime     Ⓟ︎
${pref++} ${prefix}chiisaihentai     Ⓟ︎
${pref++} ${prefix}trap     Ⓟ︎
${pref++} ${prefix}blowjob     Ⓟ︎
${pref++} ${prefix}yaoi     Ⓟ︎
${pref++} ${prefix}ecchi     Ⓟ︎
${pref++} ${prefix}hentai     Ⓟ︎
${pref++} ${prefix}ahegao     Ⓟ︎
${pref++} ${prefix}hololewd     Ⓟ︎
${pref++} ${prefix}sideoppai     Ⓟ︎
${pref++} ${prefix}animefeets     Ⓟ︎
${pref++} ${prefix}animebooty     Ⓟ︎
${pref++} ${prefix}animethighss     Ⓟ︎
${pref++} ${prefix}hentaiparadise     Ⓟ︎
${pref++} ${prefix}animearmpits     Ⓟ︎
${pref++} ${prefix}hentaifemdom     Ⓟ︎
${pref++} ${prefix}lewdanimegirls     Ⓟ︎
${pref++} ${prefix}biganimetiddies     Ⓟ︎
${pref++} ${prefix}animebellybutton     Ⓟ︎
${pref++} ${prefix}hentai4everyone     Ⓟ︎
${pref++} ${prefix}bj     Ⓟ︎
${pref++} ${prefix}ero     Ⓟ︎
${pref++} ${prefix}cum     Ⓟ︎
${pref++} ${prefix}feet     Ⓟ︎
${pref++} ${prefix}yuri     Ⓟ︎
${pref++} ${prefix}trap     Ⓟ︎
${pref++} ${prefix}lewd     Ⓟ︎
${pref++} ${prefix}feed     Ⓟ︎
${pref++} ${prefix}eron     Ⓟ︎
${pref++} ${prefix}solo     Ⓟ︎
${pref++} ${prefix}gasm     Ⓟ︎
${pref++} ${prefix}poke     Ⓟ︎
${pref++} ${prefix}anal     Ⓟ︎
${pref++} ${prefix}holo     Ⓟ︎
${pref++} ${prefix}tits     Ⓟ︎
${pref++} ${prefix}kuni     Ⓟ︎
${pref++} ${prefix}kiss     Ⓟ︎
${pref++} ${prefix}erok     Ⓟ︎
${pref++} ${prefix}smug     Ⓟ︎
${pref++} ${prefix}baka     Ⓟ︎
${pref++} ${prefix}solog     Ⓟ︎
${pref++} ${prefix}feetg     Ⓟ︎
${pref++} ${prefix}lewdk     Ⓟ︎
${pref++} ${prefix}waifu     Ⓟ︎
${pref++} ${prefix}pussy     Ⓟ︎
${pref++} ${prefix}femdom     Ⓟ︎
${pref++} ${prefix}cuddle     Ⓟ︎
${pref++} ${prefix}hentai     Ⓟ︎
${pref++} ${prefix}eroyuri     Ⓟ︎
${pref++} ${prefix}cum_jpg     Ⓟ︎
${pref++} ${prefix}blowjob     Ⓟ︎
${pref++} ${prefix}erofeet     Ⓟ︎
${pref++} ${prefix}holoero     Ⓟ︎
${pref++} ${prefix}classic     Ⓟ︎
${pref++} ${prefix}erokemo     Ⓟ︎
${pref++} ${prefix}fox_girl     Ⓟ︎
${pref++} ${prefix}futanari     Ⓟ︎
${pref++} ${prefix}lewdkemo     Ⓟ︎
${pref++} ${prefix}wallpaper     Ⓟ︎
${pref++} ${prefix}pussy_jpg     Ⓟ︎
${pref++} ${prefix}kemonomimi     Ⓟ︎
${pref++} ${prefix}nsfw_avatar     Ⓟ︎



🥀 *Waifu Vitur*

${pref++} ${prefix}waifu     Ⓟ︎
${pref++} ${prefix}shinobu      Ⓟ︎
${pref++} ${prefix}megumin      Ⓟ︎
${pref++} ${prefix}bully      Ⓟ︎
${pref++} ${prefix}cuddle      Ⓟ︎
${pref++} ${prefix}cry      Ⓟ︎
${pref++} ${prefix}hug      Ⓟ︎
${pref++} ${prefix}awoo      Ⓟ︎
${pref++} ${prefix}kiss      Ⓟ︎
${pref++} ${prefix}lick      Ⓟ︎
${pref++} ${prefix}pat      Ⓟ︎
${pref++} ${prefix}smug      Ⓟ︎
${pref++} ${prefix}bonk      Ⓟ︎
${pref++} ${prefix}yeet      Ⓟ︎
${pref++} ${prefix}blush      Ⓟ︎
${pref++} ${prefix}smile      Ⓟ︎
${pref++} ${prefix}wave      Ⓟ︎
${pref++} ${prefix}highfive      Ⓟ︎
${pref++} ${prefix}handhold      Ⓟ︎
${pref++} ${prefix}nom      Ⓟ︎
${pref++} ${prefix}bite      Ⓟ︎
${pref++} ${prefix}glomp      Ⓟ︎
${pref++} ${prefix}slap      Ⓟ︎
${pref++} ${prefix}kill      Ⓟ︎
${pref++} ${prefix}happy      Ⓟ︎
${pref++} ${prefix}wink      Ⓟ︎
${pref++} ${prefix}poke      Ⓟ︎
${pref++} ${prefix}dance      Ⓟ︎
${pref++} ${prefix}cringe      Ⓟ︎



🎠 *Stalk Vitur*

${pref++} ${prefix}stalkig    _<nama>_
${pref++} ${prefix}stalkgithub    _<nama>_
${pref++} ${prefix}stalktwitter    _<nama>_
${pref++} ${prefix}mlstalk    _<nama>_



*Voice Changer*

${pref++} ${prefix}bass
${pref++} ${prefix}blown
${pref++} ${prefix}deep
${pref++} ${prefix}earrape
${pref++} ${prefix}fast
${pref++} ${prefix}fat
${pref++} ${prefix}nightcore
${pref++} ${prefix}reverse
${pref++} ${prefix}robot
${pref++} ${prefix}slow
${pref++} ${prefix}tupai



👥 *Group Menu*

${pref++} ${prefix}linkgroup
${pref++} ${prefix}getidgc
${pref++} ${prefix}getpp  _<reply>_
${pref++} ${prefix}ephemeral [option]
${pref++} ${prefix}setppgc [image]
${pref++} ${prefix}setname _<text>_
${pref++} ${prefix}setdesc _<text>_
${pref++} ${prefix}group [option]
${pref++} ${prefix}editinfo [option]
${pref++} ${prefix}add @user
${pref++} ${prefix}kick @user
${pref++} ${prefix}hidetag _<text>_
${pref++} ${prefix}tagall _<text>_
${pref++} ${prefix}antilink [on/off]
${pref++} ${prefix}antiwame [on/off]
${pref++} ${prefix}mute [on/off]
${pref++} ${prefix}promote @user
${pref++} ${prefix}demote @user
${pref++} ${prefix}vote _<text>_
${pref++} ${prefix}devote
${pref++} ${prefix}upvote
${pref++} ${prefix}cekvote
${pref++} ${prefix}hapusvote



⛓️ *Main Menu*

${pref++} ${prefix}ping
${pref++} ${prefix}owner
${pref++} ${prefix}menu / ${prefix}help / ${prefix}?
${pref++} ${prefix}delete
${pref++} ${prefix}infochat
${pref++} ${prefix}sewabot
${pref++} ${prefix}listpc
${pref++} ${prefix}listgc
${pref++} ${prefix}listonline



*Owner Menu*

${pref++} ${prefix}culik
${pref++} ${prefix}chat [option]
${pref++} ${prefix}join [link]
${pref++} ${prefix}leave
${pref++} ${prefix}block @user
${pref++} ${prefix}unblock @user
${pref++} ${prefix}bcgroup _<text>_
${pref++} ${prefix}bcall _<text>_
${pref++} ${prefix}bcimg _<text>_
${pref++} ${prefix}bcvidio _<text>_
${pref++} ${prefix}bcaudio _<text>_
${pref++} ${prefix}setppbot [image]
${pref++} ${prefix}setexif
${pref++} ${prefix}restart
${pref++} ${prefix}wasted   _<reply gambar>_
${pref++} ${prefix}spamsms   _<nomor target>_   Ⓟ︎
${pref++} ${prefix}shutdown
${pref++} ${prefix}autobio On/Off
${pref++} ${prefix}autoread On/Off
${pref++} ${prefix}autoketik On/Off
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: anu,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 



case 'downloadmenu': {
kimt = `
📥 *Downloader Menu*
────────────────────────

 ≻ ${prefix}tiktoknowm _<url>_
 ≻ ${prefix}tiktokwm _<url>_
 ≻ ${prefix}tiktokmp3 _<url>_
 ≻ ${prefix}ig _<url>_
 ≻ ${prefix}ig2    _<link>_
 ≻ ${prefix}play _<query>_
 ≻ ${prefix}yts _<query>_
 ≻ ${prefix}ytmp3 _<url>_
 ≻ ${prefix}ytmp4 _<url>_
 ≻ ${prefix}getmusic _<query>_
 ≻ ${prefix}getvideo _<query>_
 ≻ ${prefix}umma _<url>_
 ≻ ${prefix}joox _<query>_
 ≻ ${prefix}soundcloud _<url>_
 ≻ ${prefix}spotify    _<link>_
 ≻ ${prefix}spotifysearch    _<teks>_
 ≻ ${prefix}jooxplay    _<teks>_
 ≻ ${prefix}twtdl    _<link>_
 ≻ ${prefix}fbdl    _<link>_
 ≻ ${prefix}lirik    _<teks>_
 ≻ ${prefix}zippyshare    _<teks>_
 ≻ ${prefix}pinterestdl    _<link>_
 ≻ ${prefix}pixiv    _<teks>_
 ≻ ${prefix}pixivdl    _<link>_
 ≻ ${prefix}playstore    _<teks>_
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'searchmenu': {
kimt = `
🔍 *Search Menu*
────────────────────────

 ≻ ${prefix}ssweb-hp
 ≻ ${prefix}ssweb-pc
 ≻ ${prefix}translate
 ≻ ${prefix}meme
 ≻ ${prefix}ppcouple
 ≻ ${prefix}wikimedia _<query>_
 ≻ ${prefix}ringtone _<query>_
 ≻ ${prefix}ktpmaker
 ≻ ${prefix}google    _<teks>_
 ≻ ${prefix}shopee    _<teks>_
 ≻ ${prefix}kodepos    _<namadaerah>_
 ≻ ${prefix}gimage    _<teks>_        Ⓟ︎
 ≻ ${prefix}gimage2    _<teks>_        Ⓟ︎
 ≻ ${prefix}pinterest    _<teks>_       Ⓟ︎
 ≻ ${prefix}pinterest2    _<teks>_        Ⓟ︎
 ≻ ${prefix}kbbi    _<teks>_
 ≻ ${prefix}cuaca    _<nama daerah>_
 ≻ ${prefix}brainly    _<teks>_
 ≻ ${prefix}brainly2    _<teks>_
 ≻ ${prefix}jarak    _<teks>_
 ≻ ${prefix}shortlink    _<link>_
 ≻ ${prefix}urbandictionary
 ≻ ${prefix}chord
 ≻ ${prefix}heroml
 ≻ ${prefix}genshin
 ≻ ${prefix}wikipedia    _<teks>_
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'ranomquotes': {
kimt = `
🎐 *Quotes Menu*
────────────────────────

 ≻ ${prefix}quotes
 ≻ ${prefix}quotesanime
 ≻ ${prefix}quotesdilan
 ≻ ${prefix}quotesimage
 ≻ ${prefix}faktaunik
 ≻ ${prefix}katabijak
 ≻ ${prefix}pantun
 ≻ ${prefix}bucin
 ≻ ${prefix}coffe
 ≻ ${prefix}quotesanime
 ≻ ${prefix}motivasi
 ≻ ${prefix}dilanquote
 ≻ ${prefix}bucinquote
 ≻ ${prefix}katasenja
 ≻ ${prefix}puisi
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'imagemenu': {
kimt = `
🌠 *Anime Menu*
────────────────────────

 ≻ ${prefix}character    _<teks>_   Ⓟ︎
 ≻ ${prefix}manga    _<teks>_   Ⓟ︎
 ≻ ${prefix}anime
 ≻ ${prefix}kusonime    _<teks>_   Ⓟ︎
 ≻ ${prefix}kusonimesearch    _<teks>_   Ⓟ︎
 ≻ ${prefix}otakudesu    _<teks>_   Ⓟ︎
 ≻ ${prefix}otakudesusearch    _<teks>_   Ⓟ︎
 ≻ ${prefix}konachan    _<teks>_   Ⓟ︎
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'textpromenu': {
kimt = `
🖌️ *Text Pro Menu*
────────────────────────

 ≻ ${prefix}3dchristmas
 ≻ ${prefix}3ddeepsea
 ≻ ${prefix}americanflag
 ≻ ${prefix}3dscifi
 ≻ ${prefix}3drainbow
 ≻ ${prefix}3dwaterpipe
 ≻ ${prefix}halloweenskeleton
 ≻ ${prefix}sketch
 ≻ ${prefix}bluecircuit
 ≻ ${prefix}space
 ≻ ${prefix}metallic
 ≻ ${prefix}fiction
 ≻ ${prefix}greenhorror
 ≻ ${prefix}transformer
 ≻ ${prefix}berry
 ≻ ${prefix}thunder
 ≻ ${prefix}magma
 ≻ ${prefix}3dcrackedstone
 ≻ ${prefix}3dneonlight
 ≻ ${prefix}impressiveglitch
 ≻ ${prefix}naturalleaves
 ≻ ${prefix}fireworksparkle
 ≻ ${prefix}matrix
 ≻ ${prefix}dropwater
 ≻ ${prefix}harrypotter
 ≻ ${prefix}foggywindow
 ≻ ${prefix}neondevils
 ≻ ${prefix}christmasholiday
 ≻ ${prefix}3dgradient
 ≻ ${prefix}blackpink
 ≻ ${prefix}gluetext
 ≻ ${prefix}blackpink    _<teks>_
 ≻ ${prefix}neon    _<teks>_
 ≻ ${prefix}greenneon    _<teks>_
 ≻ ${prefix}advanceglow    _<teks>_
 ≻ ${prefix}futureneon    _<teks>_
 ≻ ${prefix}sandwriting    _<teks>_
 ≻ ${prefix}sandsummer    _<teks>_
 ≻ ${prefix}sandengraved    _<teks>_
 ≻ ${prefix}metaldark    _<teks>_
 ≻ ${prefix}neonlight    _<teks>_
 ≻ ${prefix}holographic    _<teks>_
 ≻ ${prefix}text1917    _<teks>_
 ≻ ${prefix}minion    _<teks>_
 ≻ ${prefix}deluxesilver    _<teks>_
 ≻ ${prefix}newyearcard    _<teks>_
 ≻ ${prefix}bloodfrosted    _<teks>_
 ≻ ${prefix}halloween    _<teks>_
 ≻ ${prefix}jokerlogo    _<teks>_
 ≻ ${prefix}fireworksparkle    _<teks>_
 ≻ ${prefix}natureleaves    _<teks>_
 ≻ ${prefix}bokeh    _<teks>_
 ≻ ${prefix}toxic    _<teks>_
 ≻ ${prefix}strawberry    _<teks>_
 ≻ ${prefix}box3d    _<teks>_
 ≻ ${prefix}roadwarning    _<teks>_
 ≻ ${prefix}breakwall    _<teks>_
 ≻ ${prefix}icecold    _<teks>_
 ≻ ${prefix}luxury    _<teks>_
 ≻ ${prefix}cloud    _<teks>_
 ≻ ${prefix}summersand    _<teks>_
 ≻ ${prefix}horrorblood    _<teks>_
 ≻ ${prefix}thunder    _<teks>_
 ≻ ${prefix}pornhub    _<teks>_
 ≻ ${prefix}glitch    _<teks>_
 ≻ ${prefix}avenger    _<teks>_
 ≻ ${prefix}space    _<teks>_
 ≻ ${prefix}ninjalogo    _<teks>_
 ≻ ${prefix}marvelstudio    _<teks>_
 ≻ ${prefix}lionlogo    _<teks>_
 ≻ ${prefix}wolflogo    _<teks>_
 ≻ ${prefix}steel3d    _<teks>_
 ≻ ${prefix}wallgravity    _<teks>_
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'photooxy': {
kimt = `
🎨 *Photo Oxy Menu*
────────────────────────

 ≻ ${prefix}romantic
 ≻ ${prefix}burnpapper
 ≻ ${prefix}naruto
 ≻ ${prefix}lovemsg
 ≻ ${prefix}grassmsg
 ≻ ${prefix}lovetext
 ≻ ${prefix}coffecup
 ≻ ${prefix}butterfly
 ≻ ${prefix}harrypotter
 ≻ ${prefix}retrolol
 ≻ ${prefix}shadow    _<teks>_
 ≻ ${prefix}cup    _<teks>_
 ≻ ${prefix}cup1    _<teks>_
 ≻ ${prefix}romance    _<teks>_
 ≻ ${prefix}smoke    _<teks>_
 ≻ ${prefix}burnpaper    _<teks>_
 ≻ ${prefix}lovemessage    _<teks>_
 ≻ ${prefix}undergrass    _<teks>_
 ≻ ${prefix}love    _<teks>_
 ≻ ${prefix}coffe    _<teks>_
 ≻ ${prefix}woodheart    _<teks>_
 ≻ ${prefix}woodenboard    _<teks>_
 ≻ ${prefix}summer3d    _<teks>_
 ≻ ${prefix}wolfmetal    _<teks>_
 ≻ ${prefix}nature3d    _<teks>_
 ≻ ${prefix}underwater    _<teks>_
 ≻ ${prefix}golderrose    _<teks>_
 ≻ ${prefix}summernature    _<teks>_
 ≻ ${prefix}letterleaves    _<teks>_
 ≻ ${prefix}glowingneon    _<teks>_
 ≻ ${prefix}fallleaves    _<teks>_
 ≻ ${prefix}flamming    _<teks>_
 ≻ ${prefix}harrypotter    _<teks>_
 ≻ ${prefix}carvedwood    _<teks>_
 ≻ ${prefix}arcade8bit    _<teks>_
 ≻ ${prefix}battlefield4    _<teks>_
 ≻ ${prefix}pubg    _<teks>_
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'ephotomenu': {
kimt = `
📸 *Ephoto Menu*
────────────────────────

 ≻ ${prefix}ffcover
 ≻ ${prefix}crossfire
 ≻ ${prefix}galaxy
 ≻ ${prefix}glass
 ≻ ${prefix}neon
 ≻ ${prefix}beach
 ≻ ${prefix}blackpink
 ≻ ${prefix}igcertificate
 ≻ ${prefix}ytcertificate
 ≻ ${prefix}wetglass
 ≻ ${prefix}multicolor3d
 ≻ ${prefix}watercolor
 ≻ ${prefix}luxurygold
 ≻ ${prefix}galaxywallpaper
 ≻ ${prefix}lighttext
 ≻ ${prefix}beautifulflower
 ≻ ${prefix}puppycute
 ≻ ${prefix}royaltext
 ≻ ${prefix}heartshaped
 ≻ ${prefix}birthdaycake
 ≻ ${prefix}galaxystyle
 ≻ ${prefix}hologram3d
 ≻ ${prefix}greenneon
 ≻ ${prefix}glossychrome
 ≻ ${prefix}greenbush
 ≻ ${prefix}metallogo
 ≻ ${prefix}noeltext
 ≻ ${prefix}glittergold
 ≻ ${prefix}textcake
 ≻ ${prefix}starsnight
 ≻ ${prefix}wooden3d
 ≻ ${prefix}textbyname
 ≻ ${prefix}writegalacy
 ≻ ${prefix}galaxybat
 ≻ ${prefix}snow3d
 ≻ ${prefix}birthdayday
 ≻ ${prefix}goldplaybutton
 ≻ ${prefix}silverplaybutton
 ≻ ${prefix}freefire
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'funmenu': {
kimt = `
✈️ *Fun Menu*
────────────────────────

 ≻ ${prefix}halah
 ≻ ${prefix}hilih
 ≻ ${prefix}huluh
 ≻ ${prefix}heleh
 ≻ ${prefix}holoh
 ≻ ${prefix}jadian
 ≻ ${prefix}delttt
 ≻ ${prefix}tictactoe
 ≻ ${prefix}family100
 ≻ ${prefix}tebak [option]
 ≻ ${prefix}math [mode]
 ≻ ${prefix}suitpvp [@tag]
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'primbonmenu': {
kimt = `
📑 *Primbon Menu*
────────────────────────

 ≻ ${prefix}randomnama    _<teks>_
 ≻ ${prefix}jodoh
 ≻ ${prefix}weton
 ≻ ${prefix}jadian
 ≻ ${prefix}tebakumur
 ≻ ${prefix}nomorhoki
 ≻ ${prefix}artimimpi
 ≻ ${prefix}artinama
 ≻ ${prefix}ramaljodoh
 ≻ ${prefix}ramaljodohbali
 ≻ ${prefix}suamiistri
 ≻ ${prefix}ramalcinta
 ≻ ${prefix}cocoknama
 ≻ ${prefix}pasangan
 ≻ ${prefix}jadiannikah
 ≻ ${prefix}sifatusaha
 ≻ ${prefix}rezeki
 ≻ ${prefix}pekerjaan
 ≻ ${prefix}nasib
 ≻ ${prefix}penyakit
 ≻ ${prefix}tarot
 ≻ ${prefix}fengshui
 ≻ ${prefix}haribaik
 ≻ ${prefix}harisangar
 ≻ ${prefix}harisial
 ≻ ${prefix}nagahari
 ≻ ${prefix}arahrezeki
 ≻ ${prefix}peruntungan
 ≻ ${prefix}weton
 ≻ ${prefix}karakter
 ≻ ${prefix}keberuntungan
 ≻ ${prefix}memancing
 ≻ ${prefix}masasubur
 ≻ ${prefix}zodiak
 ≻ ${prefix}shio
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'convertmenu': {
kimt = `
🌀 *Convert Menu*
────────────────────────

 ≻ ${prefix}toimage
 ≻ ${prefix}removebg
 ≻ ${prefix}sticker
 ≻ ${prefix}emojimix
 ≻ ${prefix}tovideo
 ≻ ${prefix}togif
 ≻ ${prefix}tourl
 ≻ ${prefix}tovn
 ≻ ${prefix}tomp3
 ≻ ${prefix}toaudio
 ≻ ${prefix}ebinary
 ≻ ${prefix}dbinary
 ≻ ${prefix}styletext
 ≻ ${prefix}ttp 
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case '18+': {
kimt = `
⭕ *18+*
────────────────────────

 ≻ ${prefix}asupan    _<teks>_   Ⓟ︎
 ≻ ${prefix}xhamstersearch    _<teks>_   Ⓟ︎ 
 ≻ ${prefix}xhamster    _<link>_   Ⓟ︎
 ≻ ${prefix}xnxxsearch    _<teks>_   Ⓟ︎
 ≻ ${prefix}xnxx    _<link>_   Ⓟ︎
 ≻ ${prefix}nhentai    _<link>_   Ⓟ︎
 ≻ ${prefix}nhentaipdf    _<link>_   Ⓟ︎
 ≻ ${prefix}nhentaisearch    _<teks>_   Ⓟ︎
 ≻ ${prefix}nekopoi    _<link>_   Ⓟ︎
 ≻ ${prefix}nekopoisearch    _<teks>_   Ⓟ︎
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'databasemenu': {
kimt = `
📁 *Database Menu*
────────────────────────

 ≻ ${prefix}setcmd
 ≻ ${prefix}listcmd
 ≻ ${prefix}delcmd
 ≻ ${prefix}lockcmd
 ≻ ${prefix}addmsg
 ≻ ${prefix}listmsg
 ≻ ${prefix}getmsg
 ≻ ${prefix}delmsg
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'listsound': {
kimt = `
🎧 *Random Sound*
────────────────────────
 ≻ ${prefix}sound1
 ≻ ${prefix}sound2
 ≻ ${prefix}sound3
 ≻ ${prefix}sound4
 ≻ ${prefix}sound5
 ≻ ${prefix}sound6
 ≻ ${prefix}sound7
 ≻ ${prefix}sound8
 ≻ ${prefix}sound9
 ≻ ${prefix}sound10
 ≻ ${prefix}sound11
 ≻ ${prefix}sound12
 ≻ ${prefix}sound13
 ≻ ${prefix}sound14
 ≻ ${prefix}sound15
 ≻ ${prefix}sound16
 ≻ ${prefix}sound17
 ≻ ${prefix}sound18
 ≻ ${prefix}sound19
 ≻ ${prefix}sound20
 ≻ ${prefix}sound21
 ≻ ${prefix}sound22
 ≻ ${prefix}sound23
 ≻ ${prefix}sound24
 ≻ ${prefix}sound25
 ≻ ${prefix}sound26
 ≻ ${prefix}sound27
 ≻ ${prefix}sound28
 ≻ ${prefix}sound29
 ≻ ${prefix}sound30
 ≻ ${prefix}sound31
 ≻ ${prefix}sound32
 ≻ ${prefix}sound33
 ≻ ${prefix}sound34
 ≻ ${prefix}sound35
 ≻ ${prefix}sound36
 ≻ ${prefix}sound37
 ≻ ${prefix}sound38
 ≻ ${prefix}sound39
 ≻ ${prefix}sound40
 ≻ ${prefix}sound41
 ≻ ${prefix}sound42
 ≻ ${prefix}sound43
 ≻ ${prefix}sound44
 ≻ ${prefix}sound45
 ≻ ${prefix}sound46
 ≻ ${prefix}sound47
 ≻ ${prefix}sound48
 ≻ ${prefix}sound49
 ≻ ${prefix}sound50
 ≻ ${prefix}sound51
 ≻ ${prefix}sound52
 ≻ ${prefix}sound53
 ≻ ${prefix}sound54
 ≻ ${prefix}sound55
 ≻ ${prefix}sound56
 ≻ ${prefix}sound57
 ≻ ${prefix}sound58
 ≻ ${prefix}sound59
 ≻ ${prefix}sound60
 ≻ ${prefix}sound61
 ≻ ${prefix}sound62
 ≻ ${prefix}sound63
 ≻ ${prefix}sound64
 ≻ ${prefix}sound65
 ≻ ${prefix}sound66
 ≻ ${prefix}sound67
 ≻ ${prefix}sound68
 ≻ ${prefix}sound69
 ≻ ${prefix}sound70
 ≻ ${prefix}sound71
 ≻ ${prefix}sound72
 ≻ ${prefix}sound73
 ≻ ${prefix}sound74
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'anonymouschatmenu': {
kimt = `
🗣️ *Anonymous Menu*
────────────────────────

 ≻ ${prefix}anonymous
 ≻ ${prefix}start
 ≻ ${prefix}next
 ≻ ${prefix}keluar
 ≻ ${prefix}sendkontak
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'islmi': {
kimt = `
🕌 *Islamic Menu*
────────────────────────

 ≻ ${prefix}iqra
 ≻ ${prefix}hadist
 ≻ ${prefix}alquran
 ≻ ${prefix}juzamma
 ≻ ${prefix}tafsirsurah
 ≻ ${prefix}listsurah
 ≻ ${prefix}asmaulhusna
 ≻ ${prefix}kisahnabi   _<Muhammad>_
 ≻ ${prefix}jadwalsholat   _<Makassar>_
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'jdwaltv': {
kimt = `
📺 *Jadwal Tv && Berita*
────────────────────────

 ≻ ${prefix}jadwaltv    _<teks>_
 ≻ ${prefix}jadwaltvnow
 ≻ ${prefix}newsinfo
 ≻ ${prefix}jadwalbola
 ≻ ${prefix}indbeasiswa
 ≻ ${prefix}hoax
 ≻ ${prefix}cnnindonesia
 ≻ ${prefix}cnnnasional
 ≻ ${prefix}cnninternasional
 ≻ ${prefix}infogempa    _<nama daerah>_
 ≻ ${prefix}covidindo
 ≻ ${prefix}covidglobal
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'moviee': {
kimt = `
🎞️ *Movie && Story*
────────────────────────

 ≻ ${prefix}lk21
 ≻ ${prefix}drakorongoing
 ≻ ${prefix}wattpad    _<link>_
 ≻ ${prefix}wattpadsearch    _<teks>_
 ≻ ${prefix}cerpen    _<teks>_
 ≻ ${prefix}ceritahoror
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'walmenu': {
kimt = `
🖼️ *Wallpaper Vitur*
────────────────────────

 ≻ ${prefix}wallpaper _<query>_
 ≻ ${prefix}wallpapersearch    _<teks>_
 ≻ ${prefix}wallpapersearch2    _<teks>_
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'rndomanime': {
kimt = `
🛸 *Random Anime*
────────────────────────

 ≻ ${prefix}loli     Ⓟ︎
 ≻ ${prefix}neko     Ⓟ︎
 ≻ ${prefix}art     Ⓟ︎
 ≻ ${prefix}bts     Ⓟ︎
 ≻ ${prefix}exo     Ⓟ︎
 ≻ ${prefix}elf     Ⓟ︎
 ≻ ${prefix}neko     Ⓟ︎
 ≻ ${prefix}shota     Ⓟ︎
 ≻ ${prefix}husbu     Ⓟ︎
 ≻ ${prefix}sagiri     Ⓟ︎
 ≻ ${prefix}shinobu     Ⓟ︎
 ≻ ${prefix}megumin     Ⓟ︎
 ≻ ${prefix}wallnime     Ⓟ︎
 ≻ ${prefix}chiisaihentai     Ⓟ︎
 ≻ ${prefix}trap     Ⓟ︎
 ≻ ${prefix}blowjob     Ⓟ︎
 ≻ ${prefix}yaoi     Ⓟ︎
 ≻ ${prefix}ecchi     Ⓟ︎
 ≻ ${prefix}hentai     Ⓟ︎
 ≻ ${prefix}ahegao     Ⓟ︎
 ≻ ${prefix}hololewd     Ⓟ︎
 ≻ ${prefix}sideoppai     Ⓟ︎
 ≻ ${prefix}animefeets     Ⓟ︎
 ≻ ${prefix}animebooty     Ⓟ︎
 ≻ ${prefix}animethighss     Ⓟ︎
 ≻ ${prefix}hentaiparadise     Ⓟ︎
 ≻ ${prefix}animearmpits     Ⓟ︎
 ≻ ${prefix}hentaifemdom     Ⓟ︎
 ≻ ${prefix}lewdanimegirls     Ⓟ︎
 ≻ ${prefix}biganimetiddies     Ⓟ︎
 ≻ ${prefix}animebellybutton     Ⓟ︎
 ≻ ${prefix}hentai4everyone     Ⓟ︎
 ≻ ${prefix}bj     Ⓟ︎
 ≻ ${prefix}ero     Ⓟ︎
 ≻ ${prefix}cum     Ⓟ︎
 ≻ ${prefix}feet     Ⓟ︎
 ≻ ${prefix}yuri     Ⓟ︎
 ≻ ${prefix}trap     Ⓟ︎
 ≻ ${prefix}lewd     Ⓟ︎
 ≻ ${prefix}feed     Ⓟ︎
 ≻ ${prefix}eron     Ⓟ︎
 ≻ ${prefix}solo     Ⓟ︎
 ≻ ${prefix}gasm     Ⓟ︎
 ≻ ${prefix}poke     Ⓟ︎
 ≻ ${prefix}anal     Ⓟ︎
 ≻ ${prefix}holo     Ⓟ︎
 ≻ ${prefix}tits     Ⓟ︎
 ≻ ${prefix}kuni     Ⓟ︎
 ≻ ${prefix}kiss     Ⓟ︎
 ≻ ${prefix}erok     Ⓟ︎
 ≻ ${prefix}smug     Ⓟ︎
 ≻ ${prefix}baka     Ⓟ︎
 ≻ ${prefix}solog     Ⓟ︎
 ≻ ${prefix}feetg     Ⓟ︎
 ≻ ${prefix}lewdk     Ⓟ︎
 ≻ ${prefix}waifu     Ⓟ︎
 ≻ ${prefix}pussy     Ⓟ︎
 ≻ ${prefix}femdom     Ⓟ︎
 ≻ ${prefix}cuddle     Ⓟ︎
 ≻ ${prefix}hentai     Ⓟ︎
 ≻ ${prefix}eroyuri     Ⓟ︎
 ≻ ${prefix}cum_jpg     Ⓟ︎
 ≻ ${prefix}blowjob     Ⓟ︎
 ≻ ${prefix}erofeet     Ⓟ︎
 ≻ ${prefix}holoero     Ⓟ︎
 ≻ ${prefix}classic     Ⓟ︎
 ≻ ${prefix}erokemo     Ⓟ︎
 ≻ ${prefix}fox_girl     Ⓟ︎
 ≻ ${prefix}futanari     Ⓟ︎
 ≻ ${prefix}lewdkemo     Ⓟ︎
 ≻ ${prefix}wallpaper     Ⓟ︎
 ≻ ${prefix}pussy_jpg     Ⓟ︎
 ≻ ${prefix}kemonomimi     Ⓟ︎
 ≻ ${prefix}nsfw_avatar     Ⓟ︎
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'rndomwaifu': {
kimt = `
🥀 *Waifu Vitur*
────────────────────────

 ≻ ${prefix}waifu     Ⓟ︎
 ≻ ${prefix}shinobu      Ⓟ︎
 ≻ ${prefix}megumin      Ⓟ︎
 ≻ ${prefix}bully      Ⓟ︎
 ≻ ${prefix}cuddle      Ⓟ︎
 ≻ ${prefix}cry      Ⓟ︎
 ≻ ${prefix}hug      Ⓟ︎
 ≻ ${prefix}awoo      Ⓟ︎
 ≻ ${prefix}kiss      Ⓟ︎
 ≻ ${prefix}lick      Ⓟ︎
 ≻ ${prefix}pat      Ⓟ︎
 ≻ ${prefix}smug      Ⓟ︎
 ≻ ${prefix}bonk      Ⓟ︎
 ≻ ${prefix}yeet      Ⓟ︎
 ≻ ${prefix}blush      Ⓟ︎
 ≻ ${prefix}smile      Ⓟ︎
 ≻ ${prefix}wave      Ⓟ︎
 ≻ ${prefix}highfive      Ⓟ︎
 ≻ ${prefix}handhold      Ⓟ︎
 ≻ ${prefix}nom      Ⓟ︎
 ≻ ${prefix}bite      Ⓟ︎
 ≻ ${prefix}glomp      Ⓟ︎
 ≻ ${prefix}slap      Ⓟ︎
 ≻ ${prefix}kill      Ⓟ︎
 ≻ ${prefix}happy      Ⓟ︎
 ≻ ${prefix}wink      Ⓟ︎
 ≻ ${prefix}poke      Ⓟ︎
 ≻ ${prefix}dance      Ⓟ︎
 ≻ ${prefix}cringe      Ⓟ︎
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'stalkv': {
kimt = `
🎠 *Stalk Vitur*
────────────────────────

 ≻ ${prefix}stalkig    _<nama>_
 ≻ ${prefix}stalkgithub    _<nama>_
 ≻ ${prefix}stalktwitter    _<nama>_
 ≻ ${prefix}mlstalk    _<nama>_
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'voicemenu': {
kimt = `
🎙️ *Voice Changer*
────────────────────────

 ≻ ${prefix}bass
 ≻ ${prefix}blown
 ≻ ${prefix}deep
 ≻ ${prefix}earrape
 ≻ ${prefix}fast
 ≻ ${prefix}fat
 ≻ ${prefix}nightcore
 ≻ ${prefix}reverse
 ≻ ${prefix}robot
 ≻ ${prefix}slow
 ≻ ${prefix}tupai
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'grupmenu': {
kimt = `
👥 *Group Menu*
────────────────────────

 ≻ ${prefix}linkgroup
 ≻ ${prefix}getidgc
 ≻ ${prefix}getpp  _<reply>_
 ≻ ${prefix}ephemeral [option]
 ≻ ${prefix}setppgc [image]
 ≻ ${prefix}setname _<text>_
 ≻ ${prefix}setdesc _<text>_
 ≻ ${prefix}group [option]
 ≻ ${prefix}editinfo [option]
 ≻ ${prefix}add @user
 ≻ ${prefix}kick @user
 ≻ ${prefix}hidetag _<text>_
 ≻ ${prefix}tagall _<text>_
 ≻ ${prefix}antilink [on/off]
 ≻ ${prefix}antiwame [on/off]
 ≻ ${prefix}mute [on/off]
 ≻ ${prefix}promote @user
 ≻ ${prefix}demote @user
 ≻ ${prefix}vote _<text>_
 ≻ ${prefix}devote
 ≻ ${prefix}upvote
 ≻ ${prefix}cekvote
 ≻ ${prefix}hapusvote
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'mainmenu': {
kimt = `
⛓️ *Main Menu*
────────────────────────

 ≻ ${prefix}ping
 ≻ ${prefix}owner
 ≻ ${prefix}menu / ${prefix}help / ${prefix}?
 ≻ ${prefix}delete
 ≻ ${prefix}infochat
 ≻ ${prefix}sewabot
 ≻ ${prefix}listpc
 ≻ ${prefix}listgc
 ≻ ${prefix}listonline
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'owmervitur': {
kimt = `
*Owner Menu*
────────────────────────

 ≻ ${prefix}culik
 ≻ ${prefix}chat [option]
 ≻ ${prefix}join [link]
 ≻ ${prefix}leave
 ≻ ${prefix}block @user
 ≻ ${prefix}unblock @user
 ≻ ${prefix}bcgroup _<text>_
 ≻ ${prefix}bcall _<text>_
 ≻ ${prefix}bcimg _<text>_
 ≻ ${prefix}bcvidio _<text>_
 ≻ ${prefix}bcaudio _<text>_
 ≻ ${prefix}setppbot [image]
 ≻ ${prefix}setexif
 ≻ ${prefix}restart
 ≻ ${prefix}wasted   _<reply gambar>_
 ≻ ${prefix}spamsms   _<nomor target>_   Ⓟ︎
 ≻ ${prefix}shutdown
 ≻ ${prefix}autobio On/Off
 ≻ ${prefix}autoread On/Off
 ≻ ${prefix}autoketik On/Off
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'databasemenu': {
kimt = `
📁 *Database Menu*
────────────────────────

 ≻ ${prefix}setcmd
 ≻ ${prefix}listcmd
 ≻ ${prefix}delcmd
 ≻ ${prefix}lockcmd
 ≻ ${prefix}addmsg
 ≻ ${prefix}listmsg
 ≻ ${prefix}getmsg
 ≻ ${prefix}delmsg
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Ⓟ︎ Premium || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 

case 'groubbot': {
kimt = `
🛩️ *Group Botz*
────────────────────────

 ≻ Group 1 :
 ${global.grub1}
  
 
≻ Group 2 :
 ${global.grub2}
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `Join Kack || ${week} ${date}`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'tqtt': {
kimt = `
🌟 *Thanks To*
────────────────────────

≻ Dika Ardnt  _<CREATOR>_
≻ KahfzXzyy
≻ Takimtod
≻ Dittazz
≻ Xyann && Iyann
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: kimt,
locationMessage: {
jpegThumbnail: fs.readFileSync('./media/simpel.jpg')},
hydratedFooterText: `And Thanks To All Creator Botz`,
hydratedButtons: butn,
}
}
}), { userJid: m.chat })
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break 


case 'donasi': {
	let btns = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `SS BUKTI TF`,
                                    id: 'owner'
                                }
                            }]
	textTemplateButtons(m.chat, `
       *_MAU DONASI?_*

GOPAY : CHAT OWNER
DANA : CHAT OWNER 
OVO : CHAT OWNER

ISI NOMINAL - TF - SCREENSHOT KE OWNER BIAR DPET FREE PREMUM !! `, `${global.footer}`, btns)
}
break


case 'sewabot': {
	let btns = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `1`,
                                    id: 'jadibot'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `2`,
                                    id: 'jasarun'    
                                 }                               
                                 }, {
                                quickReplyButton: {
                                    displayText: `3`,
                                    id: 'masukgc'
                                    }
                            }]
	textTemplateButtons(m.chat, `
               🇸 🇪 🇼 🇦  🇧 🇴 🇹 

1. JADI BOT
2. JASA RUN BOT
3. MASUKIN BOT KE GC

Silahkan Pilih Salah Satu Di Atas`, `${global.footer}`, btns)
}
break

case 'jadibot': {
	let btns = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `Payment`,
                                    id: `${prefix}payment`
                                }
                            }]
	textTemplateButtons(m.chat, `
                 🇯 🇦 🇩 🇮  🇧 🇴 🇹 
 
┏━━⬣ 𝐇𝐚𝐫𝐠𝐚 𝐒𝐞𝐰𝐚✨
┃🎐 : 1 Minggu : 10.000
┃🎐 : 1 Bulan    : 15.000
┗━━⬣

┏━━⬣ 𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧🎋
┃🚀 : Langsung Scan
┃🚀 : Langsung Jadi Owner Bot
┃🚀 : Pakai Nomor Sendiri
┃🚀 : Bot Multi Device
┃🚀 : Tampilan Simpel
┃🚀 : Vitur 370+
┃🚀 : Welcome Otomatis
┃🚀 : Lainnya Cek Di Bot
┗━━⬣

┏━━⬣ ??𝐡𝐚𝐭 𝐌𝐞
┃🎀 : wa.me/6282194424412
┃🎀 : Instagram : *@Zyee_ez*
┗━━⬣ `, `${global.footer}`, btns)
}
break

case 'masukgc': {
	let btns = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `Payment`,
                                    id: `${prefix}payment`
                                }
                            }]
	textTemplateButtons(m.chat, `
           🇸 🇪 🇼 🇦   🇰 🇪   🇬 🇨  
 
┏━━⬣ 𝐇𝐚𝐫𝐠𝐚 𝐒𝐞𝐰𝐚✨
┃🎐 : 1 Minggu : 5.000
┃🎐 : 1 Bulan    : 10.000
┗━━⬣

┏━━⬣ 𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧🎋
┃🚀 : Bot Multi Device
┃🚀 : Tampilan Simpel
┃🚀 : Vitur 370+
┃🚀 : Welcome Otomatis
┃🚀 : Lainnya Cek Di Bot
┗━━⬣

┏━━⬣ 𝐂𝐡𝐚𝐭 𝐌𝐞
┃🎀 : wa.me/6282194424412
┃🎀 : Instagram : *@Zyee_ez*
┗━━⬣ 

┏━━⬣ 𝐒𝐢𝐬𝐭𝐞𝐦 𝐌𝐞
┗✨: MASUK KE GC - TESTIMONI - TF - DONE
`, `sewa ye Kak :/`, btns)
}
break

case 'jasarun': {
	let btns = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `Payment`,
                               id: `${prefix}payment`
                                }
                            }]
	textTemplateButtons(m.chat, ` 
               🇯 🇦 🇸 🇦  🇷 🇺 🇳        

┏━━⬣ 𝐇𝐚𝐫𝐠𝐚 𝐒𝐞𝐰𝐚✨
┃🎐 : 1 Minggu : 5.000
┃🎐 : 1 Bulan    : 10.000
┗━━⬣

┏━━⬣ 𝐈𝐧𝐠𝐟𝐨 
┃🎋: Sc Sendiri
┃🎋: Udah Di Recode
┃🎋: Siap Run
┗━━⬣

┏━━⬣ 𝐂𝐡𝐚𝐭 𝐌𝐞
┃🎀 : wa.me/6282194424412
┃🎀 : Instagram : *@Zyee_ez*
┗━━⬣ `, `${global.footer}`, btns)
}
break

case 'payment': {
	let btns = [{
                                urlButton: {
                                    displayText: `${global.ganti}`,
                                    url: `${global.web}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `Owner`,
                                    id: 'owner'
                                }
                            }]
	textTemplateButtons(m.chat, `
                🇵 🇦 🇾 🇲 🇪 🇳 🇹 

GOPAY : CHAT OWNER
DANA : CHAT OWNER 
OVO : CHAT OWNER

wa.me/6282194424412
 `, `Silahkan Pilih Payment Kak`, btns)
}
break






           










            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})