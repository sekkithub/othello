<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
        'allowAutoUpdates' => false,
        'defaultImageQuality' => 85,
        'cpTrigger' => 'admin'
    ),

    'localhost' => array(
        'devMode' => true,
        'siteUrl' => 'http://localhost:8080',
        'environment' => 'dev'
    ),

    '.dev' => array(
        'devMode' => true,
        'siteUrl' => 'http://base-craft.dev',
        'environment' => 'dev'
    ),

    'ww.tnhdev.com' => array(
        'devMode' => true,
        'cooldownDuration' => 0,
        'siteUrl' => 'http://ww.tnhdev.com',
        'environment' => 'staging'
    ),

    'ww.tnhstage.com' => array(
        'devMode' => true,
        'cooldownDuration' => 0,
        'siteUrl' => 'http://ww.tnhstage.com',
        'environment' => 'staging'
    ),

    'ww.tnhprod.com' => array(
        'devMode' => true,
        'cooldownDuration' => 0,
        'siteUrl' => 'http://ww.tnhprod.com',
        'environment' => 'production'
    ),

    'www.westonwilliamson.com' => array(
        'cooldownDuration' => 0,
        'siteUrl' => 'http://www.westonwilliamson.com',
        'environment' => 'production'
    ),
);
