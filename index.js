const Discord = require('discord.js');
const client = new Discord.Client({ fetchAllMembers: true });
const serverID = "516593188320968715" 
const users = {}
const fs = require("fs");
const config = require("./config.json");
const package = require("./package.json");
const list = 3
//guild = guild.members.fetch('516593188320968715')

//const list = guild.members.fetch("516593188320968715");
//client.guilds.fetch('516593188320968715')
 
list.members.guild.members.fetch('516593188320968715')
 // .then(console.log)
 // .catch(console.error);

 // console.log(list)

.
l//ist.members.fetch().then(members => console.log(members))

guild.members.fetch('516593188320968715')




  //let server = message.guild.id, 
  //channel = message.channel.id 




var saved_users = {};



/*
// import savedUsers.json if it exists already
if (fs.existsSync(__dirname + "/savedUsers.json"))
  saved_users = JSON.parse(fs.readFileSync("./savedUsers.json", "utf8"));

client.on('ready', () => {
  console.log(new Date() + ": Logged in as " + client.user.tag);

  if (client.guilds.array().length > 1) {
    console.log("WARNING: The bot has been added to " + client.guilds.array().length + " servers but should only be used on one server at once and will now shutdown. Please remove the bot from all servers but one and restart it!");
    process.exit();
  }

  client.user.setPresence({ activity: { name: "BF1 - Mods" }, status: 'online' })
});

client.on('message', message => {
  // Don't kick bots
  if (message.author.bot) return;

  // reply when receiving !help in direct message
  if (message.channel.type === "dm") {
    if (!!message.content) {
      if (message.content.toLowerCase().startsWith("!help"))
        message.reply("This bot doesn't offer any commands and has to be set up manually."
        + "\nPlease refer to " + package.homepage + " for more information.");
    }

    return;
  }
 

  if (!saved_users[message.author.id])
    saved_users[message.author.id] = {};

  saved_users[message.author.id].lastMessage = message.createdTimestamp
  saved_users[message.author.id].guild = message.guild.id;
  console.log(new Date() + ": Message received by " + message.createdTimestamp)

  // Save the data
  fs.writeFileSync("./savedUsers.json", JSON.stringify(saved_users));
});

// checking for users to kick every 10 minutes (600 000 ms)


/* setInterval(function () {
  let now = new Date().getTime();
  let actions = 0;
  let all_users = client.users.array();

  // Save all users
  for (y=0; y<all_users.length; y++) {
    if (all_users[y].id.length < 10)
      continue;

    // Save users even if they haven't messaged anything yet
    if (!saved_users[all_users[y].id])
      saved_users[all_users[y].id] = {
        lastMessage: message.createdTimestamp,
        guild: client.guilds.array()[0].id
       }
  }
 
  // Save users
  fs.writeFileSync("./savedUsers.json", JSON.stringify(saved_users));

  Object.keys(saved_users).map(function (i) {
    // Prevent ratelimits
    if (actions >= 5)
      return;

    let diff = now - saved_users[i].lastMessage;
    let user = client.users.get(i);
    let channel = client.channels.get(config.warnMessagesChannel);

    if (!user) {
      user = "UserIsOffline#0000";
    } else {
      user = user.tag;
    }

    if (diff >= config.warnDelay && saved_users[i].warned !== true) {
      console.log(new Date() + ": Användaren " + i + " kommer kickas om " + config.warnDelay + " ms.");

      if (!!channel)
        channel.send(":VARNING: Användaren " + user + " (ID: " + i + ") kommer kickas om " + (config.warnDelay / 60 / 60 / 1000) + " minuter.");

      saved_users[i].warned = true;
      actions++;
    }

    if (diff >= config.maxInactivity) {
      console.log(new Date() + ": Kastar ut " + i + " på grund av inaktivitet.");
      var guild = client.guilds.get(saved_users[i].guild);

      // Don't really kick users if testing is enabled
      if (config.testing !== true) {
        guild.fetchMember(i).then(member => {
          member.kick("Utslängd pga inaktivitet");

          if (!!channel)
            channel.send("🔨 " + member.user.tag + " har blivit utslängd pga inaktivitet.");
        });
      }

      actions++;
      delete saved_users[i];
      fs.writeFileSync("./savedUsers.json", JSON.stringify(saved_users));
    }
  });
}, 60*1000); 
*/ 

client.login(config.token);

