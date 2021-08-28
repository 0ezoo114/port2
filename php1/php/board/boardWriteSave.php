<?php
    include '../connect/connect.php';
    include '../connect/session.php';
    include '../connect/sessionCheck.php';


    $boardTitle =$_POST['boardTitle'];
    $boardContent =$_POST['boardContent'];
    
    //보안에 대한것 real escape
    $boardTitle = $connect -> real_escape_string($boardTitle); 
    $boardContent = $connect -> real_escape_string($boardContent);
    $boardView = 0;
    $regTime = time();
    $memberID = $_SESSION['memberID'];

    //데이터 입력
    $sql = "INSERT INTO myBoard(memberID, boardTitle, boardContent, boardView, regTime) 
    VALUES('$memberID','$boardTitle','$boardContent','$boardView','$regTime')";

    $result = $connect -> query($sql);

    // if($result){
    //     echo "good";
    // }else{
    //     echo "bad";
    // }

?>





<script>
    location.href = "board.php";
</script>