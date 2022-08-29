<?php

if (isset($_POST)) {
    $data = 'https://randomuser.me/api/?results=1';

    $ch = curl_init($data);

    $fp = fopen('./Client_data/clientdata.json', 'w');

    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);

    curl_exec($ch);
}
