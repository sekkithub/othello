<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */


$dev = array(
    'server' => 'localhost',
    'user' => 'root',
    'password' => '',
    'database' => 'sample_dev');

$develop = array(
    'server' => 'localhost',
    'user' => 'sample',
    'password' => '',
    'database' => 'sample_dev');

$staging = array(
    'server' => 'localhost',
    'user' => 'sample',
    'password' => 'QBHLEHRzVsyD6vaI',
    'database' => 'sample_staging');

$production = array(
    'server' => 'localhost',
    'user' => 'sample',
    'password' => 'QBHLEHRzVsyD6vaI',
    'database' => 'sample_production');


return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    '.dev' => $dev,
    'localhost' => $dev,
    '192.168.1' => $dev,
    'sample.tnhdev.com' => $develop,
    'sample.tnhstage.com' => $staging,
    'sample.tnhprod.com' => $production,
    'www.sample.com' => $production
);
