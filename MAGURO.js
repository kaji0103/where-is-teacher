$(function(){
    result.innerText = `結果がここに表示されます`
    $(".button").click(function(){
        $.ajax({
            type: 'GET', url: "https://script.google.com/macros/s/AKfycbx1ysAmr7wkdS54UeosGTWNBkZenRHrAkQDr__i4Z0UHfSMpwOIMM9RdJQpb-IP6NV_3A/exec",
            dataType: 'jsonp', data: { name: nameText.value },
            success: out => {
                result.innerText = `- 教職員の位置を特定しました -\n\n先生は${out.time}分前に\n${out.location}にいました。`
            },
            error: out => {
                result.innerText = `- 教職員の位置を特定できません -\n\n実在する名前を入力してください。`
            },
        });
    });
});

let nameText = document.getElementById('ex01');
let result = document.getElementById('result');