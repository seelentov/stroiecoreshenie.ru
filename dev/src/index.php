<!DOCTYPE html>
<html lang="ru">
@@include('php/__head.php',{
"title":"ООО СтройЭкоРешение"
})

<body>
  @@include('php/__header.php',{})
  <div class="wrapper">
    <main>
      <section id='banners' class="home__banners">
        @@include('php/__banners.php',{})
      </section>
      <section id='tools' class="home__our-tools">
        @@include('php/__our-tools.php',{})
      </section>
      <section id='advantages' class="home__advantages">
        @@include('php/__advantages.php',{})
      </section>
      <section id='features' class="home__features">
        @@include('php/__features.php',{})
      </section>
      <section id='promo' class="home__promo">
        @@include('php/__promo.php',{})
      </section>
      <section id='about' class="home__about">
        @@include('php/__about.php',{})
      </section>
      <section id='rewiews' class="home__reviews">
        @@include('php/__reviews.php',{})
      </section>
      <section id='callback' class="home__callback">
        @@include('php/__callback.php',{})
      </section>
      <section id='contacts' class="home__contacts">
        @@include('php/__contacts.php',{})
      </section>
    </main>
  </div>
  @@include('php/__footer.php',{})
  @@include('php/__form.php',{})
  <script src='js/app.min.js'></script>
</body>

</html>