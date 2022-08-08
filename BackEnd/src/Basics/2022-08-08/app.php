<?php

if (isset($_POST)) {
    $value = isset($_POST['languageCode']) ? $_POST['languageCode'] : '';
    if (!$value) {
        //https://stackoverflow.com/questions/8814472/how-to-make-an-html-back-link
        echo "Need to select at least one coding language! <br><a href='javascript:history.back()'>Go Back</a>";
    } else {
        $message = "%s %s užsiregistravo į %s kursus!<br>Miestas: %s<br>Papildoma informacija: %s";
        $txt = sprintf($message, $_POST['firstName'], $_POST['lastName'], implode(' ', $_POST['languageCode']), ucfirst($_POST['city']), $_POST['additionalinfo']);
        echo $txt;
    }
}
