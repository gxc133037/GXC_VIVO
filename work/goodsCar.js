$(function(){
    var getName = ['img','name','brief','price'];
    var results = [];
    for(var n = 0;n < getName.length;n++){
        results[n] = $.cookie(`goods_${getName[n]}`);
        console.log(results);
    }
    var str_ul = ``;
    var str_cenBtm = ``;
            str_ul = $(
                `<li><input type="checkbox" name="check" id="check"></li>
                <li><img src="${results[0]}" alt=""><span id="details">${results[1]}</span></li>
                <li>${parseFloat(results[3])}</li>
                <li><aside id="amount">
                    <button id="subtract">-</button>
                    <aside id="show"></aside>
                    <button id="add">+</button>
                </aside></li>
                <li>0.00</li>
                <li>${parseInt(results[3])}</li>
                <li class="red">${parseFloat(results[3])}</li>
                <li id="operation">
                    <aside id="operations">
                        <span>加入购物车</span>
                        <span>删除</span>
                    </aside>
                </li>`);
            str_cenBtm = `
            <ul id="bottom_left">
                        <li><input type="checkbox" name="checkCenter" id="checkCenter"></li>
                        <li><span>删除选中的物品</span></li>
                        <li><span>移入收藏夹</span></li>
                    </ul>
                    <aside id="bottom_right">
                        <span id="count">已选商品件，合计：</span>
                        <span id="price">${parseFloat(results[3])}</span>
                        <span id="sum">（商品总价 ${parseFloat(results[3])}）</span>
                        <aside id="affirm">去结算</aside>
                    </aside>`    
            $(str_ul).appendTo($('#center_center ul'));
            $(str_cenBtm).appendTo($('#center_bottom'));
            console.log($('#show'));
            console.log($('input[name = "checkCenter"]'));
            var ifCheck = $('input[name = "check"]').is(':checked');
            var ifCheckCenter = $('input[name = "checkCenter"]').is(':checked');
            var ifCheckSum = $('input[name = "checkAll"]').is(':checked');
            $('input[name = "checkAll"]').click(function(){
                $('input[type = "checkbox"]').prop("checked",this.checked);
                var count = 0;
                if(ifCheck){
                    ifCheck = false;
                }
                else{
                    ifCheck = true;
                }
                console.log(ifCheck);
                if($('input[name = "check"]').is(':checked')){
                    $('#subtract').removeAttr('disabled','true');
                    $('#add').removeAttr('disabled','true');
                    count = 1;
                    $('#show').text(count);
                    console.log('#show');
                    $('#subtract').click(function(){
                        if(count > 0){
                            count -= 1;
                        }
                        else{
                            count = 0
                        }
                        console.log(count);
                        $('#show').text(count);
                        $('.red').text(count * results[3]);
                        $('#price').text(`￥`+count * results[3]);
                        $('#count').text(`已选商品${count}件，合计：￥${count * results[3]}`)
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
                        $('.red').text(count * results[3]);
                        $('#price').text(count * results[3]);
                        $('#count').text(`已选商品${count}件，合计：${count * results[3]}`)
                    })
                }
                else{
                    count = 0;
                    $('#show').text(count);
                    $('#subtract').attr('disabled','true');
                    $('#add').attr('disabled','true');
                    return count;
                }
            });
            $('input[name = "check"]').click(function(){
                var count = 0;
                if(ifCheck){
                    ifCheck = false;
                }
                else{
                    ifCheck = true;
                }
                console.log(ifCheck);
                if($('input[name = "check"]').is(':checked')){
                    $('#subtract').removeAttr('disabled','true');
                    $('#add').removeAttr('disabled','true');
                    count = 1;
                    $('#show').text(count);
                    console.log('#show');
                    $('#subtract').click(function(){
                        if(count > 0){
                            count -= 1;
                        }
                        else{
                            count = 0
                        }
                        console.log(count);
                        $('#show').text(count);
                        $('.red').text(count * results[3]);
                        $('#price').text(`￥`+count * results[3]);
                        $('#count').text(`已选商品${count}件，合计：￥${count * results[3]}`)
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
                        $('.red').text(count * results[3]);
                        $('#price').text(`￥`+count * results[3]);
                        $('#count').text(`已选商品${count}件，合计：￥${count * results[3]}`)
                    })
                }
                else{
                    count = 0;
                    $('#show').text(count);
                    $('#subtract').attr('disabled','true');
                    $('#add').attr('disabled','true');
                    return count;
                }
            })
            $('input[name = "checkCenter"]').click(function(){
                $('input[type = "checkCenter"]').prop('checked',this.checked);
                if($('input[name = "check"]').is(':checked') && $('input[name = "checkCenter"]').is(':checked')){
                    $('input[type = "checkbox"]').prop('checked',true);
                    console.log($('input[name = "checkAll"]').is(':checked'));
                }
                else{
                    $('input[type = "checkbox"]').prop('checked',false);
                }
            })    
})