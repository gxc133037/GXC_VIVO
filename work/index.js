
$(function(){
    $(window).scroll(function(){
        var ifscroll = false;
        var Top = $(window).scrollTop();
        console.log(Top);
        if(Top > 500){
            $('#return').css('display','block')
        }
        if(Top <= 500){
            $('#return').css('display','none');
        }
    })
    var lis = $("nav ul li");
    console.log(lis);
    lis.mouseenter(function(){
        $('#phones_box').stop(true).slideDown(3000);
        //$('#phones').stop(true).slideDown(3000);
        //$('#phones').css('display','block');
    });
    $('#phones_box').mouseleave(function(){
        $('#phones_box').stop(true).slideUp(3000);
        //$('#phones').stop(true).slideUp(3000);
        //$('#phones').css('display','none');
    })
    var main_lis = $('main ul li');
    var ifEnter = false;
    main_lis.mouseenter(function(){
        $('#things').css('display','block');
        if(ifEnter == false){
            $.get('../data/data.json',function(result,statusText, xhr){
                console.log(result);
                var ArrTop = result[0].subCategories;
                var ArrBottom = result[0].commoditySpus;
                console.log(ArrBottom);
                var strTop;
                var strBottom;
                for(var n=0;n < ArrTop.length;n++){
                    strTop =  
                    $(`<aside id="thing">
                        <span id="m1">${ArrTop[n].name}</span>
                        <img src="${ArrTop[n].imgUrl}" alt="">
                    </aside>`);
                    //console.log(str);node
                    strBottom = 
                    $(`<aside id="other">
                        <img src="https://vivoshop-vivofs.vivo.com.cn/vivoshop/actcorner/20190704/039086c21f3e5bb79af675ef8f0fdce9.png" alt="">
                        <img src="${ArrBottom[n].imgUrl}" alt="">
                        <span id="m2">${ArrBottom[n].name}</span>
                    </aside>`);
                    $(strTop).appendTo($('#top_box'));
                    $(strBottom).appendTo($('#bottom_box'));
                }
            })
            return ifEnter = true;
        }
        else{
            return;
        }
    });
    main_lis.mouseleave(function(){
        $('#things').css('display','none');
    })
    var images = ['https://shopstatic.vivo.com.cn/vivoshop/commodity/20200825/20200825114546578605_original.jpg',
                'https://shopstatic.vivo.com.cn/vivoshop/commodity/20200928/20200928143623417755_original.png',
                'https://shopstatic.vivo.com.cn/vivoshop/commodity/20200821/20200821164042380249_original.jpg',
                'https://shopstatic.vivo.com.cn/vivoshop/commodity/20200928/20200928143020658445_original.png',
                'https://shopstatic.vivo.com.cn/vivoshop/commodity/20200709/20200709110544124171_original.jpg'];
    var index = 0;
    var tim = setInterval(move,3000);
    $('#main').mouseenter(function(){
        clearInterval(tim);
    });
    $('#main').mouseleave(function(){
        tim = setInterval(move,3000);
    });
    $('#btns li').click(function(){
        index = $(this).index();
        $('#main').css('background',`url('${images[index]}') no-repeat`)
        $('#main').css('background-size','100% 100%');
        $('#btns li').eq(index).css('height','7px');
        for(var n=0;n < images.length;n++){
            if(n != index){
                $('#btns li').eq(n).css('height','3px');
            }
        }
    })
    function move(){
        if(index == 5){
            index = 0;
        }
        $('#main').css('background',`url('${images[index]}') no-repeat`);
        $('#main').css('background-size','100% 100%');
        $('#btns li').eq(index).css('height','7px');
        for(var n=0;n < images.length;n++){
            if(n != index){
                $('#btns li').eq(n).css('height','3px');
            }
        }
        index++;
    }           
    var intDiff = parseInt(3600);//倒计时总秒数量
            function timer(intDiff){
                window.setInterval(function(){
                var day=0,
                    hour=0,
                    minute=0,
                    second=0;//时间默认值       
                if(intDiff > 0){
                    day = Math.floor(intDiff / (60 * 60 * 24));
                    hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                    minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                    second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                }else{//当时间耗尽，刷新页面
                    window.location.reload();
                }
                if (hour <= 9) hour = '0' + hour;
                if (minute <= 9) minute = '0' + minute;
                if (second <= 9) second = '0' + second;

                $(".timeBox").eq(0).html(hour);
                $('.timeBox').eq(1).html(minute);
                $('.timeBox').eq(2).html(second);
                intDiff--;

                }, 1000);

            } 
            $(function(){
                timer(intDiff);
            });
    $.get('../data/data3.json',function(result,statusText, xhr){
        console.log(result);
        var str_rush = ``;
        var if_rush = false;
        if(if_rush == false){
            for(let n = 0;n < result.length;n++){
                str_rush = $(
                    `<aside>
                    <img src="${result[n].imgUrl}">
                    <h2>${result[n].name}</h2>
                    <span class=detail>${result[n].brief}</span>
                    <p>
                        <span>￥${result[n].price}</span>
                        <span>￥${result[n].marketPrice}</span>
                    </p>
                    </aside>`);
                    console.log(str_rush);                
                    $(str_rush).appendTo($('#rushThings'));    
            }
        }
        return if_rush = true;
    })
    $.get('../data/data4.json',function(result,statusText, xhr){
        console.log(result);
        var str_sale = ``;
        var if_sale = false;
        if(if_sale == false){
            for(let n = 0;n < result.length;n++){
                str_sale = $(
                    `<aside>
                    <img src="${result[n].imgUrl}" alt="">
                    <h5>${result[n].name}</h5>
                    <span class="detail">${result[n].brief}</span>
                    <span class="price">￥${result[n].price}</span>
                </aside>`);
                $(str_sale).appendTo($('#sale_box'));    
            }
        }
        return if_sale = true;
    })
    $.get('../data/data.json',function(result){
        var str_phone = ``;
        var if_phone = false;
        var phone = result[0].commoditySpus;
        console.log(phone);
        if(if_phone == false){
            for(var n = 0;n <= 5;n++){
                str_phone = $(`<aside>
                <img src="${phone[n + 6].imgUrl}" alt="">
                <span>${phone[n].name}</span>
                </aside>`);
                $(str_phone).appendTo($('#phones'));
            }
        }
        return if_phone = true;
    })
    

    
})
