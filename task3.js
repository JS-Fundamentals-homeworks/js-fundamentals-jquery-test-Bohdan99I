// Знайдіть теги <div>, які стоять безпосередньо після <h3> 
// і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

// Завдання виділене вставкою Task3

$("div").each(function() {
    const prevEl = $(this).prev();
    if (prevEl.is("h3")) {
        $(this).insertBefore(prevEl);
    }
});
