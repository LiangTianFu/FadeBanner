$(function() {
  //代码初始化
  //获取图片的数量
  //根据图片的数量内部添加li
  var size = $(".img li").size();
  for (var i = 1; i <= size; i++) {
    var li = "<li>" + i + "</li>";
    $(".num").append(li);
  }

  //手动控制轮播
  $(".img li").eq(0).show(); //获取第一张图片

  $(".num li").eq(0).addClass("active"); //给第一张图片添加样式
  $(".num li").mouseover(function() {
    $(this).addClass("active").siblings().removeClass("active");
    //siblings筛选同类元素  removeClass移除样式  addClass添加样式

    var index = $(this).index();
    i = index; //同步手动与自动的索引值
    //  alert(index);
    //  $(".img li").eq(index).fadeIn(500).siblings().fadeOut(500);
    $(".img li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    //.show()显示 hide() 隐藏   fadeIn淡入      fadeOut淡出
  })

  //自动控制轮播
  var i = 0;
  var timer = setInterval(move, 2500);

  //核心函数 向左移
  function moveL() {
    i--;
    if (i == -1) {
      i = size - 1;
    }
    $(".num li").eq(i).addClass("active").siblings().removeClass("active");
    $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
  }

  //核心函数 向右移
  function move() {
    i++;
    if (i == size) {
      i = 0;
    }
    $(".num li").eq(i).addClass("active").siblings().removeClass("active");
    $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
  }


  //左按钮点击事件
  $(".out .left").click(function() {
    moveL();
  })
  //右按钮点击事件
  $(".out .right").click(function() {
    move();
  })



  //定时器的开始与结束
  //鼠标移入停止轮播  clearInterval(timer)
  $(".out").hover(function() {
    clearInterval(timer);
  }, function() {
    //鼠标移出继续轮播
    timer = setInterval(move, 2500);
  })

})
