<?php



use App\Controllers\HomeController;
use App\System\Router;

require_once __DIR__ . '/vendor/autoload.php';

$router = new Router();

$router->get('/', [HomeController::class, 'index']);
$router->get('/sal', [HomeController::class, 'sal']);
$router->get('/category', [HomeController::class, 'category']);
$router->get('/details', [HomeController::class, 'details']);
$router->get('/checkout', [HomeController::class, 'checkout']);


$router->notFoundHandler(function () {
    echo "Page Not Found";
});

$router->run();