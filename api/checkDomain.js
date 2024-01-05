const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { name, suffix } = req.query;

    try {
        const response = await fetch(`https://whois.freeaiapi.xyz/?name=${name}&suffix=${suffix}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching domain data' });
    }
};
