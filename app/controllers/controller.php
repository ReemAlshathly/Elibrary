<?php

namespace App\Controllers;

class Controller
{
    public function model($model_name){
        require_once 'app/models/'.$model_name.'.php';

        return new $model_name();
    }
    public function view(string $view, $data = null)
    {
        require_once "app/views/" . $view . ".php";
    }
}