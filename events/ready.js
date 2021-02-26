const Discord = require('discord.js')

module.exports = client => {
  
  const aktiviteListesi = [
    `discord.gg/codes | yt.com/ukqzn`,
  
  ]

  client.user.setStatus('idle')
  ////dnd rahatsız etmein
  ////idle boşta
  ////online çevrimiçi
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 2000)
}////narcosCode