module.exports = {
  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' });
  },

  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  }
};
