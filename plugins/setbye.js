let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Despedida se ha configuarado correctamente \n@user (Mencion)')
  } else throw 'Donde esta el texto?'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

