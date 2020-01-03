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
    "点解": "为什么"
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