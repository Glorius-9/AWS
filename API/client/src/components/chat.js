import io from 'socket.io-client';

export default function chat (){
    var messages = [],
        users = [];

    var socket = io(),
        message = document.getElementById("message"),
        send = document.getElementById("send"),
        chat = document.getElementById("chat"),
        users_container = document.getElementById("users");


    socket.on('message', function (data) {
        if (data.message) {
            messages.push(data);
            var html = '';
            for (var i = 0; i < messages.length; i++) {
                html += "<li><span>" + messages[i].username + "</span> : " + messages[i].message + '</li>';
            }
            chat.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });

    socket.on('users', function (data) {
        if (data.users) {
            users = data.users;
            var html = '';
            for (var i = 0; i < users.length; i++) {
                html += "<li><a href='./game/" + users[i].id + "'>" + users[i].username + "</a></li>";
            }
            users_container.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });

    send.onclick = function () {
        var text = message.value;
        message.value = "";
        socket.emit('send', {message: text});
    };
};