require('dotenv').config();
const { Telegraf }= require('telegraf');
const {StocksOverview,KeyCheck,CreateCloud,TranslationMessage,KeyCheckPRO,NewsAll,NewsStocks,NewsCrypto,NewsForex,NewsIndices,NewsFutures,NewsEconomy} = require("./code/index.js");
const bot = new Telegraf(process.env.TELEGRAM_PRO_BOT_KEY);
async function AlcapaAiPro(){
 // ! [ [ ✅ ] ALCAPA PRO [ STARTING ] ] 
 bot.start(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ BOT STARTING ] ✅ [ ALCAPA.AI [ PRO] ]`);
  ctx.reply(`Olá ${ctx.from.first_name} ${ctx.from.last_name}, Meu Nome é Alcapa.Ai sou um robô de inteligência artificial 🤖 que trabalho com orientação do mercado financeiro. Trazendo relatórios do mercado financeiro e orientando STOP LOSS e STOP GAIN explicando quais são os momentos ideais para entrar no mercado.`, {
    reply_markup:{
      inline_keyboard:[
        [{text:"ALCAPA PRO ➕", callback_data:"ALCAPA"}],
        [{text:"NEWS ALCAPA 📰", callback_data:"NEWS"}],
        [{text:"SUPPORT ALCAPA 🆘", callback_data:"SUPPORT"}],
        [{text:"COMUNIDADE ALCAPA 🔰", callback_data:"COMUNIDADE"}]
      ]
    }
  });
});
 // ! [ [ ✅ ] ALCAPA PRO [ COMUNIDADE ]  [ DISCORD & TELEGRAM ] ] 
  bot.action("COMUNIDADE",(async (ctx) => {
    console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ COMUNIDADE [ MENU ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
    ctx.reply("Temos Comunidade no Discord e Telegram.",{reply_markup:{
        inline_keyboard:[
          [{text:`DISCORD 💬`, callback_data:`DISCORD`},{text:`TELEGRAM 👥`, callback_data:`TELEGRAM`}]
        ]
      }
    })
    }));
 // ! [ [ ✅ ] ALCAPA PRO [ COMUNIDADE ]  [ DISCORD ] ] 
    bot.action("DISCORD",(async (ctx) => {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ COMUNIDADE [ DISCORD ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
      ctx.reply("💬 Temos Comunidade no Discord.\n🔰 Discord Comunidade: https://bit.ly/3Oa7Q9y \nPor favor digite /start pra inicializar de novo 😊")
      }));
  // ! [ [ ✅ ] ALCAPA PRO [ COMUNIDADE ]  [ TELEGRAM ] ] 
    bot.action("TELEGRAM",(async (ctx) => {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ COMUNIDADE [ TELEGRAM ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
      ctx.reply("👥 Temos Comunidade no Telegram.\n🔰 Telegram Comunidade: @alcapaai \nPor favor digite /start pra inicializar de novo 😊")
      }));

 // ! [ [ ✅ ] ALCAPA PRO [ SUPPORT ]  [ MENU ] ] 
  bot.action("SUPPORT",(async (ctx) => {
    console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ SUPPORT [ MENU ] ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
    ctx.reply("Qual dessas opções pode ajudar?",{reply_markup:{
        inline_keyboard:[
          [{text:`FERRAMENTAS ⚙️`, callback_data:`FERRAMENTAS`},{text:`LICENÇA 💎`, callback_data:`LICENÇA`}],
          [{text:`REPORTAR UM PROBLEMA 🧰`, callback_data:`REPORTAR`}]
        ]
      }
    })
    }));
  // ! [ [ ✅ ] ALCAPA PRO [ FERRAMENTAS [ SUPPORT ] ]  [ MENU ] ] 
  bot.action("FERRAMENTAS",(async (ctx) => {
    console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ FERRAMENTAS [ SUPPORT ] ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
    ctx.reply("Que tipo de plataforma?",{reply_markup:{
        inline_keyboard:[
          [{text:`TELEGRAM ⚙️`, callback_data:`FERRAMENTAS_SUPORTE`}],[{text:`WEBSITE BETA 🌐`, callback_data:`FERRAMENTAS_SUPORTE`}]
        ]
      }
    })
    }));
  // ! [ [ ✅ ] ALCAPA PRO [ FERRAMENTAS [ DISCORD | TELEGRAM ] ]  [ MENU ] ] 
    bot.action("FERRAMENTAS_SUPORTE",(async (ctx) => {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ FERRAMENTAS [  DISCORD | TELEGRAM ] ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
      ctx.reply("Estamos preparando um representante da nosso suporte para atender você. @Fehoffciall 🧑‍🎓\nPor favor digite /start pra inicializar de novo 😊")
      }));
 // ! [ [ ✅ ] ALCAPA PRO [ SUPPORT | LICENÇA ] ] 
 bot.action("LICENÇA",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  SUPPORT | LICENÇA  [ MENU ] ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Qual dessas opções pode ajudar?",{reply_markup:{
      inline_keyboard:[
        [{text:`VERIFICAR MINHA LICENÇA 💎`, callback_data:`VERIFICAR`}],[{text:`OBTER LICENÇA 💎`, callback_data:`OBTER`}]
      ]
    }
  })
  }));
 // ! [ [ ✅ ] ALCAPA PRO [ SUPPORT | LICENÇA ]  [ VERIFICAR ] ] 
 bot.action("VERIFICAR",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  SUPPORT | LICENÇA  [ VERIFICAR ] ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  let License = await KeyCheck(ctx.chat.id,ctx.chat.username)
  ctx.reply("Estaremos verificando sua licença. ⏳")
  setTimeout(() => {
    if(License==undefined){
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ❌ [ CHECK KEY [ NENHUMA ] ] ❌ [ ALCAPA.AI [ PRO ] ]`);
      License = "Nenhuma licença encontrada. ❌"  
      ctx.reply(`👤 Nome: ${ctx.from.first_name} ${ctx.from.last_name}\n🗣️ Linguagem: ${ctx.from.language_code}\n💡 ID: ${ctx.from.id}\n${License}`)
      ctx.reply("Por favor digite /start pra inicializar de novo 😊")  
    }else{
      ctx.reply(`👤 Nome: ${ctx.from.first_name} ${ctx.from.last_name}\n🗣️ Linguagem: ${ctx.from.language_code}\n💡 ID: ${ctx.from.id}\n${License}`)
      ctx.reply("Por favor digite /start pra inicializar de novo 😊")  
    }
  }, 2000);
  }));
 // ! [ [ ✅ ] ALCAPA PRO [ SUPPORT | LICENÇA ]  [ OBTER ] ] 
 bot.action("OBTER",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ SUPPORT | LICENÇA  [ OBTER ] ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Estamos preparando um representante da nossa empresa para atender você. @Fehoffciall 🧑‍🎓\nPor favor digite /start pra inicializar de novo 😊")
  }));
 // ! [ [ ✅ ] ALCAPA PRO [ REPORT ]  [ MENU ] ] 
 bot.action("REPORTAR",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [ REPORTAR | MENU ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Estamos preparando um desenvolvedor da nossa empresa para atender você. @Fehoffciall 🧑‍🎓\nPor favor digite /start pra inicializar de novo 😊")
  }));

 // ! [ [ ✅ ] ALCAPA PRO [ ALCAPA PRO ]  [ MENU ] ] 
  bot.action("ALCAPA",(async (ctx) => {
    console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [   ALCAPA PRO [ MENU ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
    ctx.reply("Estaremos verificando sua licença. ⏳")
    let CheckPRO = KeyCheckPRO(ctx.chat.id,ctx.chat.username)
    setTimeout(() => {
      if(CheckPRO==true){
        CreateCloud(ctx.chat.id,ctx.chat.username)
        ctx.reply(`😊 Seja Bem Vindo ${ctx.chat.first_name} ${ctx.chat.last_name},\n Autentificação com Sucesso. ✅`,{reply_markup:{
          inline_keyboard:[
            [{text:"RELATÓRIOS 📊 ", callback_data:"RELATÓRIOS"}],
            [{text:"STOP LOSS 📈 e STOP GAIN 📉", callback_data:"STOP"}],
            [{text:"PORCENTAGEM 🧮", callback_data:"PORCENTAGEM"}],
            [{text:"NEWS MERCADO FINANCEIRO 📰", callback_data:"FINANCE"}],
            [{text:"TODOS OS RELATÓRIOS 📊", callback_data:"ALL"}]
          ]
        }
      })
      }else{
        console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
        ctx.reply("Nenhuma licença encontrada. ❌\nEstamos preparando um suporte da nossa empresa para atender você. @Fehoffciall 🧑‍🎓\nPor favor digite /start pra inicializar de novo 😊")
      }
    }, 2000);
  }));
 // ! [ [ ✅ ] ALCAPA PRO [ ALCAPA PRO | MENU [ FINANCE ] ] ] 
 bot.action("FINANCE",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Que tipos de notícias você gostaria?",{reply_markup:{
    inline_keyboard:[
      [{text:"AÇÕES 🪙 ", callback_data:"AÇÕES"},{text:"CRYPTO 🟡", callback_data:"CRYPTO"}],
      [{text:"FOREX 🏦", callback_data:"FOREX"},{text:"ÍNDICES 💎", callback_data:"ÍNDICES"}],
      [{text:"ECONOMIA MUNDIAL ⚖️", callback_data:"MUNDIAL"}]
    ]
  }
})
}));
bot.action("AÇÕES",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Estamos preparando as news do mercado de ações. ⏳")
  setTimeout(() => {
    NewsStocks("Text").then((text) => {
      let texts = text[0]
      for (let i = 0; i < texts.length; i++) {
        ctx.reply(texts[i])}
    })
    setTimeout(() => {
      ctx.reply("Qual é situação do mercado?",{reply_markup:{
        inline_keyboard:[
          [{text:"BULL MARKET 🟢 ", callback_data:"BULL"},{text:"BEAR MARKET 🔴", callback_data:"BEAR"}],
          [{text:"MAIS NOTÍCIAS 📰", callback_data:"NOTÍCIAS"}]
        ]
      }
    })
    }, 12000);
  }, 2000);
}));
bot.action("FOREX",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Estamos preparando as news do mercado de forex. ⏳")
  setTimeout(() => {
    NewsForex("Text").then((text) => {
      let texts = text[0]
      for (let i = 0; i < texts.length; i++) {
        ctx.reply(texts[i])}
    })
    setTimeout(() => {
      ctx.reply("Qual é situação do mercado?",{reply_markup:{
        inline_keyboard:[
          [{text:"BULL MARKET 🟢 ", callback_data:"BULL"},{text:"BEAR MARKET 🔴", callback_data:"BEAR"}],
          [{text:"MAIS NOTÍCIAS 📰", callback_data:"NOTÍCIAS"}]
        ]
      }
    })
    }, 12000);
  }, 2000);
}));
bot.action("CRYPTO",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Estamos preparando as news do mercado de crypto. ⏳")
  setTimeout(() => {
    NewsCrypto("Text").then((text) => {
      let texts = text[0]
      for (let i = 0; i < texts.length; i++) {
        ctx.reply(texts[i])}
    })
    setTimeout(() => {
      ctx.reply("Qual é situação do mercado?",{reply_markup:{
        inline_keyboard:[
          [{text:"BULL MARKET 🟢 ", callback_data:"BULL"},{text:"BEAR MARKET 🔴", callback_data:"BEAR"}],
          [{text:"MAIS NOTÍCIAS 📰", callback_data:"NOTÍCIAS"}]
        ]
      }
    })
    }, 12000);
  }, 2000);
}));
bot.action("ÍNDICES",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Estamos preparando as news do mercado de índices. ⏳")
  setTimeout(() => {
    NewsIndices("Text").then((text) => {
      let texts = text[0]
      for (let i = 0; i < texts.length; i++) {
        ctx.reply(texts[i])}
    })
    setTimeout(() => {
      ctx.reply("Qual é situação do mercado?",{reply_markup:{
        inline_keyboard:[
          [{text:"BULL MARKET 🟢 ", callback_data:"BULL"},{text:"BEAR MARKET 🔴", callback_data:"BEAR"}],
          [{text:"MAIS NOTÍCIAS 📰", callback_data:"NOTÍCIAS"}]
        ]
      }
    })
    }, 12000);
  }, 2000);
}));
bot.action("MUNDIAL",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Estamos preparando as news do mercado de economia mundial. ⏳")
  setTimeout(() => {
    NewsEconomy("Text").then((text) => {
      let texts = text[0]
      for (let i = 0; i < texts.length; i++) {
        ctx.reply(texts[i])}
    })
    setTimeout(() => {
      ctx.reply("Qual é situação do mercado?",{reply_markup:{
        inline_keyboard:[
          [{text:"BULL MARKET 🟢 ", callback_data:"BULL"},{text:"BEAR MARKET 🔴", callback_data:"BEAR"}],
          [{text:"MAIS NOTÍCIAS 📰", callback_data:"NOTIMUNDIAL"}]
        ]
      }
    })
    }, 15000);
  }, 2000);
}));
bot.action("BULL",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Portanto, a tendência do mercado no momento é de alta no momento 🟢. Obrigado pelo seu feedback. 😊 ")
  setTimeout(() => {
    ctx.reply("Por favor digite /start pra inicializar de novo.")    
  }, 2000);
}));
bot.action("BEAR",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Portanto, a tendência do mercado no momento é de baixa no momento 🔴. Obrigado pelo seu feedback. 😊 ")
  setTimeout(() => {
    ctx.reply("Por favor digite /start pra inicializar de novo.")    
  }, 2000);
}));
bot.action("NOTÍCIAS",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("⚠️ Apenas notificá-lo desta notícia é da economia mundial. ⚖️")
  setTimeout(() => {  
    NewsAll("Text").then(res => {
      let texts = res[0]
      for (let i = 0; i < texts.length; i++) {
        ctx.reply(texts[i])}
    })
    setTimeout(() => {
      ctx.reply("Por favor digite /start pra inicializar de novo.")    
    }, 12000);
},2000)
}));
bot.action("NOTIMUNDIAL",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | FINANCE ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("⚠️ Apenas notificá-lo desta notícia é do mercado de ações. ⚖️")
  setTimeout(() => {  
    NewsStocks("Text").then(res => {
      let texts = res[0]
      for (let i = 0; i < texts.length; i++) {
        ctx.reply(texts[i])}
    })
    setTimeout(() => {
      ctx.reply("Por favor digite /start pra inicializar de novo.")    
    }, 12000);
},2000)
}));
// ! PRO [ RELATÓRIOS ]
bot.action("RELATÓRIOS",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | RELATÓRIOS ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Qual tipos de relatório você gostaria?",{reply_markup:{
    inline_keyboard:[
      [{text:"AÇÕES 🪙 ", callback_data:"RELATÓRIOS_AÇÕES"},{text:"CRYPTO 🟡", callback_data:"RELATÓRIOS_CRYPTO"}],
      [{text:"FOREX 🏦", callback_data:"RELATÓRIOS_FOREX"},{text:"ÍNDICES 💎", callback_data:"RELATÓRIOS_ÍNDICES"}],
    ]
  }
})
}));
bot.action("RELATÓRIOS_AÇÕES",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | RELATÓRIOS | AÇÕES ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  ctx.reply("Qual tipos de relatório você gostaria?",{reply_markup:{
    inline_keyboard:[
      [{text:"VISÃO GERAL 🗃️", callback_data:"OVERVIEW_AÇÕES"},{text:"DECLARAÇÕES 🧮", callback_data:"STATEMENTS_AÇÕES"}],
      [{text:"ESTATISTICAS 📊", callback_data:"STATISTICS_AÇÕES"},{text:"DIVIDENDOS 💹", callback_data:"DIVIDENDS_AÇÕES"}],
      [{text:"GANHOS 💱", callback_data:"EARNINGS_AÇÕES"},{text:"RECEITA 🏦", callback_data:"REVENUE_AÇÕES"}],
    ]
  }
})
}));
bot.action("OVERVIEW_AÇÕES",(async (ctx) => {
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ctx.chat.id} | USER: ${ctx.chat.username}] ] ✅ [  ALCAPA PRO [ MENU | RELATÓRIOS | AÇÕES ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);  
  let TextBool = true;
  ctx.reply("Qual é tipo da ação?")
  bot.on('text', (ctx) => {
    if(TextBool){
      
      let FinanceOverview = StocksOverview(ctx.message.text,ctx.chat.id,ctx.chat.username).then(res => {
        if(res.length==2){
        ctx.reply(`${res[0][0]}: ${res[0][1]}\n${res[0][2]}: ${res[0][3]}\n${res[0][4]}:  ${res[0][5]}\n${res[0][6]}: ${res[0][7]}\n${res[0][8]}: ${res[0][9]}\n${res[0][10]}: ${res[0][11]}\n${res[0][12]}: ${res[0][13]}`)
        TextBool = false;
      }else if (res.length==1){
          ctx.reply(res[0])
          TextBool = false;
        }
      })
      }
  })
}));
  bot.startPolling();
}
AlcapaAiPro();