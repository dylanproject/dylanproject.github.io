<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(

	// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
	'server' => '165.227.124.214',

	// The name of the database to select.
	'database' => 'craft',

	// The database username to connect with.
	'user' => '858123969b39',

	// The database password to connect with.
	'password' => '2893498bccfe581d',

	// The prefix to use when naming tables. This can be no more than 5 characters.
	'tablePrefix' => 'craft',

);

// return [
//     'server'      => getenv('MYSQL_HOST')     ?: 'localhost',
//     'database'    => getenv('MYSQL_DATABASE') ?: 'local-db-name',
//     'user'        => getenv('MYSQL_USER')     ?: 'local-db-user',
//     'password'    => getenv('MYSQL_PASSWORD') ?: 'local-db-password',
//     'tablePrefix' => 'craft',
//
//     // to be compatible with MySQL 5.7, requires 2.6.2949 or greater
//     'initSQLs'     => ["SET SESSION sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';"],
//
// ];
