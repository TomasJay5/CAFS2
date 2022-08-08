<?php

require('formdata.php');

function citiesFunction($arr)
{
    $a = '';
    for ($i = 0; $i < count($arr); $i++) {
        $value = strtolower($arr[$i]);
        $name = ucfirst($arr[$i]);
        $a .= "<option value='{$value}'>{$name}</option>";
    }
    return $a;
}


function checkboxFunction($inputName, $arr, $checkboxPosition)
{

    $a = '';
    for ($i = 0; $i < count($arr); $i++) {
        $value = strtolower($arr[$i]);
        $label = "<label for='{$value}'> {$arr[$i]} </label>";
        $input = "<input type='checkbox' name='{$inputName}[]' id='{$value}' value='{$arr[$i]}'>";
        if ($checkboxPosition == 0) {
            $a .= $input . $label . "<br>";
        } else {
            $a .= $label . $input . "<br>";
        }
    }
    return $a;
}
