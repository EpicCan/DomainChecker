// function checkDomain() {
//     const domain = document.getElementById('domainInput').value;
//     console.log("Checking domain:", domain); // 添加日志


//     fetch(`/api/check?domain=${domain}`)
//         .then(response => response.json())
//         .then(data => {
//             // document.getElementById('result').innerText = data.message;
//             // 打开新页面并传递结果
//             console.log("Received data:", data); // 添加日志
//             window.open(`result.html?message=${encodeURIComponent(data.message)}`);
//         })
//         .catch(error => {
//             // document.getElementById('result').innerText = 'Unable to check domain name';
//             console.error("Error:", error); // 添加错误日志
//             window.open(`result.html?message=${encodeURIComponent('Unable to check domain name')}`);
//         });
// }
function checkDomain() {
    const domain = document.getElementById('domainInput').value;
    console.log("Checking domain:", domain); // 添加日志

    fetch(`/api/check?domain=${domain}`)
        .then(response => response.json())
        .then(data => {
            console.log("Received data:", data); // 添加日志
            // 设置隐藏表单的值并提交
            document.getElementById('domainMessage').value = encodeURIComponent(data.message);
            document.getElementById('domainForm').submit();
        })
        .catch(error => {
            console.error("Error:", error); // 添加错误日志
            // 如果出错，也设置隐藏表单的值并提交
            document.getElementById('domainMessage').value = encodeURIComponent('Unable to check domain name');
            document.getElementById('domainForm').submit();
        });
}



function checkDomain2() {
    const domain = document.getElementById('domainInput').value;
    console.log("Checking domain:", domain); // 添加日志


    fetch(`/api/check?domain=${domain}`)
        .then(response => response.json())
        .then(data => {
            // document.getElementById('result').innerText = data.message;
            console.log("Received data:", data); // 添加日志
            // 直接在当前页面显示结果
            document.getElementById('result').innerHTML = data.message;
        })
        .catch(error => {
            // document.getElementById('result').innerText = 'Unable to check domain name';
            console.error("Error:", error); // 添加错误日志
            // 在当前页面显示错误信息
            document.getElementById('result').innerHTML = 'Unable to check domain name';
        });
}