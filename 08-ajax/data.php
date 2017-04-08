<?php
date_default_timezone_set ('America/Lima');

$airline = ['Avianca', 'Taca', 'Spirit', 'American'];
$data    = [];

for($i = 1; $i <= 10; $i++) {
    $start = new DateTime();
    $start->add(new DateInterval('PT' . ($i-1) . 'M'));

    $end   = new DateTime();
    $end->add(new DateInterval('PT' . $i . 'M'));

    $data[] = [
        'number'  => str_pad($i, 4, '0', STR_PAD_LEFT),
        'airline' => $airline[rand(0, count($airline) - 1)],
        'come'    => "Partida $i",
        'to'      => "Destino $i",
        'start'   => strtotime($start->format('Y-m-d H:i:sP')) * 1000,
        'end'     => strtotime($end->format('Y-m-d H:i:sP')) * 1000
    ];
}

print_r(json_encode($data));
header('application/json');