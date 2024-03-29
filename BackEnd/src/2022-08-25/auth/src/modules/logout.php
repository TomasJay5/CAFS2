<?php

if (!isset($_SESSION['user'])) {
	redirectTo('/');
}

// https://www.php.net/manual/en/function.session-destroy.php
$_SESSION = array();

if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params['path'], $params['domain'],
        $params['secure'], $params['httponly']
    );
}

session_destroy();

redirectTo('/');