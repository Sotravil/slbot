const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Usted ya está registrado\nMau reinscripción? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Formato incorrecto\n*${usedPrefix}registrar <nombre>.edad>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío (alfanumérico)'
  if (!age) throw 'La edad no puede estar en blanco (Número)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
¡Registro exitoso!

╭─「 *Informacion* 」
│ Nombre: *${name}*  │
│ Edad: *${age}thn*  │
│ SN: *${sn}*        │
│      sl.bot        │
╰────
`.trim())
}
handler.help = ['rg', 'registrar', 'reg', 'register'].map(v => v + '<nombre>.<edad>')
handler.tags = ['exp']

handler.command = /^(registrarse|reg(ister)?)$/i

module.exports = handler

