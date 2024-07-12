const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_18_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICAxODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibzV5TnVGenhhL3FEdVBYN3NQaXZ0bnBWYm12K2xWaHhaVHVuN3VaR2tNZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnJwLWhtSlhRN1dxb2M2dEVFSXZJUVwiLFxuICBcInBob25lSWRcIjogXCJjN2M0NmE0MS00MjI4LTQ2ZWUtOTBiMC1mZTc3MDRkYWRkYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMTYxLFxuICAgICAgMTIsXG4gICAgICAxNjUsXG4gICAgICAyNyxcbiAgICAgIDQ3LFxuICAgICAgMTE3LFxuICAgICAgMTUyLFxuICAgICAgNTIsXG4gICAgICAyNTAsXG4gICAgICA0OSxcbiAgICAgIDEzLFxuICAgICAgMTU2LFxuICAgICAgMjAwLFxuICAgICAgMTc4LFxuICAgICAgMTU1LFxuICAgICAgMjQ1LFxuICAgICAgMTkwLFxuICAgICAgMzcsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDEwNCxcbiAgICAgIDEwMSxcbiAgICAgIDE0MyxcbiAgICAgIDIxMCxcbiAgICAgIDE1LFxuICAgICAgMjAzLFxuICAgICAgMjYsXG4gICAgICA2MixcbiAgICAgIDEwMCxcbiAgICAgIDIzMCxcbiAgICAgIDQwLFxuICAgICAgMTc0LFxuICAgICAgMjMwLFxuICAgICAgMTM1LFxuICAgICAgMjI5LFxuICAgICAgMjQsXG4gICAgICAxMDIsXG4gICAgICAxNjgsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNQUNTS0o1RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDE2NzYxMTE6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMDQwNDI2Njg2MDY3OToxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdXBnWjhDRUxEMnhMUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk56QTFqR2VLbVNuSXRrMC92UWNSVCszcTEvY1c1VmVaekZXSXVITHl1UWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieDB6VTBkaVhjbVlCYmVQWjhGalNNYm1MM2FDYnZvaTNKcStRS2paQm5rMUJSdG42OUtjWWdDaWdkTHhrdmZZZHFadjZiUitJVjB4NUNZdktnM0M1RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWNXeUdNS3NQbFd1dGptL0E3RmdObmZLa0YxSEV3bXlTTENQWS8reU1ZQUcvN01aVGJBNDJtd1pnZTB0UnA2Q3NFUHBlVk1rNXdzd2g5bGdnZXdCanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDE2NzYxMTE6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3OTM5MDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "hisoka",
  ownername:process.env.OWNER_NAME|| "hisoka",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
