
const form = document.getElementById('form-valida'); 
let formEValido = false;


form.addEventListener('submit', function(e){
    e.preventDefault();

     const valorA = document.getElementById('campoA');
     const valorB = document.getElementById('campoB');
     const mensagemSucesso = `Parabéns: Campo A: <b>${valorA.value}</b> e o campo B: <b>${valorB.value}</b> estão corretos!`;
     const errormensagem = `Campo A precisa ser menor que o campo B`;
     formEValido = valorB.value > valorA.value
    if(formEValido){
        const containerMesagemSucesso = document.querySelector('.sucess-message');
        containerMesagemSucesso.innerHTML = mensagemSucesso;
        containerMesagemSucesso.style.display = 'block';

        document.querySelector('.error-message').style.display = 'none';
    }else{
        const containerMesagemError = document.querySelector('.error-message');
        containerMesagemError.innerHTML = errormensagem;
        containerMesagemError.style.display = 'block';

        document.querySelector('.sucess-message').style.display = 'none';
     }
    
})

