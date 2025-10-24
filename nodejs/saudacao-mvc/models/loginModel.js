//corretoo

module.exports = {
  gerarMensagemLogin: (email, senha) => {
    if (email === "pixnono3@gmail.com" && senha === "1234") {
      return "Login completado com sucesso";
    } else {
      return "Login incorreto";
    }
  }
};
