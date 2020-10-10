$(function(){
    $('#button_submit').click(function(){
        var phone = parseInt($('#phone').val());
        console.log(phone);
        var ifPhone =  checkphone(phone);
        var contry = $('#contry').val();

        if(contry == null || ifPhone == false){
            alert("不可为空请再次确认");
        }
        else{
            $.ajax({
                type: 'post',
                url: '../php/register.php',
                data: {
                    phone,
                    contry,
                    createTime: new Date().getTime()
                },
                success:function(msg){
                    // console.log('success');
                    console.log(msg);
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        }
        // checkphone($('#phone'))
    })
    // $("#phone").blur(function() {
    //     //对手机号进行验证		
    //     checkTel("#phone", "#phoneInfo");
    // }).focus(function() {
    //     clearInfo("#phoneInfo");
    // });
    // //验证
    // function checkTel(id, info) {
    //     var reg = /^[1][0-9]{10}$/;
    //     var $tel = $(id).val();
    //     if(!reg.test($tel)) {
    //         setInfo(info, "手机号格式不正确");
    //         return false;
    //     }
    //     return true;
    // }

    // $('#button_submit').onclick(function(){
    //     var phone = $('select[name = "font"]').value + $('input[name = phone]').value;
    //     console.log(phone);
    // })
    // $('#button_submit').onclick(function(){
    //     $.ajax({
    //     type: 'post',
    //     url: '../php/register.php',
    //     data: {
    //         //contry:$('select[name = "contry"]').value(),
    //         //phone:$('select[name = "font"]')value() + $('input[name = phone]').value() 
    //         createTime: new Date().getTime()
    //     },
    //     success: function(msg){
    //         // console.log(msg);
    //         var obj = JSON.parse(msg); //JSON.parse (<anonymous>) 返回的字符串不是json格式。
    //         if(obj.code){
    //         oAlert.className = 'alert alert-danger';
    //         }else{
    //         oAlert.className = 'alert alert-success';
    //         }
    //         oAlert.style.display = 'block';
    //         oAlert.innerHTML = obj.msg;
    //     },
    //     error: function(msg){
    //         console.log(msg);
    //     }
    //     })
    // })
})
function checkphone(phone){
    var reg = /^[1][0-9]{10}$/;
    if(!reg.test(phone)) {
            return false;
    }
    return true;
}
