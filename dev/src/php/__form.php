<div  class="form__container" style='display: none'>
<form id='form' action="" method='POST' class="form submit-request-form clearfix">
    <div class="form__top form-block">
      <div class="form__header text-l-s">Оставить заявку</div>
      <div class="form__text">Заполните форму и мы свяжемся с вами, чтобы узнать детали вашего проекта.</div>
    </div>
    <div class="form__inputs form-block control-group">
      <div class="form__input-name form-inputblock controls">
        <label class='input-name__label text-s-l' required for="af_name">Имя*</label>
        <input id='af_name' pattern='^[a-zA-ZА-Яа-яёЁ]{2,}$' type="text" name="name" class="input-name__input form-input">
      </div>
      <div class="form__input-phone form-inputblock controls">
        <label class='input-phone__label text-s-l' required for="af_phone">Телефон*</label>
        <input pattern='^[0-9]{6,}$' id='af_phone' type="text" name="phone" class="input-phone__input form-input">
      </div>

    </div>
    <div class="form__bottom form-submit">
      <div class="form__policy form-policy">
        <input id='policy' name='policy' required type="checkbox" class="form__policy-input form-checkbox">
        <label for='policy' class="form__policy-label text-s-m">
          <p> Я принимаю <a href="policy.php" target="_blank">условия передачи информации</a></p></label>
      </div>
      <div class="form__submit">
        <input class="form__submit-btn btn" type="submit" value="Связаться с нами" />
      </div>

    </div>
  </form>
</div>