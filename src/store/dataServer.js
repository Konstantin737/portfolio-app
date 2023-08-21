export const portfolioInfo = {
   firstName: 'Константин',
   middleName: 'Алексвндрович',
   lastName: 'Самарцев',
   photo: 'photo.png',
   years: new Date().getFullYear() - 1984,
   email: 'samarcev737@yandex.ru',
   site: 'http://site.skilbe.ru',
   courses: [
      'HTML и СSS Уровень 1 - 3. Специалист при МГТУ им. Баумана, Web-верстка',
      'Современный JavaScript с нуля до junior специалиста. Udemy, Frontend-разработчик',
      'Современный React с Нуля. Udemy, Frontend-разработчик',
      'Полный курс по JavaScript + React - с нуля до результата. Udemy, Frontend-разработчик',
      'React - Полный курс по React + hook Context API (2022). Udemy, Frontend-разработчик',
      'Redux - для управления состоянием React-приложений (2022). Udemy, Frontend-разработчик'
   ],
   gitHub: 'https://github.com/Konstantin737?tab=repositories',
   codeWars: 'https://www.codewars.com/users/Samarcev737',
   finishedWorks: [
      {
         id:1,
         nameWork: 'Первая самостоятельная верстка страницы магазина подарков',
         stack: ['HTML', 'CSS'],
         image: ['HTMLCSS4.png'],
         description: 'Работа была сделана по макету в Photoshop без использования flex и grid. Для позиционирования использовалось block, inline-block, position: releative, position: absolute.',
         gitHub: 'Не выкладывал на GitHub.',
         isOpenBtn: false
      },
      {
         id:2,
         nameWork: 'Верстка страницы сайта "РЖД"',
         stack: ['HTML', 'CSS'],
         image: ['HTMLCSS5.png'],
         description: 'Работа была сделана по PrintScreen c реального сайта "РЖД" без использования flex и grid. Для позиционирования использовалось block, inline-block, position: releative, position: absolute',
         gitHub: 'https://github.com/Konstantin737/2.RZD.',
         isOpenBtn: false
      },
      {
         id:3,
         nameWork: 'Верстка страницы сайта о путешествиях',
         stack: ['HTML', 'CSS'],
         image: ['HTMLCSS3.png'],
         description: 'Работа была сделана по макету в Photoshop без использования flex и grid. Для позиционирования использовалось block, inline-block, position: releative, position: absolute.',
         gitHub: 'https://github.com/Konstantin737/5.TrevelMaps',
         isOpenBtn: false
      },
      {
         id:4,
         nameWork: 'Верстка страницы социальной сети Twitter',
         stack: ['HTML', 'CSS'],
         image: ['HTMLCSS2.png'],
         description: 'Работа была сделана по PrintScreen c реального сайта социальной сети Twitter. Для позиционирования использовалось flex, inline-flex.',
         gitHub: 'https://github.com/Konstantin737/6.Twitter',
         isOpenBtn: false
      },
      {
         id:5,
         nameWork: 'Верстка страницы музыкального портала MusicUI',
         stack: ['HTML', 'CSS'],
         image: ['HTMLCSS.png'],
         description: 'Работа была сделана по PrintScreen c реального сайта музыкального портала MusicUI. Для позиционирования использовалось flex, inline-flex.',
         gitHub: 'https://github.com/Konstantin737/7.MusicUI',
         isOpenBtn: false
      },
      {
         id:6,
         nameWork: 'Адаптивная верстка страницы сайта здорового питания для животных',
         stack: ['HTML', 'CSS'],
         image: ['adaptiv.png', 'adaptiv1.png', 'adaptiv2.png', 'adaptiv3.png', 'adaptiv4.png', 'adaptiv5.png', 'adaptiv6.png'],
         description: 'Работа была сделана по макету в Figma. Выполнил три верстки PC, Laptop, Moile отображающиеся в зависимости от используемого устройства. Впервые в проекте имплементировал в верстку выподающее меню для мобильной версии.',
         gitHub: 'https://github.com/Konstantin737/7.MusicUI',
         isOpenBtn: false
      },
      {
         id:7,
         nameWork: 'Игра "Угадай число"',
         stack: ['HTML', 'CSS', 'JavaScript'],
         image: ['game2.png'],
         description: 'Мое первое знакомство с JavaScript и практическое задание по написанию легкой игры.',
         gitHub: 'https://github.com/Konstantin737/10.Guess-the-Number-The-Game-JS-pract-2-'
      },
      {
         id:8,
         nameWork: 'Игра "Свинья"',
         stack: ['HTML', 'CSS', 'JavaScript'],
         image: ['game1.png', 'game1-2.png', 'game1-3.png'],
         description: 'Второе домашнее практическое задание по созданию браузерной игры на JavaScript.',
         gitHub: 'https://github.com/Konstantin737/11.Pig-The-Game-JS-pract-3-',
         isOpenBtn: false
      },
      {
         id:9,
         nameWork: 'Создание Frontend версии онлайн-банка',
         stack: ['HTML', 'CSS', 'JavaScript'],
         image: ['JS.png'],
         description: 'Большой учебный проект по созданию онлайн банка. Что бы проверить работоспособность нужно знать информацию о юзерах находящихся в открытом доступе в script.js. При первой загрузке страницы скрипт создает никнеймы ползователей по первым буквам ФИО в нижнем регистре. Введите в поле Nick: ks и в PIN: 1111. Будет выполнен вход за юзера Konstantin Samartsev. Вы увидете все его транзакции по счету, можно выполнять переводы другим клиентам банка при положительном балансе, которые будут отображатся в их аккаунтах, запрашивать займы или закрыть счет.',
         gitHub: 'https://github.com/Konstantin737/SimplyBankApp',
         isOpenBtn: false
      },
      {
         id:10,
         nameWork: 'Создание Frontend версии сайта визитки онлайн-банка',
         stack: ['HTML', 'CSS', 'JavaScript'],
         image: ['JS2.png', 'JS2-1.png', 'JS2-2.png', 'JS2-3.png'],
         description: 'Большой учебный проект по созданию сайта визитки онлайн банка. Проект выполнен для отработки навигации по сайту с использованием IntersectionObserver, имплементация ленивой загрузки Lazy Loading картинок высокого качества для увеличения скорости работы сайта. Впервые на сайте исользовал карусель из постов пользователей. Сайт выполнен по программе курса по Java Script совместно с лектором.',
         gitHub: 'https://github.com/Konstantin737/SimplyBankAppTwo',
         isOpenBtn: false
      },
      {
         id:11,
         nameWork: 'Создание сайта о здоровом питании',
         stack: ['HTML', 'CSS', 'JavaScript'],
         image: ['JS1.1.png', 'JS1.2.png'],
         description: 'Большой учебный проект по созданию сайта о здоровом питании. Проект выполнен для отработки навигации по сайту, имплементация калькулятора, таймера, карусели, модального окна обратной связи, отработана работа с new Date, а так же выполнено оживление мертвой верстки сайта при помощи JS.',
         gitHub: 'https://github.com/Konstantin737/My-Food-Restaurant',
         isOpenBtn: false
      },
      {
         id:12,
         nameWork: 'Создание визитка ЕМПУ "Здоровье"',
         stack: ['HTML', 'CSS', 'JavaScript'],
         image: ['Pharmacy.png', 'Pharmacy2.png', 'Pharmacy3.png', 'Pharmacy4.png', 'Pharmacy5.png'],
         description: 'Проект сайта визитки для реальной аптеки ЕМПУ "Здоровье". Сайт выполнен на чистом JS, для карусели использован готовый скрипт OWL Carusel, для формы обратной связи использован PHP Mailer. Сайт сделан полностью с резиновой версткой и проверен на https://pagespeed.web.dev/ на скорость работы мобильной и ПК версии выше 95%.',
         gitHub: 'https://github.com/Konstantin737/ParmacyHealth',
         isOpenBtn: false
      },
      {
         id:13,
         nameWork: 'Создание простейшего Todo листа на React',
         stack: ['JavaScript', 'React'],
         image: ['React5.png', 'React5-1.png', 'React5-2.png'],
         description: 'Простейший лист задач по практическому заданию онлайн курса по React.',
         gitHub: 'https://github.com/Konstantin737/TodoApp',
         isOpenBtn: false
      },
      {
         id:14,
         nameWork: 'Сайта заказа японской еды',
         stack: ['JavaScript', 'React'],
         image: ['React3-0.png', 'React3.png', 'React3-1.png'],
         description: 'Сайт по заказу японской еды на React с имплементацией корзины. Выполнен по программе курса совместно с лектором и отдельно от него(практические задания).',
         gitHub: 'https://github.com/Konstantin737/JapanFoodApp',
         isOpenBtn: false
      },
      {
         id:15,
         nameWork: 'Сайт по заданию онлайн курса Redux',
         stack: ['JavaScript', 'React', 'Redux'],
         image: ['dashboard1.png', 'dashboard2.png', 'dashboard3.png', 'dashboard4.png', 'dashboard5.png'],
         description: 'Практическое работа по программе курса с использованием Redux. Выполнено совместно с лектором',
         gitHub: 'https://github.com/Konstantin737/dashboard-app-redux',
         isOpenBtn: false
      },
      {
         id:16,
         nameWork: 'Тестовое задания для компании Alpha-Bank',
         stack: ['JavaScript', 'React', 'Redux'],
         image: ['React4.png', 'React4-1.png', 'React4-2.png', 'React4-3.png', 'React4-4.png', 'React4-5.png', 'React4-6.png', 'React4-7.png'],
         description: 'Тестовое задание-отклик на вакансию компании на React. Создать SPA со списком карточек, на каждой из которых выводится картинка и любая информация на ваш вкус, которая пришла с эндпоинта. Для задачи можно выбрать любое публичное api. На карточке должна быть иконка лайка. При нажатии на которую, ставится или убирается лайк. Иконка должна подкрашиваться, когда залайкана. На карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется. Сверху должна быть кнопка фильтра, которая по нажатию показывает только залайканые карточки. При отжатии опять показываются все карточки. Дизайн не важен, главное, чтобы было просто и аккуратно. По стэку ориентируемся на список ниже. Остальные решения на вас. Стэк: React Redux желательно, но можно выбрать другой стейт-менеджер TS желательно, но не обязательно.',
         gitHub: 'https://github.com/Konstantin737/user_post_app',
         isOpenBtn: false
      },
      {
         id:17,
         nameWork: 'Тестовое задания для компании MitraSoft',
         stack: ['JavaScript', 'React', 'Redux', 'Bootstrap'],
         image: ['MitraSoft.png', 'MitraSoft1.png', 'MitraSoft2.png', 'MitraSoft3.png'],
         description: 'Тестовое задание-отклик на вакансию компании на React с использованием React-bootstrap, React-router, Redux. Описание задачи: создать сайт с постами, где будут присутствовать 3 страницы (роута): 1. Список постов (главная страница), где будут располагаться все посты. 2. Обо мне, где будет располагаться краткая информация о Вас. 3. Подробности о пользователе (куда необходимо вывести информацию о пользователе и список его постов) Получить данные необходимо через фейковое api https://jsonplaceholder.typicode.com. Подробное описание: 1. Список постов (главная страница): 1.1. Должна содержать список всех постов 1.2 Каждый пост состоит из заголовка, текста, аватара автора и списка комментариев 1.3 Заголовок и текст брать из api 1.4 Аватар должен быть одним изображением для всех пользователей, но при клике на него, должен происходить переход на страницу Подробности о пользователе. 1.5 Список комментариев изначально скрыт, доступна лишь кнопка Комментарии 1.6 При нажатии на кнопку Комментарии, должен грузиться из api и показываться список комментариев к данному посту. При повторном нажатии список должен скрываться 1.7  Комментарий состоит из заголовка(email) и текста 1.8. При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунд чтобы лоадер повисел подольше). 1.9. Должен присутствовать хэдер с «меню-бургером». При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки (Список постов и Обо мне), а также отображаться ваш аватар, имя и почтовый адрес. 2. Обо мне 2.1. Здесь всё просто, расскажите немного о себе. Сделайте эту страницу отдельным роутом, сохранив при этом хэдер и «меню-бургер». 3. Подробности о пользователе (переход при нажатии по аватару у поста) 3.1. Необходимо создать карточку, куда вывести краткую информацию о пользователе. Информация должна соответствовать автору поста. 3.2 Отобразить список постов принадлежащих только данному пользователю, структура самих постов полностью идентична с п.1.2. 3.3. Добавить лоадер по аналогии с п.1.8.3.4. Сделать кнопку «Назад», при нажатии на которую произойдет переход на главную страницу.',
         gitHub: 'https://github.com/Konstantin737/user_post_app',
         isOpenBtn: false
      },
      {
         id:18,
         nameWork: 'Конвертер валют',
         stack: ['JavaScript', 'React'],
         image: ['React1.png', 'React1-2.png', 'React1-3.png', 'React1-4.png', 'React1-5.png'],
         description: 'Приложение конвертера валют с прямым и обратным переводом выполненное на React. Использование стороннего API. Создано в течении одного дня для себя',
         gitHub: 'https://github.com/Konstantin737/ExchangeRate',
         isOpenBtn: false
      },
      {
         id:19,
         nameWork: 'Электронное портфолио для себя',
         stack: ['JavaScript', 'React', 'Redux', 'Bootstrap'],
         image: ['port1.png', 'port2.png', 'port3.png', 'port4.png', 'port5.png', 'port6.png'],
         description: 'Приложение портфолио с эскизами выполненных работ, ссылками на GitHub и контактной информацией',
         gitHub: 'https://github.com/Konstantin737/portfolio-app',
         isOpenBtn: false
      }
   ]
}