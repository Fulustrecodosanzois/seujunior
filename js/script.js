document.addEventListener("DOMContentLoaded", function () {
  const meuForm = document.getElementById("meuForm");
  const enviarBtn = document.querySelector(".enviar-btn");

  enviarBtn.addEventListener("click", function () {
    if (meuForm.checkValidity()) {
      // A lógica do envio via WhatsApp
      const nome = document.querySelector(".nome").value;
      const telefone = document.querySelector(".telefone").value;
      const mensagem = document.querySelector(".mensagem").value;
      const escolha = document.querySelector(".escolha").value;

      const mensagemFormatada = `Seja Bem Vindo(a) a   WR Refrigeração!%0A%0A**Informações do Contato**%0A%0A*Nome:* ${nome}%0A%0A*Telefone:* ${telefone}%0A%0A*Tipo de Serviço:* ${escolha}%0A%0A*Mensagem:*%0A%0A${mensagem}`;

      const numeroWhatsApp = "5598988257268";

      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

      window.open(urlWhatsApp);
    } else {
      meuForm.classList.add('was-validated');
    }
  });
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()