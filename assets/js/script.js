(function() {
  const container = document.querySelector(".js-scroll-content");
  const items = Array.from(container.querySelectorAll(".js-scroll-item"));
  let itemsNumber = items.length;
  const navLinks = Array.from(document.querySelectorAll(".js-scroll-link"));
  let currentItemIndex = 0;
  let scroll = true;

  const moveSection = index => {
    let positionTop = -index * 100 + "%";
    container.style.top = positionTop;
  };

  const setLocation = index => (window.location = `#${items[index].id}`);

  // Set strart params
  container.style.top = 0;
  setLocation(currentItemIndex);
  itemsNumber--;

  // Scrolling section by navigation.
  navLinks.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      let sectionID = element.getAttribute("href").slice(1);

      currentItemIndex = items.findIndex(element => {
        return element.id === sectionID;
      });

      moveSection(currentItemIndex);
    });
  });

  // Scrolling sections by mouse/touchpad.
  window.addEventListener("wheel", event => {
    
    if(window.innerWidth <= 1000) {
      scroll = false;
    } else {
      event.preventDefault();
      event.stopPropagation();

      let direction = event.deltaY;

      if (scroll) {
        if (direction > 0 && currentItemIndex < itemsNumber) {
          currentItemIndex++;
          scroll = false;
        } else if (direction < 0 && currentItemIndex !== 0) {
          currentItemIndex--;
          scroll = false;
        }
        moveSection(currentItemIndex);
      }
    }

  });

  container.addEventListener("transitionend", () => {
    setTimeout(() => (scroll = true), 400);
    setLocation(currentItemIndex);
  });
})();

/*-----------------------/active menu-------------------------*/

$(document).ready(function() {
    $(".menu-icon").on("click",function (){
        $("nav ul").toggleClass("showing");
    });

    $(window).on("scroll",function (){
        $("nav ul").removeClass("showing");
    });
});

$(document).ready(function(){
    $("#close-1").click(function(){
        $("#form-1").fadeOut(1000);
    });
    $("#btn-main").click(function(){
        $("#form-1").fadeIn(1000);
    });
});

$(document).ready(function(){
    $("#close-1").click(function(){
        $("#form-1").fadeOut(1000);
    });
    $("#btn-small-1").click(function(){
        $("#form-1").fadeIn(1000);
    });
});

// form 2 ----------------------------------------------------

$(document).ready(function(){
            $('#btn_submit').click(function(){
                // собираем данные с формы
                var user_name    = $('#user_name').val();
                var text_comment = $('#user_phone').val();
                // отправляем данные
                $.ajax({
                    url: "action.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name":    user_name,
                        "user_phone": text_comment
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages').html(data.result); // выводим ответ сервера
                    }
                });
            });
        });


// form 2 ----------------------------------------------------


$(document).ready(function(){
            $('#btn_bottom').click(function(){
                // собираем данные с формы
                var user_name2    = $('#user_name2').val();
                var text_comment2 = $('#user_phone2').val();
                // отправляем данные
                $.ajax({
                    url: "action2.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name2":    user_name2,
                        "user_phone2": text_comment2
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages2').html(data.result); // выводим ответ сервера
                    }
                });
            });
        });



//  ----------------------------------------------------


$(document).ready(function(){
            $('#btn_subscribe').click(function(){
                // собираем данные с формы
                var user_name3    = $('#user_name3').val();
                var text_comment3 = $('#user_mail3').val();
                // отправляем данные
                $.ajax({
                    url: "action3.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name3":    user_name3,
                        "user_mail3": text_comment3
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages3').html(data.result); // выводим ответ сервера
                    }
                });
            });
        });


//  ----------------------------------------------------

$(this).keydown(function(eventObject){
    if (eventObject.which == 27)
        $('#form-1').fadeOut(1000);
});

$(this).keydown(function(eventObject){
    if (eventObject.which == 27)
        $('#form-2').fadeOut(1000);
});

$(document).ready(function () {
    setTimeout(function(){ 
        $("#form-2").fadeIn(1000); }, 30000);
    $("#close-2").click(function(){
        $("#form-2").fadeOut(1000);
    });
});

$(document).ready(function () {
    $(".btn-small").click(function(){
        $("#form-1").fadeIn(1000);
    });  
});


