let handler = function (m) {
  // this.sendContact(m.chat, '19728806294', 'Sotravil', m)
  this.sendContact(m.chat, '0', '19728806294', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
