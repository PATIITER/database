<?php
  
        error_reporting(0);
        session_start();

        define('DB_SERVER','127.0.0.1');
        define('DB_USERNAME','root');
        define('DB_PASSWORD','');
        define('DB_DATABASE','databaseproject');
     


        function getDB(){
            $dbhost = DB_SERVER;
            $dbuser = DB_USERNAME;
            $dbpass = DB_PASSWORD;
            $dbname = DB_DATABASE;
            $dbConnection = new POD("mysql:host = $dbhost;dbname=$dbname", $dbuser ,$dbpass);
            $dbConnection->exec("set names utf8");
            $dbConnection->setAttribute(POD::ATTR_ERRMODE, POD::ERRMODE_EXCEPTION);
            return $dbConnection;
        }

       
?>
