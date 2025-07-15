document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.querySelector('.hvr');      // Левая кнопка
    const btn2 = document.querySelector('.button-2'); // Правая кнопка
    const text = document.querySelector('.paragraph-header'); // Текст
    const png = document.querySelector('.chemp');    // Изображение

    if (btn1 && text && btn2 && png) { 
        // Наведение на правую кнопку (btn2)
        btn2.addEventListener('mouseenter', () => {
            
            text.style.transform = "scale(1.05)"; // увеличение
            text.style.transition = "all 0.3s ease"; // Плавная анимация
        });

        // Уход курсора с правой кнопки (btn2)
        btn2.addEventListener('mouseleave', () => {
            // Возвращаем текст в исходное состояние:
            text.style.color = ""; // Сброс цвета
            text.style.transform = "rotate(0) scale(1)"; // Сброс поворота и масштаба
        });

        btn1.addEventListener('mouseenter', () => {
            png.style.transform = "rotate(5deg) scale(1.1)";
            png.style.transition = "transform 0.3s ease";
        });

        btn1.addEventListener('mouseleave', () => {
            png.style.transform = "rotate(0) scale(1)";
        });
    }
});