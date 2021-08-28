<?php
    $host = 'localhost';
    $user = 'rhswb114';
    $pw = 'RH970114!';
    $db = 'rhswb114';
    $connect = new mysqli( $host,$user,$pw,$db);
    $connect -> set_charset('utf8');

    if( mysqli_connect_errno() ){
        echo "database Connect False";
    } else {
       // echo "database Connect True";
    }
?>