<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iPhone 14 Pro UI</title>
    <style>
        /* スタイルを追加する場合、ここに追加してください */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        .button {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <button class="button" onclick="displayText('@検索')">検索</button>
    <button class="button" onclick="displayText('@予約')">予約</button>
    <button class="button" onclick="displayText('@確認')">確認</button>

    <div id="result"></div>

    <script>
        function displayText(text) {
            document.getElementById("result").textContent = text;
        }
    </script>
</body>
</html>
