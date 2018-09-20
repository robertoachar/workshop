module.exports = {
  title: 'Título do Treinamento',
  description: 'Descrição do Treinamento',
  dest: './build',
  themeConfig: {
    sidebar: {
      '/workshop/': [
        {
          title: 'Conteúdo',
          collapsable: true,
          children: ['']
        }
      ]
    }
  }
};
