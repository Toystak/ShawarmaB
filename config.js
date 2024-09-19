import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

/*✦•━━━━━━━━━━━━━━━━∘⊰⚡⊱∘ ━━━━━━━━━━━━━━━━•✦*/

global.owner = [
  ['201550680822', '👑 Shawarma 👑', true],
  ['201550680822', '👑 Shawarma 👑', true],
  ['201550680822']
] 

global.suittag = ['201550680822'] 
global.prems = ['201550680822'] 
global.reportes_solicitudes = ['201550680822']

global.packname = 'Shawarma'
global.author = 'Shawarma'
global.wm = 'Shawarma'
global.igfg = 'Shawarma'
global.wait = '⌯ انــتــظــر لــحـظـه مــن فـضـلـك'

//global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "-@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Ai Hoshino - MD', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.imagen1 = fs.readFileSync('./src/shawarma.jpg');
global.imagen2 = fs.readFileSync('./src/shawarma.jpg');
global.imagen3 = fs.readFileSync('./src/shawarma.jpg');
global.imagen4 = fs.readFileSync('./src/shawarma.jpg');
global.imagen5 = fs.readFileSync('./src/shawarma.jpg');
global.imagen6 = fs.readFileSync('./src/shawarma.jpg');
global.imagen7 = fs.readFileSync('./src/shawarma.jpg');
global.imagen8 = fs.readFileSync('./src/shawarma.jpg')
global.imagen9 = fs.readFileSync('./src/shawarma.jpg')
global.imagen10 = fs.readFileSync('./src/shawarma.jpg')

global.mods = [];

/*✦•━━━━━━━━━━━━━━━━∘⊰⚡⊱∘ ━━━━━━━━━━━━━━━━•✦*/
global.d = new Date(new Date + 3600000)
global.locale = 'ar'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('ar', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('ar', { month: 'long' })
global.año = d.toLocaleDateString('ar', { year: 'numeric' })
global.tiempo = d.toLocaleString('ar-EG', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
/*✦•━━━━━━━━━━━━━━━━∘⊰⚡⊱∘ ━━━━━━━━━━━━━━━━•✦*/
global.wm2 = `⌯ ${dia} ${fecha}\Shawarma`
global.gt = 'Shawarma'
global.hinabot = 'Shawarma'
global.md = 'https://solo.to/shadowsensei'
global.acc = 'https://solo.to/shadowsensei'
global.waitt = '⌯ انــتــظــر لــحـظـه مــن فـضـلـك'
global.waittt = '⌯ انــتــظــر لــحـظـه مــن فـضـلـك'
global.waitttt = '⌯ انــتــظــر لــحـظـه مــن فـضـلـك'
global.nomorown = '201550680822'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `${moment.tz('Africa/Cairo').format('DD/MM/YY')}` 
global.bottime = `${moment.tz('Africa/Cairo').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu2.jpg')}}}
global.multiplier = 99
/*✦•━━━━━━━━━━━━━━━━∘⊰⚡⊱∘ ━━━━━━━━━━━━━━━━•✦*/

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})