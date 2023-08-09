export const server = (done) => {
  app.plugins.browsersync.init({
    proxy: 'stroiecoreshenie.ru', // Замените на адрес и порт вашего сервера Open Server
    notify: false
  })
}
