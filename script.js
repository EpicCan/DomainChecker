function checkDomain() {
    const domain = document.getElementById('domainInput').value;
    console.log("Checking domain:", domain); // 添加日志


    fetch(`/api/check?domain=${domain}`)
        .then(response => response.json())
        .then(data => {
            // document.getElementById('result').innerText = data.message;
            // 打开新页面并传递结果
            console.log("Received data:", data); // 添加日志
            window.open(`result.html?message=${encodeURIComponent(data.message)}`);
        })
        .catch(error => {
            // document.getElementById('result').innerText = 'Unable to check domain name';
            console.error("Error:", error); // 添加错误日志
            window.open(`result.html?message=${encodeURIComponent('Unable to check domain name')}`);
        });
}
