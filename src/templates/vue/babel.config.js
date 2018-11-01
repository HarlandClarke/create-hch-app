module.exports = {
  presets: [
    '@vue/app'<% if (lang === 'js') { %>,
    '@babel/preset-env'<% } else if (lang === 'es2015') { %>,
    '@babel/preset-es2015'<% } else if (lang === 'es2016') { %>,
    '@babel/preset-es2016'<% } else if (lang === 'es2017') { %>,
    '@babel/preset-es2017'<% } %>
  ]
}
