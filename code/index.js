const {TranslationMessage} = require("./translation/TranslationMessage.js");
const {KeyCheck,KeyCheckPRO} = require("./asset/key/KeyCheck.js");
const {NewsAll,NewsStocks,NewsCrypto,NewsForex,NewsIndices,NewsFutures,NewsEconomy} = require("./asset/tools/News.js");
const {CreateCloud} = require("./asset/tools/CloudAlcapa.js");
module.exports = {KeyCheck,TranslationMessage,KeyCheckPRO,NewsAll,NewsStocks,NewsCrypto,NewsForex,NewsIndices,NewsFutures,CreateCloud,NewsEconomy}