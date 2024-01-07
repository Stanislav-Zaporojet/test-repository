



const img = document.querySelector('#imgHolder img');
const buttons = document.querySelectorAll('.colorItem');

// 2 Отслеживаем пользовательские собития
buttons.forEach(function(item){
    item.addEventListener('click', function(event){

        // console.log(event.target.getAttribute('data-file'));
        console.log(event.target.dataset.file);

        //Получаем имя файла из data атрибута, 'color png'
        const fileName = event.target.dataset.file; 

        //Формируем новое значение для атрибута src = путь к директории + имя файла
        const newSrc = img.src = 'https://webcademy.ru/files/js2020/solaris/' + fileName;

        //Устанавливаем новое значение для атрибута src у изображения с авто
        img.src = newSrc;

        // Убираем активный класс у "прошлой активной кнопки"
        const prevActiveButton = document.querySelector('.colorItem--active');
        prevActiveButton.classList.remove('colorItem--active');

        // Кнопка по которой мы нажали - делаем ее активной активной, добавляем класс colorItem--active
        event.target.classList.add('colorItem--active');
    })
})






img.src = 'https://webcademy.ru/files/js2020/solaris/red.png';
img.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/red.png');