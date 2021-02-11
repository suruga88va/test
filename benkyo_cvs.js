
function sample()
{
    //描画コンテキストの取得
    var canvas = document.getElementById('sample1');

    if (canvas.getContext)
    {
        var context = canvas.getContext('2d');

        //左から20上から40の位置に、幅50高さ100の四角形を描く
        context.fillRect(20,40,50,100); 

        //色を指定する
        context.strokeStyle = 'rgb(00,00,255)'; //枠線の色は青
        context.fillStyle = 'rgb(255,00,00)'; //塗りつぶしの色は赤

        //左から200上から80の位置に、幅100高さ50の四角の枠線を描く
        context.strokeRect(200,80,100,50);

         //左から150上から75の位置に、半径60の半円を反時計回り（左回り）で描く
        context.arc(150,75,60,Math.PI*1,Math.PI*2,true);
        context.fill();
    } 
}

function DRW()
{
	var CVS = document.getElementById("CVS");
	var CNT = CVS.getContext("2d");
	CNT.fillStyle = "rgb(255,0,0)";	// 赤
	CNT.fillRect(0,0,180,180);	// 塗りつぶし
	CNT.fillStyle = "rgb(0,0,0)";	// 黒
	CNT.font = "bold 22px 'MS Pゴシック'";
	CNT.fillText("こんにちはCanvas",10,25,200);
}
			
function RST()
{
	var CVS = document.getElementById("CVS");
	var CNT = CVS.getContext("2d");
	CNT.clearRect(0,0,200,200);	// 消去
}

