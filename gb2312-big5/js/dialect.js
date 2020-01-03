const C2M = {
    "佢": "TA",
    "钟意": "喜欢",
    "返工": "回去上班",
    "係": "是",
    "咩係": "什么是",
    "唔": "不",
    "咩": "啥",
    "咪": "不要",
    "妈咪": "妈妈",
    "点解": "为什么",
    "衫": "衣服",
    "咁": "这么",
    "仲": "还",
    "俾": "给",
    "搞掂": "完成",
    "掂": "好",
    "边": "哪里",
    "呃": "骗",
    "靓": "漂亮",
    "乜": "什么",
    "嘅": "的",
    "嬲": "生气",
    "系": "是",
    "哋": "们",
    "睇": "看",
    "冧": "陶醉",
    "冇": "没有",
    "惗": "想",
    "嘎": "吗",
    "嚟": "来",
    "叻": "棒",
    "喱": "那",
    "梗": "当然",
    "喺": "在",
    "抦": "殴打",
    "啵": "呢",
    "嘈": "吵",
    "噏": "唠叨",
    "掟": "扔",
    "嘞": "啊",
    "囖": "喽",
    "揾": "找",
    "嗮": "浪费",
    "嘥": "浪费",
    "咗": "了",
    "疴": "拉",
    "拗": "矛盾",
    "乸": "雌性",
    "撩": "挑",
    "拎": "拿",
    "啖": "口",
    "憇": "哄",
    "唓": "啧",
    "嘢": "东西",
    "瞓": "睡觉"
};

function swap(json){
    var ret = {};
    for (var key in json){
        ret[json[key]] = key;
    }
    return ret;
}

const _M2C1 = {
    "他": "佢",
    "她": "佢",
    "它": "佢",
    "什么": "咩"
};

const M2C = {
    ..._M2C1, 
    ...swap(C2M)
};

const M2C_keys = Object.keys(M2C);
const C2M_keys = Object.keys(C2M);


M2C_keys.sort(function(a, b){
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length;
});

C2M_keys.sort(function(a, b){
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length;
});