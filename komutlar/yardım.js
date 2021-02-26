const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = (".")
  
const yardım = new Discord.MessageEmbed()
.setAuthor(`Pearly`, message.author.avatarURL(({ format: 'png', dynamic: true, size: 1024 })))
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setColor("RANDOM")
.setDescription(`Komutlarım;
\`${fadeaway}\`**yardım** : Botun Komutlarını Gösterir.
\`${fadeaway}\`**abone**: Abone rolü verir.
\`${fadeaway}\`**afk**: Kullanıcıyı afk olarak ayarlar.
\`${fadeaway}\`**nuke**: Bulunduğunuz kanalı silip yenisini oluşturur.
\`${fadeaway}\`**oylama**: Oylama başlatır.
\`${fadeaway}\`**sil**: Belirtilen sayıdaki mesajı siler.
\`${fadeaway}\`**yetkilerim**: Yetkilerinizi gösterir.`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'la yardım komutu nolabilir başka',
  usage: 'yardım'
}; //Plasmic Code・FadeAway