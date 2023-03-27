let hiragana = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"];

let mopemope = document.getElementById("mopemope");

function updateText() {
	let hiragana_1 = hiragana[Math.floor(Math.random() * hiragana.length)];
	let hiragana_2 = hiragana[Math.floor(Math.random() * hiragana.length)];

	mopemope.textContent = hiragana_1 + hiragana_2 + hiragana_1 + hiragana_2;
	tweetlink.href = `https://twitter.com/intent/tweet?text=『${mopemope.textContent}』&hashtags=もぺもぺジェネレータ&url=https://yanknvim.github.io/mopemope_generator/`;

}

