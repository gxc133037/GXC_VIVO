$(function(){
    $.get('../data/productList.json',function(result,statusText, xhr){
        console.log(result);
        var str_list = ``;
        var if_list = false;
        if(if_list == false){
            for(let n = 0;n < result.length;n++){
                str_list = $(
                    `<aside id = '${n}'>
                    <img src="${result[n].imgUrl}" alt="">
                    <img src="https://vivoshop-vivofs.vivo.com.cn/vivoshop/actcorner/20190704/039086c21f3e5bb79af675ef8f0fdce9.png" alt="">
                    <h3>${result[n].name}</h3>
                    <span class="detail">${result[n].brief}</span>
                    <span class="import">￥${result[n].price}</span>
                </aside>`);
                $(str_list).appendTo($('main'));    
            }
        }
        $('main aside').click(function(){
            console.log(this.id);
            var m = parseInt (this.id)
            $.cookie('goods_img',result[m].imgUrl,{expires:7});
            $.cookie('goods_name',result[m].name,{expires:7});
            $.cookie('goods_brief',result[m].brief,{expires:7});
            $.cookie('goods_price',result[m].price,{expires:7});
            location.href = 'goodsCar.html';
        })
        return if_list = true;
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

    
})