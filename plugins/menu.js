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
┃⋄ .fb
┃⋄ .ig
┃⋄ .ytmp4
┃⋄ .ytmp3
┃⋄ .play
┃⋄ .tiktok
┃⋄ .twitter
┃⋄ .video
┃⋄ .yts
┗━━━━━━━━⬣

`.trim())

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'help'] 

export default handler
