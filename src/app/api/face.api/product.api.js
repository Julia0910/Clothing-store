import { categories } from "./categories.api";

const products = [
  {
    id: "АРТ.2303W5302-01",
    title: "БОМБЕР ИЗ ЭКОКОЖИ",
    price: "14990",
    size: ["S", "M", "L", "XL"],
    description:
      "Утеплëнный бомбер из экокожи — ультратренд этой коллекции. Модель со спущенной линией плеча, на подкладочной ткани, с застёжкой на металлическую молнию. Рукава и низ изделия на резинке. Широкий воротник из основной ткани. На передних полочках — два глубоких кармана с декоративным клапаном. Отстрочки на швах добавляют изделию аккуратности и собранности. Бомбер легко сочетать с другими вещами вашего гардероба: в классическом, спортивном или casual стиле.",
    structure:
      "Ткань верха: 100% полиэстер Подкладочная ткань: 70% вискоза 30% полиэстер Утеплитель: 100% полиэстер",
    category: categories.outerwear,
    image: [
      "https://allweneed.ru/media/products/2023/01/091220223262.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222881.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222843.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.UJ005",
    title: "КУРТКА-КОСУХА OVERSIZE",
    price: "17990",
    size: ["S", "M", "L", "XL"],
    description:
      "Объемная куртка-косуха из экокожи. Мы выполнили эту модель из плотного, но эластичного и мягкого материала, к которому приятно прикасаться. Три больших кармана на молнии и один маленький на кнопке. Модель внизу фиксируется ремнем в тон для комфортной посадки. Такой фасон курток из экокожи давно является классикой и будет актуален в любое время. Нам нравится носить модель с любимыми джинсами, брюками и с нежными платьями для контраста.",
    structure:
      "Ткань верха: 100% полиэстер Подклад : 70% вискоза, 30% полиэстер",
    category: categories.outerwear,
    image: [
      "	https://allweneed.ru/media/products/2023/02/020220235284_q6QUnP2.jpg.536x782_q90.jpg",
      "	https://allweneed.ru/media/products/images/2023/02/020220235252_FQhV4Dr.jpg.1200x1600_q90.jpg",
      "	https://allweneed.ru/media/products/images/2023/02/020220235211_ImQHktq.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W5101P-01",
    title: "ПАЛЬТО ОДНОБОРТНОЕ ИЗ ШЕРСТИ И КАШЕМИРА",
    price: "24990",
    size: ["S", "M", "L", "XL"],
    description:
      "Прямое однобортное пальто из итальянской премиальной шерсти. Как всегда, мы уделяем большое внимание качеству материалов и продолжаем совершенствоваться. В этом сезоне мы впервые использовали особо тонкую и мягкую шерсть — микс шерсти и кашемира, известный тем, что он поддерживает комфортную температуру тела вне зависимости от внешних её перепадов. Изделие на подкладе, имеет два кармана с клапаном и удобную застёжку на пуговицы. Кашемир в составе дарит благородный блеск. Это универсальная модель для базового гардероба, которая сочетается хорошо как с лонгсливом и джинсами, так и с вечерним платьем и высокими сапогами.",
    structure:
      "Ткань верха : 70% шерсть 20% полиамид, 10% кашемир Подклад : 70 %вискоза 30% полиэстер",
    category: categories.outerwear,
    image: [
      "	https://allweneed.ru/media/products/2023/01/150120237859.jpg.536x782_q90.jpg",
      "	https://allweneed.ru/media/products/images/2023/01/150120237869.jpg.90x130_q90.jpg",
      "	https://allweneed.ru/media/products/images/2023/01/150120237835.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.CO070-2",
    title: "ПАЛЬТО ДВУБОРТНОЕ УДЛИНЕННОЕ",
    price: "24990",
    size: ["S", "M", "L", "XL"],
    description:
      "Двубортное пальто длины миди из итальянской шерстяной ткани. Модель прямого силуэта с классической линией плеч. Два накладных кармана. Пальто, которое подойдет к лаконичному образу на каждый день и к строгому костюму и вечернему платью. Ткань высокого качества имеет характерный легкий отблеск, что добавляет образу немного шика.",
    structure:
      "Ткань верха : 90% шерсть, 10% шелк Подкладочная ткань : 70 %вискоза 30% полиэстер",
    category: categories.outerwear,
    image: [
      "	https://allweneed.ru/media/products/2023/02/150120237655_5F0LRKH.jpg.1200x1600_q90.jpg",
      "	https://allweneed.ru/media/products/images/2023/02/150120237601_22k0N4e.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/02/150120237607_RfQrxk6.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.CO072",
    title: "ОДНОБОРТНОЕ ПАЛЬТО-ЖАКЕТ",
    price: "16990",
    size: ["S", "M", "L", "XL"],
    description:
      "Однобортное пальто из мягкой шерстяной ткани. Модель фасоном напоминает жакет. Слегка спущенная линия плеча, поэтому комфортно носить со свитером и худи. Классический воротник и лацканы. Два накладных кармана и застежка на одну пуговицу. Мы советуем сочетать пальто с костюмами или джинсами для более лаконичного образа.",
    structure:
      "Ткань верха : 80% шерсть, 20% нейлон Подкладочная ткань : 70 %вискоза 30% полиэстер",
    category: categories.outerwear,
    image: [
      "https://allweneed.ru/media/products/2023/01/251220225951.jpg.1200x1600_q90.jpg",
      "	https://allweneed.ru/media/products/images/2023/01/251220225934.jpg.90x130_q90.jpg",
      "	https://allweneed.ru/media/products/images/2023/01/251220225918.jpg.90x130_q90.jpg",
    ],
  },
  {
    id: "АРТ.CO076",
    title: "ОДНОБОРТНОЕ ПАЛЬТО-ЖАКЕТ",
    price: "16990",
    size: ["S", "M", "L", "XL"],
    description:
      "Однобортное пальто из мягкой шерстяной ткани. Модель фасоном напоминает жакет. Слегка спущенная линия плеча, поэтому комфортно носить со свитером и худи. Классический воротник и лацканы. Два накладных кармана и застежка на одну пуговицу. Мы советуем сочетать пальто с костюмами или джинсами для более лаконичного образа.",
    structure:
      "Ткань верха : 80% шерсть, 20% нейлон Подкладочная ткань : 70 %вискоза 30% полиэстер",
    category: categories.outerwear,
    image: [
      "https://allweneed.ru/media/products/images/2023/01/251220225505.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/251220225476.jpg.90x130_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/251220225523.jpg.90x130_q90.jpg",
    ],
  },
  {
    id: "АРТ.CL011",
    title: "ДВУБОРТНЫЙ ТРЕНЧ OVERSIZE ИЗ ЭКОКОЖИ",
    price: "21990",
    size: ["S", "M", "L", "XL"],
    description:
      "ренч из мягкой и эластичной экокожи. В модели присутствуют классические детали тренча, которые пришли к нам из мужского гардероба: паты, погоны, застежка на пуговицы и отлетная кокетка. Спущенная линия плеча и свободная посадка. Два удобных прорезных кармана, чтобы положить важные мелочи.",
    structure:
      "Ткань верха: 100% полиэстер Подклад : 70% вискоза, 30% полиэстер",
    category: categories.outerwear,
    image: [
      "file:///home/julia/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%9A%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%BE%20React/pictures/091220223262.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/07…9_%D0%BA%D0%B0%D0%B4%D1%803940.jpg.90x130_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/10…9_%D0%BA%D0%B0%D0%B4%D1%804017.jpg.90x130_q90.jpg",
    ],
  },
  {
    id: "АРТ.CL009",
    title: "ДВУБОРТНЫЙ ПЛАЩ ИЗ ЭКОКОЖИ",
    price: "14000",
    size: ["S", "M", "L", "XL"],
    description:
      "Двубортный плащ из эко-кожи - новая классика современного гардероба. Модель свободной посадки акцентирована отлетными деталями, поясом на талии и скошенными прорезными карманами с широкими листочками.",
    structure:
      "Ткань верха: 95% полиэстер, 5% спандекс Подкладочная ткань : 70% вискоза, 30% полиэстер",
    category: categories.outerwear,
    image: [
      "https://allweneed.ru/media/products/2021/07/awn7696.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2021/07/awn7636.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2021/07/awn7686.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.CL008-1-A",
    title: "ТРЕНЧ",
    price: "14000",
    size: ["S", "M", "L", "XL"],
    description:
      "Плащ двубортного кроя с застежкой на крупные однотонные пуговицы. Отлетная кокетка, А-силуэт и длинный пояс на талии добавляют образу легкости, а цветовая гамма создает поистине весеннее настроение.",
    structure:
      "Ткань верха: 80% полиэстер, 20% хлопок; Подклад : 70% вискоза, 30% полиэстер",
    category: categories.outerwear,
    image: [
      "https://allweneed.ru/media/products/2022/07/27062022_alwn0097_Qe06gVz.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/07/27062022_alwn0089_AtldrBX.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/08/27062022-alwn0131.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.2303W1402-51",
    title: "ПЛАТЬЕ МИДИ С РАЗРЕЗОМ",
    price: "9990",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины миди. Модель из плотной и приятной к телу вискозы, которая красиво струится. Мы учли ваши пожелания и для большего комфорта спрятали застёжку на молнии в плечевом шве. Длинный рукав и особенно актуальный женственный крой «по косой» вытягивают силуэт и подчёркивают линии тела. Круглый вырез и смелый разрез на юбке. Изделие гармонично будет смотреться с длинными пальто и свободными жакетами.",
    structure: "80% вискоза, 20% полиэстер",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2023/01/150120237161_uaT06Ei.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/150120237183_rC7hnKq.jpg.1200x1600_q90.jpg",
      "	https://allweneed.ru/media/products/images/2023/01/150120237192_txDnuEK.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.2303W1406-01",
    title: "ПЛАТЬЕ МИДИ С ЮБКОЙ ГОФРЕ",
    price: "10990",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины миди с юбкой в складку. Модель имеет трикотажный верх и гофрированную юбку из костюмной ткани. У изделия V-образный вырез, который демонстрирует красоту шеи и зоны декольте.",
    structure:
      "Ткань верха 1: Полиэстер 95%, Спандекс 5% Ткань верха 2: Полиэстер 100% Подкладочная ткань: 100% полиэстер",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2023/01/150120237437_CCugnSi.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/150120237454_L2dAhSS.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/150120237458.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.DR178",
    title: "ПЛАТЬЕ С ВЫРЕЗОМ ХАЛТЕР",
    price: "8990",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины макси с вырезом «халтер». Легкая и летящая модель переливается и струится нежным водопадом по вашей коже. Специальная вытачка обеспечивает хорошую посадку по фигуре. Модель не слишком свободная, но и не слишком облегает.",
    structure:
      "Ткань верха: 70% вискоза, 30% полиэстер Подкладочная ткань: 60% вискоза, 35% полиэстер,5% спанд",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2022/11/041120222228.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/11/041120222163.jpg.90x130_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/11/041120222191.jpg.90x130_q90.jpg",
    ],
  },
  {
    id: "АРТ.2303W1405-22",
    title: "ПЛАТЬЕ-РУБАШКА СО СБОРКОЙ НА ПЛАНКЕ",
    price: "9990",
    size: ["S", "M", "L", "XL"],
    description:
      "Лёгкое платье средней длины с акцентом на линии талии — наш вариант платья-рубашки. В его конструкции, а именно в планке, заложены складки, которые мягко ложатся по силуэту. Модель с отложным воротником и с классическими манжетами на пуговицах. ",
    structure: "100% Тенсел",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/images/2023/01/150120237761_7UcrodH.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/150120237734_xSu3soo.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/150120237763_6zVtZ4k.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.DR176",
    title: "ПЛАТЬЕ С РАЗРЕЗОМ СПЕРЕДИ",
    price: "8990",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины миди с разрезом спереди. Свободный крой, деликатное сияние и струящийся материал. Акцентная деталь — длинные манжеты с рядом декоративных пуговиц. На спине есть красивый V-образный вырез. Мы создали модель для праздничных моментов, но её легко добавить в гардероб на каждый день благодаря длинному рукаву и сдержанной зоне декольте.",
    structure: "100% вискоза",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2022/11/041120221782.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/11/041120221853.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/11/041120221819.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.DR164",
    title: "ПЛАТЬЕ МИДИ С ДЛИННЫМ РУКАВОМ",
    price: "5990",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины миди с длинным рукавом. Модель с «ребристым» эффектом, что делает образ многогранным. Изделие прямого кроя из смесового материала, благодаря которому модель хорошо садится по фигуре и сохраняет форму.",
    structure: "54% акрил, 40% вискоза, 6% эластан",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/images/2022/08/220720228255.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/08/220720228244.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/10/220720228195.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.DR169",
    title: "ПЛАТЬЕ МИНИ С УВЕЛИЧЕННОЙ ЛИНИЕЙ ПЛЕЧА",
    price: "8440",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины мини с акцентной линией плеча. Модель из креп-шифона с нежной подкладочной тканью. Благодаря прямому силуэту платье смотрится хорошо на разных фигурах.",
    structure:
      "Ткань Верха: 95% Полиэстер, 5% Спандекс Подкладочная Ткань: 60% Вискоза, 35% Полиэстер, 5% Спандекс",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2022/11/041120222788.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/11/041120222770.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/11/041120222827.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.DR177",
    title: "ПЛАТЬЕ С УЗЛОМ НА ТАЛИИ",
    price: "10490",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины миди с запахом на талии. Приталенный силуэт для женственного образа. Круглый вырез. Вы можете развязать узел и задрапировать платье по своему желанию.",
    structure: "80% вискоза, 20% полиэстер",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2022/09/%D0%91…_%D0%BA%D0%B0%D0%B4%D1%804767.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09…_%D0%BA%D0%B0%D0%B4%D1%804762.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09…D0%BA%D0%B0%D0%B4%D1%804781.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.DR162",
    title: "ПЛАТЬЕ-РУБАШКА OVERSIZE",
    price: "8990",
    size: ["S", "M", "L", "XL"],
    description:
      "Одна из самых популярных вариаций платья — платье-рубашка длины миди. Воротник, застежка на пуговицы. Свободную модель можно носить так, или с ремнем, чтобы сделать акцент на красоте талии. Приятная, дышащая ткань создает ощущение комфорта на целый день.",
    structure:
      "Ткань верха: 97% хлопок, 3% лайкра Подклад: 60% вискоза, 35% полиэстер, 5% спандекс",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2022/08/220720228117.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/08/220720228111.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/08/220720228105.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.DR171",
    title: "ПЛАТЬЕ С УЗЛОМ НА ТАЛИИ",
    price: "10490",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины миди с запахом на талии. Приталенный силуэт для женственного образа. Круглый вырез. Вы можете развязать узел и задрапировать платье по своему желанию.",
    structure: "80% вискоза, 20% полиэстер",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2022/10/051020223826_N1Ak6SV.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/10/051020223907_0ZApmYT.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/10/051020223924_zc384EN.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.DR172",
    title: "ПЛАТЬЕ МИДИ СО СКОШЕНЫМ НИЗОМ ЮБКИ",
    price: "8290",
    size: ["S", "M", "L", "XL"],
    description:
      "Платье длины миди со скошенным низом. Круглый вырез и классическая линия плеча. Платье имеет приталенный силуэт, но благодаря свободной юбке, в нем комфортно передвигаться по городу.",
    structure: "95% хлопок, 5% эластан",
    category: categories.dresses,
    image: [
      "https://allweneed.ru/media/products/2022/09/%D0%91…_%D0%BA%D0%B0%D0%B4%D1%804979.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09…_%D0%BA%D0%B0%D0%B4%D1%804984.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09…_%D0%BA%D0%B0%D0%B4%D1%805004.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2303W1705-10",
    title: "ЮБКА МИНИ",
    price: "5990",
    size: ["S", "M", "L", "XL"],
    description:
      "Юбка длины мини. Для создания этого дропа мы специально отправились в Турцию, чтобы найти новые материалы, красители, инновационные технологии и фактуры. Эта юбка — результат наших поисков. Выполненная из костюмной ткани, которая хорошо держит форму, она получилась мягкой и согревающей.",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подкладочная ткань: 60% вискоза, 35% полиэстер, 5% спандекс",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/images/2023/01/211220224925.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220224882.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220224895.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2303W1704-02",
    title: "ЮБКА МИДИ ГОФРЕ",
    price: "9900",
    size: ["S", "M", "L", "XL"],
    description:
      "Юбка в складку из плотной костюмной ткани. Модель без подкладочной ткани. Резинка для удобной посадки на любую фигуру. За счёт универсальной длины можно носить во все сезоны.",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% спандекс Подкладочная ткань: 100% полиэстер",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/images/2023/02/020220235109_3S2wO3z.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/02/020220235137_0aL9sz0.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/02/020220235168_VJVBgCY.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W1702-01",
    title: "ЮБКА МИНИ ИЗ ЭКОКОЖИ С МОЛНИЕЙ",
    price: "8990",
    size: ["S", "M", "L", "XL"],
    description:
      "Юбка длины мини с застёжкой на металлическую молнию. Модель с завышенной талией, чтобы сочетать с укороченными свитерами. Для изделия мы выбрали гладкую экокожу с матовым блеском — универсальное решение, которое дополнит и яркие, и пастельные оттенки.",
    structure:
      "Ткань верха: 60% полиуретан, 40% полиэстер Подкладочная ткань: 60% вискоза, 35% полиэстер, 5% спандекс",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/2023/01/051220224403.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/051220224342.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/051220224393.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.SK058",
    title: "ЮБКА МИДИ С РАЗРЕЗОМ НА ПУГОВИЦАХ",
    price: "7990",
    size: ["S", "M", "L", "XL"],
    description:
      "Юбка длины миди с разрезом. Летящая, слегка расклешенная модель, в которой комфортно передвигаться по городу. Посадка на уровне талии. По линии пуговиц идет разрез, что делает ваш образ чуть более смелым.",
    structure: "80% вискоза, 20% полиэстер",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/2023/02/020220235444_UqfhXoI.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/02/020220235430_e6ozydn.jpg.1200x1600_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/02/020220235430_e6ozydn.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.SK063",
    title: "ЮБКА МИДИ С РАЗРЕЗОМ СПЕРЕДИ И ТОНКИМ ПОЯСОМ ИЗ СОБСТВЕННОЙ ТКАНИ",
    price: "8490",
    size: ["S", "M", "L", "XL"],
    description:
      "Юбка длины миди с разрезом. К изделию мы добавили тонкий пояс в тон. Эта модель отлично создает женственный силуэт благодаря акценту на талии. Юбку можно надевать в офис или на вечеринки, главное — правильно стилизовать. Нам нравится, как модель смотрится с топами и боди.",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подкладочная ткань: 60% вискоза, 35% полиэстер,",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/2022/10/280920221810_7Zr4b1o.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/10/280920221800_A7NYMal.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/10/280920221755_ElHR55R.jpg.1200x1600_q90.jpg",
    ],
  },
  {
    id: "АРТ.SK061",
    title: "ПРЯМАЯ ЮБКА ИЗ КОСТЮМНОЙ ТКАНИ",
    price: "7490",
    size: ["S", "M", "L", "XL"],
    description:
      "Юбка-карандаш из костюмной ткани. Мы поработали над тканью в этом сезоне, теперь она ещё лучше держит форму. Благодаря материалам высокого качества, юбка красиво смотрится на фигуре. Модель на средней посадке.",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подкладочная ткань: 60% вискоза, 35% полиэстер,",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/2022/09/250820220958_1.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09/250820221004_1.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09/250820221019_1.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.SK059",
    title: "ЮБКА ГОФРЕ ИЗ ЭКОКОЖИ",
    price: "9490",
    size: ["S", "M", "L", "XL"],
    description:
      "Юбка-гофре из мягкой экокожи на ворсовой основе. Модель на поясе. Материал хорошо держит форму, поэтому вы можете быть спокойны за внешний вид изделия даже после активного дня. Для комфорта мы добавили потайную молнию в боковом шве.",
    structure:
      "Ткань верха: 100% полиэстер Окантовка: 60% вискоза, 35% полиэстер, 5% спандекс",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/2022/07/270620…D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/07…D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/07…D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.SK040-1",
    title: "ЮБКА-КАРАНДАШ МИДИ",
    price: "6990",
    size: ["S", "M", "L", "XL"],
    description:
      "Юбка-карандаш с длины миди со шлицей на спинке. Застежка на потайную молнию сзади и два кармана. Посадка на уровне талии, поэтому модель будет смотреться хорошо на любой фигуре. ",
    structure:
      "Основная:Вискоза65%, Полиэстер32%, Эластан3% Подкладочная ткань:Вискоза60%, Полиэстер35%, Спандекс5%",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/2021/10/211021AllWeNeed59728.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2021/10/211021AllWeNeed59693_zreeHMz.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2021/10/211021AllWeNeed59702_AlJpQta.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.SK043",
    title: "СТЕГАНАЯ МИНИ-ЮБКА",
    price: "5990",
    size: ["S", "M", "L", "XL"],
    description:
      "Прямая юбка мини. Лаконичная юбка с комфортной посадкой на талии — ключевой элемент базового гардероба вне зависимости от сезона и трендов. Легкая влагоотталкивающая пропитка: материал не пропускает ветер и влагу за счет плотности - Каландрированный синтепон равномерно распределяется и не выбивается в швах",
    structure:
      "Ткань верха: 100% полиэстер Окантовка: 60% вискоза, 35% полиэстер, 5% спандекс",
    category: categories.skirts,
    image: [
      "https://allweneed.ru/media/products/images/2021/07/all_we_need4525.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2021/07/all_we_need4564_L56z7A0.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/2021/07/all_we_need4543.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W2504-21",
    title: "ЛОНГСЛИВ",
    price: "4490",
    size: ["S", "M", "L", "XL"],
    description:
      "Лонгслив из хлопкового полотна. Пластичная, но не слишком плотная модель. Круглая горловина обработана бейкой из основной ткани. Втачные рукава формируют правильную линию плеч.",
    structure: "95% хлопок, 5% эластан",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2023/01/051220225142.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/051220225164.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/051220225184.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W2502-42",
    title: "ЛОНГСЛИВ В ПОЛОСКУ С РАЗРЕЗОМ",
    price: "4490",
    size: ["S", "M", "L", "XL"],
    description:
      "Лонгслив свободного кроя из мягкого трикотажного полотна. Актуальный удлинённый рукав и спущенная пройма. Акцентная деталь модели — разрезы в боковых швах — обеспечивают правильную посадку по бедрам.",
    structure: "95% хлопок, 5 % лайкра",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2023/01/211220224404.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220224397.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220224412.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W2501-48",
    title: "ФУТБОЛКА В СТИЛЕ BOYFREND",
    price: "1890",
    size: ["S", "M", "L", "XL"],
    description:
      "Футболка выполнена из плотной кулирки — воздушной трикотажной ткани, которую часто используют для детской одежды. А значит, в ней вам будет очень комфортно.",
    structure: "95% хлопок, 5%спандекс",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2023/01/091220222087.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222044.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222038.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.LO006",
    title: "ЛОНГСЛИВ OVERSIZE",
    price: "4540",
    size: ["S", "M", "L", "XL"],
    description:
      "Лонгслив свободного кроя. Ткань очень приятна к телу и позволяет коже дышать. Носите дома, на прогулку или, когда отправляетесь по делам. Можно сочетать с любыми джинсами и юбкой.",
    structure: "95% хлопок, 5% эластан",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2022/09/250820221249_1.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09/250820221186_1.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09/250820221229_1.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.LO004",
    title: "ЛОНГСЛИВ В ПОЛОСКУ С РАЗРЕЗОМ (КРОЁНЫЙ ТРИКОТАЖ)",
    price: "4990",
    size: ["S", "M", "L", "XL"],
    description:
      "Лонгслив свободного кроя из мягкого трикотажного полотна. Актуальный удлиненный рукав и спущенная пройма. Акцентная деталь модели — разрезы по боковым швам. Принт «в полоску», который будет всегда популярен. ",
    structure: "96% Хлопок, 4 % Лайкра",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2022/08/220720228425.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/08/220720228420.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/10/220720228403.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.TS006-4",
    title: "ФУТБОЛКА TIMELESS",
    price: "1890",
    size: ["S", "M", "L", "XL"],
    description:
      "Футболка из эластичного и мягкого хлопка. Модель свободного кроя со спущенным плечом. Благодаря хлопку в футболке комфортно целый день. Носите с джинсами, юбками и брюками.",
    structure: "95% хлопок, 5%спандекс",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2022/11/211020220371.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/11/211020220382.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/11/211020220354.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.TS006-3",
    title: "ФУТБОЛКА В СТИЛЕ BOYFRIEND",
    price: "1890",
    size: ["S", "M", "L", "XL"],
    description:
      "Футболка свободного кроя из слегка тянущегося хлопкового материала. В новой коллекции мы выпустили футболки в новых базовых, пастельных и приглушенных цветах.",
    structure: "95% хлопок, 5%спандекс",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2022/05/1205202213213_QSuMNRm.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/05/1205202213191_I6XMSiV.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/07…D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.TS012",
    title: "ФУТБОЛКА BOYFRIEND ИЗ ПЛОТНОГО КУЛИРА",
    price: "3490",
    size: ["S", "M", "L", "XL"],
    description:
      "Удлиненная футболка oversize из плотной ткани. Круглая обработанная горловина. Ткань износостойкая и хорошо держит форму. Благодаря хлопку в ней комфортно в любое время года. ",
    structure: "100% хлопок",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2022/01/071221AWN109320.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/01/071221AWN109321.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/01/41.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.TS009-2",
    title: "ФУТБОЛКА УДЛИНЕННАЯ OVERSIZE БЕЗ ВЫШИВКИ",
    price: "2490",
    size: ["S", "M", "L", "XL"],
    description:
      "Футболка удлиненного оверсайз кроя. Модель из плотного хлопка.",
    structure: "92% хлопок, 8% эластан",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2022/04/df848281-201f-49b1-9bfd-c010e60290ed.JPG.536x782_q90.JPG",
      "https://allweneed.ru/media/products/images/2022/04…5-cd44-4c08-8f81-8b97fbc9c696.JPG.536x782_q90.JPG",
      "https://allweneed.ru/media/products/images/2021/12/24.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.TS011",
    title: "ФУТБОЛКА ИЗ ВИСКОЗЫ",
    price: "1890",
    size: ["S", "M", "L", "XL"],
    description:
      "Футболка из вискозы - отличная альтернатива базовым хлопковым вариантам. Нежная к прикосновению, она не ощущается на коже и придает образу лоска.",
    structure: "95% вискоза 5% лайкра",
    category: categories.tshirtsAndLongsleeves,
    image: [
      "https://allweneed.ru/media/products/2021/05/IMG_0780.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2021/05/IMG_0758.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2021/06…D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W1202-03",
    title: "ЖАКЕТ ОДНОБОРТНЫЙ OVERSIZE",
    price: "12990",
    size: ["S", "M", "L", "XL"],
    description:
      "Жакет с объёмной линией плеча. Шлица на спинке — для декора и комфорта (не забудьте её разрезать). Мы создали слегка удлинённую модель свободного кроя, с небольшим прилеганием по талии, которая подходит девушкам разного роста.",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подкладочная ткань: 70% вискоза, 30% полиэстер",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/2023/01/211220223789.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220223683.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220223738.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W1201P-10",
    title: "ЖАКЕТ ИЗ ТОНКОЙ ШЕРСТИ (PREMIUM)",
    price: "14990",
    size: ["S", "M", "L", "XL"],
    description:
      "Однобортный жакет классического силуэта с прилеганием по талии. Изделие имеет карманы с клапаном, отрезным бочком (напомним: это внутренний карман, который располагается в боковом шве) и вытачкой на полочке — здесь все детали, которые выдают идеальный тейлоринг. Классическая линия плеча. ",
    structure:
      "Ткань верха: 98% шерсть, 2% эластан Подкладочная ткань: 70% вискоза, 30% полиэстер",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/images/2023/01/091220222955.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/2023/01/091220222920.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222917.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W1601P-10",
    title: "БРЮКИ ИЗ ТОНКОЙ ШЕРСТИ",
    price: "11190",
    size: ["S", "M", "L", "XL"],
    description:
      "Для классических брюк на средней посадке со стрелкой была выбрана тонкая согревающая шерсть. Мы дополнили изделие шелковистой подкладочной тканью. Два кармана с отрезным бочком (внутренним карманом, который располагается в боковом шве) и скрытая застёжка на молнию.",
    structure:
      "Ткань верха: 98% шерсть, 2%эластан Подкладочная ткань: 65% полиэстер, 35% хлопок",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/2023/01/091220222934.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222888.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222928.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W1201P-03",
    title: "ЖАКЕТ ИЗ ТОНКОЙ ШЕРСТИ (PREMIUM)",
    price: "14990",
    size: ["S", "M", "L", "XL"],
    description:
      "Однобортный жакет классического силуэта с прилеганием по талии. Изделие имеет карманы с клапаном, отрезным бочком (напомним: это внутренний карман, который располагается в боковом шве) и вытачкой на полочке — здесь все детали, которые выдают идеальный тейлоринг. Классическая линия плеча.",
    structure:
      "Ткань верха: 100% шерсть Подкладочная ткань: 70% вискоза, 30% полиэстер",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/2023/01/091220222176_Swrs36S.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222232_xKzfkNR.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222241_CLIykT8.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2302W1601P-03",
    title: "БРЮКИ ИЗ ТОНКОЙ ШЕРСТИ",
    price: "11990",
    size: ["S", "M", "L", "XL"],
    description:
      "Для классических брюк на средней посадке со стрелкой была выбрана тонкая согревающая шерсть. Мы дополнили изделие шелковистой подкладочной тканью. Два кармана с отрезным бочком (внутренним карманом, который располагается в боковом шве) и скрытая застёжка на молнию.",
    structure:
      "Ткань верха: 100% шерсть, Подкладочная ткань: 65% полиэстер, 35% хлопок",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/2023/01/091220222257_eko2xLR.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222259_VyukQuY.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/091220222270_lHH1ZWA.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2303W1206-51",
    title: "ЖАКЕТ ДВУБОРТНЫЙ OVERSIZE",
    price: "11990",
    size: ["S", "M", "L", "XL"],
    description:
      "Двубортный жакет прямого силуэта с классической линией плеча. Для модели мы выбрали турецкую костюмную ткань, которая производилась только для нас, с добавлением нежных волокон вискозы. Изделие с приятной к телу подкладочной тканью.",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подкладочная ткань: 70% вискоза, 30% полиэстер",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/images/2023/01/211220224149.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/2023/01/211220224095.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220224110.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.2303W1605-51",
    title: "БРЮКИ ЗАУЖЕННЫЕ К НИЗУ",
    price: "8990",
    size: ["S", "M", "L", "XL"],
    description:
      "Зауженные брюки на средней посадке из костюмной ткани. Модель на складке и со стрелкой. Ткань хорошо держит форму, поэтому изделие долго сохраняет свой первоначальный вид. Два кармана с отрезным бочком и скрытая застёжка на молнии.",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подкладочная ткань: 70% вискоза, 30% полиэстер",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/images/2023/01/211220224132_TD6L8AL.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220224119.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/01/211220224125.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.JA058",
    title: "ОДНОБОРТНЫЙ ЖАКЕТ OVERSIZE С СУПАТНОЙ ЗАСТЕЖКОЙ TREND",
    price: "13490",
    size: ["S", "M", "L", "XL"],
    description:
      "Однобортный жакет со скрытой застежкой. Акцентная линия плеча и два кармана. Модель прямого кроя, которую можно сочетать как с приталенными вещами, так и с моделями oversize. Новая костюмная ткань в этом сезоне еще дольше сохраняет свой первоначальный вид, поэтому жакет прослужит не один сезон. ",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подкладочная ткань: 60% вискоза, 35% полиэстер.",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/2023/02/020220235309_dhIyG1D.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/02/020220235345_q1AkBvH.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/10/190720224507.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.PA075",
    title: "ОБЪЕМНЫЕ БРЮКИ ПОЛНОЙ ДЛИНЫ TREND",
    price: "8490",
    size: ["S", "M", "L", "XL"],
    description:
      "Широкие брюки полной длины. Модель средней посадки со скрытой застежкой на молнию. Мы выполнили брюки из обновленной костюмной ткани, которая лучше садится по фигуре и держит форму.",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подкладочная ткань: 60% вискоза, 35% полиэстер.",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/2023/02/020220235373_d8TiTHM.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/02/020220235383_0XHV5he.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2023/02/020220235386_X4bsygY.jpg.536x782_q90.jpg",
    ],
  },
  {
    id: "АРТ.JA055",
    title: "ОДНОБОРТНЫЙ ЖАКЕТ БЕЗ ЛАЦКАНОВ",
    price: "7990",
    size: ["S", "M", "L", "XL"],
    description:
      "Однобортный жакет без лацканов. Модель с тонким поясом, чтобы подчеркнуть талию. Два кармана по бокам. Классическая линия плеча и универсальная длина до середины бедра. Вы можете носить эту модель как альтернативу кардигану или жакету с лацканами",
    structure:
      "Ткань верха: 65% вискоза, 32% полиэстер, 3% эластан Подклад: 60% вискоза, 35% полиэстер, 5% спандекс",
    category: categories.costumes,
    image: [
      "https://allweneed.ru/media/products/2022/09/250820222384.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09/250820222387.jpg.536x782_q90.jpg",
      "https://allweneed.ru/media/products/images/2022/09/250820222262.jpg.536x782_q90.jpg",
    ],
  },
];
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products);
    }, 2000);
  });

export default {
  fetchAll,
};
