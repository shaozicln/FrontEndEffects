// 给提交按钮添加点击事件监听器
document.getElementById('submitBtn').addEventListener('click', function () {
    // 获取用户名和留言内容
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
    // 为空的几种情况
    if (message === '' && username != '') {
        alert('请不要没话找话，>﹏<,我记住你了');
        return;
    }
    if (message === '' && username === '') {
        alert('请不要没话找话，>﹏<');
        return;
    }
    if (username === '' && message != '') {
        username = '喵喵喵'
        message += '  ——来自令人猜不透的用户的留言'
        alert('雁过拔毛，来者留名！>﹏<，这次放你一马！');
    }
    if (username === 'CLN' || username === 'YRN' || username === 'cln' || username === 'yrn') {
        // 获取留言板元素和当前时间
        var messageBoard = document.getElementById('messageBoard');
        var newMessage = document.createElement('div');
        newMessage.classList.add('messagel');
        // 设置留言元素的innerHTML，包含用户名、时间和留言内容
        newMessage.innerHTML = '<div class="messagel-info"><div class="infol"><img src="1.jpg"><strongl>'
            + username + '</strongl></div><span>发布于：' + getCurrentTime() +
            '</span></div><div class="contentl">' + message + '</div>';
        // 在留言板的第一个子元素之前插入新的留言
        messageBoard.insertBefore(newMessage, messageBoard.firstChild);
        // 清空用户名和留言内容的输入框
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    }else{
        // 获取留言板元素和当前时间
        var messageBoard = document.getElementById('messageBoard');
        var newMessage = document.createElement('div');
        newMessage.classList.add('messager');
        // 设置留言元素的innerHTML，包含用户名、时间和留言内容
        newMessage.innerHTML = '<div class="messager-info"><div class="infor"><img src="1.jpg"><strongr>'
            + username + '</strongr></div><span>发布于：' + getCurrentTime() +
            '</span></div><div class="contentr">' + message + '</div>';
        // 在留言板的第一个子元素之前插入新的留言
        messageBoard.insertBefore(newMessage, messageBoard.firstChild);
        // 清空用户名和留言内容的输入框
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    }

});
// 获取当前时间的函数
function getCurrentTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}
