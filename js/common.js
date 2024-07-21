function janken() {
    // プレイヤーの手(ラジオボタンから取得)
    let player = 0;
    let radios = document.getElementsByName('te');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            player = parseInt(radios[i].value); // 文字列から数値に変換
            break;
        }
    }

    // コンピュータの手(0〜2のランダム値)
    let computer = Math.floor(Math.random() * 3);
    let cpuimg = document.getElementById('cpuimg');
    
    // コンピュータの手の画像を表示
    if (computer === 0) {
        cpuimg.src = 'guu.jpeg';
    } else if (computer === 1) {
        cpuimg.src = 'choki.jpeg';
    } else if (computer === 2) {
        cpuimg.src = 'paa.jpeg';
    }

    // 勝敗判定
    let result = (player - computer + 3) % 3;

    // 表示
    let display = document.getElementById('result');
    if (result === 0) {
        display.innerHTML = 'あいこ！';
    } else if (result === 1) {
        display.innerHTML = '負け！';
    } else if (result === 2) {
        display.innerHTML = '勝ち!';
    }
}
