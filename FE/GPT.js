const axios = require('axios');

const apiKey = 'YOUR_OPENAI_API_KEY';
const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const prompt = '당신은 누구인가요?';
const maxTokens = 150;

axios.post(endpoint, {
    prompt,
    max_tokens: maxTokens
}, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
.then(response => {
    console.log(response.data.choices[0].text);
})
.catch(error => {
    console.error(error);
});