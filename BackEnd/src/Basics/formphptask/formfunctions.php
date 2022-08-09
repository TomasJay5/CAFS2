<?php

require 'formdata.php';

function cities($arr)
{
    $a = '';
    for ($i = 0; $i < count($arr); $i++) {
        $value = strtolower($arr[$i]);
        $name = ucfirst($arr[$i]);
        $a .= "<option value=\"{$value}\">{$name}</option>";
    }
    return $a;
}


function checkbox($inputName, $arr, $checkboxPosition)
{

    $a = '';
    for ($i = 0; $i < count($arr); $i++) {
        $value = strtolower($arr[$i]);
        $label = "<label for=\"{$value}\"> {$arr[$i]} </label>";
        $input = "<input type=\"checkbox\" name=\"{$inputName}[]\" id=\"{$value}\" value=\"{$arr[$i]}\">";
        if ($checkboxPosition == 0) {
            $a .= $input . $label . "<br>";
        } else {
            $a .= $label . $input . "<br>";
        }
    }
    return $a;
}

function generateRandomString($length = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }

    return $randomString;
}


function uploadFile($file)
{
    $dirUploads = '/uploads';
    define('UPLOAD_DIR', dirname(__FILE__) . '/uploads');
    define('ALLOWED_EXTENSIONS', ['png', 'jpg', 'jpeg']);
    $a = date('Y/m/d');

    if ($file['error'] == UPLOAD_ERR_OK) {
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $ext = strtolower($ext);

        if (!in_array($ext, ALLOWED_EXTENSIONS)) {
            echo 'File ext not allowed';

            exit;
        }

        $path = UPLOAD_DIR . '/' . date('Y/m/d');

        if (!is_dir($path)) {
            mkdir($path, 0777, TRUE);
        }

        do {
            $name = generateRandomString(16);

            $path = sprintf('%s/%s.%s', $path, $name, $ext);
        } while (file_exists($path));

        move_uploaded_file($file['tmp_name'], $path);
        $a = "<br><img src=\".{$dirUploads}/{$a}/{$name}.{$ext}\">";
    }
    return $a;
}
