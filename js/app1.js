// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає
document.getElementById('textInput').addEventListener('focus', function() {
    document.getElementById('div').style.display = 'block';
});

document.getElementById('textInput').addEventListener('blur', function() {
    document.getElementById('div').style.display = 'none';
});