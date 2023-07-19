const {TranslationMessage} = require("./translation/TranslationMessage.js");
const {KeyCheck,KeyCheckPRO,KeyCheckCloud} = require("./asset/key/KeyCheck.js");
const {NewsAll,NewsStocks,NewsCrypto,NewsForex,NewsIndices,NewsFutures,NewsEconomy} = require("./asset/tools/News.js");
const {CreateCloud} = require("./asset/tools/CloudAlcapa.js");
const {StocksOverview,ValueStocks} = require(`./asset/tools/StocksInfo.js`)
module.exports = {StocksOverview,KeyCheck,TranslationMessage,KeyCheckPRO,NewsAll,NewsStocks,NewsCrypto,NewsForex,NewsIndices,NewsFutures,CreateCloud,NewsEconomy}