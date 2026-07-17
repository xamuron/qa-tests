const TESTS = {
  psb: {
    id: "psb",
    title: "PSB",
    description: "Банковские продукты, SQL, API и основы тестирования",
    questions: [
      ["Что значит статус-код 301?", ["Ошибка сервера", "Постоянный редирект", "Ошибка клиента", "Временный редирект"], 1],
      ["Какой тип данных используется для хранения целых чисел в SQL?", ["varchar", "number", "float", "int"], 3],
      ["Что делает конструкция SELECT FOR UPDATE?", ["Блокирует строку для других SELECT", "Производит выборку строк, доступных для обновления", "Блокирует строку для удаления", "Блокирует строку для изменения в других транзакциях"], 3],
      ["Взаимодействие между приложениями (API testing) — это тестирование...", ["Производительности приложений при работе с внешними API", "Эффективности работы алгоритмов распределенных систем", "Безопасности и совместимости обмена данными между распределенными системами", "Приложений на разных платформах и устройствах"], 2],
      ["Какой заголовок обязателен для ответа с кодом 201 (Created)?", ["ETag", "Content-Type", "Location", "Authorization"], 2],
      ["Что такое аннуитет?", ["Процентная ставка по вкладу", "Одноразовый платеж", "Регулярные равные платежи по кредиту", "Лимит по кредитной карте"], 2],
      ["Какую информацию несут 4 цифры, следующие за контрольной цифрой в номере банковского счета?", ["Номер подразделения банка, где заключен договор на обслуживание", "Порядковый номер клиента", "Резидентство клиента", "Валюту счета"], 0],
      ["Каким методом можно обновить данные?", ["И PUT, и PATCH", "Только PUT", "Ни PUT, ни PATCH", "Только PATCH"], 0],
      ["Как выглядит запрос для вывода всех значений из таблицы ORDERS?", ["SELECT * FROM ORDERS", "SELECT * ORDERS FROM ORDERS", "SELECT % FROM ORDERS", "SELECT ALL FROM ORDERS"], 0],
      ["Какой подход подходит для проверки системы в условиях, близких к реальным, но без использования реальных данных?", ["Модульное тестирование", "Приемочное тестирование", "Интеграционное тестирование", "Тестирование с использованием заглушек и моков"], 3],
      ["Что такое DOM?", ["Сеть доставки контента", "Визуальный редактор для работы с кодом", "Объектная модель документа для работы с HTML", "Протокол передачи данных"], 2],
      ["Что из перечисленного относится к функциональному тестированию web-приложения?", ["Тестирование под разными нагрузками", "Проверка удобства пользовательского интерфейса", "Проверка времени загрузки страниц", "Проверка работы кнопки «Отправить» на форме"], 3],
      ["Что такое JOIN?", ["Операция группировки", "Операция создания", "Операция объединения", "Операция суммирования"], 2],
      ["Какой параметр в запросе API может использоваться для фильтрации данных?", ["Filter", "Limit", "Search", "Sort"], 0],
      ["Компьютер или программа, в которых все вычисления происходят на сервере, а пользователь видит результат у себя — это...", ["Сервер", "Толстый клиент", "Тонкий клиент", "Симулятор"], 2],
      ["Что такое ротация файлов логирования?", ["Возможность отображения записей от старой к новой или от новой к старой", "Поиск по временному интервалу с указанием даты «от» и даты «по»", "Фильтр по потоку информации с помощью базовых атрибутов", "Архивирование логов и удаление старых записей для замены их вновь созданными"], 3],
      ["Какое основное отличие API Gateway от Reverse Proxy?", ["Reverse Proxy управляет API-ключами, а API Gateway — нет", "API Gateway выполняет аутентификацию, кэширование и контроль версий API, а Reverse Proxy только маршрутизирует запросы", "API Gateway только маршрутизирует трафик, а Reverse Proxy управляет логикой API", "API Gateway работает только с REST API, а Reverse Proxy — только с SOAP"], 1],
      ["Что такое TestApi?", ["Текстовая ознакомительная инструкция в Postman", "Инструмент для проверки корректности запроса", "Шаблон составления тренировочного запроса", "Библиотека тестов и API"], 1],
      ["Как посчитать средний балл всех записей в таблице USERS: SELECT ... FROM USERS?", ["average(score)", "max(score)", "avg(score)", "count(score)"], 2],
      ["Какой показатель лучше всего отражает критичность найденных дефектов?", ["Test Case Pass Rate", "Mean Time to Repair (MTTR)", "Defect Density", "Defect Severity"], 3],
      ["Какой тип тестирования наименее эффективен для обнаружения утечек памяти в приложении?", ["Динамический анализ", "Модульное тестирование", "Инструментальное тестирование с профилированием", "Нагрузочное тестирование"], 1],
      ["Может ли в качестве залогодателя по ипотеке выступать несовершеннолетнее лицо?", ["Да, если он является не единственным залогодателем", "Да", "Да, но только при личном присутствии в офисе банка, в присутствии родителей или опекунов", "Нет"], 3],
      ["Атрибут, характеризующий влияние дефекта на работоспособность приложения — это...", ["Статус (Status)", "Воспроизводимость (Reproducibility)", "Приоритет (Priority)", "Серьезность (Severity)"], 3],
      ["Что проверяет REGEXP_LIKE(NAME, '^[A-Z]')?", ["NAME содержит только буквы", "NAME начинается с буквы", "NAME начинается с маленькой буквы", "NAME начинается с большой буквы"], 3],
      ["Какой формат сертификатов поддерживает Postman?", ["DER", "PEM", "Все перечисленные", "PFX"], 2],
      ["Что содержит предусловие в тест-кейсе?", ["Условие, по которому кейс выполнять не надо", "Действия, которые нужно выполнить перед прохождением тест-кейса", "Предупреждение о возможных трудностях при прохождении", "Скриншоты"], 1],
      ["Что такое кредитная карта?", ["Карта для хранения накоплений", "Карта, позволяющая делать покупки в кредит до установленного лимита", "Карта для получения скидок в магазинах", "Карта, позволяющая получать наличные деньги"], 1],
      ["Как протестировать контроли обязательного поля через API?", ["POST-запросом с неверно указанным URL-адресом", "POST-запросом с неуказанным параметром в теле", "POST-запросом с ошибкой или NULL в значении в теле", "Контроли можно протестировать только с фронта"], 1],
      ["Банковский кредит — это предоставление банком денежных средств...", ["На неопределенные нужды на неопределенный срок под неопределенные проценты", "На определенные нужды на неопределенный срок под определенные проценты", "На определенные нужды на определенный срок под определенные проценты", "На неопределенные нужды на определенный срок под неопределенные проценты"], 2],
      ["Выберите всех пользователей, у которых в имени второй буквой идет «о»: SELECT * FROM USERS...", ["WHERE NAME LIKE '%o'", "WHERE NAME LIKE '#o'", "WHERE NAME LIKE 2 * 'o'", "WHERE NAME LIKE '_o%'"], 3],
      ["Какая технология позволяет создавать адаптивные и мобильные отзывчивые web-сайты?", ["Angular", "jQuery", "AJAX", "Bootstrap"], 3],
      ["Сколько цифр в балансовом счете первого порядка?", ["5", "3", "20", "1"], 1],
      ["Сколько цифр в балансовом счете второго порядка?", ["20", "1", "2", "5"], 3],
      ["Формат архивного файла в формате JSON для протоколирования взаимодействия web-браузера с сайтом — это...", ["HAR", "AFA", "EAR", "JSON"], 0],
      ["Вертикальное тестирование — это...", ["Вид тестирования, в котором одинаковая функциональность проверяется на разных устройствах", "Тестирование, которое проверяет верстку на адаптивность", "Тестирование, которое проверяет работу при переходе между разными разделами", "Вид тестирования, который охватывает отдельные уровни приложения"], 3],
    ],
  },
};

const EXPLANATIONS = [
  "Код 301 сообщает, что ресурс окончательно перемещен на другой адрес.",
  "Тип int предназначен для целых чисел без дробной части.",
  "SELECT FOR UPDATE ставит блокировку на выбранные строки до завершения транзакции.",
  "API-тестирование проверяет корректность и безопасность обмена данными между системами.",
  "Location указывает адрес созданного ресурса.",
  "Аннуитетный платеж сохраняет одинаковую сумму на протяжении графика выплат.",
  "Эти цифры идентифицируют подразделение банка, обслуживающее счет.",
  "PUT обычно заменяет ресурс целиком, а PATCH изменяет только его часть.",
  "Символ * выбирает все столбцы указанной таблицы.",
  "Заглушки и моки имитируют реальные зависимости без использования их данных.",
  "DOM представляет HTML-документ в виде дерева объектов, доступного из кода.",
  "Работа кнопки относится к поведению функции, а не к скорости или удобству интерфейса.",
  "JOIN связывает строки из нескольких таблиц по заданному условию.",
  "Параметр Filter задает условия отбора данных в запросе.",
  "Тонкий клиент передает основную вычислительную работу серверу.",
  "Ротация ограничивает рост логов: старые файлы архивируются или удаляются.",
  "API Gateway добавляет управление API: аутентификацию, кэширование и версии.",
  "В контексте этого теста TestApi используется для проверки корректности запроса.",
  "Агрегатная функция avg вычисляет среднее значение выбранного столбца.",
  "Severity показывает силу влияния дефекта на работу системы.",
  "Обычные модульные тесты редко выявляют утечки, возникающие при длительной работе.",
  "В рамках этого теста несовершеннолетнее лицо не может выступать залогодателем по ипотеке.",
  "Severity описывает влияние дефекта, а Priority — срочность его исправления.",
  "Якорь ^ означает начало строки, а диапазон [A-Z] — заглавную латинскую букву.",
  "Postman поддерживает перечисленные форматы клиентских сертификатов.",
  "Предусловие описывает состояние и действия, необходимые до выполнения шагов теста.",
  "Кредитная карта позволяет использовать заемные средства в пределах лимита.",
  "Отсутствующий обязательный параметр должен вызвать ошибку валидации API.",
  "Кредит выдается на оговоренные цели и срок по установленной процентной ставке.",
  "Подчеркивание заменяет ровно один символ, поэтому _o% означает букву o на втором месте.",
  "Bootstrap содержит готовую адаптивную сетку и компоненты для разных экранов.",
  "Балансовый счет первого порядка состоит из трех цифр.",
  "Балансовый счет второго порядка состоит из пяти цифр.",
  "HAR хранит журнал сетевого взаимодействия браузера с сайтом в формате JSON.",
  "Вертикальное тестирование проверяет отдельные уровни приложения в глубину.",
];

const app = document.querySelector("#app");
let state = createInitialState();

function createInitialState() {
  return { screen: "home", testId: null, questionIndex: 0, score: 0, selected: null };
}

function getBestScore(testId) {
  try {
    return Number(localStorage.getItem(`qa-tests:${testId}:best`)) || 0;
  } catch {
    return 0;
  }
}

function saveBestScore(testId, score) {
  try {
    localStorage.setItem(`qa-tests:${testId}:best`, String(Math.max(score, getBestScore(testId))));
  } catch {
    // The test remains fully usable when browser storage is unavailable.
  }
}

function renderHome() {
  const test = TESTS.psb;
  const best = getBestScore(test.id);
  app.innerHTML = `
    <section>
      <p class="eyebrow">Практика без лишнего</p>
      <h1>Проверьте знания</h1>
      <p class="lead">Выберите тест, отвечайте на вопросы и сразу узнавайте результат. Лучший балл сохранится на этом устройстве.</p>
      <div class="test-list">
        <article class="test-card">
          <div class="test-meta"><span>QA-тест</span><span>${test.questions.length} вопросов</span></div>
          <h2>${test.title}</h2>
          <p>${test.description}</p>
          <div class="card-actions">
            <button class="button" type="button" data-action="start" data-test-id="${test.id}">Начать тест</button>
            ${best ? `<span class="best-score">Лучший: ${best}/${test.questions.length}</span>` : ""}
          </div>
        </article>
      </div>
    </section>`;
}

function renderQuiz() {
  const test = TESTS[state.testId];
  const question = test.questions[state.questionIndex];
  const [title, answers, correctIndex] = question;
  const answered = state.selected !== null;
  const isCorrect = state.selected === correctIndex;
  const explanation = EXPLANATIONS[state.questionIndex];
  const progress = ((state.questionIndex + (answered ? 1 : 0)) / test.questions.length) * 100;

  app.innerHTML = `
    <section class="quiz-layout" aria-labelledby="question-title">
      <div class="quiz-card">
        <div class="question-count">Вопрос ${state.questionIndex + 1} из ${test.questions.length}</div>
        <h1 class="question-title" id="question-title">${title}</h1>
        <fieldset class="answers" aria-label="Варианты ответа">
          ${answers.map((answer, index) => renderAnswer(answer, index, correctIndex)).join("")}
        </fieldset>
        ${answered ? `<p class="feedback ${isCorrect ? "" : "wrong"}" role="status"><strong>${isCorrect ? "Верно." : "Неверно."}</strong> ${isCorrect ? "Можно двигаться дальше." : `Правильный ответ: ${answers[correctIndex]}. ${explanation}`}</p>` : ""}
        <div class="quiz-actions">
          ${answered ? `<button class="button" type="button" data-action="next">${state.questionIndex === test.questions.length - 1 ? "Завершить тест" : "Следующий вопрос"}</button>` : ""}
        </div>
      </div>
      <aside class="side-panel" aria-label="Прогресс теста">
        <p class="side-label">Правильных ответов</p>
        <div class="score-now">${state.score}</div>
        <div class="progress-track" aria-hidden="true"><div class="progress-bar" style="width: ${progress}%"></div></div>
        <p class="progress-copy">Пройдено ${state.questionIndex + (answered ? 1 : 0)} из ${test.questions.length}</p>
      </aside>
    </section>`;
}

function renderAnswer(answer, index, correctIndex) {
  const answered = state.selected !== null;
  let className = "answer";
  let marker = String.fromCharCode(65 + index);

  if (answered && index === correctIndex) {
    className += " correct";
    marker = "✓";
  } else if (answered && index === state.selected) {
    className += " wrong";
    marker = "×";
  }

  return `<button class="${className}" type="button" data-action="answer" data-index="${index}" ${answered ? "disabled" : ""}><span class="answer-marker" aria-hidden="true">${marker}</span><span>${answer}</span></button>`;
}

function renderResult() {
  const test = TESTS[state.testId];
  const percent = Math.round((state.score / test.questions.length) * 100);
  const message = percent >= 80
    ? "Отличный результат. База выглядит уверенно."
    : percent >= 60
      ? "Хорошая основа. Повторите вопросы, где были ошибки."
      : "Есть что подтянуть. Еще одна попытка поможет закрепить материал.";

  saveBestScore(test.id, state.score);
  app.innerHTML = `
    <section class="result-panel">
      <div class="result-mark" aria-label="${percent} процентов">${percent}%</div>
      <p class="eyebrow">Тест завершен</p>
      <h1>${state.score} из ${test.questions.length}</h1>
      <p class="result-copy">${message}</p>
      <div class="result-actions">
        <button class="button" type="button" data-action="restart">Пройти еще раз</button>
        <button class="button secondary" type="button" data-action="home">К списку тестов</button>
      </div>
    </section>`;
}

function render() {
  if (state.screen === "quiz") renderQuiz();
  else if (state.screen === "result") renderResult();
  else renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTest(testId) {
  state = { screen: "quiz", testId, questionIndex: 0, score: 0, selected: null };
  render();
}

app.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action]");
  if (!control) return;

  const action = control.dataset.action;
  if (action === "start") startTest(control.dataset.testId);
  if (action === "restart") startTest(state.testId);
  if (action === "home") {
    state = createInitialState();
    render();
  }
  if (action === "answer" && state.selected === null) {
    state.selected = Number(control.dataset.index);
    const correctIndex = TESTS[state.testId].questions[state.questionIndex][2];
    if (state.selected === correctIndex) state.score += 1;
    render();
  }
  if (action === "next") {
    const test = TESTS[state.testId];
    if (state.questionIndex === test.questions.length - 1) {
      state.screen = "result";
    } else {
      state.questionIndex += 1;
      state.selected = null;
    }
    render();
  }
});

document.querySelector(".site-header").addEventListener("click", (event) => {
  const control = event.target.closest('[data-action="home"]');
  if (!control) return;
  event.preventDefault();
  state = createInitialState();
  render();
});

render();
