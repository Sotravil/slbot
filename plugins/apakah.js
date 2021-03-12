let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*respuesta:* ${pickRandom(['si','Talvez si','Quizás','Quizás no','No','Imposible])}
`.trim(), m)
}
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^pregunta$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

