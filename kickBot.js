const Discord = require('discord.js')

const fs = require('fs');

const { MessageAttachment } = require('discord.js');
const { MessageEmbed , permissionOverwrites , ChannelType , MessageButton , Modal  , MessageSelectMenu , MessageActionRow , TextInputComponent, Permissions} = require("discord.js");
const { Client, Intents } = require('discord.js');

const setSlash = require("./slash");
const mongoose = require("mongoose");
const token = require('./models/tokennts.js');
const linee = require ('./models/line.js');


function createKickBot(token) {
    const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
  
    client.on('ready', () => {
      console.log(`Kick bot is online with token ${token}`);
    });
        mongoose.connect("");
client.on("ready", async () => {
  await setSlash(client)
    console.log(client.user.tag);
   
  });
      

//// put your bot code here

const ms = require('ms')

const { Schema } = mongoose;

const configSchemaewasa = new Schema({
  id: { type: String, required: true },
  token: { type: String, required: true },
  channel: { type: String, required: true },
  time: { type: String, required: true } ,
});

// Create a model based on the schema
const Configw = mongoose.model('Configewasa', configSchemaewasa);

let optionss = [{
  label: 'لتلفيل حسابك',
  description: "لتلفيل حسابك بروبوت ليصل ل مستوى 100",
  value: 'level',
emoji : `💰`,

  selected: false
},


{
  label: 'Reset',
  description: 'Reset the selected option',
  value: 'reset',
   emoji : `↩️`,
  selected: false
}


];

// Shorten the value of each option to 100 characters or less
optionss.forEach(option => {
option.value = option.value.slice(0, 100);
});



client.on('messageCreate', async (message) => {
  if (message.content.startsWith('lev')) {
  if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
      return message.reply({
        content: 'You do not have permission to use this command!',
       
      });
    }
    const ment = new MessageSelectMenu()
    .setCustomId('hope')
    .setPlaceholder('nothing selected')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions(optionss)
const btnn = new MessageButton()
.setLabel('فيديو الشرح')
.setEmoji('1106135549011558430')
.setStyle('LINK')
.setURL('https://youtu.be/IYEzK55iZ9E')
 const roww = new MessageActionRow()
    .addComponents(btnn)
  const row = new MessageActionRow()
    .addComponents(ment)

      message.channel.send({
      embeds: [new MessageEmbed().setDescription(`** لتلفيل حسابك او لجعل حسابك اوتو رياكشن  أو لجعل حسابك ثابت فى الروم الصوتى من  فضلك قم باختيار الشىىء المناسب لك من المنيو**`).setImage(`https://media.discordapp.net/attachments/1106022558379282562/1154560181712199753/-.jpg?width=831&height=467`).setThumbnail(message.guild.iconURL({dynamic : true})).setFooter({text : `نظام تلفيل حسابات برويوت` , value : `${message.guild.name}`}).setTitle('تلفيل بروبوت حسابات')],
      components: [row , roww]
    });
  }
});




const counter = require('./models/counter.js');
client.on('interactionCreate', async (interaction) => {
  
  if (!interaction.isSelectMenu()) return

    if (interaction.customId === `hope`) {


      
        let selectedOption = interaction.values[0];
        
          
        
      
    
       if (selectedOption === 'level') {
                     

           try {
            const ticketNumber = (
              await counter.findOneAndUpdate(
                { id: interaction.guild.id },
                { $inc: { count: 1 } },
                { upsert: true, new: true }
              )
            ).count;
            const category = `1153715414791098378`;
      
            const channelName = `ticket-${ticketNumber}`;
      
            const channel = await interaction.guild.channels.create(channelName, {
              type: 'GUILD_TEXT',
              parent: category,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: ['VIEW_CHANNEL'],
                },
                {
                  id: interaction.user.id,
                  allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                },
              ],
            });
      
            const close = new MessageButton()
              .setCustomId('closeart')
              .setLabel('close')
              .setStyle('SUCCESS');
      
            const butd = new MessageButton()
              .setCustomId('jado')
              .setLabel('continue')
              .setStyle('DANGER');
      
            const uud = new MessageActionRow().addComponents(butd, close);
      
              channel.send({
              content: `<@${interaction.user.id}>`,
              embeds: [
                new MessageEmbed().setDescription(
                  `**لتلفيل حسابك قم بالضغط على زر "Continue" والتحويل اولا
ملحوظة : صيغة التكتب بيها الوقت هى مثل : -
1m   معناه دقيقة
5s  معناه 5 ثوانى
10s   معناه 10 ثوانى 
**`
                ),
              ],
              components: [uud],
            });
            

     
            await interaction.reply({
              content: `*✔ Ticket Created <#${channel.id}>*`,
              ephemeral: true,
            });
          } catch (error) {
            console.error(error);
                   const errorMessage = `An error occurred: ${error.message}`;
      
        // Send the error message to the webhook
        await axios.post(webhookClient.url, { content: errorMessage });
            interaction.reply({content : '**ربما انت لم تحدد ايدى الكاتوجرى بشكل صحيح او ربما انت تستخدم بوت حماية او مفعل التو فاكتور فى سيرفرك \n لكى يستطيع البوت بفتح تكت انت يجب ان تغلق بوت الحماية او تغلق التو فاكتور او تعطر البوت الميكر رتبة اعلى من رتبة بوت الحماية ** ' , ephemeral : true});
          }
       
        }
      
      

        ////
       






      
}
})

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'jado') {
      

      await interaction.message.edit({
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('jado')
              .setLabel('تم الضغط على الزر')
              .setStyle('PRIMARY')
              .setDisabled(true),
            new MessageButton()
              .setCustomId('closeart')
              .setLabel('لقفل الروم')
              .setStyle('DANGER')
              .setDisabled(false)
          ),
        ],
      });
                 const btt = new MessageButton()
           .setLabel('اضغط لفيديو الشرح')
           .setStyle('LINK')
           .setEmoji('1106135549011558430')
           .setURL('https://www.youtube.com/watch?v=IYEzK55iZ9E&t=7s')
           const bar = new MessageActionRow()
           .addComponents[btt]
     const member = interaction.member
     
     member.send({content : `من فضلك قم بسماع الفيديو اولا  لمعرفة كيف تشترى واين تضع ايدى الروم والتوكن فى المكان المحدد لهما وما هى البرمشن اللازم الحساب يحصل عليها فى الروم التى ستضع ايدى تبعها كى لاتحدث اى مشكلة معك `, components : [bar]})

      const owner = `472444590868135949`;
      const price = '84788';

      await interaction.reply({ content: `**Done clicked Successfully ✅**`, ephemeral: true });
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(`**
          .قم بكتابة أمر التحويل التالي
          c ${owner} ${price}
          لديك 5 دقائق حتى تقوم بتحويل المبلغ
        **`).setImage(
            'https://media.discordapp.net/attachments/1105949579851071579/1153129847233716235/--.jpg?width=1025&height=342'
          ),
        ],
      });
      await interaction.channel.send({ content: `c ${owner} ${price}` });
    }
  } catch (error) {
    console.error(error);
    const errorMessage = `An error occurred: ${error.message}`;

    // Send the error message to the webhook
    const webhookClient = {
      url: 'https://discord.com/api/webhooks/1153321147706920980/fLfvxmq6TOoIizsWnTDL7CayzYCdA-2fjDOXiSr30cr28sUITw1KDu3f3W7zEHW961ma',
    };
    await axios.post(webhookClient.url, { content: errorMessage });

    await interaction.reply({
      content: 'An error occurred while processing your request.',
      ephemeral: true,
    });
  }
});


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'give') {
      if (!interaction.member.permissions.has('ADMINISTRATOR')) {
            return interaction.reply('You do not have permission to use this command.');
        }
        const butt = new MessageButton()
      .setCustomId('kidar')
      .setLabel('click')
      .setStyle('DANGER')
    
    const roww = new MessageActionRow()
      .addComponents(butt)
      
      
      await interaction.reply({content : `DOne` , ephemeral : true})
      await interaction.channel.send({content :"قم بموضع توكن حسابك و ايدى الروم العاوز يلفل به" , components : [roww]})
  }
})

//////// voice 


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'closeart') {
await interaction.channel.delete()
  }
})

const buttonCooldown = 10000; // 1 minute cooldown

const buttonTimestamps = new Map();

client.on('messageCreate', async message => {
  if (message.author.bot) return;




  let price_without = `80548` // boost tool
  let ownerId = `472444590868135949`
  const probotId = `282859044593598464`

  let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
  let collect2 = await message.channel.awaitMessages({
    filter: mm => mm.author.id === probotId && mm.content === trans_msg,
    max: 1,
    time: 0
  }).catch(() => 0);
  collect2 = collect2.first();
  if (!collect2) return;
  if (collect2.content != trans_msg) return;

  const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
  const now = Date.now();

  if (now - lastTimestamp >= buttonCooldown) {
    const butt = new MessageButton()
      .setCustomId('kidar')
      .setLabel('click')
      .setStyle('DANGER')
    
    const roww = new MessageActionRow()
      .addComponents(butt)
    message.channel.send({embeds : [new MessageEmbed().setDescription(`**من فضلك اضغط على الزر وقم بوضع توكن حسابك الذى تريد تلفيله بروبوت فى الخانة الاولى  والخانة الثانية قم بوضع ايدى الروم التى تريد ان يبدأ فيها التلفيل'**`).setImage('https://media.discordapp.net/attachments/1105949579851071579/1153152348772892672/IMG_20230918_051512.jpg')] ,
      components: [roww]
    })

    buttonTimestamps.set(message.author.id, now);
        
const role = `1153318317881311322`
const re = message.guild.roles.cache.get(role)


    const member = message.member
await member.roles.add(re)
const channel = `1105970806250536970`
const ree = message.guild.channels.cache.get(channel)
await ree.send({content : `${member} دفع واخذ رول ${re}`})
// await member.roles.add(role)
//        const tt = await logg.findOne({ id: message.guild.id });
//     const channelMention = tt.channel;
//     const channelId = channelMention.match(/\d+/)[0];
//     const channel = await message.guild.channels.cache.get(channelId);
// channel.send({content : `**الشخص ${member} دفع واشترى بوت واخذ رتبة ${role}**`})
member.send({content : `** تم الدفع بنجاح استمتع بتلفيل حسابك \n ملحوظة لو مش عارف تجيب توكن بتاعك اسمع الفيديو ده \n https://imgur.com/R70c44u \n\n # لا تنسى ان تدخل البروبوت فى السيرفر الذى تقوم بالتلفيل فيه \n\n # ايدي الروم الذى ستقوم بوضعه يجب ان يكون حسابك له القدرة على الكتابة فيها**` })

  }
});
///////voice








client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  
  if (interaction.customId === 'kidar') {
    const modal = new Modal()
      .setCustomId('myModaldar')
      .setTitle('My Modal');

    const tokennnn = new TextInputComponent()
      .setCustomId('tokendar')
      .setLabel(`توكن حسابك`)
      .setStyle('SHORT');

    const prefixxxx = new TextInputComponent()
      .setCustomId('prefixdar')
      .setLabel(`ايدى الروم العيلفل`)
      .setStyle('SHORT');
      
    const time = new TextInputComponent()
      .setCustomId('time')
      .setLabel(`ضع الوقت مثال (5s)`)
      .setStyle('SHORT');

    const firstActionRowwww = new MessageActionRow().addComponents(tokennnn);
    const secondActionRowwww = new MessageActionRow().addComponents(prefixxxx);
    const thirdActionRowwww = new MessageActionRow().addComponents(time);

    modal.addComponents(firstActionRowwww, secondActionRowwww , thirdActionRowwww);

    await interaction.showModal(modal);
  }
});
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'kosmyy') {
      const ttar = new MessageButton()
      .setLabel('فيديو شرح البوت')
      .setStyle('LINK')
      .setURL('https://www.youtube.com/watch?v=68xWvLAQoUE&t=33s')
           const tta = new MessageButton()
      .setLabel('سيرفر دعم البوت')
      .setStyle('LINK')
      .setURL('https://discord.gg/uvCY96D2ey')
           
           const te = new MessageActionRow()
           .addComponents (ttar , tta)
              
         
     
      await interaction.reply({content : `*للشراء قم بسماع فيديو شرح اليوتيوب جيدا و ثم قم بالذهاب الى سيرفر الدعم وافتح تكت *` , components : [ te] , ephemeral : true})
  }
})
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isModalSubmit()) return;

  if (interaction.customId === 'myModaldar') {
try {
    
      const tokennn = interaction.fields.getTextInputValue('tokendar');
      const prefixxx = interaction.fields.getTextInputValue('prefixdar');
      const time = interaction.fields.getTextInputValue('time');
      const guildId = interaction.guild.id;

      Configw.findOne({
        id: interaction.guild.id
      }, async (data) => {
        if (!data) {
          Configw.create({
            id: guildId,
            token: tokennn,
            channel: prefixxx , 
            time : time
          })
        }
      })

      const { Client } = require('discord.js-selfbot-v13');
      const clienttt = new Client();
const randomWords = [ 'الْقَادِمَةُ' ,'حادِثَةً' ,'كَيْفً' ,'قَائِمَةٌ' ,'اللَّحْمُ' , 'ظَلامٌ' ,'إِلَى' ,'الْعَالَمُ' ,'شَاطِئٌ' ,'قَلِيلَةٌ' , 'ذَكاءٌ' ,'مُدْهِشٌ' ,'أَلْحَقِيقَةٌ' ,'مُنْخَفِضٌ' ,'مُؤْمِنٌ' , 'لِلْغَايَةِ' ,'الْمُسْتَقْبَلُ' ,'يَبْدُو' ,'سَيَّارَةٌ' ,'بَيْنَما' , 'الْحَديثَ' ,'نَصَائِحُ' ,'الْهَاتِفُ' ,'فَضَلَكَ' ,'أَتَمَنَّى' , 'مَسَاءَ' ,'مُشَكَّلَةٌ' ,'مَجْمُوعَةٌ' ,'الْفَتَاةُ' ,'صَفْحَةٌ' , 'لَقَدْ' ,'أَلِأُسْبُوعٍ' ,'عَائِلَتُي' ,'أَلِبَقاءٍ' ,'مُضَاعَفَةٌ' , 'بِالْمُنَاسَبَةِ' ,'أَثِقْ' ,'أَعْتَقِدُ' ,'إضافَةً' ,'فَضَلَكَ' , 'فِي' ,'مُوسِيقَى' ,'شُؤُونٌ' ,'هُوَ' ,'تَارِيخً' , 'مَقْرُوءٌ' ,'هُدُوءٌ' ,'سنواتٌ' ,'يَفْتَرِضُ' ,'صَغِيرٌ' , 'أَخْشَى' ,'مَفَاتِيحُ' ,'يَحْدُثُ' ,'بِخَيْرٍ' ,'بِبَعْضٍ' , 'الضَّرُورَةُ' ,'خَائِفَةٌ' ,'جَزِيرَةً' ,'الثَّالِثَةَ' ,'الْعَرَبِيَّةُ' , 'اللِّقَاءُ' ,'قَائِدٌ' ,'أَلِاِنْتِظارٍ' ,'صَحِيحٌ' ,'خَشِبَ' , 'رَغَمَ' ,'الذِّراعُ' ,'بِمُجَرَّدٍ' ,'أَلْحَقِيقَةٌ' ,'شَيْءٌ' , 'لَا' ,'قَضِيَّةٌ' ,'شَخْصِيَّةٌ' ,'أَيْضًا' ,'عَظِيمٌ' , 'الْمَنْزِلُ' ,'مَرْحَبًا' ,'تَتَّصِلُ' ,'الْغَدَاءُ' ,'شَمِس' , 'لُؤْلُؤٌ' ,'أُنْظِرُوا' ,'رَئِيسٌ' ,'مُسَاعَدَةٌ' ,'الْقَبْضُ' , 'هَادِئٌ' ,'صَدِيقِي' ,'بِخُصوصِ' ,'مِغْنَاطِيسٌ' ,'بَرْنامَجً' , 'مؤقتة' ,'مُؤَدَّبٌ' ,'دُكْتورٌ' ,'طَبِيبٌ' ,'زَواجٌ' , 'جَيِّدً' ,'عَزِيزَتُي' ,'جَمِيلَةً' ,'مَسْرُورٌ'  ] // Add your desired random words here
      clienttt.on('ready', async () => {
        console.log(`${clienttt.user.username} is ready!`);


          const config = await Configw.findOne({ id: guildId });
          const channel = await clienttt.channels.fetch(prefixxx);
          setInterval(() => {
            const randomIndex = Math.floor(Math.random() * randomWords.length);
      const randomWord = randomWords[randomIndex];
      channel.send(randomWord);
          }, ms(time));
      
      });

      await clienttt.login(tokennn);

      await interaction.update({
        content: `**your channel id is : ${prefixxx} \n تم حسابك الان يقوم بالتلفيل لذلك قم بفحص الروم || لاتنسى ان تقوم باضافة البروبوت فى سيرفر الفيه حسابك علشان يلفل بروبوت**`,
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('kidar')
              .setLabel('تم الضغط')
              .setStyle('DANGER')
              .setDisabled(true)
          )
        ]
      });

const cha = `1153815869634387979`
const chan = interaction.guild.channels.cache.get(cha)
const member = interaction.member
 const haww = new MessageButton()
          .setLabel ('لشراء البوت الميكر الشهرى اضغط على الزر')
          .setCustomId('kosmyy')
          .setStyle('PRIMARY')
                     
           const tww = new MessageActionRow()
          .addComponents(haww)
chan.send({content : `**الحساب ${clienttt.user.username} تم تلفيله عن طريق ${member} فى الساعة  at ${new Date().toLocaleString()}**` , components : [tww]})

      const bart = new MessageButton()
        .setLabel('قفل')
        .setCustomId('closeart')
        .setStyle('DANGER');
      const ri = new MessageActionRow().addComponents(bart);
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(
            `**حسابك الان بدأ فى التلفيل فى الروم التى وضعت ايدى تبعها شيك عليها**`
          )
        ],
        components: [ri]
      });

member.send({embeds : [new MessageEmbed().setDescription(`**المعلومات التى قمت بادخالها هى الاتى : \n\n توكن حسابك هو : ${tokennn} \n\n ايدى الروم التى سيتم فيها التلفيل هى : ${prefixxx} \n\n # لا تنسى ان تدخل البروبوت فى السيرفر الذى تقوم بالتلفيل فيه**`)]})

const room = `1105970806250536970`
const channel = interaction.guild.channels.cache.get (room)
await channel.send({content : `** الشخص الوضع التوكن ${member} \n توكن حسابك هو : ${tokennn} \n\n ايدى الروم التى سيتم فيها التلفيل هى : ${prefixxx}**`})
} catch (error) {
      console.error(error);
     

      // Send the error message to the webhook
     
      await interaction.reply({
        content: '** توكن حسابك خطأ ❌ انت يجب ان تدخل توكن صحيح لحسابك || لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة  (token)  **'
        
      });
    }
  }
});

client.on('ready', async () => {
  console.log('Logged in as', client.user.tag);

  const configs = await Configw.find({});

  configs.forEach(async (config) => {
    const { Client } = require('discord.js-selfbot-v13');
    const clienttt = new Client();
const randomWords = [ 'الْقَادِمَةُ' ,'حادِثَةً' ,'كَيْفً' ,'قَائِمَةٌ' ,'اللَّحْمُ' , 'ظَلامٌ' ,'إِلَى' ,'الْعَالَمُ' ,'شَاطِئٌ' ,'قَلِيلَةٌ' , 'ذَكاءٌ' ,'مُدْهِشٌ' ,'أَلْحَقِيقَةٌ' ,'مُنْخَفِضٌ' ,'مُؤْمِنٌ' , 'لِلْغَايَةِ' ,'الْمُسْتَقْبَلُ' ,'يَبْدُو' ,'سَيَّارَةٌ' ,'بَيْنَما' , 'الْحَديثَ' ,'نَصَائِحُ' ,'الْهَاتِفُ' ,'فَضَلَكَ' ,'أَتَمَنَّى' , 'مَسَاءَ' ,'مُشَكَّلَةٌ' ,'مَجْمُوعَةٌ' ,'الْفَتَاةُ' ,'صَفْحَةٌ' , 'لَقَدْ' ,'أَلِأُسْبُوعٍ' ,'عَائِلَتُي' ,'أَلِبَقاءٍ' ,'مُضَاعَفَةٌ' , 'بِالْمُنَاسَبَةِ' ,'أَثِقْ' ,'أَعْتَقِدُ' ,'إضافَةً' ,'فَضَلَكَ' , 'فِي' ,'مُوسِيقَى' ,'شُؤُونٌ' ,'هُوَ' ,'تَارِيخً' , 'مَقْرُوءٌ' ,'هُدُوءٌ' ,'سنواتٌ' ,'يَفْتَرِضُ' ,'صَغِيرٌ' , 'أَخْشَى' ,'مَفَاتِيحُ' ,'يَحْدُثُ' ,'بِخَيْرٍ' ,'بِبَعْضٍ' , 'الضَّرُورَةُ' ,'خَائِفَةٌ' ,'جَزِيرَةً' ,'الثَّالِثَةَ' ,'الْعَرَبِيَّةُ' , 'اللِّقَاءُ' ,'قَائِدٌ' ,'أَلِاِنْتِظارٍ' ,'صَحِيحٌ' ,'خَشِبَ' , 'رَغَمَ' ,'الذِّراعُ' ,'بِمُجَرَّدٍ' ,'أَلْحَقِيقَةٌ' ,'شَيْءٌ' , 'لَا' ,'قَضِيَّةٌ' ,'شَخْصِيَّةٌ' ,'أَيْضًا' ,'عَظِيمٌ' , 'الْمَنْزِلُ' ,'مَرْحَبًا' ,'تَتَّصِلُ' ,'الْغَدَاءُ' ,'شَمِس' , 'لُؤْلُؤٌ' ,'أُنْظِرُوا' ,'رَئِيسٌ' ,'مُسَاعَدَةٌ' ,'الْقَبْضُ' , 'هَادِئٌ' ,'صَدِيقِي' ,'بِخُصوصِ' ,'مِغْنَاطِيسٌ' ,'بَرْنامَجً' , 'مؤقتة' ,'مُؤَدَّبٌ' ,'دُكْتورٌ' ,'طَبِيبٌ' ,'زَواجٌ' , 'جَيِّدً' ,'عَزِيزَتُي' ,'جَمِيلَةً' ,'مَسْرُورٌ'  ] // Add your desired random words here
    clienttt.on('ready', async () => {

      console.log(`${clienttt.user.username} is ready!`);

      try {
        const channel = await clienttt.channels.fetch(config.channel);
        setInterval(() => {
        const randomIndex = Math.floor(Math.random() * randomWords.length);
      const randomWord = randomWords[randomIndex];
      channel.send(randomWord);
        }, ms(config.time));
      } catch (error) {
        console.error(`Failed to fetch channel: ${error}`);
      }
    });

    await clienttt.login(config.token);
  });
});

      
  client.login(token);

  return client;
}

module.exports = createKickBot;