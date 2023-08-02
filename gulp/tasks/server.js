export const server = (done) => {
  app.plugins.browsersync.init({
    proxy: 'educ.dev', // Замените на адрес и порт вашего сервера Open Server
    notify: false
  })
}
