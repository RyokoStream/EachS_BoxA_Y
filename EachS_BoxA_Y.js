<!DOCTYPE html>
<html>
<head>
    <title>被験者による仮想サイコロ</title>
</head>
<body>
    <button onclick="rollUniformVirtualDice()">サイコロを振る</button>

    <div id="subjectResults"></div>

    <script>
        var subjects = [];

        function rollUniformVirtualDice() {
            var min = 0;
            var max = 1000;
            var uniformVirtualDiceResult = Math.floor(Math.random() * (max - min + 1)) + min;
            var subject = {
                id: subjects.length + 1,
                result: uniformVirtualDiceResult
            };
            subjects.push(subject);
            updateSubjectResults();
        }

        function updateSubjectResults() {
            var subjectResultsDiv = document.getElementById('subjectResults');
            subjectResultsDiv.innerHTML = '';

            for (var i = 0; i < subjects.length; i++) {
                var subject = subjects[i];
                var subjectDiv = document.createElement('div');
                subjectDiv.innerHTML = `被験者 ${subject.id}: ${subject.result}`;
                subjectResultsDiv.appendChild(subjectDiv);
            }
        }
    </script>
</body>
</html>
