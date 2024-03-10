// На HTML-сторінці є 6 чекбоксів. 
// Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси,
// всі чекбокси робить неактивними.

// Завдання виділене вставкою Task4
const checkboxes = $("input[type='checkbox']");
checkboxes.change(function() {
    const checkedCh = checkboxes.filter(":checked");
    if (checkedCh.length === 3) {
        checkboxes.prop("disabled", true);
    } 
})