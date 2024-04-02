(function ($) {
  $.fn.bakery = function () {
    var horizontal_bakery = [
      '<li class="li-with-bakery"><a href="#" id="Production">Menu</a></li>',
    ];

    var vertical_bakery_menu = [
      '<li><a id="Desserts" href="Menu.html">Desserts</a></li>',
      '<li><a id="Love_Bakery" href="AboutUS.html">Love_Bakery</a></li>',
      '<li><a id="Support" href="Contacts.html">Support</a></li>',
    ];

    $(this).append('<div class="bakery"></div>');
    $(this).find(".bakery").append("<ul></ul>");

    for (i = 0; i < horizontal_bakery.length; i++) {
      $(this).find(".bakery ul").append(horizontal_bakery[i]);
    }

    $(this).find(".li-with-bakery").append('<ul class="menu-bakery"></ul>');
    for (i = 0; i < vertical_bakery_menu.length; i++) {
      $(this).find(".menu-bakery").append(vertical_bakery_menu[i]);
    }
    $(this).find(".menu-bakery").hide();

    // Показуємо випадаюче меню при наведенні курсора
    $(this).on("mouseenter", "#Production", function () {
      $(this).parent().find(".menu-bakery").show();
    });

    // Ховаємо випадаюче меню при знятті курсора
    $(this).on("mouseleave", ".menu-bakery", function () {
      $(this).hide();
    });

    // Обробник події для активації посилань у випадаючому меню
    $(this)
      .find(".menu-bakery a")
      .click(function (e) {
        e.preventDefault(); // Заборона переходу за посиланням
        var href = $(this).attr("href"); // Отримуємо адресу посилання
        window.location.href = href; // Перенаправлення на вказану адресу
      });
  };
})(jQuery);

$(document).ready(function () {
  $(".header").bakery();
});
