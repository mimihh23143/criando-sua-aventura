@@ -0,0 +1,11 @@
const avanca = documento.querySelectorAll('.btn-proximo');

Avanca.forEach(botão => {
    botão.addEventListener('click', função(){
        const atual = documento.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        documento.getElementById(proximoPasso).classList.add('ativo');
    })
})
