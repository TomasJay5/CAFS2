<?php
require 'formfunctions.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>formtaskphp</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="verticalLine">
        <form action="app.php" method="POST" enctype="multipart/form-data">
            <h1>Registracija į kursus</h1>
            <hr>
            <p>Vardas: <input type="text" name="firstName" value="" required></p>
            <p>Pavarde: <input type="text" name="lastName" value="" required></p>
            <p>Miestas:
                <select name="city" required>
                    <option value=""></option>
                    <?php echo cities($cities); ?>
                </select>
            </p>

            <h3>Programavimo kalba: </h3>
            <p>

                <?php echo checkbox('languageCode', $codingLanguages, 0); ?>
            </p>

            <h3>Papildoma informacija: </h3>
            <p><textarea name="additionalinfo" cols="55" rows="5" placeholder="Pvz. : turite C++ programavimo patirties"></textarea></p>
            <p><input type="file" name="some-file-name" require> </p>
            <p><button>Siųsti</button></p>
        </form>
    </div>
</body>

</html>