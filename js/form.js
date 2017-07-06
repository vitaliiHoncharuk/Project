$(function() {
	$('#submit').click(sendForm);

});

function sendForm(e) {
	e.preventDefault();
	$.ajax({
		url: "https://formspree.io/goncharukvitalij@gmail.com",
		method: "POST",
		data: {
			name: $('#name').val(),
			email: $('#mail').val(),
            subject:$('#subject').val(),
            Mymessage:$('#Mymessage').val()
            },
		dataType: "json"
	})
	.done(function () {
        document.getElementById("contact-us").reset();
        alert("Повідомлення надіслано.Дякуємо!");
    });
}