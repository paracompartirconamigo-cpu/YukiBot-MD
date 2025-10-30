import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let mentionedJid = await m.mentionedJid
let userId = mentionedJid && mentionedJid[0] ? mentionedJid[0] : m.sender
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
let txt = `̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮   ̮
︶•︶°︶•︶°︶•︶°︶•︶°︶•︶°︶
> ❀ Hola! @${userId.split('@')[0]}, Soy *${botname}*, Aquí tienes la lista de comandos.

╭┈ࠢ͜┅ࠦ͜͜╾݊͜─ؕ͜─ׄ͜─֬͜─֟͜─֫͜─ׄ͜─ؕ͜─݊͜┈ࠦ͜┅ࠡ͜͜┈࠭͜͜۰۰͜۰
│✦ *Tipo* » ${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub-Bot')}
│✰ *Usuarios* » ${totalreg.toLocaleString()}
│⚘ *Versión* » ${vs}
│ꕥ *Plugins* » ${totalCommands}
│🜸 *Librería* » ${libreria}
╰ׅ┈ࠢ͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴ ⋱࣭ ᩴ  ⋮֔   ᩴ ⋰╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *UTILITIES* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de *Útilidades*.
✦ *#help • #menu*
> ⸙ Ver el menú de comandos.
✦ *#sc • #script*
> ⸙ Link del repositorio oficial del Bot.
✦ *#sug • #suggest*
> ⸙ Sugerir nuevas funciones al desarrollador.
✦ *#reporte • #reportar*
> ⸙ Reportar fallas o problemas del bot.
✦ *#calcular • #cal*
> ⸙ Calcular tipos de ecuaciones.
✦ *#delmeta*
> ⸙ Restablecer el pack y autor por defecto para tus stickers.
✦ *#getpic • #pfp* + [@usuario]
> ⸙ Ver la foto de perfil de un usuario.
✦ *#say* + [texto]
> ⸙ Repetir un mensaje
✦ *#setmeta* + [autor] | [pack]
> ⸙ Establecer el pack y autor por defecto para tus stickers.
✦ *#sticker • #s • #wm* + {citar una imagen/video}
> ⸙ Convertir una imagen/video a sticker
✦ *#toimg • #img* + {citar sticker}
> ⸙ Convertir un sticker/imagen de una vista a imagen.
✦ *#brat • #bratv • #qc • #emojimix*︎ 
> ⸙ Crear stickers con texto.
✦ *#gitclone* + [Link]
> ⸙ Descargar un repositorio de Github.
✦ *#enhance • #remini • #hd*
> ⸙ Mejorar calidad de una imagen.
✦ *#letra • #style* 
> ⸙ Cambia la fuente de las letras.
✦ *#read • #readviewonce*
> ⸙ Ver imágenes viewonce.
✦ *#ss • #ssweb*
> ⸙ Ver el estado de una página web.
✦ *#translate • #traducir • #trad*
> ⸙ Traducir palabras en otros idiomas.
✦ *#ia • #gemini*
> ⸙ Preguntar a Chatgpt.
✦ *#tourl • #catbox*
> ⸙ Convertidor de imágen/video en urls.
✦ *#wiki • #wikipedia*
> ⸙ Investigar temas a través de Wikipedia.
✦ *#dalle • #flux*
> ⸙ Crear imágenes con texto mediante IA.
✦ *#npmdl • #nmpjs*
> ⸙ Descargar paquetes de NPMJS.
✦ *#google*
> ⸙ Realizar búsquedas por Google.
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ


╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *DOWNLOAD* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de *Descargas* para descargar archivos de varias fuentes.
✦ *#tiktok • #tt* + [Link] / [busqueda]
> ⸙ Descargar un video de TikTok.
✦ *#mediafire • #mf* + [Link]
> ⸙ Descargar un archivo de MediaFire.
✦ *#mega • #mg* + [Link]
> ⸙ Descargar un archivo de MEGA.
✦ *#play • #play2 • #ytmp3 • #ytmp4* + [Cancion] / [Link]
> ⸙ Descargar una cancion o vídeo de YouTube.
✦ *#facebook • #fb* + [Link]
> ⸙ Descargar un video de Facebook.
✦ *#twitter • #x* + [Link]
> ⸙ Descargar un video de Twitter/X.
✦ *#ig • #instagram* + [Link]
> ⸙ Descargar un reel de Instagram.
✦ *#pinterest • #pin* + [busqueda] / [Link]
> ⸙ Buscar y descargar imagenes de Pinterest.
✦ *#image • #imagen* + [busqueda]
> ⸙ Buscar y descargar imagenes de Google.
✦ *#apk • #modapk* + [busqueda]
> ⸙ Descargar un apk de Aptoide.
✦ *#ytsearch • #search* + [busqueda]
> ⸙ Buscar videos de YouTube.
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ


╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *PROFILES* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos de *Perfil* para ver y configurar tu perfil.
✦ *#leaderboard • #lboard • #top* + <Paginá>
> ⸙ Top de usuarios con más experiencia.
✦ *#level • #lvl* + <@Mencion>
> ⸙ Ver tu nivel y experiencia actual.
✦ *#marry • #casarse* + <@Mencion>
> ⸙ Casarte con alguien.
✦ *#profile* + <@Mencion>
> ⸙ Ver tu perfil.
✦ *#setbirth* + [fecha]
> ⸙ Establecer tu fecha de cumpleaños.
✦ *#setdescription • #setdesc* + [Descripcion]
> ⸙ Establecer tu descripcion.
✦ *#setgenre* + Hombre | Mujer
> ⸙ Establecer tu genero.
✦ *#delgenre • #delgenero*
> ⸙ Eliminar tu género.
✦ *#delbirth* + [fecha]
> ⸙ Borrar tu fecha de cumpleaños.
✦ *#divorce*
> ⸙ Divorciarte de tu pareja.
✦ *#setfavourite • #setfav* + [Personaje]
> ⸙ Establecer tu claim favorito.
✦ *#deldescription • #deldesc*
> ⸙ Eliminar tu descripción.
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ

╭┈ࠢ͜─ׄ֟፝͜─ׄ͜─ׄ͜╴𐔌 *GROUPS* 𐦯╶͜─ׄ͜─ׄ֟፝͜─ׄ͜─ׄ͜
> ✿ Comandos para *Administradores* de grupos.
✦ *#tag • #hidetag • #invocar • #tagall* + [mensaje]
> ⸙ Envía un mensaje mencionando a todos los usuarios del grupo.
✦ *#detect • #alertas* + [enable/disable]
> ⸙ Activar/desactivar las alertas de promote/demote
✦ *#antilink • #antienlace* + [enable/disable]
> ⸙ Activar/desactivar el antienlace
✦ *#bot* + [enable/disable]
> ⸙ Activar/desactivar al bot
✦ *#close • #cerrar*
> ⸙ Cerrar el grupo para que solo los administradores puedan enviar mensajes.
✦ *#demote* + <@usuario> | {mencion}
> ⸙ Descender a un usuario de administrador.
✦ *#economy* + [enable/disable]
> ⸙ Activar/desactivar los comandos de economía
✦ *#gacha* + [enable/disable]
> ⸙ Activar/desactivar los comandos de Gacha y Games.
✦ *#welcome • #bienvenida* + [enable/disable]
> ⸙ Activar/desactivar la bienvenida y despedida.
✦ *#setbye* + [texto]
> ⸙ Establecer un mensaje de despedida personalizado.
✦ *#setprimary* + [@bot]
> ⸙ Establece un bot como primario del grupo.
✦ *#setwelcome* + [texto]
> ⸙ Establecer un mensaje de bienvenida personalizado.
✦ *#kick* + <@usuario> | {mencion}
> ⸙ Expulsar a un usuario del grupo.
✦ *#nsfw* + [enable/disable]
> ⸙ Activar/desactivar los comandos NSFW
✦ *#onlyadmin* + [enable/disable]
> ⸙ Permitir que solo los administradores puedan utilizar los comandos.
✦ *#open • #abrir*
> ⸙ Abrir el grupo para que todos los usuarios puedan enviar mensajes.
✦ *#promote* + <@usuario> | {mencion}
> ⸙ Ascender a un usuario a administrador.
✦ *#add • #añadir • #agregar* + {número}
> ⸙ Invita a un usuario a tu grupo.
✦ *admins • admin* + [texto]
> ⸙ Mencionar a los admins para solicitar ayuda.
✦ *#restablecer • #revoke*
> ⸙ Restablecer enlace del grupo.
✦ *#addwarn • #warn* + <@usuario> | {mencion}
> ⸙ Advertir aún usuario.
✦ *#unwarn • #delwarn* + <@usuario> | {mencion}
> ⸙ Quitar advertencias de un usuario.
✦ *#advlist • #listadv*
> ⸙ Ver lista de usuarios advertidos.
✦ *#inactivos • #kickinactivos*
> ⸙ Ver y eliminar a usuarios inactivos.
✦ *#listnum • #kicknum* [texto]
> ⸙ Eliminar usuarios con prefijo de país.
✦ *#gpbanner • #groupimg*
> ⸙ Cambiar la imagen del grupo.
✦ *#gpname • #groupname* [texto]
> ⸙ Cambiar la nombre del grupo.
✦ *#gpdesc • #groupdesc* [texto]
> ⸙ Cambiar la descripción del grupo.
✦ *#del • #delete* + {citar un mensaje}
> ⸙ Eliminar un mensaje.
✦ *#linea • #listonline*
> ⸙ Ver lista de usuarios en linea.
✦ *#gp • #infogrupo*
> ⸙ Ver la Informacion del grupo.
✦ *#link*
> ⸙ Ver enlace de invitación del grupo.
╰ׅ͜─֟͜─͜─ٞ͜─͜─๊͜─͜─๋͜─⃔═̶፝֟͜═̶⃔─๋͜─͜─͜─๊͜─ٞ͜─͜─֟͜┈ࠢ͜╯ׅ`.trim()
await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [userId],
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: channelRD.id,
serverMessageId: '',
newsletterName: channelRD.name
},
externalAdReply: {
title: botname,
body: textbot,
mediaType: 1,
mediaUrl: redes,
sourceUrl: redes,
thumbnail: await (await fetch(banner)).buffer(),
showAdAttribution: false,
containsAutoReply: true,
renderLargerThumbnail: true
}}}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler
