const range = document.querySelector('input');
//事件监听
range.oninput = function() {
    //动态地改变--pos这个自定义属性的值
    document.body.style.setProperty('--pos',range.value+'%');
};