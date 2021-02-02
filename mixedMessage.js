//init 3 arrays to choose random words from
const arr1=['Your hair','Your face','Your smile','Your eyes','Your spirit','Your mind','Your passion','Your soul'];
const arr2=['dances like','glints like','lights up','moves','inspires','fascinates','ignites','touches'];
const arr3=['the moon against a dark sky','a candle in the breeze','deeper than the oceans','even the hightest mountains','my heart','the immeasurable wonders of the cosmos','the dreams of others','love itself'];


function generateMessage(){
    var v1 = Math.floor(Math.random()*8);
    var v2 = Math.floor(Math.random()*8);
    var v3 = Math.floor(Math.random()*8);
    const string = `${arr1[v1]} ${arr2[v2]} ${arr3[v3]}`
    return string;  
}
//console.log(generateMessage());
