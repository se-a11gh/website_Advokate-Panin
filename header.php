<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!----------
    подкл. теги для SEO    
    ------>
    <link rel="stylesheet" href="page_Style.css">
    <link rel="stylesheet" href="Style.css">
    <link rel="stylesheet" href="Adaptive.css">
    <title>Panin</title>
</head>
<body>
<?php require('../Site_7/return.php');?>
<button class="consl btn_call" type="button">Зв'язатися з нами</button>
<div class="wraper">

<div class="fon_popUp">
    <div class="bl_consult">
        <div class="headConsl"><p>Залишіть заявку</p><img class="btn_close_pop" src="media/wClose.png" alt=""></div>
        <form class="block_form" action="#" method="post">
            <input type="text" placeholder="Ваше ім'я">
            <input type="text" placeholder="Ваш телефон">
            <textarea id="textSizeArea" placeholder="Коротко опишіть проблему"></textarea>
            <input class="btn_form" type="submit" value="Отримати консультацію">
        </form>
    </div>
</div>

<aside>
    <div class="fon_aside_menu">
        <div class="wrap_aside_menu">
            <div class="bl_aside_menu">
                <div class="aside_menu_head">

                    <div class="wrap_logo">
                        <img src="media/femida2.png" alt=""> <p>Панін та партнери</p>
                        </div>
                        <div class="block_btn_close">
                        <img class="btn_close" src="media/wClose.png" alt="">
                        </div>
                    </div>

                    <ul class="aside_menu_list">
                    <li class="wrap_btns"><a href="page_categ.php">Наш спектр послуг</a></li>
                    <li class="wrap_btns"><a href="page_asks.php">Наші успіхи</a></li>
                    <li class="wrap_btns"><a href="page_categ.php">Наші фахівці</a></li>
                    <li class="wrap_btns"><a href="page_asks.php">Питання юристу</a></li>
                    </ul>

                <div class="aside_menu_footer">
                    <div class="aside_adress">
                    <p>м.Київ, В. Стуса 21 <br> 4 поверх, 5 офіс</p>
                    <p>Пн-Сб: 9:00 - 21:00<br> Нд: вихідний</p>
                    </div>
                    <div class="aside_socLink">
                        <img src="media/card2.png" alt="">
                        <img src="media/card3.png" alt="">
                        <img src="media/card4.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>


<header id="head_1"> 
    <div class="menuB"> <img class="btn_menu" src="media/menu.png" alt="кнопка меню"> </div>
  <div class="logo"> 
  <a href="Main.php"> <img src="media/femida.png" alt=""></a>
  <a href="Main.php"><p>"Панін та партнери"</p> </a>
    </div>

    <div class="contacts">
        <div class="adress_head">
            <p>м.Київ, В. Стуса 21 <br> 4 поверх, 5 офіс</p><br>
            <p>Пн-Сб: 9:00 - 21:00<br> Нд: вихідний</p>
        </div>
        <div class="soc_head">
            <img src="media/card2.png" alt="">
            <img src="media/card3.png" alt="">
            <img src="media/card4.png" alt="">
        </div>
    </div>
</header>
