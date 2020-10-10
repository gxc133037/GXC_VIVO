<?php
    header("Content-type:text/html;charset=utf-8");

    $responseData = array('code' => 0,'msg' => '');

    $phone = $_POST['phone'];

    $link = mysql_connect('localhost','root','15975328');

    if(!$link){
        $responseData['code'] = 2;
        $responseData['msg'] = '服务器忙';
        echo json_encode($responseData);
        exit;
    }

    mysql_set_charset('utf8');

    mysql_select_db('register_vivo');

    $sql = "select * from register where phone='{$phone}'";

    $res = mysql_query($sql);

    $row = mysql_fetch_assoc($res);
    if($row){
        $responseData['code'] = 4;
        $responseData['msg'] = '登陆成功';
        echo json_encode($responseData);
    }
    else{
        $responseData['code'] = 5;
        $responseData["msg"] = '用户不存在';
        echo json_encode($responseData);
    }

    mysql_close($link);
?>