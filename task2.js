// На HTML-сторінці є посилання <a>. У випадку коли, 
// href починається на https://,
// потрібно додати посиланню атрибут target="_blank".

// Завдання виділене вставкою Task2

$("a").each(function() {
    if ($(this).attr("href").startsWith("https://")) {
        $(this).attr("target", "_blank");
    }
})