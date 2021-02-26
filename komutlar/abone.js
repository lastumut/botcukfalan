const Discord = require("discord.js")


exports.run = async(client,message,args) => {
  let kullanıcı = message.mentions.users.first()
  let abone = ("804351667641385040") ///abone rolü id si
  let gorevli = ("804351202287550504") //rol görevlisi id si
  
  if(!message.member.roles.cache.has(gorevli)) return message.reply(":x: **Bu Komutu Kullanmak İçin Rol Görevlisi Olman Gerekir.** :x:")
  if(!kullanıcı)return message.reply(":x: **Kullanıcıyı Etiketlemen Gerek** :x:")
  message.guild.member(kullanıcı).roles.add(abone)
  message.channel.send(`:tada: **Abone Rolü Başarı İle Verildi.**`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel : 0
}

exports.help = {
  name : "a"
}