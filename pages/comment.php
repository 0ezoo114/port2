<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>

    <link rel="stylesheet" href="../assets/css/style55.css">
    <link rel="stylesheet" href="../assets/css/reset.css">
</head>
<body>
    <div id="wrap">


  
            <section id="section5">
                <div class="sec5">
                <article class="flow-article">
        
                    <section id="#comment" class="section-comment">
                        <h4>나도 한마디!</h4>
                        <p>50자 이내로 자유롭게 글을 쓸 수 있습니다.</p>
                        <div class="comment-form">
                            <form name="comment" method="post" action="../comment/commentSave.php">
                                <fieldset>
                                    <legend class="screen_out">댓글 영역</legend>
                                    <div class="comment-wrap">
                                        <div>
                                            <label for="youName" class="screen_out">이름</label>
                                            <input type="text" name="youName" id="youName" class="input-text" placeholder="이름" autocomplete="off" required>
                                        </div>
                                        <div class="text">
                                            <label for="youText" class="screen_out">한마디</label>
                                            <input type="text" name="youText" id="youText" class="input-text" placeholder="한마디 적어주세요!" autocomplete="off" required>
                                        </div>
                                        <button class="login-btn" type="submit" value="한마디 하기">COMMENT</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="comment-list">
                            
                            <?php
                                include "../connect/connect.php";

                                $sql = "SELECT * FROM myComment1";
                                $result = $connect -> query($sql);

                                while($date = mysqli_fetch_array($result)){
                            ?>
                                <div>
                                    <p><?=$date['youText']?></p>
                                    <div class="icon">
                                        <img src="assets/img/stu01.png" alt="이정아">
                                        <p><?=$date['youName']?></p>
                                        <p><?=$date['regTime']?></p>
                                        <p><?=date('Y-m-d H:i', $date['regTime'])?></p>
                                    </div>
                                </div>
                            <?php
                                }
                            ?>

                        </div>
                    </section>
                </article>
        </div>
                            </section>
    </div>
    
</body>
</html>