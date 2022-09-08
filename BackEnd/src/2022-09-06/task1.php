<?php

// Sukukite ArrayHelper klasę su 2 statiniais metodais, kurie galetų apskaičiuoti duoto masyvo sumą arba vidurkį. Panaudokite vieną statinį metodą kitame.

$arr = [2, 4, 6, 8, 10];

class ArrayHelper
{
    public static function sum(array $arr)
    {
        return array_sum($arr);
    }
    public static function avg(array $arr)
    {
        return self::sum($arr) / count($arr);
    }
}

var_dump(ArrayHelper::sum($arr));
var_dump(ArrayHelper::avg($arr));
