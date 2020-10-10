$(function(){
    $('.login').click(function(){
        var log_phone = $('#phone').val();
        var ifLog_phone = checkPhone(log_phone);
        if(log_phone && ifLog_phone){
            $.ajax({
                type:'post',
                url:'../php/login.php',
                data:{
                    phone:log_phone,
                },
                success:function(msg) {
                    console.log(msg);   
                },
                error:function(msg) {
                    console.log(msg);
                }
            })
        }
    });
    $('.register').click(function(){
        location.href = 'register.html';
    })

})
function checkPhone(phone){
    var reg = /^[1][0-9]{10}$/;
    if(!reg.test(phone)){
        return false;
    }
    return true;
}