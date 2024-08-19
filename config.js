//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01xOTh0aVEyUkJnMGZHSDVyNlplQitRMWFlMU5iOEFPeVRuZG1tb2xXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamcvWFJKbUtiM2ZENkN0Sjh2UlF4ZFRpY2Y1N2xzTW84WitUbGFpb3pXYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TmdCVmRPcHB3ZE4yNjFJK0lPNE1BUkIxRXplOElHeUhSVkhDNFBmR0gwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrdGJqMU5yajFQQW40Y2l6N3JDckhKd0FnWVNOZmhXY3NabXZ4UVdtMHpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhBeEdYU3ZWOGtaejBRRjdlU1lxeC81SnV3TzFrN3BQNXQ5SlplVUN5WEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNicnI1RWZQaW9jTFpQYmdQZkZZblpQbU4wWk9GcXNXclVsM3pNSTlYM3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tJNTFEaDJ0Z0ZZWXlEUFNaK1A0UjlUN3AyeUhYcDJUVmNUeUVubEprVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1V2YUdvT0NUakhML3kzUzJ6cHhoVWJGcm5tY3Q3ckRYZzZ1cWh2SzBFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYvZmRjbCtmM2w0SFV6Q0l1a2wzakxjV1VZcnROVDBLanlaZ2hCWWw0UEl6TUdNSGI0RGY5eTNrMFdHUFMrTTVhRHVoRTlkUG51VU41MFJWNDBKUmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6InBINnVlS2xYdjB1bS96cElnaWRLTGExM0RJdGxEdk5kbTZEdFpHZFdhMEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZZanFlUzMzUTJHcmsyVG82MGVQT2ciLCJwaG9uZUlkIjoiMzNjZjNhZDktMzY5ZC00M2YyLWE2ODQtZjcyNGFlOWU5ZDMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd4YVZraUJnVEgwcnJ5UmVZVnhsNDBXVk9VZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbUdtWSswMUJQcHdBSUxZejVmVGVKazVoWm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUNZUFBEVEEiLCJtZSI6eyJpZCI6IjIzNDgxMTY1NDQyMDE6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiI0cGYgVGh1Z2dpbmchIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZkVxTWNFRUxPeWpMWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvSXQ4NVlsUFBKQmcvU1h1Q05LV0I5UEN6MmNhcmFVdFhZUzdacTdTTUZvPSIsImFjY291bnRTaWduYXR1cmUiOiJVeStCaXgyOGZKZFFGcUtXd3BLczhqdjhmTHpPd1lsU2ZSVUlxQi81d2lwRzBNa0lyNWE5UFRrREhWcW5DVkNYWWxrTmZ1SXpHYVoyQ3JkRUN2MUpDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR3ZhMFQrQkd5RGZ5eXQzdUg2RlhHR24wSmtVbExCOG9QR1dxUnd2RXg0ZENQSUlxNDhFSDg1YkdvQWthbTVaditzVE9ISTdGdlBlWm5ZbFRDYXQwalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTE2NTQ0MjAxOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnlMZk9XSlR6eVFZUDBsN2dqU2xnZlR3czluR3EybExWMkV1MmF1MGpCYSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA2MjAxNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPYU0ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
