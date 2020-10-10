<?php
  header("Content-type:text/html;charset=utf-8");

  //模拟官方的返回，生成对应的内容
  $responseData = array("code" => 0, "msg" => "");

  // var_dump($_POST);
  //将数据取出
  $phone = $_POST['phone'];
  $contry = $_POST['contry'];
  $createtime = $_POST['createTime'];

  //初步的判断
  if(!$phone){
    $responseData['code'] = 1;
    $responseData['msg'] = "用户名不能为空";
    echo json_encode($responseData);
    exit;
  }

  if(!$contry){
    $responseData['code'] = 2;
    $responseData['msg'] = "地址不可为空";
    echo json_encode($responseData);
    exit;
  }

  // if($repassword !== $password){
  //   $responseData['code'] = 3;
  //   $responseData['msg'] = "两次密码不一致";
  //   echo json_encode($responseData);
  //   exit;
  // }

  //验证数据库是否有同名的用户
  //1、链接数据库
  $link = mysql_connect("localhost", "root", "15975328");

  //2、判断数据库是否链接成功
  if(!$link){
    $responseData['code'] = 3;
    $responseData['msg'] = "服务器忙";
    echo json_encode($responseData);
    exit;
  }

  //3、设置访问字符集
  mysql_set_charset("utf8");

  //4、选择数据库
  mysql_select_db("register_vivo");

  //5、准备sql语句
  $sql = "select * from register where phone='{$phone}'"; 
  echo $sql;
  // echo $sql; //输出一下，看一下sql拼接的对不对
  //6、发送sql语句
  $res1 = mysql_query($sql);
  echo $res1;

  //7、取出一行
  $row = mysql_fetch_assoc($res1);

  if($row){
    $responseData['code'] = 5;
    $responseData['msg'] = "用户名已存在";
    echo json_encode($responseData);
    exit;
  }

  //注册
  echo $phone;
  $sql2 = "INSERT INTO register(phone,contry) VALUES('$phone','$contry')";
  $res2 = mysql_query($sql2);

  if(!$res2){
    $responseData['code'] = 6;
    $responseData['msg'] = "注册失败";
    echo json_encode($responseData);
    exit;
  }

  $responseData['msg'] = "注册成功";
  echo json_encode($responseData);


  //8、关闭数据库
  mysql_close($link);


?>