const userForm = document.getElementById("userForm")

userForm.addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const form = event.target;

    const formData = new FormData(form); // Cria um objeto FormData com os dados do formulário

    const formDataObject = {}; // Objeto onde os dados do formulário serão armazenados

    // Converte os dados de FormData para um objeto JavaScript
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });

    // Exibe os dados no console (opcional)
    console.log(formDataObject);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        });
    
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }
    
        const result = await response.json();
        console.log('Resposta do servidor:', result);
    
        // Aqui você pode lidar com a resposta do servidor conforme necessário
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
    }

    // window.location.href="./principal.html"
    
});


/* 

{
 "codUsuario":3,
 "nomUsuario":"Robertin",
 "numTelefone":2343423434,
 "dscEmail":"calcinhapreta@email.com",
 "dscSenha":"34234234"
}

*/