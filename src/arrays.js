/*jshint esversion: 9 */
/*jshint -W018 */
/*jshint -W069 */
/*jshint -W083 */
/*jshint -W088 */
/*jshint -W038 */

/*
 *
 * Copyright (c) 2023 Melvin Jones Repol (mrepol742.github.io). All Rights Reserved.
 *
 * License under the Mrepol742 License, version 1.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://github.com/mrepol742/Mrepol742-the-License
 *
 * Unless required by the applicable law or agreed in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let sup = ["I'm tired", "Not much, you?", "Meh...", "I'm great, how about you?", "What's up with you?", "Nothing much, you?"];
let hey = ["Sup", "Hey :D", "hey", "yup?", "yes?", "How are you?", "How you doing?", "wassup", "whats new?", "how can i help you?", "hello", "hi", "hellooooo", "hiiiiii"];
let heyMelbin = ["Sup!!", "hey you!", "why!", "no?", "How are you!", "How you doing!", "wassup!", "whats new!", "how can i suss you!", "hello!!", "hi!!", "hellooooo...", "hiiiiii...."];
let heySim = ["Sup uhhhh", "heyyyyyyy", "yes i like that.", "Ho-w ar-e yo-u?", "Ughhh how you doinggg?", "wassup but i like wassdown..", "whats new or whats that uhg", "how can i _**;' you?", "hello", "hi", "hellooooo", "hiiiiii"];
let unsendMessage = ["blewww", "got you", "says:", "send this a while ago:", "deleted this:", "unsend this message:", "unsend this a second ago:", "removed this message:"];
let funD = ["🤣🤣🤣", "🤣", "😆😆", "😂😂🤣🤣", "😆😆🤣", "😂😆", "😆", "ahahaahh", "hahahahhah", "haahaaa", "ahhaa😂", "hhahahah😆", "🤣🤣hahaahhaha", "hahaa😆🤣", "hahahah funny."];
let happyEE = ["haha", "ahah", "ahha", "funny ", "insane ", "lol", "lmao", "lmfao", "silly ", "laugh ", "hilarious", "absurd", "ridicolous"];
let sadEE = ["pain", "painful", "cry ", "crying ", "sad ", "tired", "sick ", "depressed", "miserable ", "heartbroken", "sorry", "traumatic", "truma", "pitiful", "depressing", "depress", "unfortunate", "awful"];
let loveEE = ["love", "thank", "delight", "pleasure", "regards", "respect", "dear", "darling", "boyfriend", "girlfriend", "sweetheart", "angel", "honey", "adore", "treasure", "devotion", "friend"];
let sizesM = ["Bytes", "KB", "MB", "GB", "TB"];
let sendEffects = ["(sent with gift wrap effect)", "(sent with fire effect)", "(sent with celebration effect)", "(sent with love effect)"];
let example = ["For instance:", "For example:", "Like:", "Suppose that:", "e.g:", "In particular:", "To give you an idea:", "Let's say:", "Example:"];
let gcolor = {
    defaultblue: "196241301102133",
    hotpink: "169463077092846",
    aquablue: "2442142322678320",
    brightpurple: "234137870477637",
    coralpink: "980963458735625",
    orange: "175615189761153",
    green: "2136751179887052",
    lavenderpurple: "2058653964378557",
    red: "2129984390566328",
    yellow: "174636906462322",
    tealblue: "1928399724138152",
    aqua: "417639218648241",
    mango: "930060997172551",
    berry: "164535220883264",
    citrus: "370940413392601",
    candy: "205488546921017",
};
let domains = [
    ".aaa",
    ".abb",
    ".abc",
    ".ac",
    ".aco",
    ".ad",
    ".ads",
    ".ae",
    ".aeg",
    ".af",
    ".afl",
    ".ag",
    ".ai",
    ".aig",
    ".al",
    ".am",
    ".anz",
    ".ao",
    ".aol",
    ".app",
    ".aq",
    ".ar",
    ".art",
    ".as",
    ".at",
    ".au",
    ".aw",
    ".aws",
    ".ax",
    ".axa",
    ".az",
    ".ba",
    ".bar",
    ".bb",
    ".bbc",
    ".bbt",
    ".bcg",
    ".bcn",
    ".bd",
    ".be",
    ".bet",
    ".bf",
    ".bg",
    ".bh",
    ".bi",
    ".bid",
    ".bio",
    ".biz",
    ".bj",
    ".bm",
    ".bms",
    ".bmw",
    ".bn",
    ".bo",
    ".bom",
    ".boo",
    ".bot",
    ".box",
    ".br",
    ".bs",
    ".bt",
    ".buy",
    ".bv",
    ".bw",
    ".by",
    ".bz",
    ".bzh",
    ".ca",
    ".cab",
    ".cal",
    ".cam",
    ".car",
    ".cat",
    ".cba",
    ".cbn",
    ".cbs",
    ".cc",
    ".cd",
    ".ceb",
    ".ceo",
    ".cf",
    ".cfa",
    ".cfd",
    ".cg",
    ".ch",
    ".ci",
    ".ck",
    ".cl",
    ".cm",
    ".cn",
    ".co",
    ".com",
    ".cpa",
    ".cr",
    ".crs",
    ".csc",
    ".cu",
    ".cv",
    ".cw",
    ".cx",
    ".cy",
    ".cz",
    ".dad",
    ".day",
    ".dds",
    ".de",
    ".dev",
    ".dhl",
    ".diy",
    ".dj",
    ".dk",
    ".dm",
    ".dnp",
    ".do",
    ".dog",
    ".dot",
    ".dtv",
    ".dvr",
    ".dz",
    ".eat",
    ".ec",
    ".eco",
    ".edu",
    ".ee",
    ".eg",
    ".er",
    ".es",
    ".esq",
    ".et",
    ".eu",
    ".eus",
    ".fan",
    ".fi",
    ".fit",
    ".fj",
    ".fk",
    ".fly",
    ".fm",
    ".fo",
    ".foo",
    ".fox",
    ".fr",
    ".frl",
    ".ftr",
    ".fun",
    ".fyi",
    ".ga",
    ".gal",
    ".gap",
    ".gay",
    ".gb",
    ".gd",
    ".gdn",
    ".ge",
    ".gea",
    ".gf",
    ".gg",
    ".gh",
    ".gi",
    ".gl",
    ".gle",
    ".gm",
    ".gmo",
    ".gmx",
    ".gn",
    ".goo",
    ".gop",
    ".got",
    ".gov",
    ".gp",
    ".gq",
    ".gr",
    ".gs",
    ".gt",
    ".gu",
    ".gw",
    ".gy",
    ".hbo",
    ".hiv",
    ".hk",
    ".hkt",
    ".hm",
    ".hn",
    ".hot",
    ".how",
    ".hr",
    ".ht",
    ".hu",
    ".ibm",
    ".ice",
    ".icu",
    ".id",
    ".ie",
    ".ifm",
    ".il",
    ".im",
    ".in",
    ".inc",
    ".ing",
    ".ink",
    ".int",
    ".io",
    ".iq",
    ".ir",
    ".is",
    ".ist",
    ".it",
    ".itv",
    ".jcb",
    ".jcp",
    ".je",
    ".jio",
    ".jll",
    ".jm",
    ".jmp",
    ".jnj",
    ".jo",
    ".jot",
    ".joy",
    ".jp",
    ".ke",
    ".kfh",
    ".kg",
    ".kh",
    ".ki",
    ".kia",
    ".kim",
    ".km",
    ".kn",
    ".kp",
    ".kpn",
    ".kr",
    ".krd",
    ".kw",
    ".ky",
    ".kz",
    ".la",
    ".lat",
    ".law",
    ".lb",
    ".lc",
    ".lds",
    ".li",
    ".lk",
    ".llc",
    ".llp",
    ".lol",
    ".lpl",
    ".lr",
    ".ls",
    ".lt",
    ".ltd",
    ".lu",
    ".lv",
    ".ly",
    ".ma",
    ".man",
    ".map",
    ".mba",
    ".mc",
    ".md",
    ".me",
    ".med",
    ".men",
    ".mg",
    ".mh",
    ".mil",
    ".mit",
    ".mk",
    ".ml",
    ".mlb",
    ".mls",
    ".mm",
    ".mma",
    ".mn",
    ".mo",
    ".moe",
    ".moi",
    ".mom",
    ".mov",
    ".mp",
    ".mq",
    ".mr",
    ".ms",
    ".msd",
    ".mt",
    ".mtn",
    ".mtr",
    ".mu",
    ".mv",
    ".mw",
    ".mx",
    ".my",
    ".mz",
    ".na",
    ".nab",
    ".nba",
    ".nc",
    ".ne",
    ".nec",
    ".net",
    ".new",
    ".nf",
    ".nfl",
    ".ng",
    ".ngo",
    ".nhk",
    ".ni",
    ".nl",
    ".no",
    ".now",
    ".np",
    ".nr",
    ".nra",
    ".nrw",
    ".ntt",
    ".nu",
    ".nyc",
    ".nz",
    ".obi",
    ".off",
    ".om",
    ".one",
    ".ong",
    ".onl",
    ".ooo",
    ".org",
    ".ott",
    ".ovh",
    ".pa",
    ".pay",
    ".pe",
    ".pet",
    ".pf",
    ".pg",
    ".ph",
    ".phd",
    ".pid",
    ".pin",
    ".pk",
    ".pl",
    ".pm",
    ".pn",
    ".pnc",
    ".pr",
    ".pro",
    ".pru",
    ".ps",
    ".pt",
    ".pub",
    ".pw",
    ".pwc",
    ".py",
    ".qa",
    ".qvc",
    ".re",
    ".red",
    ".ren",
    ".ril",
    ".rio",
    ".rip",
    ".ro",
    ".rs",
    ".ru",
    ".run",
    ".rw",
    ".rwe",
    ".sa",
    ".sap",
    ".sas",
    ".sb",
    ".sbi",
    ".sbs",
    ".sc",
    ".sca",
    ".scb",
    ".sd",
    ".se",
    ".ses",
    ".sew",
    ".sex",
    ".sfr",
    ".sg",
    ".sh",
    ".si",
    ".sj",
    ".sk",
    ".ski",
    ".sky",
    ".sl",
    ".sm",
    ".sn",
    ".so",
    ".soy",
    ".sr",
    ".srl",
    ".ss",
    ".st",
    ".stc",
    ".su",
    ".sv",
    ".sx",
    ".sy",
    ".sz",
    ".tab",
    ".tax",
    ".tc",
    ".tci",
    ".td",
    ".tdk",
    ".tel",
    ".tf",
    ".tg",
    ".th",
    ".thd",
    ".tj",
    ".tjx",
    ".tk",
    ".tl",
    ".tm",
    ".tn",
    ".to",
    ".top",
    ".tr",
    ".trv",
    ".tt",
    ".tui",
    ".tv",
    ".tvs",
    ".tw",
    ".tz",
    ".ua",
    ".ubs",
    ".ug",
    ".uk",
    ".uno",
    ".uol",
    ".ups",
    ".us",
    ".uy",
    ".uz",
    ".va",
    ".vc",
    ".ve",
    ".vet",
    ".vg",
    ".vi",
    ".vig",
    ".vin",
    ".vip",
    ".vn",
    ".vu",
    ".wed",
    ".wf",
    ".win",
    ".wme",
    ".wow",
    ".ws",
    ".wtc",
    ".wtf",
    ".xin",
    ".xxx",
    ".xyz",
    ".ye",
    ".you",
    ".yt",
    ".yun",
    ".za",
    ".zip",
    ".zm",
    ".zw",
];

module.exports = {
    sup: sup,
    hey: hey,
    unsendMessage: unsendMessage,
    funD: funD,
    happyEE: happyEE,
    sadEE: sadEE,
    loveEE: loveEE,
    sizesM: sizesM,
    sendEffects: sendEffects,
    gcolor: gcolor,
    example: example,
    heyMelbin: heyMelbin,
    heySim: heySim,
    domains: domains,
};
