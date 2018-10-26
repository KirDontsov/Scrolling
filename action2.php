<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['user_name2'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($_POST['user_phone2'] == "") $errors[] = "Поле 'Номер телефона' не заполнено!";
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message2  = "Имя пользователя: " . $_POST['user_name2'] . "<br/>";
        $message2 .= "Телефон пользователя: " . $_POST['user_phone2'] . "<br/>";     
        send_mail($message2); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message2){
        // почта, на которую придет письмо
        $mail_to = "kir.dontsov@gmail.com"; 
        // тема письма
        $subject = "Заявка с сайта";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Заявка с сайта н <no-reply@chicago-school.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message2, $headers);
    }
     
?>