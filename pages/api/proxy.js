// pages/api/proxy.js
import axios from 'axios';
import https from 'https';

export default async function handler(req, res) {
    const apiUrl = 'https://api.hotword.search.taola123.cn/v1/hotword/get/test';

    // Create an HTTPS Agent that ignores SSL certificate errors
    const agent = new https.Agent({  
        rejectUnauthorized: false  // This will ignore SSL certificate errors
    });

    try {
        const apiResponse = await axios.get(apiUrl, { httpsAgent: agent });
        res.status(200).json(apiResponse.data);
    } catch (error) {
        console.error('API call error:', error);
        res.status(error.response?.status || 500).json({ message: error.message });
    }
}