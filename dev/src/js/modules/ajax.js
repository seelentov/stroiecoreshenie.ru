/* eslint-disable no-undef */
$(document).ready(function () {
  $('#form').submit(function (e) { // устанавливаем событие отправки для формы с id=form
    e.preventDefault()
    const formData = $(this).serialize() // собераем все данные из формы
    $.ajax({
      type: 'POST', // Метод отправки
      url: 'send.php', // путь до php фаила отправителя
      data: formData,
      success: function () {
        // код в этом блоке выполняется при успешной отправке сообщения
        alert('Ваше сообщение отпрвлено!')
      }
    })
  })
})
// закрыть форму
