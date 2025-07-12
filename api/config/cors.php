<?php
// api/config/cors.php - CORS configuration

// Load environment variables
require_once __DIR__ . '/load_env.php';
$env = loadEnv(__DIR__ . '/../../../.env');

// Get client URL from environment, fallback to localhost
$clientUrl = $env['CLIENT_URL'] ?? 'http://localhost:8000';

return [
    // Allowed origins (domains that can access the API)
    'allowed_origins' => [
        $clientUrl,
    ],
    
    // Allowed HTTP methods
    'allowed_methods' => [
        'GET',
        'POST', 
        'PUT',
        'DELETE',
        'OPTIONS'
    ],
    
    // Allowed headers
    'allowed_headers' => [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'X-API-Key',
        'Accept'
    ],
    
    // Exposed headers (headers that browsers can access)
    'exposed_headers' => [
        'X-RateLimit-Remaining',
        'X-RateLimit-Limit'
    ],
    
    // Max age for preflight requests (in seconds)
    'max_age' => 86400, // 24 hours
    
    // Whether to allow credentials (cookies, authorization headers)
    'allow_credentials' => true,
    
    // Default origin if request origin is not in allowed list
    'default_origin' => $clientUrl
];
?> 