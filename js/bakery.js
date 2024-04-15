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

    $(this).on("mouseenter", "#Production", function () {
      $(this).parent().find(".menu-bakery").show();
    });

    $(this).on("mouseleave", ".menu-bakery", function () {
      $(this).hide();
    });

    $(this)
      .find(".menu-bakery a")
      .click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        window.location.href = href;
      });
  };
})(jQuery);

$(document).ready(function () {
  $(".header").bakery();

  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  if (window.location.href.indexOf("AboutUS.html") > -1) {
    $("body").append(
      '<div class="modal"><div class="modal-content"><span class="close">&times;</span><p>Special Discount! Visit Love_Bakery now and get 10% off on all items!</p></div></div>'
    );

    if (currentHour >= 12 && currentHour < 17) {
      $(".modal").show();
    }

    $(".close").click(function () {
      $(".modal").hide();
    });

    $(window).click(function (e) {
      if ($(e.target).hasClass("modal")) {
        $(".modal").hide();
      }
    });
  }
});

(function ($) {
  $(document).ready(function () {
    $("#order-form").submit(function (e) {
      e.preventDefault();

      var orderData = {
        "Saint-Honoré": {
          quantity: parseInt($("#saint-honore-quantity").val()),
          selected: $("#saint-honore").is(":checked"),
        },
        Opéra: {
          quantity: parseInt($("#opera-quantity").val()),
          selected: $("#opera").is(":checked"),
        },
        "Heart Macarons": {
          quantity: parseInt($("#heart-macarons-quantity").val()),
          selected: $("#heart-macarons").is(":checked"),
        },
        "Paris-Brest": {
          quantity: parseInt($("#paris-brest-quantity").val()),
          selected: $("#paris-brest").is(":checked"),
        },
      };

      localStorage.setItem("orderData", JSON.stringify(orderData));

      alert("Your order has been successfully placed!");

      $("#order-form")[0].reset();
    });
  });
})(jQuery);
