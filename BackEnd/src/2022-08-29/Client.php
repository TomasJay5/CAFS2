<?php

    $url = 'https://randomuser.me/api/?results=1';

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $data = curl_exec($ch);

    curl_close($ch);

    $server_url = 'http://nginx/2022-08-29/Server.php';

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $server_url);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    $info = curl_exec($ch);

    curl_close($ch);