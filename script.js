function checkDomain() {
    const domain = document.getElementById('domainInput').value;

    fetch(`/api/check?domain=${domain}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = data.message;
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Unable to check domain name';
        });
}
