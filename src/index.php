<!DOCTYPE html>
<html lang="ru">
  @@include('php/__head.php',{
    "title":"Тест"
  })
<body>
  @@include('php/__header.php',{})
<div class="wrapper">
<main>
  <section class="home__banners">
  @@include('php/__banners.php',{})
  </section>
  
</main>
</div>
  @@include('php/__footer.php',{})
  <script src='js/app.min.js'></script>
</body>
</html>