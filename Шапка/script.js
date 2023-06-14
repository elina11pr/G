document.addEventListener('DOMContentLoaded', function() {
    var galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function(item) {
        item.addEventListener('mousemove', function(event) {
            var bounds = this.getBoundingClientRect();
            var x = event.clientX - bounds.left;
            var y = event.clientY - bounds.top;

            this.style.transformOrigin = x + 'px ' + y + 'px';
            this.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transformOrigin = 'center center';
            this.style.transform = 'scale(1)';
        });
    });
});
  


document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    var firstNameInput = document.getElementById("first-name");
    var lastNameInput = document.getElementById("last-name");
    var countryInput = document.getElementById("country");
    var messageInput = document.getElementById("message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      //  логіка обробки форми тут
  
      alert("Форма успішно відправлена!");
      form.reset();
    });
  });
   // Отримання поточної дати та часу
   var currentDate = new Date();
   var dateString = currentDate.toLocaleDateString();
   var timeString = currentDate.toLocaleTimeString();

   // Оновлення елементу з id "newsDate" з поточною датою та часом
   document.getElementById("newsDate").innerHTML = "Опубліковано: " + dateString + " " + timeString;
  