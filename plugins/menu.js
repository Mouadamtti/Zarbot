let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(`

┏━━⊜  _*< Bot Commnds />*_
┃⋄ .alive
┃⋄ .jadibot
┃⋄ .serbor
┃⋄ .qr
┃⋄ .getcode
┃⋄ .menu
┃⋄ .owner
┃⋄ .ping
┃⋄ .runtime
┃⋄ .script
┃⋄ .rentbot
┗━━━━━━━━⬣
┏━━⊜ *< Premium Commnds />*_
┃⋄ .apk
┃⋄ .apk2
┃⋄ .uptodown
┗━━━━━━━━⬣

┏━━.*<Ai Commnds/>*
┃⋄ .aibobiza
┃⋄ .aipilot
┃⋄ .bardai
┃⋄ .bardi
┃⋄ .hd
┗━━━━━━━━⬣

┏━━⊜ *< downloade Commnds />*
┃⋄ .capcut
┃⋄ .facebook3
┃⋄ .insta
┃⋄ .mp4
┃⋄ .snapsave
┃⋄ .song
┃⋄ .tiktok2
┃⋄ .twitter
┃⋄ .video
┃⋄ .youtube
┃⋄ .ytmp4
┗━━━━━━━━⬣

`.trim())

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'menua'] 

export default handler
