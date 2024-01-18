<!DOCTYPE html>
<html>
<head>
    <title>被験者による仮想サイコロ</title>
</head>
<body>
    <button onclick="rollAndStoreResult()">サイコロを振る</button>
    <button onclick="downloadCSV()">CSVに保存</button>

    <div id="subjectResults"></div>

    <script>
        var subjects = [];
        var boxA = [];
        var boxB = [];
        var boxC = [];

        function updateSubjectResults() {
            var subjectResultsDiv = document.getElementById('subjectResults');
            subjectResultsDiv.innerHTML = '';

            for (var i = 0; i < subjects.length; i++) {
                var subject = subjects[i];
                var subjectDiv = document.createElement('div');
                subjectDiv.innerHTML = `被験者 ${subject.id}: BoxA=${subject.boxA}, BoxB=${subject.boxB}, BoxC=${subject.boxC}`;
                subjectResultsDiv.appendChild(subjectDiv);
            }
        }

        function downloadCSV() {
            var csvContent = 'ID,BoxA,BoxB,BoxC\n';
            subjects.forEach(function (subject) {
                var row = `${subject.id},${subject.boxA},${subject.boxB},${subject.boxC}\n`;
                csvContent += row;
            });

            var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            var link = document.createElement('a');
            if (link.download !== undefined) {
                var url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', 'subject_results.csv');
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
        var subjects = [];
        var boxA = [];
        var boxB = [];
        var boxC = [];
function rollAndStoreResult() {
    var min = 0;
    var max = 1000;
    
    // 3つのランダムな数字を生成
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num3 = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // 3つの数字の平均を計算
    var average = (num1 + num2 + num3) / 3;
    
    // 平均値が指定範囲に収まるように調整
    while (average < 400 || average > 600) {
        // どの数値を変更するかランダムに決定
        var randomIndex = Math.floor(Math.random() * 3);
        
        // 選択された数値を再生成
        if (randomIndex === 0) {
            num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        } else if (randomIndex === 1) {
            num2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
            num3 = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        // 平均値を再計算
        average = (num1 + num2 + num3) / 3;
    }

    var subject = {
        id: subjects.length + 1,
        boxA: num1,
        boxB: num2,
        boxC: num3
    };

    boxA.push(subject.boxA);
    boxB.push(subject.boxB);
    boxC.push(subject.boxC);
    subjects.push(subject);

    // 更新された結果を表示またはCSVに格納
    updateSubjectResults();
}
   </script>
</body>
</html>