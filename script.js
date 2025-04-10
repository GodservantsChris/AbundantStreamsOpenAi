const server_path = 'api/generate';
const server_port = 3000;
const isProduction = true;
//
const server_protocol = (isProduction === true ? 'https' : 'http');
const server_domain = (isProduction === true ? 'cjmopenaiserver-ejdhapc3eebnbdau.canadacentral-01.azurewebsites.net' : 'localhost');
const server_url = (isProduction === true 
    ? server_protocol + '://' + server_domain + '/' + server_path 
    : server_protocol + '://' + server_domain + ':' + server_port + '/' + server_path);
//
console.log("server_url: " + server_url);

document.getElementById('btnRunChat').onclick = async () => {
    const prompt = document.getElementById('prompt').value;
    console.log("Posting prompt: '" + prompt + "' to '" + server_url + "'.");
    try {
        const response = await fetch(server_url, {
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

