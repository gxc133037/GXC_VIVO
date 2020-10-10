$(function(){
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
    var if_commodityDetails = false;
    var str_commodityDetails = ``;
    if(if_commodityDetails == false){
        $.get('../data/commodityDetailsData.json',function(result){
                str_commodityDetails = $(
                        `<li id='1'><img src="${result[0].smallPic}" alt=""></li>
                        <li id='2'><img src="${result[1].smallPic}" alt=""></li>
                        <li id='3'><img src="${result[2].smallPic}" alt=""></li>
                        <li id='4'><img src="${result[3].smallPic}" alt=""></li>`
            )
            $(str_commodityDetails).appendTo($('#leftBottom'));
        })
        return if_commodityDetails = true;
    }
})
$(function(){
    var TopImages = ["https://shopstatic.vivo.com.cn/vivoshop/commodity/30/10005630_1596164288266_1080x1080.png",
    "https://shopstatic.vivo.com.cn/vivoshop/commodity/30/10005630_1596164296546_1080x1080.png",
    "https://shopstatic.vivo.com.cn/vivoshop/commodity/30/10005630_1596164296784_1080x1080.png",
    "https://shopstatic.vivo.com.cn/vivoshop/commodity/30/10005630_1596164296375_1080x1080.png"];
    $('#leftBottom').on('mouseenter','li',function(){
        console.log(this.id);
        var n = this.id - 1;
        $('#leftTop').css('background',`url(${TopImages[n]}) no-repeat`);
        $('#leftTop').css('background-size',`100% 100%`);
        $('#main_center img').attr('src',`${TopImages[n]}`);

    });

    $("#leftTop").mouseenter(function(){
        $('#mask').css('display','block');
        $('#main_center').css('display','block');
    })
    $('#leftTop').mouseleave(function(){
        $('#mask').css('display','none');
        $('#main_center').css('display','none');
    })
    .mousemove(function(ev){
        var l = ev.clientX - $(this).offset().left - 15;
        var t = ev.clientY - $(this).offset().top - 15;
        l = Math.max(0,l);
        l = Math.min(527,l);
        t = Math.max(0,t);
        t = Math.min(536,t);

        $('#mask').css({
            left:l,
            top:t
        })
        $('#main_center img').css({
            left : -2 * l + 200,
            top: -2 * t + 200
        })
    })

    var price = 2798;
    var count = 1;
    console.log($('input[name = "versions"]'));
    $('input[type = "radio"]').click(function(){
        console.log(this.value);
        var n = this.value;
        price += (10 * n) * count;
        $("#ultimately .red").text(`￥${price}`);
        $('#message_top span:nth-of-type(2)').text(`￥${price}`);
    })

    $('input[name = "clause"]').click(function(){
        var ifCheck = $('input[name = "clause"]').is(':checked');
        console.log(ifCheck);
        if(ifCheck){
            var count = 1;
            $('#show').text(count);
            $('#subtract').click(function(){
                if(count > 0){
                    count -= 1;
                }
                else{
                    count = 0
                }
                console.log(count);
                $('#show').text(count);
                $('.red').text(`￥${2798 * count}`)
            })
            $('#add').click(function(){
                if(count < 5){
                    count += 1;
                }
                else{
                    count = 5;
                }
                console.log(count);
                $('#show').text(count);
                $('.red').text(`￥${2798 * count}`)
            })
        }
        else{
            count = 0;
            $('#show').text(count);
        }
        return count;
    })
    
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 3400){
            $('#message').css('display','block');
        }
        else{
            $('#message').css('display','none');
        }
    })
    $('#buy').click(function(){
        $.cookie('goods',price,{
            expires:7
        })
    })
})