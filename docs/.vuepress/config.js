const head = require('./head');

module.exports = {
  title: 'Título do Treinamento',
  description: 'Descrição do Treinamento',
  dest: './build',
  serviceWorker: true,
  head,
  themeConfig: {
    sidebar: {
      '/workshop/': [
        {
          title: 'Conteúdo',
          collapsable: true,
          children: ['']
        }
      ]
    },
    serviceWorker: {
      updatePopup: {
        message: 'Novo conteúdo disponível.',
        buttonText: 'Atualizar'
      }
    }
  }
};
