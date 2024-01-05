function checkDomain() {
    const fullDomain = document.getElementById('domainInput').value;
    const [name, suffix] = fullDomain.split('.');

    fetch(`/api/?name=${name}&suffix=${suffix}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.available);
            document.getElementById('result').innerText = 
                data.available === true ? '域名未被注册' : '域名已被注册';
        })
        .catch(error => {
            document.getElementById('result').innerText = '无法检查域名';
        });
}
