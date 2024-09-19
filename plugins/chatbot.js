let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^(بوت|يابوت)$/i.test(m.text)) { 
 responses = [ 
 'اسمي شاورما',  
 'عايز اي',  
'تحت امرك',  
'بوت شاورما تحت امرك',  
 ]; 
}
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;