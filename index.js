const config = require("./config.json")
const token = config.token
const discord = require("v11-discord.js")
const superagent = require("superagent")
const prefix = config.prefix
const client = new discord.Client()
require("colors")
client.login(token).catch(err => {console.log("Invalid Token".red)})
client.on('ready', function () {
    console.clear()
    console.log(`
    888                        888             d8b      888                             888                       
    888                        888             Y8P      888                             888                       
    888                        888                      888                             888                       
    88888b.   .d88b.  88888b.  888888  8888b.  888      88888b.   .d88b.  88888b.d88b.  88888b.   .d88b.  888d888 
    888 "88b d8P  Y8b 888 "88b 888        "88b 888      888 "88b d88""88b 888 "888 "88b 888 "88b d8P  Y8b 888P"   
    888  888 88888888 888  888 888    .d888888 888      888  888 888  888 888  888  888 888  888 88888888 888     
    888  888 Y8b.     888  888 Y88b.  888  888 888      888 d88P Y88..88P 888  888  888 888 d88P Y8b.     888     
    888  888  "Y8888  888  888  "Y888 "Y888888 888      88888P"   "Y88P"  888  888  888 88888P"   "Y8888  888     `.magenta)
                                                                                                              
console.log(`                       
                                    Made by TaxMachine e#6009                                                                                
                                    Welcome ${client.user.tag}                                                        
                                                                         
                                                                                    `.cyan)
console.log(`                               WaifuWare Inc.`.green)
});
client.on("message", message => {
    if (message.author.id !== client.user.id) return
        if (message.content.startsWith(`${prefix}bomb`)) {
            message.delete()
        var urls = [ "https://waifu.pics/api/nsfw/waifu",
                     "https://waifu.pics/api/nsfw/neko",
                     "https://waifu.pics/api/nsfw/blowjob",
                     "https://waifu.pics/api/nsfw/waifu",
                     "https://waifu.pics/api/nsfw/neko", 
                     "https://waifu.pics/api/nsfw/blowjob",
                     "https://waifu.pics/api/nsfw/waifu",
                     "https://waifu.pics/api/nsfw/neko",
                     "https://waifu.pics/api/nsfw/blowjob"
                    ]
        urls.forEach(f => superagent.get(f).then(r => {
            message.channel.send(r.body.url).catch(err => {console.log(err)})
        }))
    }
})
