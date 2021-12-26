import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISongsState } from './songsTypes'
import { v1 } from 'uuid'

const initialState: ISongsState = {
  songs: [
    {
      id: v1(),
      artist: 'А.Пугачева',
      songTitle: 'Падали две звезды',
      youtubeRef: 'https://youtu.be/vM11QpYzhwk?t=30',
      content: 'Алексей Панин...\nКиркоров и Басков…\nПадаль и две звезды'
    },
    {
      id: v1(),
      artist: 'RASA',
      songTitle: 'Пчеловод',
      youtubeRef: 'https://youtu.be/9knYNjp95bs?t=14',
      content: 'А я в улей сунул лоб\nТы пчела, я долбаёб'
    },
    {
      id: v1(),
      artist: 'Чиж и Co',
      songTitle: 'Гей, да конь мой вороной',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Ой… раввин был озорной\nОй… да обрез шальной'
    },
    {
      id: v1(),
      artist: 'Стас Костюшкин',
      songTitle: 'Женщина, я не танцую',
      youtubeRef: 'https://youtu.be/LCsiOYTFSpk?t=12',
      content: 'Женщина – не танцую\nЖенщина – я не танцую\nХватит издеваться\nЯ же блядь Ник Вуйчич'
    },
    {
      id: v1(),
      artist: 'Весёлые ребята',
      songTitle: 'Розовые розы',
      youtubeRef: 'https://youtu.be/D3Sh4NK_Qkk?t=42',
      content: 'У Светки Соколовой отклонение\n' +
        'Ей сегодня 30 лет\n' +
        'Я несу в подарок поздравление\n' +
        'И конструктор детям до 3 лет\n' +
        'Крупные детали… о-у-о…\n' +
        'Чтоб не проглотила'
    },
    {
      id: v1(),
      artist: 'MATRANG',
      songTitle: 'Медуза',
      youtubeRef: 'https://youtu.be/HNHbQXnTWbw?t=76',
      content: 'Медуза… Медузу… Медуза…\n' +
        'Жжёт в трусах… Медуза'
    },
    {
      id: v1(),
      artist: 'из к/ф "Москва слезам не верит"',
      songTitle: 'Александра-Александра',
      youtubeRef: 'https://youtu.be/NS5KJ7QSh2A?t=5',
      content: 'Александра, Александра,\n' +
        'Александра Грей – актриса\n' +
        'Угадайте, что у Саши\n' +
        'С баскетбольное кольцо'
    },
    {
      id: v1(),
      artist: 'Niletto',
      songTitle: 'Любимка',
      youtubeRef: 'https://youtu.be/xSgT4ZtT5M0',
      content: 'Крылья KFC – В туалете пальба\n' +
        'Время пострелять – занята на три часа\n' +
        'Кабинка…'
    },
    {
      id: v1(),
      artist: 'Руки Вверх!',
      songTitle: 'Студент',
      youtubeRef: 'https://youtu.be/tIC2YV7SPXk?t=45',
      content: 'Мы двое с тобой, мы не разлей вода\n' +
        'У нас две разных руки и общая спина\n' +
        'А ты простой студент, а я простой пацан\n' +
        'И все завидуют нам – сиамским близнецам'
    },
    {
      id: v1(),
      artist: 'Егор Крид & MOLLY',
      songTitle: 'Если ты меня не любишь',
      youtubeRef: 'https://youtu.be/RI4ALqHtGrs?t=19',
      content: 'Если ты меня не любишь\n' +
        'Может хоть минет'
    },
    {
      id: v1(),
      artist: 'Народная',
      songTitle: 'Катюша',
      youtubeRef: 'https://youtu.be/4rhp7Q7Ceq8?t=26',
      content: 'Растегаи, яблоки и груши\n' +
        'Колбаса и батон большой\n' +
        'Вот такая промежность у Катюши\n' +
        'И пакет не надо брать с собой'
    },
    {
      id: v1(),
      artist: 'Песня из мультфильма "Бобик в гостях у Барбоса"',
      songTitle: 'Человек собаке друг',
      youtubeRef: 'https://youtu.be/KlE6WH16tGc?t=8',
      content: 'Человек собаке вдул… ту-ту-ту\n' +
        'Раньше в Жмурках он играл'
    },
    {
      id: v1(),
      artist: 'Песни военных лет',
      songTitle: 'Пора в путь-дорогу',
      youtubeRef: 'https://youtu.be/JIy7DqeBNco?t=7',
      content: 'Наташа бесится, бесится, бесится\n' +
        'Ведь секса не было уже четыре месяца'
    },
    {
      id: v1(),
      artist: 'Валерий Меладзе',
      songTitle: 'Девушка из высшего общества',
      youtubeRef: 'https://youtu.be/sHEf4ETAJR0?t=23',
      content: 'У Сосо Павлиашвили с отрочества\n' +
        'Дочь сильно стесняется отчества'
    },
    {
      id: v1(),
      artist: 'Натали',
      songTitle: 'Ветер с моря дул',
      youtubeRef: 'https://youtu.be/ngsWYx0XN2I',
      content: 'Витя много дул, Витя много дул\n' +
        'И вдыхал в ноздрю, и вдыхал в ноздрю\n' +
        'Витя ел грибы, много ел грибы\n' +
        'Даже нюхал клей, часто нюхал клей\n' +
        'Вити больше нет, Вити больше нет\n' +
        'Слишком слабым стал его иммунитет\n' +
        'Так бы жил и жил, нюхал, пил, курил\n' +
        'Но одажды вдруг, его сбил КАМАЗ'
    },
    {
      id: v1(),
      artist: 'игорь николаев',
      songTitle: 'Дельфин и русалка',
      youtubeRef: 'https://youtu.be/aJBEyg9ZKkc?t=8',
      content: 'Дебил русалку полюбил\n' +
        'И пах пропах его горбушей'
    },
    {
      id: v1(),
      artist: 'Евгений Белоусов',
      songTitle: 'Девчонка-Девчоночка',
      youtubeRef: 'https://youtu.be/RJLMX-akIb0?t=61',
      content: 'Девчонка, девчоночка слабые почки\n' +
        'Когда хохочет, она ноги мочит'
    },
    {
      id: v1(),
      artist: 'Детская песня',
      songTitle: 'Я на солнышке лежу',
      youtubeRef: 'https://youtu.be/UKK9ZT1ARMk?t=3',
      content: 'В Минске митинг вновь идёт\n' +
        'Уже третий час идёт\n' +
        'Только я всё лежу\n' +
        'По ебалу получил'
    },
    {
      id: v1(),
      artist: 'Алла Пугачёва',
      songTitle: 'Любовь похожая на сон',
      youtubeRef: 'https://youtu.be/g63qQxaqqp8?t=123',
      content: 'Любовь нашла в шкафу страпон\n' +
        'Проснулся весь микрорайон'
    },
    {
      id: v1(),
      artist: 'Наутилус Помпилиус',
      songTitle: 'Апостол АНДРЕЙ',
      youtubeRef: 'https://youtu.be/fROP_i2P-tU?t=51',
      content: 'К причалу причалил вздутый Андрей\n' +
        'Венчанье пошло по пизде'
    },
    {
      id: v1(),
      artist: 'Эдуард Хиль',
      songTitle: 'Трус не играет в хоккей!',
      youtubeRef: 'https://youtu.be/IIi5CtqTvPI?t=64',
      content: 'И всё в порядке, если есть стояк на бабку\n' +
        'С великолепною пятёркой до пупа'
    },
    {
      id: v1(),
      artist: 'Мурат Насыров',
      songTitle: 'Мальчик хочет в Тамбов',
      youtubeRef: 'https://youtu.be/NOaKPbkJg-I?t=18',
      content: 'Мальчик был иудей\n' +
        'Ты знаешь чики-чики-чики-чики член'
    },
    {
      id: v1(),
      artist: 'Юрий Богатиков',
      songTitle: 'Идет солдат по городу',
      youtubeRef: 'https://youtu.be/u5B2ZEmzcTs?t=31',
      content: 'У солдата круглый год - сперматоксикоз'
    },
    {
      id: v1(),
      artist: 'Песенка из мультфильма "Летучий корабль"',
      songTitle: 'Песня о мечте',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Маленький домик, русская печка\n' +
        'Пол весь в крови, порвалася уздечка'
    },
    {
      id: v1(),
      artist: 'HammAli & Navai',
      songTitle: 'Пустите меня на танцпол',
      youtubeRef: 'https://youtu.be/Q3TTL6xtCZQ?t=46',
      content: 'Пустили бомжа на танцпол\n' +
        'Зря он подвигался'
    },
    {
      id: v1(),
      artist: 'Чай Вдвоем',
      songTitle: 'День рождения',
      youtubeRef: 'https://youtu.be/hk-nOUFLDpw',
      content: 'Свингер-пати в день рождения у тебя\n' +
        'Поздравляют твои лучшие друзья\n' +
        'Во рту подарки'
    },
    {
      id: v1(),
      artist: 'Александр Серов',
      songTitle: 'Я люблю тебя до слёз',
      youtubeRef: 'https://youtu.be/ywXNn3hoPX4',
      content: 'Подними стульчак, когда в гостях у дамы\n' +
        'Не закапай то, где ей ещё сидеть'
    },
    {
      id: v1(),
      artist: 'ВИА ГРА',
      songTitle: 'Бриллианты',
      youtubeRef: 'https://youtu.be/9Z3W6S0Rh0A?t=54',
      content: 'Лучшие друзья девушек\n' +
        'Всё равно их трахнут'
    },
    {
      id: v1(),
      artist: 'Фильм «Холоп»',
      songTitle: 'Давай мы с тобой сыграем в прятки',
      youtubeRef: 'https://youtu.be/gdMvn7tYxtA',
      content: 'А давай с тобой сыграем в нарды\n' +
        'Хули нам с тобою ещё делать???'
    },
    {
      id: v1(),
      artist: 'Леонид Агутин',
      songTitle: 'Парень чернокожий',
      youtubeRef: 'https://youtu.be/mk0A3N4RhOQ?t=28',
      content: 'Не похожий на тебя, не похожий на меня\n' +
        'А просто очень гибкий парень, лижет яйца'
    },
    {
      id: v1(),
      artist: 'Песня из мультфильма "Чебурашка"',
      songTitle: 'Пусть бегут неуклюже пешеходы по лужам...',
      youtubeRef: 'https://youtu.be/XUxDB9KVxOQ?t=38',
      content: 'Я играю… на айпаде\n' +
        'У бездомных… на виду\n' +
        'Обожаю униженья\n' +
        'Завтра вновь приду'
    },
    {
      id: v1(),
      artist: 'Ёлка',
      songTitle: 'На воздушном шаре',
      youtubeRef: 'https://youtu.be/zy5pKrUBUN4?t=64',
      content: 'На большом обрюгзшем теле\n' +
        'Бледно-розового цвета\n' +
        'Лена заработала на хату'
    },
    {
      id: v1(),
      artist: 'Алла Пугачева',
      songTitle: 'Миллион алых роз',
      youtubeRef: 'https://youtu.be/4yEeT6Swh5s?t=14',
      content: 'Жирный гаишник Вадим\n' +
        'КАМАЗ тормознуть захотел\n' +
        'КАМАЗ шёл без тормоз\n' +
        'Вадим отойти не успел\n' +
        'Миллион, миллион, алых брызг'
    },
    {
      id: v1(),
      artist: 'Слава',
      songTitle: 'Одиночество',
      youtubeRef: 'https://youtu.be/d0ju3TFSKbg?t=44',
      content: 'Одиночество в Тундре\n' +
        'Я смотрела порнуху\n' +
        'Два часа у Вай-фая\n' +
        'Я не чувствую руку'
    },
    {
      id: v1(),
      artist: 'Мэри Поппинс 33 коровы',
      songTitle: '33 коровы',
      youtubeRef: 'https://youtu.be/ivPa7DEAJFw?t=45',
      content: '33 ребёнка, 33 ребёнка, 33 ребёнка\n' +
        'Героиня мать\n' +
        '33 ребёнка, замучалась рожать\n' +
        'Папа не умеет вынимать'
    },
    {
      id: v1(),
      artist: 'Руки Вверх',
      songTitle: 'Ну где же вы, девчонки?',
      youtubeRef: 'https://youtu.be/45iFIRGf9-c?t=18',
      content: 'Не всем дают девчонки, девчонки, девчонки\n' +
        'И в ход идут ручонки, ручонки, ручонки'
    },
    {
      id: v1(),
      artist: 'Синяя птица',
      songTitle: 'Там где клен шумит...',
      youtubeRef: 'https://youtu.be/3oBdYhVp_QU',
      content: 'Вместе жили мы и была любовь\n' +
        'Но уехал он и вернулся вновь\n' +
        'Я за двадцать лет, честь смогла сберечь\n' +
        'Поросло травой, место наших встреч'
    },
    {
      id: v1(),
      artist: 'Марк Бернес',
      songTitle: 'С чего начинается Родина',
      youtubeRef: 'https://youtu.be/deUnp48mkOk?t=9',
      content: 'С чего начинается оргия\n' +
        'С картинки в твоей голове\n' +
        'С хороших и верных товарищей\n' +
        'Живущих в соседнем дворе'
    },
    {
      id: v1(),
      artist: 'Чай Вдвоем',
      songTitle: 'День рождения',
      youtubeRef: 'https://youtu.be/hk-nOUFLDpw',
      content: 'Воскресенье, день рождения у тебя\n' +
        'Понедельник, день рождения у тебя\n' +
        'И во вторник, день рождения у тебя\n' +
        'Тебя рожали три дня'
    },
    {
      id: v1(),
      artist: 'Макс Барских',
      songTitle: 'Туманы/Неверная',
      youtubeRef: 'https://youtu.be/HdH3F4kICLw',
      content: 'Я пошла с подругой в клуб, я пошла с подругой в клуб\n' +
        'Очень модный местный клуб, очень модный местный клуб\n' +
        'Вдруг смотрю подруги нет, недоступенен абонент\n' +
        'Заглянула в туалет, заглянула в туалет\n' +
        'В голове её армяне, мяне, мяни'
    },
    {
      id: v1(),
      artist: 'Super Жorik',
      songTitle: 'Хочу тебя любиться',
      youtubeRef: 'https://youtu.be/kV8PvgqFsAg?t=109',
      content: 'Хочу тебя любиться, хочу тебя любиться\n' +
        'Чтоб этот хит придумать, пришлось поднакуриться'
    },
    {
      id: v1(),
      artist: 'Сергей Трофимов',
      songTitle: 'Снегири',
      youtubeRef: 'https://youtu.be/pIhqvzu-osA?t=21',
      content: 'За окошком снегири, а за ними дерево\n' +
        'Это дерево – ольха, ольхе – 120 лет\n' +
        'Я сегодня ночевал с девушкой дендрологом\n' +
        'От которой и узнал, всю эту херню'
    },
    {
      id: v1(),
      artist: 'ГОРОД 312',
      songTitle: 'Останусь',
      youtubeRef: 'https://youtu.be/4tVriTuoll8?t=57',
      content: 'Останусь пеплом на губах\n' +
        'Разбилась ваза в ней был прах\n' +
        'А остальное сдуло ветром\n' +
        'А-а-апчи'
    },
    {
      id: v1(),
      artist: 'ЛЮБЭ',
      songTitle: 'От Волги до Енисея',
      youtubeRef: 'https://youtu.be/gRZOsJ1TKrU',
      content: 'Есть в Грозном два Елисея\n' +
        'Мы сами вчера охуели'
    },
    {
      id: v1(),
      artist: 'Юрий Антонов',
      songTitle: 'Золотая лестница',
      youtubeRef: 'https://youtu.be/H2hmfwgDKnU?t=15',
      content: 'Она мужчиной меня Сделала на лестнице\n' +
        'Прямо в подъезде моём мне дала Любовь\n' +
        'Что творила со мной папина ровесница\n' +
        'Папина ровесница без зубов'
    },
    {
      id: v1(),
      artist: 'Valery Leontiev feat. Lyme Vajkule',
      songTitle: 'Vernissage',
      youtubeRef: 'https://youtu.be/D6DJvnd-R-o?t=12',
      content: 'На свингер-пати как-то раз\n' +
        'Случайно встретила я Вас\n' +
        'Но Вы в другой, Вы не со мною'
    },
    {
      id: v1(),
      artist: 'Любэ',
      songTitle: 'Давай-наяривай',
      youtubeRef: 'https://youtu.be/3ZtWHE6C5q4?t=34',
      content: 'А ну давай-давай наяривай,\n' +
        'А ну давай-давай наяривай,\n' +
        'А ну давай-давай наяривай,\n' +
        'Шалава семирукая'
    },
    {
      id: v1(),
      artist: 'Тима Белорусских',
      songTitle: 'Незабудка',
      youtubeRef: 'https://youtu.be/VrZrqGlvDho?t=29',
      content: 'Не забуду шаурму из ларька\n' +
        'Последний поцелуй будет мой с отрыжкой'
    },
    {
      id: v1(),
      artist: 'ESTRADARADA',
      songTitle: 'Вите Надо Выйти',
      youtubeRef: 'https://youtu.be/HO6ebtWczX8?t=52',
      content: 'Остановите, остановите\n' +
        'Кончают Мите, Фомину на тити'
    },
    {
      id: v1(),
      artist: 'Полина Гагарина',
      songTitle: 'Драмы больше нет',
      youtubeRef: 'https://youtu.be/GxjcY8nqlhg?t=61',
      content: 'Водки больше нет, нет больше ни грамма\n' +
        'В раковине всё\n' +
        'Встанет щас отец, пизды получит мама'
    },
    {
      id: v1(),
      artist: 'Дискотека Авария',
      songTitle: 'Если хочешь остаться',
      youtubeRef: 'https://youtu.be/AsMTTh5Z1j8?t=40',
      content: 'Если хочешь отпиздить, девчонку просто так\n' +
        'Тебе ничего не будет, тут так можно, тут Ирак'
    },
    {
      id: v1(),
      artist: 'Браво',
      songTitle: 'Вася',
      youtubeRef: 'https://youtu.be/43RDuxe7CzM?t=33',
      content: 'Спросите у любого жителя из Дражни\n' +
        'Кто лучше всех танцует твист и рок-н-ролл\n' +
        'Кто лучше всех играет Пресли на гитаре\n' +
        'На это каждый ответит – пошёл ты на хуй'
    },
    {
      id: v1(),
      artist: 'Все звёзды)))',
      songTitle: 'Замыкая круг',
      youtubeRef: 'https://youtu.be/EkZwyOT9szo?t=7',
      content: 'Вот одна из тех историй\n' +
        'Загорелся крематорий\n' +
        'И теперь, где, кто, не разберёшь'
    },
    {
      id: v1(),
      artist: 'Леонид Агутин',
      songTitle: 'Парень чернокожий',
      youtubeRef: 'https://youtu.be/qm6Yh_ZIdH8?t=55',
      content: 'Непохожий на тебя, непохожий на меня\n' +
        'Он усыновлённый парень из приюта'
    },
    {
      id: v1(),
      artist: 'Наташа Королева',
      songTitle: 'Желтые тюльпаны',
      youtubeRef: 'https://youtu.be/AEaid6z2q7A?t=74',
      content: 'Желтые фотаны, делает Снежана\n' +
        'Почки застудила, писает всегда, писает везде'
    },
    {
      id: v1(),
      artist: 'Король и Шут',
      songTitle: 'Ели мясо мужики',
      youtubeRef: 'https://youtu.be/vjwOZUrUs6U?t=38',
      content: 'Ели мясо мужики, пивом запивали\n' +
        'Как поперетрахались, они не понимали'
    },
    {
      id: v1(),
      artist: 'Агата Кристи',
      songTitle: 'Сказочная тайга',
      youtubeRef: 'https://youtu.be/_Le3iBaecOg?t=58',
      content: 'После родов, как не крутись\n' +
        'Груди женские смотрят вниз\n' +
        'И в дебри сказочной тайги\n' +
        'Падают они'
    },
    {
      id: v1(),
      artist: 'RASA',
      songTitle: 'Пчеловод',
      youtubeRef: 'https://youtu.be/9knYNjp95bs?t=14',
      content: 'Я дрочу, я пчеловод\n' +
        'Очень странный будет мёд'
    },
    {
      id: v1(),
      artist: 'ШУФУТИНСКИЙ',
      songTitle: '3 СЕНТЯБРЯ',
      youtubeRef: 'https://youtu.be/C-5t1DLMYV8?t=82',
      content: 'Я мужа Порш переверну\n' +
        'Теперь сосать до сентября'
    },
    {
      id: v1(),
      artist: 'Песенка из мультфильма "Летучий корабль"',
      songTitle: 'Песня о мечте',
      youtubeRef: 'https://youtu.be/lPFXyOSH5WM',
      content: 'Афганистан, в хлеву горит свечка\n' +
        'У Ахмеда экстаз, у козочки течка\n' +
        'Ещё впереди курица Рама\n' +
        'Вот оно счастье для талибана\n' +
        'Ах, если бы отец купил осла\n' +
        'Какая жизнь настала бы тогда\n' +
        'Ах, если бы осла купил\n' +
        'Он каждый день его тогда б любил'
    },
    {
      id: v1(),
      artist: 'NILETTO',
      songTitle: 'Любимка',
      youtubeRef: 'https://youtu.be/xSgT4ZtT5M0?t=61',
      content: 'Время почесать Ибрагиму яйцо\n' +
        'Часто чешет он свои…\n' +
        'Любимки'
    },
    {
      id: v1(),
      artist: 'Мульт-песенка с хорошим концом',
      songTitle: 'В траве сидел кузнечик',
      youtubeRef: 'https://youtu.be/IFU6Ty3so-c',
      content: 'В траве сидел кузнечик, шёл рядом человечик\n' +
        'Он выбросил свой дилдо, и прямо в кузнеца\n' +
        'Представьте себе, представьте себе\n' +
        'Никак не ожидал он\n' +
        'Представьте себе, представьте себе\n' +
        'Такого вот конца'
    },
    {
      id: v1(),
      artist: 'Сябры',
      songTitle: 'Алеся',
      youtubeRef: 'https://youtu.be/NaqTQTmFkWo',
      content: 'Камшот, в белоруском полесье\n' +
        'Выпускной так прошёл у Олеси'
    },
    {
      id: v1(),
      artist: 'АЛЕНА СВИРИДОВА',
      songTitle: 'РОЗОВЫЙ ФЛАМИНГО',
      youtubeRef: 'https://youtu.be/Hg5XP_OtoaE?t=60',
      content: 'Розовый фламинго, тату на попе\n' +
        'Будет очень трудно с такой на зоне'
    },
    {
      id: v1(),
      artist: 'Иванушки Int',
      songTitle: 'Кукла',
      youtubeRef: 'https://youtu.be/wb1rEv_4UZs?t=118',
      content: 'Кукла Маша, кукла Даша\n' +
        'Чуть подсдуешь, станут старше'
    },
    {
      id: v1(),
      artist: 'Филипп Киркоров',
      songTitle: 'Огонь и вода',
      youtubeRef: 'https://youtu.be/gQvzRriiWbs?t=55',
      content: 'И огонь, и вода\n' +
        'После KFC и молока'
    },
    {
      id: v1(),
      artist: 'HammAli & Navai',
      songTitle: 'Пустите меня на танцпол',
      youtubeRef: 'https://youtu.be/Q3TTL6xtCZQ?t=46',
      content: 'Обсыпьте меня куркумой\n' +
        'Пряным подвигаться'
    },
    {
      id: v1(),
      artist: 'КОРНИ',
      songTitle: 'Ты узнаешь её',
      youtubeRef: 'https://youtu.be/du-zWWpnZSw?t=72',
      content: 'Ты узнаешь её из тысячи\n' +
        'Не по рту, по ушам, не по голосу\n' +
        'У неё уникальная фишечка\n' +
        'Из ноздрей растут гладиолусы'
    },
    {
      id: v1(),
      artist: 'Ирина Аллегрова',
      songTitle: 'Свадебные цветы',
      youtubeRef: 'https://youtu.be/y8V6y_zFRLY?t=60',
      content: 'Тщетно курить пытались свадебные цветы\n' +
        'Свадебные цветы, гости из Алма-Аты'
    },
    {
      id: v1(),
      artist: 'Орлы или вороны',
      songTitle: 'Максим ФАДЕЕВ & Григорий ЛЕПС',
      youtubeRef: 'https://youtu.be/KG-7yu2GNko?t=88',
      content: 'В зоопарке скандал, все заняты спорами\n' +
        'Кто трахал куниц, орлы или Дорохов'
    },
    {
      id: v1(),
      artist: 'НАУТИЛУС ПОМПИЛИУС',
      songTitle: 'Прогулки по воде',
      youtubeRef: 'https://youtu.be/FZ0rlskJPDs?t=55',
      content: 'Решил блогером стать апездол Андрей\n' +
        'Свой канал он завёл на рутьюб'
    },
    {
      id: v1(),
      artist: 'Яна',
      songTitle: 'Одинокий голубь',
      youtubeRef: 'https://youtu.be/bWd7IDVIVz4?t=49',
      content: 'Одинокий голубь на турбине за окном\n' +
        'Крутится пиздец, летит в Гонг-Конг'
    },
    {
      id: v1(),
      artist: 'Валерий Меладзе',
      songTitle: 'Девушка из высшего общества',
      youtubeRef: 'https://youtu.be/sHEf4ETAJR0?t=46',
      content: 'Девушка из высшего общества\n' +
        'Навалила памятник зодчества'
    },
    {
      id: v1(),
      artist: 'Максим Леонидов',
      songTitle: 'Девочка-Виденье',
      youtubeRef: 'https://youtu.be/SFJfs_g9Is8?t=13',
      content: 'Был обычный серый пидорский вечер\n' +
        'Другу друг дрочил в плохом настроеньи'
    },
    {
      id: v1(),
      artist: 'Гарик Сукачев',
      songTitle: 'Моя бабушка курит трубку',
      youtubeRef: 'https://youtu.be/y1PIWuleqEU?t=70',
      content: 'Кислородную сжал я трубку\n' +
        'Всё, не дышит бабушка моя'
    },
    {
      id: v1(),
      artist: 'Детская песенка',
      songTitle: 'Антошка, пойдем копать картошку',
      youtubeRef: 'https://youtu.be/4499P-cLuM8?t=28',
      content: 'Антошка, Антошка, нагрел над свечкой ложку\n' +
        'Антошка, Антошка, пойдём копать закладку'
    },
    {
      id: v1(),
      artist: 'Клава Кока',
      songTitle: 'Покинула Чат',
      youtubeRef: 'https://youtu.be/xfT645b6l0s?t=16',
      content: 'В похоронной колонке, шёл один долбаёб\n' +
        'Обо что-то споткнулся, ты покинула гроб, гроб'
    },
    {
      id: v1(),
      artist: 'ШУФУТИНСКИЙ',
      songTitle: '3 СЕНТЯБРЯ',
      youtubeRef: 'https://youtu.be/C-5t1DLMYV8?t=82',
      content: 'Я на живот, переверну\n' +
        'Так может встанет на тебя'
    },
    {
      id: v1(),
      artist: 'Ленинград',
      songTitle: 'Экспонат',
      youtubeRef: 'https://youtu.be/et281UHNoOU?t=85',
      content: 'А извращенец Гога\n' +
        'Так возжелал Ван Гога\n' +
        'И учинил в музее свой дерзкий, дерзкий акт\n' +
        'Охранник сильно резко отдернул от Ван Гога\n' +
        'Теперь частичку Гоги содержит экспонат'
    },
    {
      id: v1(),
      artist: 'Митя Фомин',
      songTitle: 'Все будет хорошо',
      youtubeRef: 'https://youtu.be/VBD_qy1yYNA?t=50',
      content: 'Ла-ла-ла-ла-ла-ла Арсен вошел в осла\n' +
        'Ла-ла-ла-ла-ла-ла обоим хорошо'
    },
    {
      id: v1(),
      artist: 'Сергей Крылов',
      songTitle: 'Девочка',
      youtubeRef: 'https://youtu.be/sl3kWS84wGc?t=6',
      content: 'Девочка красивая в биатлоне есть\n' +
        'Попа, грудь и внешность, плюсов в ней несчесть\n' +
        'К финишу подходит та красавица\n' +
        'Дышит как ротвеллер, сопля на пол-лица'
    },
    {
      id: v1(),
      artist: 'Весёлые ребята',
      songTitle: 'Розовые розы',
      youtubeRef: 'https://youtu.be/dumEvRizTZI',
      content: 'У Аллы Пугачёвой день рожденье\n' +
        'Ждёт сегодня Макса секс'
    },
    {
      id: v1(),
      artist: 'Ёлка',
      songTitle: 'Прованс',
      youtubeRef: 'https://youtu.be/mV5xJT7BnzE?t=56',
      content: 'Завтра в семь двадцать две я буду\n' +
        'Лежать в траве ведь мы купили водки\n' +
        'Одиннадцать бутылок\n' +
        'И сырок'
    },
    {
      id: v1(),
      artist: 'ЛЕПРИКОНСЫ',
      songTitle: 'Хали-гали, паратрупер',
      youtubeRef: 'https://youtu.be/rUd2diUWDyI',
      content: 'Когда мне было пятнадцать лет\n' +
        'Я копил на новый велосипед\n' +
        'Я жил лишь с этою мечтой\n' +
        'Пока проститься не пришлось с ногой\n' +
        ' \n' +
        'Когда мне было семнадцать лет\n' +
        'Я копил на золотой браслет\n' +
        'Так жил я с новую мечтой\n' +
        'Пока проститься не пришлось с рукой\n' +
        ' \n' +
        'Когда мне было под двадцать лет\n' +
        'Мечтал я трахнуть Йоханссон Скарлет\n' +
        'Её глаза схватили меня в плен\n' +
        'Но врачам пришлось отрезать член\n' +
        ' \n' +
        'Теперь мне ровно сорок лет\n' +
        'Мечтаний никаких и в мыслях нет\n' +
        'Весь день на стульчике сижу\n' +
        'Пошли эти желания в пизду'
    },
    {
      id: v1(),
      artist: 'Песня с олимпиады-80',
      songTitle: 'До свиданья, наш ласковый мишка!',
      youtubeRef: '',
      content: 'На поминках становится тише\n' +
        'Нам в закрытый гроб не заглянуть\n' +
        'Разлетелся к хренам наш друг Миша\n' +
        'Это ж надо так было чихнуть'
    },
    {
      id: v1(),
      artist: 'Чай вдвоем',
      songTitle: 'Сынок',
      youtubeRef: 'https://youtu.be/Y3e4jCUbs-0',
      content: 'Совсем-совсем малюсенькие бошки\n' +
        'Но от них отказывают ножки\n' +
        'Счастливый ползёт Санёк'
    },
    {
      id: v1(),
      artist: 'Родион Газманов',
      songTitle: 'Люси',
      youtubeRef: 'https://youtu.be/msMS7dRRB2E',
      content: 'Висит на берёзе, колышится ветром\n' +
        'Покончивший с жизнью, худой паренёк\n' +
        'А рядом детишки, резвятся, танцуют\n' +
        'Качают верёвку, снимают тик-ток\n' +
        'Люси, о-о-о-о, висит'
    },
    {
      id: v1(),
      artist: 'Л.Агутин',
      songTitle: 'Хоп-хей-лала-лей',
      youtubeRef: 'https://youtu.be/CeQwL6lLNFo?t=31',
      content: 'Клоп-гей ла-ла-лэй\n' +
        'За пах кусает лишь парней'
    },
    {
      id: v1(),
      artist: 'Тимати feat. Григорий Лепс',
      songTitle: 'Лондон',
      youtubeRef: 'https://youtu.be/djIAgcCnFmE?t=68',
      content: 'Я уеду жить в Конго\n' +
        'Мне Москва будет сниться\n' +
        'Но проблема одна, в направлении том\n' +
        'Из Москвы мне туда, уезжать на хуя'
    },
    {
      id: v1(),
      artist: 'Cream Soda & Хлеб',
      songTitle: 'Плачу на техно',
      youtubeRef: 'https://youtu.be/L1Snj1Pt-Hs?t=48',
      content: 'Плачу над Теслой, я плачу над Теслой\n' +
        'Нет в Сыктывкаре такой, блядь, розетки'
    },
    {
      id: v1(),
      artist: `L'ONE`,
      songTitle: 'Якутяночка (feat. Варвара Визбор)',
      youtubeRef: 'https://youtu.be/mdRaS5mZkjk?t=27',
      content: 'Вот уже четыре дня\n' +
        'Ой, не слазишь ты с меня\n' +
        'Разреши мне хоть покушать\n' +
        'Нимфоманочка моя'
    },
    {
      id: v1(),
      artist: 'Дима Билан',
      songTitle: 'Молния',
      youtubeRef: 'https://youtu.be/qf3n4rESsCk?t=109',
      content: 'Слышен крик из толчка\n' +
        'Прищемила молния'
    },
    {
      id: v1(),
      artist: 'Земляне',
      songTitle: 'Трава у дома',
      youtubeRef: 'https://youtu.be/gnqXfK-ESoY?t=33',
      content: 'На фалоимитаторе, на фалоимитаторе\n' +
        'Остатки от омлета их не скрыть\n' +
        'Попался миксер матери, попался миксер матери\n' +
        'Но яйца нужно было чем-то взбить'
    },
    {
      id: v1(),
      artist: 'Машина времени',
      songTitle: 'Поворот',
      youtubeRef: 'https://youtu.be/xmTr5BN4EJg?t=13',
      content: 'Мы себе давали слово,\n' +
        'Что в Тайланде без спиртного\n' +
        'Но, так уж суждено\n' +
        'Вот, это поворот, взял у бабы в рот'
    },
    {
      id: v1(),
      artist: 'Конец фильма',
      songTitle: 'Элис (Кто такая Элис)',
      youtubeRef: 'https://youtu.be/L81gYKWW414?t=21',
      content: 'С нами Лёха, с нами Вадим\n' +
        'Этой вот компанией развлечься мы хотим\n' +
        'Мы вызвали девчонок\n' +
        'Девчонки были просто прелесть\n' +
        'Вадим забрал Камиллу, Камилла хороша\n' +
        'А Леха взял Снежану, там тело и душа\n' +
        'А мне с большою грудию\n' +
        'Досталась просто бомба Элис\n' +
        'Элис, Элис, а откуда пенис?\n' +
        'Зато она не курит, зато она не пьёт'
    },
    {
      id: v1(),
      artist: 'DJ Smash pres. Fast Food',
      songTitle: 'Волна',
      youtubeRef: 'https://youtu.be/8R2Q7gUhf10?t=13',
      content: 'Съел салат, испорченный салат\n' +
        'Всё прошло, но жалко ламинат'
    },
    {
      id: v1(),
      artist: 'Виктор Цой',
      songTitle: 'Кукушка',
      youtubeRef: 'https://youtu.be/Ra0ozaE-oy0',
      content: 'Дед извращенец прильнул к часам\n' +
        'Штанишки спустил, нагнулся и ждёт кукушку'
    },
    {
      id: v1(),
      artist: 'из к/ф "Гардемарины вперед',
      songTitle: 'По воле рока так случилось"',
      youtubeRef: 'https://youtu.be/mmWS5JwWU4s',
      content: 'По воле рока так случилось\n' +
        'Иль в ДНК дефект такой\n' +
        'Возле АЭС жил странный парень\n' +
        'С огромным множеством сосков'
    },
    {
      id: v1(),
      artist: 'Клава Кока',
      songTitle: 'Покинула Чат',
      youtubeRef: 'https://youtu.be/xfT645b6l0s',
      content: 'Все матери школы, мне в двери стучат\n' +
        'Я пенис отправил в родительский чат'
    },
    {
      id: v1(),
      artist: 'Cream Soda & Хлеб',
      songTitle: 'Плачу на техно',
      youtubeRef: 'https://youtu.be/L1Snj1Pt-Hs?t=48',
      content: 'Плачет над тестом, полоски на тесте\n' +
        'Вспомнить бы ещё с кем сношалась на рэйве'
    },
    {
      id: v1(),
      artist: 'ФРИСТАЙЛ',
      songTitle: 'АХ, КАКАЯ ЖЕНЩИНА',
      youtubeRef: 'https://youtu.be/rHe4Y6NDlIM?t=47',
      content: 'В тёмном зале ресторана, средь веселья и обмана\n' +
        'Пристань загулявшего поэта\n' +
        'Возле столика напротив ты сидишь в полоборта\n' +
        'Вся в луче ночного света\n' +
        'Как случилось это вдруг, звонкий вдруг раздался пук\n' +
        'И скрутило бабу, как креветку\n' +
        'Видимо с кишечником, проблемы есть с кишечником\n' +
        'Нах такую'
    },
    {
      id: v1(),
      artist: 'Детская песня',
      songTitle: 'Жили у бабуси два весёлых гуся',
      youtubeRef: 'https://youtu.be/17m4KtPl_Rs?t=45',
      content: 'Жили у бабуси\n' +
        'Часоточиные клещи\n' +
        'Один серый, другой Миха\n' +
        'Перешли от деда'
    },
    {
      id: v1(),
      artist: 'Тима Белорусских',
      songTitle: 'Витаминка',
      youtubeRef: 'https://youtu.be/zn0XeYg0hIs?t=44',
      content: 'Запор уже неделю мучает Иринку\n' +
        'Выходит всё размером с витаминку'
    },
    {
      id: v1(),
      artist: 'Кипелов',
      songTitle: 'Я свободен',
      youtubeRef: 'https://youtu.be/QXDRPtufEbA?t=56',
      content: 'Надо мною тишина\n' +
        'Трахаюсь с глухонемой\n'
    },
    {
      id: v1(),
      artist: 'Ленинград',
      songTitle: 'День Рождения',
      youtubeRef: 'https://youtu.be/0e5u2AnyYFU?t=27',
      content: 'А я день рождения не буду справлять\n' +
        'Всё, заебола, пиздец, нахуй, СПИД'
    },
    {
      id: v1(),
      artist: 'Александр Буйнов',
      songTitle: 'Падают листья',
      youtubeRef: 'https://youtu.be/IzHg5wGvahM?t=59',
      content: 'Падают, падают, падают листья\n' +
        'Ну и круто, ими подотрусь'
    },
    {
      id: v1(),
      artist: 'БИ-2',
      songTitle: 'Мой Рок-н-Ролл',
      youtubeRef: 'https://youtu.be/OJIUtICAq3w?t=63',
      content: 'Напомню всем я заново мужчинам об одном\n' +
        'Есть анус у всех, но для любви – это не место'
    },
    {
      id: v1(),
      artist: 'Владимир Макаров',
      songTitle: 'Последняя электричка',
      youtubeRef: 'https://youtu.be/65AUEqrk3H0?t=34',
      content: 'Опять от меня сбежала\n' +
        'С детьми эта истеричка\n' +
        'И я по шмарам, опять по шмарам\n' +
        'Иду, помиримся завтра'
    },
    {
      id: v1(),
      artist: 'Алена Апина',
      songTitle: 'Электричка',
      youtubeRef: 'https://youtu.be/xSTSq8_Wp_Y?t=91',
      content: 'Ебальничком стучат по ночной электрички\n' +
        'Зря в Мытищах ты доставал космитичку'
    },
    {
      id: v1(),
      artist: 'из к/ф "Москва слезам не верит"',
      songTitle: 'Александра-Александра',
      youtubeRef: 'Александр, Александр,\n' +
        'У него член очень тонкий\n' +
        'Может трахнуть, Александр\n' +
        'Обручальное кольцо',
      content: 'Александр, Александр,\n' +
        'У него член очень тонкий\n' +
        'Может трахнуть, Александр\n' +
        'Обручальное кольцо'
    },
    {
      id: v1(),
      artist: 'Алёна АПИНА',
      songTitle: 'Узелки',
      youtubeRef: 'https://youtu.be/rwEOtHDee5o?t=43',
      content: 'Узелок развяжется, узелок завяжется\n' +
        'У Андрея выходной, он с пупком играется'
    },
    {
      id: v1(),
      artist: 'ШУФУТИНСКИЙ',
      songTitle: '3 СЕНТЯБРЯ',
      youtubeRef: 'https://youtu.be/C-5t1DLMYV8?t=84',
      content: 'А я Тик Ток перелистнул\n' +
        'И снова полная хуйня'
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    },
    {
      id: v1(),
      artist: '',
      songTitle: '',
      youtubeRef: '',
      content: ''
    }
  ],
  songsForRound: []
}

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    getSongsForRound(state, action: PayloadAction<{ gameNumber: number }>):void {
      const {gameNumber} = action.payload
      state.songsForRound = state.songs.slice(gameNumber*10,gameNumber*10 + 10)
    },
    decreaseSong(state):void {
      state.songsForRound.shift()
    },
  },
})

export const songsActions = songsSlice.actions
export const songsReducer = songsSlice.reducer