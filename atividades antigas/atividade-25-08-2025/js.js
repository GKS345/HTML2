            function carregarimagem() {
                fetch('https://dog.ceo/api/breeds/image/random')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erro ao carregar imagem');
                        }
                        return response.json();
                    })
                    .then(data => {
                        const resultado = document.getElementById('resultado');
                        resultado.innerHTML = '';
                        const img = document.createElement('img');
                        img.src = data.message;
                        img.style.width = '300px';
                        img.style.height = '300px';
                        img.style.borderRadius = '20px';
                        img.style.border = '5px solid black';
                        resultado.appendChild(img);
                    })
                    .catch(error => {
                        document.getElementById('resultado').textContent = 'Erro: ' + error.message;
                    });
            }