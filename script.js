document.getElementById('btnRunChat').onclick = async () => {
    const prompt = document.getElementById('prompt').value;
    console.log("prompt: " + prompt);
    try {
        const response = await fetch('http://localhost:3000/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: prompt }),
        });
        //
        const response_json = await response.json();
        const response_json_message = response_json.choices[0].message.content;
        console.log("response_json: " + response_json_message);
        //
        document.getElementById('result').textContent = response_json_message;
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'Error generating response.';
    }
};

