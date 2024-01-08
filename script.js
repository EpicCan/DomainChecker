function checkDomain() {
    const domain = document.getElementById('domainInput').value;

    fetch(`/api/check?domain=${domain}`)
        .then(response => response.json())
        .then(data => {
            // document.getElementById('result').innerText = data.message;
            // 打开新页面并传递结果
            window.open(`result.html?message=${encodeURIComponent(data.message)}`);
        })
        .catch(error => {
            // document.getElementById('result').innerText = 'Unable to check domain name';
            window.open(`result.html?message=${encodeURIComponent('Unable to check domain name')}`);
        });
}
