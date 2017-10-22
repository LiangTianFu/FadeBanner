var banner = document.getElementById('banner');
var img = document.getElementById('img');
var lis = img.getElementsByTagName('li');
var order = document.getElementById('order');

//根据上面图片的数量创建相应个数的焦点
for(i=0;i<lis.length;i++){
    var creLi = document.createElement('li');
    order.appendChild(creLi);    
}
//获取焦点事件源，并将第一个添加类（class="on"）
var orderLis = order.getElementsByTagName('li');
orderLis[0].className = 'on';

//前期准备工作结束，开始正式的主要部分，让它动起来
var num = 0; 
var xh = null;
function play(num){
    for(i=0;i<lis.length;i++){
        lis[i].className = '';
        orderLis[i].className = '';
    }
    lis[num].className = 'on';
    orderLis[num].className = 'on';
}
//自动播放
function autoPlay(){
    xh = setInterval(function(){
        num++;
        if(num >= lis.length){
            num = 0;
        }
        play(num);


        console.log(num);

    },1000);
}
autoPlay();

//添加鼠标移入暂停，移出继续轮播事件
banner.onmouseover = function(){
    clearInterval(xh);
    xh = null;
}
banner.onmouseout = function(){
    autoPlay();
}

//给焦点添加实时监控事件，鼠标移到哪个焦点，就显示那个对应的图片
for(i=0;i<orderLis.length;i++){
    //万物皆对象，遍历出的所有orderLis都是一个个单独的对象，给每个orderLis添加index属性，利用它记忆每个orderLis自己的索引号
    orderLis[i].index = i;
    orderLis[i].onmouseover = function(){
        //让全局变量num等于此时显示的图片的索引号，防止鼠标离开后继续播放不正常的事情发生
        num = this.index;
        play(this.index);
    }
}
