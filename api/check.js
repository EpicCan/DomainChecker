const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { domain } = req.query;
    const [name, suffix] = domain.split('.');

    try {
        const apiResponse = await fetch(`https://whois.freeaiapi.xyz/?name=${name}&suffix=${suffix}`);
        const data = await apiResponse.json();
        const message = data.available ? '域名未被注册' : '域名已被注册';
        res.status(200).json({ message });
    } catch (error) {
        res.status(500).json({ message: '无法检查域名' });
    }
};
