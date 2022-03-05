<?php

spl_autoload_register('myAutoLoader');

function myAutoLoader($classname)
{
    $path = "core/";
    
    $extension = ".php";

    if (file_exists($path . "controller/" . $classname . $extension )) {
        include_once $path . "controller/" . $classname . $extension;
    }
    else if (file_exists($path . "model/" . $classname . $extension )) {
        include_once $path . "controller/" . $classname . $extension;
    }
    else{
        include_once $classname . $path;
    }
}