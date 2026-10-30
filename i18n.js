/* AutoCars translations.
   The app is written in Hebrew. This file swaps Hebrew text on the screen for the chosen language
   (English, Russian, Arabic, Spanish) and switches the page direction. Text inside [data-notr]
   (user names, reviews, emails) is never touched. */
(function () {
  const LANGS = {
    he: { name: "עברית", short: "עב", dir: "rtl", i: -1 },
    en: { name: "English", short: "EN", dir: "ltr", i: 0 },
    ru: { name: "Русский", short: "RU", dir: "ltr", i: 1 },
    ar: { name: "العربية", short: "ع", dir: "rtl", i: 2 },
    es: { name: "Español", short: "ES", dir: "ltr", i: 3 },
  };

  // Hebrew → [English, Russian, Arabic, Spanish]
  const D = {
    // ---- top bar, search, menu ----
    "AutoCars – מידע עדכני על רכבים": ["AutoCars – up-to-date car information", "AutoCars – актуальная информация об автомобилях", "AutoCars – معلومات محدّثة عن السيارات", "AutoCars – información actualizada de autos"],
    "התחברות": ["Sign in", "Вход", "تسجيل الدخول", "Iniciar sesión"],
    "החשבון שלי": ["My account", "Мой аккаунт", "حسابي", "Mi cuenta"],
    "שפה": ["Language", "Язык", "اللغة", "Idioma"],
    "מה הרכב הזה?": ["What car is this?", "Что это за машина?", "ما هذه السيارة؟", "¿Qué auto es este?"],
    "מצלמים לוחית, ומקבלים דגם, טסט, יד, צריכת דלק והיסטוריית בעלויות": ["Snap a plate and get the model, inspection, owners, fuel use and ownership history", "Сфотографируйте номер и получите модель, техосмотр, владельцев, расход и историю", "صوّر اللوحة واحصل على الطراز والفحص والمالكين واستهلاك الوقود وتاريخ الملكية", "Fotografía la matrícula y obtén modelo, ITV, dueños, consumo e historial"],
    "צלם לוחית": ["Scan plate", "Снять номер", "صوّر اللوحة", "Escanear matrícula"],
    "בחירת תמונה מהגלריה": ["Choose a photo", "Выбрать фото", "اختيار صورة", "Elegir foto"],
    "תמונה להמחשה · ויקיפדיה": ["Illustration · Wikipedia", "Иллюстрация · Википедия", "صورة توضيحية · ويكيبيديا", "Imagen ilustrativa · Wikipedia"],
    "מספר רישוי": ["Plate number", "Номер", "رقم اللوحة", "Matrícula"],
    "בדוק": ["Check", "Проверить", "افحص", "Consultar"],
    "אפשר גם להקליד מספר. הנתונים מגיעים ממאגרי משרד התחבורה": ["You can also type a number. Data comes from the Ministry of Transport", "Можно ввести номер вручную. Данные Министерства транспорта", "يمكنك أيضًا كتابة الرقم. البيانات من وزارة المواصلات", "También puedes escribir el número. Datos del Ministerio de Transporte"],
    "חיפושים אחרונים": ["Recent searches", "Недавние поиски", "عمليات البحث الأخيرة", "Búsquedas recientes"],
    "ההיסטוריה שלי": ["My history", "Моя история", "سجلي", "Mi historial"],
    "רכבים שמורים": ["Saved cars", "Сохранённые машины", "السيارات المحفوظة", "Autos guardados"],
    "הצג הכל": ["Show all", "Показать все", "عرض الكل", "Ver todo"],
    "מדיניות פרטיות": ["Privacy policy", "Политика конфиденциальности", "سياسة الخصوصية", "Política de privacidad"],
    "מדיניות הפרטיות": ["the privacy policy", "политикой конфиденциальности", "سياسة الخصوصية", "la política de privacidad"],
    "מידע ממאגרי משרד התחבורה": ["Data from the Ministry of Transport", "Данные Министерства транспорта", "بيانات وزارة المواصلات", "Datos del Ministerio de Transporte"],
    "תפריט ראשי": ["Main menu", "Главное меню", "القائمة الرئيسية", "Menú principal"],
    "דף הבית": ["Home", "Главная", "الرئيسية", "Inicio"],
    "החיפוש האחרון": ["Last search", "Последний поиск", "آخر بحث", "Última búsqueda"],
    "היסטוריה": ["History", "История", "السجل", "Historial"],
    "טיפים": ["Tips", "Советы", "نصائح", "Consejos"],
    "סגור": ["Close", "Закрыть", "إغلاق", "Cerrar"],

    // ---- loading and errors ----
    "התמונה שצולמה": ["Your photo", "Ваше фото", "صورتك", "Tu foto"],
    "טוען זיהוי טקסט": ["Loading text recognition", "Загружаем распознавание", "جارٍ تحميل التعرّف على النص", "Cargando reconocimiento"],
    "קורא את לוחית הרישוי": ["Reading the plate", "Распознаём номер", "قراءة اللوحة", "Leyendo la matrícula"],
    "לא הצלחתי לקרוא את התמונה. נסו תמונה אחרת או הקלידו את המספר": ["Couldn't read the photo. Try another one or type the number", "Не удалось прочитать фото. Попробуйте другое или введите номер", "تعذّرت قراءة الصورة. جرّب صورة أخرى أو اكتب الرقم", "No pude leer la foto. Prueba otra o escribe el número"],
    "מחפש במאגר משרד התחבורה": ["Searching the Ministry of Transport records", "Ищем в базе Министерства транспорта", "البحث في سجلات وزارة المواصلات", "Buscando en el Ministerio de Transporte"],
    "לא הצלחתי להתחבר למאגר של משרד התחבורה. בדקו שיש אינטרנט ונסו שוב": ["Couldn't reach the Ministry of Transport records. Check your connection and try again", "Нет связи с базой Министерства транспорта. Проверьте интернет и повторите", "تعذّر الوصول إلى سجلات وزارة المواصلات. تحقّق من الاتصال وحاول مجددًا", "No pude conectar con el Ministerio de Transporte. Revisa tu conexión e inténtalo de nuevo"],
    "פרטים": ["Details", "Подробности", "التفاصيل", "Detalles"],
    "נסה שוב": ["Try again", "Повторить", "حاول مجددًا", "Reintentar"],
    "המספר לא נמצא במאגר": ["Number not found", "Номер не найден", "الرقم غير موجود", "Número no encontrado"],
    "לא זוהתה לוחית בתמונה": ["No plate found in the photo", "Номер на фото не найден", "لم يتم العثور على لوحة في الصورة", "No se encontró matrícula en la foto"],
    "ייתכן שהמספר נקרא לא נכון. בחרו את המספר הנכון או תקנו אותו בשדה למעלה": ["The number may have been misread. Pick the right one or fix it above", "Возможно, номер прочитан неверно. Выберите правильный или исправьте выше", "ربما قُرئ الرقم بشكل خاطئ. اختر الرقم الصحيح أو صحّحه في الأعلى", "Puede que el número se leyera mal. Elige el correcto o corrígelo arriba"],
    "צלמו קרוב יותר וישר מול הלוחית, או הקלידו את המספר בשדה למעלה": ["Shoot closer and straight at the plate, or type the number above", "Снимите ближе и прямо, или введите номер выше", "صوّر من مسافة أقرب وباستقامة، أو اكتب الرقم في الأعلى", "Fotografía más cerca y de frente, o escribe el número arriba"],
    "מספר רישוי צריך להכיל 5 עד 8 ספרות": ["A plate number has 5 to 8 digits", "Номер должен содержать от 5 до 8 цифр", "رقم اللوحة يتكوّن من 5 إلى 8 أرقام", "La matrícula tiene de 5 a 8 dígitos"],
    "אפשר גם להקליד מספר. הנתונים מגיעים ממאגרי משרד התחבורה.": ["You can also type a number. Data comes from the Ministry of Transport.", "Можно ввести номер вручную. Данные Министерства транспорта.", "يمكنك أيضًا كتابة الرقم. البيانات من وزارة المواصلات.", "También puedes escribir el número. Datos del Ministerio de Transporte."],

    // ---- report header and tabs ----
    "רכב": ["Car", "Автомобиль", "سيارة", "Auto"],
    "רכב פרטי": ["Private car", "Легковой", "سيارة خاصة", "Turismo"],
    "רכב מסחרי": ["Commercial vehicle", "Коммерческий", "سيارة تجارية", "Vehículo comercial"],
    "שתף": ["Share", "Поделиться", "مشاركة", "Compartir"],
    "שמור": ["Save", "Сохранить", "حفظ", "Guardar"],
    "נשמר": ["Saved", "Сохранено", "محفوظ", "Guardado"],
    "חלקי הדוח": ["Report sections", "Разделы отчёта", "أقسام التقرير", "Secciones del informe"],
    "ראשי": ["Main", "Главное", "الرئيسي", "Principal"],
    "בטיחות": ["Safety", "Безопасность", "السلامة", "Seguridad"],
    "מחיר וביטוח": ["Price & insurance", "Цена и страховка", "السعر والتأمين", "Precio y seguro"],
    "עלות חודשית": ["Monthly cost", "Расходы в месяц", "التكلفة الشهرية", "Coste mensual"],
    "חוות דעת": ["Reviews", "Отзывы", "التقييمات", "Opiniones"],
    "הקישור הועתק. אפשר להדביק אותו בכל מקום": ["Link copied. Paste it anywhere", "Ссылка скопирована", "تم نسخ الرابط. الصقه في أي مكان", "Enlace copiado. Pégalo donde quieras"],
    "דוח רכב מלא ב": ["full car report on", "полный отчёт на", "تقرير كامل على", "informe completo en"],

    // ---- summary score ----
    "מסכם את בדיקת הרכב": ["Summing up the check", "Подводим итоги", "تلخيص الفحص", "Resumiendo la consulta"],
    "דורש בדיקה רצינית": ["Needs a serious check", "Требует серьёзной проверки", "يحتاج إلى فحص جدّي", "Requiere una revisión seria"],
    "נמצאו בעיות משמעותיות": ["Significant issues found", "Найдены серьёзные проблемы", "وُجدت مشاكل كبيرة", "Se encontraron problemas importantes"],
    "שימו לב לכמה דברים": ["A few things to watch", "Обратите внимание", "انتبه لبعض الأمور", "Atención a algunas cosas"],
    "כדאי לבדוק את הנקודות האלה לפני קנייה": ["Check these points before buying", "Проверьте это перед покупкой", "افحص هذه النقاط قبل الشراء", "Revisa estos puntos antes de comprar"],
    "נראה טוב, עם הסתייגות": ["Looks good, with one caveat", "Хорошо, с одной оговоркой", "يبدو جيدًا، مع تحفّظ واحد", "Se ve bien, con una salvedad"],
    "יש נקודה אחת שכדאי לבדוק": ["One point is worth checking", "Одну вещь стоит проверить", "هناك نقطة واحدة تستحق الفحص", "Hay un punto que conviene revisar"],
    "נראה טוב": ["Looks good", "Выглядит хорошо", "يبدو جيدًا", "Se ve bien"],
    "לא נמצאו סימני אזהרה במאגרים": ["No warning signs in the records", "Предупреждений в базах нет", "لا توجد علامات تحذير في السجلات", "Sin señales de alerta en los registros"],
    "רישיון הרכב פג תוקף": ["Registration has expired", "Регистрация просрочена", "انتهت صلاحية الترخيص", "El permiso de circulación caducó"],
    "רישיון בתוקף": ["Registration valid", "Регистрация действительна", "الترخيص ساري", "Permiso vigente"],
    "הרכב בוטל סופית וירד מהכביש": ["Permanently deregistered", "Окончательно снят с учёта", "أُلغي تسجيلها نهائيًا", "Dado de baja definitiva"],
    "ריקול פתוח שלא בוצע": ["Open recall not done", "Невыполненный отзыв", "استدعاء مفتوح لم يُنفَّذ", "Revisión de fábrica pendiente"],
    "ריקולים פתוחים שלא בוצעו": ["open recalls not done", "невыполненных отзывов", "استدعاءات مفتوحة لم تُنفَّذ", "revisiones de fábrica pendientes"],
    "אין ריקולים פתוחים": ["No open recalls", "Открытых отзывов нет", "لا توجد استدعاءات مفتوحة", "Sin revisiones pendientes"],
    "הרבה בעלים": ["many owners", "много владельцев", "مالكون كثيرون", "muchos dueños"],
    "עבר ליסינג או השכרה": ["Was a lease or rental car", "Был в лизинге или прокате", "كانت سيارة تأجير أو ليسينغ", "Fue de leasing o alquiler"],
    "נסע בממוצע": ["Averaged", "В среднем", "قطعت بالمتوسط", "Promedio de"],
    "ק״מ בשנה, יותר מהרגיל": ["km a year, more than usual", "км в год, больше обычного", "كم سنويًا، أكثر من المعتاد", "km al año, más de lo normal"],
    "נרשם שינוי מבנה": ["Structural change recorded", "Зарегистрировано изменение конструкции", "سُجّل تعديل في الهيكل", "Modificación estructural registrada"],
    "הוסב לגפ״מ": ["Converted to LPG", "Переведён на газ", "حُوّلت إلى غاز", "Convertido a GLP"],
    "יבוא אישי": ["Personal import", "Частный импорт", "استيراد شخصي", "Importación particular"],
    "בטיחות נמוכה": ["Low safety", "Низкая безопасность", "سلامة منخفضة", "Seguridad baja"],
    "כוכבים ב": ["stars in", "звезды в", "نجوم في", "estrellas en"],
    "כוכבי בטיחות ב": ["safety stars in", "звезд безопасности в", "نجوم سلامة في", "estrellas de seguridad en"],
    "סיכום אוטומטי לפי מאגרי משרד התחבורה. לפני קנייה מומלץ גם לבדוק את הרכב במכון": ["Automatic summary from Ministry of Transport records. Get a garage inspection before buying", "Автоматическая сводка по данным Министерства транспорта. Перед покупкой проверьте машину на станции", "ملخص تلقائي من سجلات وزارة المواصلات. يُنصح بفحص السيارة في مركز فحص قبل الشراء", "Resumen automático con datos del Ministerio de Transporte. Antes de comprar, haz una inspección en un taller"],

    // ---- overview tiles ----
    "טסט אחרון": ["Last inspection", "Последний техосмотр", "آخر فحص", "Última ITV"],
    "רישיון פג ב-": ["Expired on ", "Истекла ", "انتهى في ", "Caducó el "],
    "בתוקף עד": ["Valid until", "Действует до", "ساري حتى", "Válido hasta"],
    "יד": ["Owner", "Владелец", "المالك", "Dueño"],
    "בודק בעלויות": ["Checking owners", "Проверяем владельцев", "فحص المالكين", "Comprobando dueños"],
    "לפי רשומות הבעלות": ["from ownership records", "по записям о владельцах", "حسب سجلات الملكية", "según registros de propiedad"],
    "צריכת דלק": ["Fuel use", "Расход топлива", "استهلاك الوقود", "Consumo"],
    "בודק": ["Checking", "Проверяем", "جارٍ الفحص", "Comprobando"],
    "מנוע": ["Engine", "Двигатель", "المحرك", "Motor"],
    "כוח מנוע": ["Power", "Мощность", "القوة", "Potencia"],
    "נתוני יצרן": ["manufacturer data", "данные производителя", "بيانات المصنّع", "datos del fabricante"],
    "מבחן": ["Tested", "Тест", "اختبار", "Prueba"],
    "בדיקות היסטוריה": ["History checks", "Проверки истории", "فحوصات السجل", "Historial y controles"],
    "כמה זה יעלה לי בחודש?": ["What will it cost me a month?", "Сколько это будет стоить в месяц?", "كم ستكلّفني شهريًا؟", "¿Cuánto me costará al mes?"],

    // ---- car details ----
    "פרטי הרכב": ["Car details", "Данные автомобиля", "تفاصيل السيارة", "Datos del auto"],
    "בעלויות": ["Ownership", "Владельцы", "الملكية", "Propietarios"],
    "יצרן": ["Make", "Марка", "الشركة المصنّعة", "Marca"],
    "דגם": ["Model", "Модель", "الطراز", "Modelo"],
    "תת דגם": ["Trim", "Комплектация", "الفئة", "Versión"],
    "קוד דגם יצרן": ["Maker model code", "Код модели", "رمز الطراز", "Código de modelo"],
    "שנת ייצור": ["Year", "Год выпуска", "سنة الصنع", "Año"],
    "עלייה לכביש": ["On the road since", "На дороге с", "على الطريق منذ", "En circulación desde"],
    "צבע": ["Color", "Цвет", "اللون", "Color"],
    "סוג דלק": ["Fuel", "Топливо", "نوع الوقود", "Combustible"],
    "בעלות נוכחית": ["Current ownership", "Текущий владелец", "الملكية الحالية", "Propiedad actual"],
    "יבואן": ["Importer", "Импортёр", "المستورد", "Importador"],
    "יבואן המותג": ["brand importer", "импортёр марки", "مستورد العلامة", "importador de la marca"],
    "תו חניה לנכה": ["Disabled parking permit", "Знак инвалида", "تصريح موقف لذوي الإعاقة", "Tarjeta de aparcamiento para discapacitados"],
    "מחירון יצרן (חדש)": ["List price (new)", "Цена нового", "سعر القائمة (جديدة)", "Precio de lista (nuevo)"],
    "מספר שלדה": ["VIN", "VIN", "رقم الهيكل", "Bastidor (VIN)"],
    "לשילדה המלאה": ["Full VIN", "Полный VIN", "رقم الهيكل الكامل", "VIN completo"],
    "עוד פרטים": ["More details", "Подробнее", "تفاصيل إضافية", "Más detalles"],
    "דגם מנוע": ["Engine model", "Модель двигателя", "طراز المحرك", "Modelo de motor"],
    "צמיגים": ["Tires", "Шины", "الإطارات", "Neumáticos"],
    "קוד דגם (משרד התחבורה)": ["Model code (Ministry of Transport)", "Код модели (Минтранс)", "رمز الطراز (وزارة المواصلات)", "Código de modelo (Ministerio)"],
    "מנוע וצריכת דלק": ["Engine & fuel use", "Двигатель и расход", "المحرك واستهلاك الوقود", "Motor y consumo"],
    "טוען מפרט": ["Loading specs", "Загружаем характеристики", "تحميل المواصفات", "Cargando ficha"],
    "כמה יש בישראל": ["How many in Israel", "Сколько в Израиле", "كم يوجد في إسرائيل", "Cuántos hay en Israel"],
    "סופר": ["Counting", "Считаем", "جارٍ العدّ", "Contando"],
    "אותו דגם ושנה": ["Same model and year", "Та же модель и год", "نفس الطراز والسنة", "Mismo modelo y año"],
    "כל השנים": ["all years", "все годы", "كل السنوات", "todos los años"],
    "רכבים פעילים הרשומים במשרד התחבורה": ["Active vehicles registered with the Ministry of Transport", "Активные машины в базе Минтранса", "مركبات فعّالة مسجّلة في وزارة المواصلات", "Vehículos activos registrados en el Ministerio"],
    "אין נתון": ["No data", "Нет данных", "لا توجد بيانات", "Sin datos"],
    "אין": ["None", "Нет", "لا يوجد", "No"],
    "יש": ["Yes", "Есть", "يوجد", "Sí"],
    "הונפק": ["issued", "выдан", "صدر", "emitida"],
    "אין נתוני בעלות": ["No ownership data", "Нет данных о владельцах", "لا توجد بيانات ملكية", "Sin datos de propiedad"],
    "המאגר לא זמין": ["Records unavailable", "База недоступна", "السجلات غير متاحة", "Registros no disponibles"],
    "אין נתוני בעלות לרכב הזה במאגר": ["No ownership records for this car", "Нет записей о владельцах", "لا توجد سجلات ملكية لهذه السيارة", "Sin registros de propiedad para este auto"],
    "מאגר הבעלויות לא זמין כרגע": ["Ownership records unavailable right now", "База владельцев сейчас недоступна", "سجلات الملكية غير متاحة حاليًا", "Registros de propiedad no disponibles ahora"],
    "מרכב": ["Body", "Кузов", "الهيكل", "Carrocería"],
    "נפח מנוע": ["Engine size", "Объём двигателя", "سعة المحرك", "Cilindrada"],
    "כוח סוס": ["Horsepower", "Лошадиные силы", "قوة حصانية", "Potencia"],
    "הנעה": ["Drive", "Привод", "الدفع", "Tracción"],
    "טכנולוגיית הנעה": ["Powertrain", "Силовая установка", "تقنية الدفع", "Propulsión"],
    "דלתות": ["Doors", "Двери", "الأبواب", "Puertas"],
    "מושבים": ["Seats", "Места", "المقاعد", "Plazas"],
    "משקל כולל": ["Gross weight", "Полная масса", "الوزن الإجمالي", "Peso total"],
    "כושר גרירה": ["Towing capacity", "Буксировка", "قدرة السحب", "Capacidad de remolque"],
    "פליטת": ["Emissions", "Выбросы", "انبعاثات", "Emisiones"],
    "כריות אוויר": ["Airbags", "Подушки безопасности", "الوسائد الهوائية", "Airbags"],
    "ניקוד בטיחות": ["Safety score", "Балл безопасности", "درجة السلامة", "Puntuación de seguridad"],
    "צריכה משולבת": ["Combined", "Смешанный цикл", "استهلاك مشترك", "Combinado"],
    "צריכת דלק · משולב": ["Fuel use · combined", "Расход · смешанный", "الوقود · مشترك", "Consumo · combinado"],
    "צריכת חשמל · משולב": ["Power use · combined", "Расход энергии · смешанный", "الكهرباء · مشترك", "Consumo eléctrico · combinado"],
    "טווח נסיעה": ["Range", "Запас хода", "مدى القيادة", "Autonomía"],
    "בעיר": ["City", "Город", "داخل المدينة", "Ciudad"],
    "בכביש מהיר": ["Highway", "Трасса", "طريق سريع", "Carretera"],
    "צריכה במבחני EPA בארה״ב": ["Fuel use in US EPA tests", "Расход по тестам EPA (США)", "الاستهلاك في اختبارات EPA الأمريكية", "Consumo en pruebas EPA de EE. UU."],
    "ממוצע של": ["Average of", "Среднее по", "متوسط", "Media de"],
    "גרסאות": ["versions", "версиям", "إصدارات", "versiones"],
    "לא נמצאו נתוני מפרט וצריכה לדגם הזה": ["No specs or fuel data found for this model", "Нет данных о модели", "لا توجد مواصفات لهذا الطراز", "Sin ficha ni consumo para este modelo"],
    "לפי מבחני EPA": ["from EPA tests", "по тестам EPA", "حسب اختبارات EPA", "según pruebas EPA"],
    "נתוני יצרן (WLTP)": ["manufacturer data (WLTP)", "данные производителя (WLTP)", "بيانات المصنّع (WLTP)", "datos del fabricante (WLTP)"],
    "ק״מ לליטר": ["km/l", "км/л", "كم/لتر", "km/l"],
    "ליטר ל-100 ק״מ": ["l/100 km", "л/100 км", "لتر/100 كم", "l/100 km"],
    "קוט״ש ל-100 ק״מ": ["kWh/100 km", "кВт·ч/100 км", "كيلوواط ساعة/100 كم", "kWh/100 km"],
    "ק״מ": ["km", "км", "كم", "km"],
    "סמ״ק": ["cc", "см³", "سم³", "cc"],
    "כ״ס": ["hp", "л.с.", "حصان", "CV"],
    "ק״ג": ["kg", "кг", "كغ", "kg"],
    "גרם/ק״מ": ["g/km", "г/км", "غ/كم", "g/km"],
    "ליטר": ["liters", "литров", "لتر", "litros"],
    "נפח מיכל דלק": ["Fuel tank", "Бак", "سعة الخزان", "Depósito"],
    "מיכל דלק": ["Fuel tank", "Бак", "خزان الوقود", "Depósito"],
    "משולב": ["combined", "смешанный", "مشترك", "combinado"],
    "עירוני": ["city", "город", "مدينة", "ciudad"],
    "בין-עירוני": ["highway", "трасса", "بين المدن", "carretera"],

    // ---- history tab ----
    "היסטוריה ובדיקות": ["History & checks", "История и проверки", "السجل والفحوصات", "Historial y controles"],
    "בודק במאגרי משרד התחבורה": ["Checking Ministry of Transport records", "Проверяем базы Министерства транспорта", "فحص سجلات وزارة المواصلات", "Revisando registros del Ministerio"],
    "קילומטראז׳": ["Mileage", "Пробег", "عدد الكيلومترات", "Kilometraje"],
    "המאגר לא זמין כרגע": ["Records unavailable right now", "База сейчас недоступна", "السجلات غير متاحة حاليًا", "Registros no disponibles ahora"],
    "לא דווח קילומטראז׳ לרכב הזה": ["No mileage reported for this car", "Пробег не сообщался", "لم يُسجَّل عدد كيلومترات لهذه السيارة", "Sin kilometraje registrado"],
    "קילומטראז׳ דווח": ["Mileage reported", "Пробег сообщён", "تم تسجيل الكيلومترات", "Kilometraje registrado"],
    "הקילומטראז׳ שדווח בטסט האחרון": ["Mileage at the last inspection", "Пробег на последнем техосмотре", "الكيلومترات في آخر فحص", "Kilometraje en la última ITV"],
    "שינוי מבנה": ["Structural change", "Изменение конструкции", "تعديل في الهيكل", "Modificación estructural"],
    "נרשם ברכב שינוי מבנה": ["A structural change was recorded", "Зарегистрировано изменение конструкции", "سُجّل تعديل في الهيكل", "Se registró una modificación estructural"],
    "הרכב הוסב להנעה בגז": ["The car was converted to run on gas", "Машина переведена на газ", "حُوّلت السيارة للعمل بالغاز", "El auto se convirtió a gas"],
    "שינוי צבע": ["Color change", "Перекраска", "تغيير اللون", "Cambio de color"],
    "צבע הרכב שונה מהצבע המקורי": ["The color differs from the original", "Цвет отличается от заводского", "اللون مختلف عن الأصلي", "El color difiere del original"],
    "ריקולים": ["Recalls", "Отзывы", "الاستدعاءات", "Revisiones de fábrica"],
    "לא נמצאו קריאות שירות של היצרן שלא בוצעו ברכב": ["No outstanding manufacturer recalls", "Невыполненных отзывов производителя нет", "لا توجد استدعاءات معلّقة من المصنّع", "Sin revisiones de fábrica pendientes"],
    "ריקול מס׳": ["Recall no.", "Отзыв №", "استدعاء رقم", "Revisión n.º"],
    "ריקול פתוח": ["open recall", "открытый отзыв", "استدعاء مفتوح", "revisión pendiente"],
    "ריקולים פתוחים": ["open recalls", "открытых отзывов", "استدعاءات مفتوحة", "revisiones pendientes"],
    "קריאות שירות של היצרן שעדיין לא בוצעו. התיקון ניתן בחינם אצל היבואן": ["Manufacturer recalls not yet done. The importer fixes them for free", "Отзывы производителя ещё не выполнены. Импортёр устраняет бесплатно", "استدعاءات من المصنّع لم تُنفَّذ بعد. يصلحها المستورد مجانًا", "Revisiones de fábrica sin hacer. El importador las repara gratis"],
    "ביטול סופי": ["Deregistration", "Снятие с учёта", "إلغاء نهائي", "Baja definitiva"],
    "לא בוטל סופית": ["Not deregistered", "Не снят с учёта", "لم يُلغَ تسجيلها", "Sin baja definitiva"],
    "הרכב לא מופיע ברשימת הרכבים שירדו מהכביש לצמיתות": ["Not on the list of cars permanently off the road", "Не числится среди окончательно снятых", "ليست ضمن السيارات المسحوبة نهائيًا", "No figura entre los dados de baja definitiva"],
    "הרכב בוטל סופית": ["Permanently deregistered", "Окончательно снят с учёта", "أُلغي تسجيلها نهائيًا", "Dado de baja definitiva"],
    "הרכב מופיע ברשימת הביטולים הסופיים": ["The car is on the final deregistration list", "Машина в списке окончательно снятых", "السيارة في قائمة الإلغاء النهائي", "El auto figura en la lista de bajas definitivas"],
    "בדרך כלל זה אחרי אובדן גמור או גריטה": ["Usually after a total loss or scrapping", "Обычно после полной гибели или утилизации", "عادةً بعد خسارة كلية أو تخريد", "Normalmente tras siniestro total o desguace"],
    "הרכב יובא ביבוא אישי ולא דרך היבואן הרשמי": ["Imported privately, not through the official importer", "Ввезён частным образом, не официальным импортёром", "استُوردت بشكل شخصي وليس عبر الوكيل الرسمي", "Importado por particular, no por el importador oficial"],
    "יבוא רשמי": ["Official import", "Официальный импорт", "استيراد رسمي", "Importación oficial"],
    "הרכב לא רשום כיבוא אישי": ["Not registered as a personal import", "Не числится частным импортом", "غير مسجّلة كاستيراد شخصي", "No registrado como importación particular"],
    "עבר ביטוחי ותאונות": ["Insurance and accident history", "Страховая история и ДТП", "سجل التأمين والحوادث", "Historial de seguros y accidentes"],
    "המידע הזה לא פתוח לציבור בישראל, כי הוא קשור לבעל הרכב. אפשר לבקש מהמוכר אישור העדר תביעות מחברת הביטוח שלו": ["This isn't public in Israel because it belongs to the owner. Ask the seller for a no-claims letter from their insurer", "В Израиле это не публикуется, так как относится к владельцу. Попросите у продавца справку об отсутствии выплат", "هذه المعلومات غير علنية في إسرائيل لأنها مرتبطة بالمالك. اطلب من البائع شهادة عدم وجود مطالبات من شركة تأمينه", "En Israel no es público porque pertenece al dueño. Pide al vendedor un certificado de no siniestralidad de su aseguradora"],
    "לא הצלחתי לטעון את ההיסטוריה כרגע": ["Couldn't load the history right now", "Не удалось загрузить историю", "تعذّر تحميل السجل حاليًا", "No pude cargar el historial ahora"],
    "היסטוריית קילומטראז׳": ["Mileage history", "История пробега", "سجل الكيلومترات", "Historial de kilometraje"],
    "טסט": ["Inspection", "Техосмотр", "فحص", "ITV"],
    "בממוצע כ": ["On average about", "В среднем около", "بالمتوسط نحو", "De media unos"],
    "ק״מ בשנה מאז שעלה לכביש": ["km a year since it hit the road", "км в год с начала эксплуатации", "كم سنويًا منذ نزولها إلى الطريق", "km al año desde que salió a la carretera"],
    "למה יש מעט קריאות?": ["Why so few readings?", "Почему так мало данных?", "لماذا القراءات قليلة؟", "¿Por qué hay pocas lecturas?"],
    "משרד התחבורה שומר רק את הקילומטראז׳ מהטסט האחרון, וכל טסט חדש מחליף את הקודם. האפליקציה שומרת כל קריאה שהיא רואה, כך שהיסטוריה מלאה נבנית עם הזמן לרכבים שנבדקים שוב בשנים הבאות": ["The Ministry keeps only the latest inspection's mileage; each new inspection replaces it. The app saves every reading it sees, so a full history builds up for cars checked again in later years", "Министерство хранит только пробег с последнего техосмотра. Приложение сохраняет каждое показание, и история накапливается со временем", "تحتفظ الوزارة بقراءة آخر فحص فقط، وكل فحص جديد يستبدلها. يحفظ التطبيق كل قراءة يراها، فيُبنى السجل مع الوقت", "El Ministerio solo guarda el kilometraje de la última ITV; cada nueva la reemplaza. La app guarda cada lectura, así el historial crece con el tiempo"],
    "לרכב הזה עדיין יש רק קריאה אחת": ["This car has only one reading so far", "Пока есть только одно показание", "لهذه السيارة قراءة واحدة حتى الآن", "Este auto solo tiene una lectura por ahora"],
    "קילומטראז׳ נמוך, כ": ["Low mileage, about", "Небольшой пробег, около", "كيلومترات قليلة، نحو", "Kilometraje bajo, unos"],
    "קילומטראז׳ רגיל, כ": ["Normal mileage, about", "Обычный пробег, около", "كيلومترات عادية، نحو", "Kilometraje normal, unos"],
    "ק״מ בשנה": ["km a year", "км в год", "كم سنويًا", "km al año"],

    // ---- safety ----
    "מבחני ריסוק Euro NCAP": ["Euro NCAP crash tests", "Краш-тесты Euro NCAP", "اختبارات تصادم Euro NCAP", "Pruebas de choque Euro NCAP"],
    "אין במאגר שלנו תוצאת": ["We don't have a", "У нас нет результата", "لا توجد لدينا نتيجة", "No tenemos resultado de"],
    "לדגם הזה": ["result for this model", "для этой модели", "لهذا الطراز", "para este modelo"],
    "מבחן משנת": ["Tested in", "Тест", "اختُبرت عام", "Prueba de"],
    "באבזור סטנדרטי": ["with standard equipment", "в базовой комплектации", "بتجهيز قياسي", "con equipamiento de serie"],
    "הרכב שלך משנת": ["Your car is from", "Ваша машина", "سيارتك من عام", "Tu auto es de"],
    "ייתכן שמדור קודם": ["it may be the previous generation", "возможно, предыдущее поколение", "قد تكون من الجيل السابق", "puede ser de la generación anterior"],
    "אבזור בטיחותי": ["Safety equipment", "Системы безопасности", "تجهيزات السلامة", "Equipamiento de seguridad"],
    "רמה לפי משרד התחבורה": ["Ministry of Transport level", "Уровень по Минтрансу", "المستوى حسب وزارة المواصلات", "Nivel según el Ministerio"],
    "מערכות כמו בלימה אוטומטית ושמירת נתיב. 8 זו הרמה הגבוהה ביותר": ["Systems like automatic braking and lane keeping. 8 is the highest", "Автоторможение, удержание полосы и т. п. 8 — максимум", "أنظمة مثل الفرملة التلقائية والحفاظ على المسار. 8 هي الأعلى", "Sistemas como frenada automática y mantenimiento de carril. 8 es el máximo"],
    "מבחני ריסוק בארה״ב (NHTSA)": ["US crash tests (NHTSA)", "Краш-тесты США (NHTSA)", "اختبارات التصادم الأمريكية (NHTSA)", "Pruebas de choque de EE. UU. (NHTSA)"],
    "התנגשות חזיתית": ["Frontal crash", "Фронтальный удар", "تصادم أمامي", "Choque frontal"],
    "התנגשות צד": ["Side crash", "Боковой удар", "تصادم جانبي", "Choque lateral"],
    "עמידות בהתהפכות": ["Rollover", "Опрокидывание", "مقاومة الانقلاب", "Vuelco"],
    "לגרסה האמריקאית": ["for the US version", "для версии США", "للنسخة الأمريكية", "para la versión de EE. UU."],
    "לא הצלחתי לטעון תוצאות מבחני ריסוק כרגע": ["Couldn't load crash test results right now", "Не удалось загрузить краш-тесты", "تعذّر تحميل نتائج اختبارات التصادم", "No pude cargar las pruebas de choque"],
    "רמת זיהום": ["Pollution level", "Уровень загрязнения", "مستوى التلوث", "Nivel de contaminación"],
    "זיהום": ["Pollution", "Загрязнение", "تلوث", "Contaminación"],
    "נמוכה מאוד": ["very low", "очень низкое", "منخفض جدًا", "muy baja"],
    "נמוכה": ["low", "низкое", "منخفض", "baja"],
    "בינונית": ["medium", "среднее", "متوسط", "media"],
    "גבוהה": ["high", "высокое", "مرتفع", "alta"],
    "הכי נקי": ["cleanest", "самый чистый", "الأنظف", "la más limpia"],
    "הכי מזהם": ["most polluting", "самый грязный", "الأكثر تلويثًا", "la más contaminante"],

    // ---- price, insurance, value ----
    "מחירון יצרן": ["List price", "Цена нового", "سعر القائمة", "Precio de lista"],
    "טוען": ["Loading", "Загрузка", "جارٍ التحميل", "Cargando"],
    "אין מחירון יצרן לדגם הזה במאגר משרד התחבורה": ["No list price for this model in Ministry records", "Нет цены нового в базе Минтранса", "لا يوجد سعر قائمة لهذا الطراز في سجلات الوزارة", "Sin precio de lista para este modelo en el Ministerio"],
    "מחיר רכב חדש, דגם": ["New-car price, model year", "Цена нового, модель", "سعر السيارة جديدة، طراز", "Precio nuevo, modelo"],
    "השנה הקרובה שנמצאה": ["nearest year found", "ближайший найденный год", "أقرب سنة متاحة", "año más cercano"],
    "אגרת רישוי שנתית": ["Annual registration fee", "Годовой сбор за регистрацию", "رسوم الترخيص السنوية", "Tasa anual de circulación"],
    "קבוצת מחיר": ["Price group", "Ценовая группа", "فئة السعر", "Grupo de precio"],
    "אגרה ועוד": ["fee plus", "сбор плюс", "رسوم إضافة إلى", "tasa más"],
    "אגרת רדיו. לפי תעריף משרד התחבורה מ-1.4.2026": ["radio fee. Ministry of Transport tariff from 1.4.2026", "радиосбор. Тариф Минтранса с 1.4.2026", "رسوم الراديو. حسب تعرفة وزارة المواصلات من 1.4.2026", "tasa de radio. Tarifa del Ministerio desde 1.4.2026"],
    "לא הצלחתי לטעון את מחירון היצרן": ["Couldn't load the list price", "Не удалось загрузить цену", "تعذّر تحميل سعر القائمة", "No pude cargar el precio de lista"],
    "הערכת שווי היום": ["Estimated value today", "Оценка стоимости сегодня", "القيمة التقديرية اليوم", "Valor estimado hoy"],
    "הערכה בלבד, לא מחיר שוק": ["Estimate only, not a market price", "Только оценка, не рыночная цена", "تقدير فقط، وليس سعر السوق", "Solo una estimación, no precio de mercado"],
    "איך זה מחושב?": ["How is this calculated?", "Как считается?", "كيف يُحسب؟", "¿Cómo se calcula?"],
    "נקודת המוצא היא מחירון היצרן של הרכב כשהיה חדש": ["The starting point is the car's list price when new", "Отправная точка — цена машины в новом состоянии", "نقطة البداية هي سعر السيارة عندما كانت جديدة", "El punto de partida es el precio de lista del auto nuevo"],
    "גיל הרכב": ["Car age", "Возраст машины", "عمر السيارة", "Edad del auto"],
    "שנים, וירידת ערך ממוצעת של": ["years, with average depreciation of", "лет, средняя потеря стоимости", "سنوات، مع انخفاض قيمة متوسط", "años, con una depreciación media de"],
    "בשנה הראשונה ו": ["in the first year and", "в первый год и", "في السنة الأولى و", "el primer año y"],
    "בכל שנה אחריה": ["each year after", "в каждый следующий год", "في كل سنة بعدها", "cada año siguiente"],
    "כמו שקורה לרכבי יוקרה": ["as with luxury cars", "как у премиальных машин", "كما في السيارات الفاخرة", "como en los autos de lujo"],
    "כמו שקורה לרכב חשמלי": ["as with electric cars", "как у электромобилей", "كما في السيارات الكهربائية", "como en los eléctricos"],
    "התאמות": ["Adjustments", "Поправки", "تعديلات", "Ajustes"],
    "פחות": ["minus", "минус", "ناقص", "menos"],
    "יותר": ["plus", "плюс", "زائد", "más"],
    "עבר ליסינג או השכרה: פחות 5%": ["was a lease or rental car: minus 5%", "был в лизинге или прокате: минус 5%", "كانت سيارة تأجير: ناقص 5%", "fue de leasing o alquiler: menos 5%"],
    "גבוה": ["high", "высокий", "مرتفع", "alto"],
    "נמוך": ["low", "низкий", "منخفض", "bajo"],
    "מהממוצע": ["vs. average", "относительно среднего", "مقارنة بالمتوسط", "respecto a la media"],
    "המחיר בפועל תלוי במצב הרכב, בתאונות, ברמת הגימור ובביקוש לדגם": ["The real price depends on condition, accidents, trim and demand", "Реальная цена зависит от состояния, ДТП, комплектации и спроса", "السعر الفعلي يعتمد على الحالة والحوادث والفئة والطلب", "El precio real depende del estado, accidentes, versión y demanda"],
    "שווי הרכב מאז שעלה לכביש": ["Value since it hit the road", "Стоимость с начала эксплуатации", "القيمة منذ نزولها إلى الطريق", "Valor desde que salió a la carretera"],
    "הנקודה הראשונה היא מחירון היצרן כשהרכב היה חדש, והאחרונה היא הערכת השווי היום. לחצו על נקודה כדי לראות את השווי באותה שנה": ["The first point is the new-car list price, the last is today's estimate. Tap a point to see that year's value", "Первая точка — цена нового, последняя — оценка сегодня. Нажмите на точку", "النقطة الأولى سعر السيارة جديدة والأخيرة تقدير اليوم. اضغط على نقطة لرؤية القيمة", "El primer punto es el precio nuevo y el último la estimación de hoy. Toca un punto para ver el valor"],
    "חדש": ["new", "новый", "جديدة", "nuevo"],
    "היום": ["today", "сегодня", "اليوم", "hoy"],
    "בערך": ["about", "около", "نحو", "unos"],
    "מחיר בשוק היום": ["Market price today", "Рыночная цена сегодня", "سعر السوق اليوم", "Precio de mercado hoy"],
    "מודעות למכירה ביד2": ["Listings on Yad2", "Объявления на Yad2", "إعلانات على Yad2", "Anuncios en Yad2"],
    "מחירון לוי יצחק": ["Levi Yitzhak price guide", "Прайс Леви Ицхак", "دليل أسعار ليفي يتسحاق", "Guía de precios Levi Yitzhak"],
    "ביטוח לנהג מעל גיל 30": ["Insurance for a driver over 30", "Страховка для водителя старше 30", "تأمين لسائق فوق 30", "Seguro para conductor mayor de 30"],
    "ביטוח חובה": ["Mandatory insurance", "Обязательная страховка", "التأمين الإلزامي", "Seguro obligatorio"],
    "ביטוח מקיף": ["Comprehensive insurance", "Каско", "التأمين الشامل", "Seguro a todo riesgo"],
    "רכב משפחתי": ["family car", "семейный автомобиль", "سيارة عائلية", "auto familiar"],
    "רכב קטן": ["small car", "малый автомобиль", "سيارة صغيرة", "auto pequeño"],
    "רכב פנאי / SUV": ["SUV", "кроссовер / SUV", "سيارة رياضية متعددة الاستخدامات", "SUV"],
    "רכב חשמלי": ["electric car", "электромобиль", "سيارة كهربائية", "auto eléctrico"],
    "רכב יוקרה": ["luxury car", "премиальный автомобиль", "سيارة فاخرة", "auto de lujo"],
    "עד 1,300 סמ״ק": ["up to 1,300 cc", "до 1300 см³", "حتى 1,300 سم³", "hasta 1.300 cc"],
    "לפי רשות שוק ההון": ["per the Capital Market Authority", "по данным Управления рынка капитала", "حسب هيئة سوق المال", "según la Autoridad del Mercado de Capitales"],
    "ממוצע": ["average", "в среднем", "متوسط", "media"],
    "חובה ומקיף יחד, בערך": ["Mandatory and comprehensive together, about", "Обязательная и каско вместе, около", "الإلزامي والشامل معًا، نحو", "Obligatorio y todo riesgo juntos, unos"],
    "שווי הרכב נמוך. ברכב כזה ביטוח צד ג׳ משתלם בדרך כלל יותר ממקיף": ["The car's value is low; third-party cover usually pays off better than comprehensive", "Машина недорогая: ОСАГО-аналог обычно выгоднее каско", "قيمة السيارة منخفضة؛ تأمين الطرف الثالث عادةً أوفر من الشامل", "El valor del auto es bajo; a terceros suele salir mejor que a todo riesgo"],
    "מאיפה המספרים?": ["Where do the numbers come from?", "Откуда цифры?", "من أين الأرقام؟", "¿De dónde salen los números?"],
    "חובה": ["Mandatory", "Обязательная", "إلزامي", "Obligatorio"],
    "מקיף": ["Comprehensive", "Каско", "شامل", "Todo riesgo"],
    "טווח המחירים של כ-15 חברות ביטוח במחשבון הרשמי של רשות שוק ההון, לנהג בגיל 30 עד 45 ומעלה עם ותק ובלי תאונות. נדגם באוגוסט 2026": ["Price range of about 15 insurers in the Capital Market Authority's official calculator, for a driver aged 30–45+ with experience and no accidents. Sampled August 2026", "Диапазон цен около 15 страховщиков в официальном калькуляторе, для водителя 30–45+ лет со стажем без ДТП. Август 2026", "نطاق أسعار نحو 15 شركة تأمين في الحاسبة الرسمية لهيئة سوق المال، لسائق 30–45+ بخبرة ودون حوادث. أغسطس 2026", "Rango de precios de unas 15 aseguradoras en la calculadora oficial, para un conductor de 30 a 45+ años con experiencia y sin accidentes. Agosto de 2026"],
    "למקיף אין מחיר מפוקח או מפורסם. זה ממוצע שוק לסוג הרכב לפי סקר של סוכנות ביטוח ל-2026. המחיר שלכם יכול להיות שונה מאוד לפי הנהגים, הוותק, האזור והרכב": ["Comprehensive has no regulated or published price. This is a 2026 market average by car type from an insurance broker survey. Your price can differ a lot", "У каско нет регулируемой цены. Это средняя по рынку на 2026 год по типу машины. Ваша цена может сильно отличаться", "لا يوجد سعر منظَّم أو منشور للتأمين الشامل. هذا متوسط سوق لعام 2026 حسب نوع السيارة. قد يختلف سعرك كثيرًا", "El todo riesgo no tiene precio regulado ni publicado. Es una media de mercado de 2026 por tipo de auto. Tu precio puede variar mucho"],

    // ---- monthly cost ----
    "אוסף נתונים לחישוב": ["Gathering data", "Собираем данные", "جمع البيانات", "Reuniendo datos"],
    "עלות משוערת לחודש": ["Estimated cost per month", "Оценка расходов в месяц", "التكلفة التقديرية شهريًا", "Coste estimado al mes"],
    "בשנה": ["a year", "в год", "سنويًا", "al año"],
    "התאימו לנסיעה שלכם": ["Adjust to your driving", "Под вашу езду", "عدّل حسب قيادتك", "Ajusta a tu uso"],
    "ק״מ בחודש": ["km per month", "км в месяц", "كم شهريًا", "km al mes"],
    "צריכה: ק״מ לליטר": ["Use: km per liter", "Расход: км/л", "الاستهلاك: كم/لتر", "Consumo: km/l"],
    "צריכה: קוט״ש ל-100 ק״מ": ["Use: kWh per 100 km", "Расход: кВт·ч/100 км", "الاستهلاك: كيلوواط/100 كم", "Consumo: kWh/100 km"],
    "מחיר ליטר (₪)": ["Price per liter (₪)", "Цена литра (₪)", "سعر اللتر (₪)", "Precio por litro (₪)"],
    "מחיר קוט״ש (₪)": ["Price per kWh (₪)", "Цена кВт·ч (₪)", "سعر الكيلوواط (₪)", "Precio por kWh (₪)"],
    "טיפולים ותיקונים בחודש (₪)": ["Service and repairs per month (₪)", "ТО и ремонт в месяц (₪)", "الصيانة والإصلاح شهريًا (₪)", "Mantenimiento y reparaciones al mes (₪)"],
    "כולל ביטוח מקיף": ["Include comprehensive", "С каско", "مع التأمين الشامل", "Incluir todo riesgo"],
    "כולל ירידת ערך": ["Include depreciation", "С учётом потери стоимости", "مع انخفاض القيمة", "Incluir depreciación"],
    "דלק": ["Fuel", "Топливо", "الوقود", "Combustible"],
    "חשמל": ["Electricity", "Электричество", "الكهرباء", "Electricidad"],
    "ביטוח": ["Insurance", "Страховка", "التأمين", "Seguro"],
    "חובה ומקיף": ["mandatory + comprehensive", "обязательная + каско", "إلزامي + شامل", "obligatorio + todo riesgo"],
    "חובה בלבד": ["mandatory only", "только обязательная", "إلزامي فقط", "solo obligatorio"],
    "אגרת רישוי": ["Registration fee", "Сбор за регистрацию", "رسوم الترخيص", "Tasa de circulación"],
    "טיפולים ותיקונים": ["Service & repairs", "ТО и ремонт", "الصيانة والإصلاح", "Mantenimiento"],
    "הערכה": ["estimate", "оценка", "تقدير", "estimación"],
    "ירידת ערך": ["Depreciation", "Потеря стоимости", "انخفاض القيمة", "Depreciación"],
    "הערך שהרכב מאבד": ["value the car loses", "потеря стоимости", "القيمة التي تفقدها السيارة", "valor que pierde el auto"],
    "צריכה לפי": ["Fuel use from", "Расход по", "الاستهلاك حسب", "Consumo según"],
    "צריכה ממוצעת, כי לא נמצא נתון לדגם": ["Average fuel use, since none was found for this model", "Средний расход: данных по модели нет", "استهلاك متوسط لعدم وجود بيانات للطراز", "Consumo medio, sin datos del modelo"],
    "מחיר קוט״ש לפי התעריף הביתי מ-1.7.2026": ["Price per kWh at the home tariff from 1.7.2026", "Цена кВт·ч по бытовому тарифу с 1.7.2026", "سعر الكيلوواط حسب التعرفة المنزلية من 1.7.2026", "Precio del kWh con la tarifa doméstica desde 1.7.2026"],
    "מחיר ליטר בנזין 95 בשירות עצמי מ-1.11.2026. מחיר הדלק משתנה, אפשר לעדכן אותו": ["95-octane self-service price from 1.11.2026. Fuel prices change; you can edit it", "Цена АИ-95 на самообслуживании с 1.11.2026. Цена меняется, её можно изменить", "سعر بنزين 95 خدمة ذاتية من 1.11.2026. السعر يتغيّر ويمكنك تعديله", "Precio de gasolina 95 en autoservicio desde 1.11.2026. Cambia; puedes editarlo"],
    "חובה לפי המחשבון של רשות שוק ההון, ומקיף לפי ממוצע שוק ל": ["mandatory from the Capital Market Authority calculator, comprehensive from the market average for a", "обязательная — по калькулятору регулятора, каско — средняя по рынку для", "الإلزامي حسب حاسبة هيئة سوق المال، والشامل حسب متوسط السوق لـ", "obligatorio según la calculadora oficial y todo riesgo según la media de mercado para"],
    "לנהג מעל גיל 30": ["for a driver over 30", "для водителя старше 30", "لسائق فوق 30", "para un conductor mayor de 30"],
    "כולל אגרת רדיו": ["including radio fee", "включая радиосбор", "شاملة رسوم الراديو", "incluida la tasa de radio"],
    "לא נמצא מחירון, לכן לא נכללה": ["No list price found, so it's not included", "Цена не найдена, поэтому не учтено", "لم يُعثر على سعر، لذا لم تُحتسب", "Sin precio de lista, no se incluye"],
    "הערכה גסה לפי גיל הרכב. כדאי לעדכן לפי מה שאתם יודעים": ["Rough estimate by car age. Update it with what you know", "Грубая оценка по возрасту. Уточните сами", "تقدير تقريبي حسب العمر. حدّثه بما تعرفه", "Estimación aproximada por edad. Ajústala con lo que sepas"],
    "כמה ערך הרכב צפוי לרדת בשנה הקרובה, לפי הערכת השווי": ["How much value the car should lose next year, from the estimate", "Сколько машина потеряет в цене за год", "كم ستفقد السيارة من قيمتها العام المقبل", "Cuánto valor perderá el auto el próximo año"],

    // ---- reviews ----
    "טוען חוות דעת": ["Loading reviews", "Загружаем отзывы", "تحميل التقييمات", "Cargando opiniones"],
    "חוות הדעת יופעלו בקרוב": ["Reviews are coming soon", "Отзывы скоро появятся", "التقييمات قريبًا", "Opiniones próximamente"],
    "חוות הדעת עוד לא הופעלו באתר": ["Reviews aren't switched on yet", "Отзывы ещё не включены", "التقييمات غير مفعّلة بعد", "Las opiniones aún no están activas"],
    "חוות דעת של משתמשים": ["user reviews", "отзывов пользователей", "تقييمات المستخدمين", "opiniones de usuarios"],
    "עוד אין חוות דעת על הדגם הזה. אפשר להיות הראשונים": ["No reviews of this model yet. Be the first", "Отзывов пока нет. Станьте первым", "لا توجد تقييمات بعد. كن الأول", "Aún no hay opiniones. Sé el primero"],
    "עריכת חוות הדעת שלך": ["Edit your review", "Редактировать отзыв", "تعديل تقييمك", "Editar tu opinión"],
    "כתבו חוות דעת": ["Write a review", "Написать отзыв", "اكتب تقييمًا", "Escribe una opinión"],
    "דירוג": ["Rating", "Оценка", "التقييم", "Puntuación"],
    "איך הרכב? נוחות, אמינות, צריכת דלק, תקלות": ["How's the car? Comfort, reliability, fuel use, faults", "Как машина? Комфорт, надёжность, расход, поломки", "كيف السيارة؟ الراحة والموثوقية والاستهلاك والأعطال", "¿Qué tal el auto? Confort, fiabilidad, consumo, averías"],
    "עדכן": ["Update", "Обновить", "تحديث", "Actualizar"],
    "פרסם": ["Publish", "Опубликовать", "نشر", "Publicar"],
    "יפורסם בשם": ["Published as", "Будет опубликовано как", "سيُنشر باسم", "Se publicará como"],
    "התחברו כדי לכתוב חוות דעת": ["Sign in to write a review", "Войдите, чтобы написать отзыв", "سجّل الدخول لكتابة تقييم", "Inicia sesión para opinar"],
    "כדי לכתוב חוות דעת צריך להתחבר": ["You need to sign in to write a review", "Чтобы оставить отзыв, нужно войти", "يجب تسجيل الدخول لكتابة تقييم", "Necesitas iniciar sesión para opinar"],
    "רכב משנת": ["car from", "машина", "سيارة من عام", "auto de"],
    "מחק": ["Delete", "Удалить", "حذف", "Eliminar"],
    "הצג את כל": ["Show all", "Показать все", "عرض كل", "Ver las"],
    "חוות הדעת": ["reviews", "отзывов", "التقييمات", "opiniones"],
    "בטוח? לחצו שוב למחיקה": ["Sure? Tap again to delete", "Точно? Нажмите ещё раз", "متأكد؟ اضغط مجددًا للحذف", "¿Seguro? Toca otra vez para eliminar"],
    "המחיקה נכשלה": ["Delete failed", "Не удалось удалить", "فشل الحذف", "No se pudo eliminar"],
    "בחרו דירוג של 1 עד 5 כוכבים": ["Choose a rating from 1 to 5 stars", "Выберите оценку от 1 до 5", "اختر تقييمًا من 1 إلى 5 نجوم", "Elige de 1 a 5 estrellas"],
    "שומר": ["Saving", "Сохраняем", "جارٍ الحفظ", "Guardando"],
    "לא הצלחתי לשמור. נסו שוב": ["Couldn't save. Try again", "Не удалось сохранить. Повторите", "تعذّر الحفظ. حاول مجددًا", "No pude guardar. Inténtalo de nuevo"],

    // ---- VIN paywall ----
    "מספר שלדה מלא": ["Full VIN", "Полный VIN", "رقم الهيكل الكامل", "VIN completo"],
    "מספר השלדה": ["The VIN", "VIN", "رقم الهيكل", "El VIN"],
    "המלא מאפשר לבדוק היסטוריית תאונות, יבוא וריקולים. החשיפה עולה": ["lets you check accident, import and recall history. Unlocking costs", "позволяет проверить ДТП, импорт и отзывы. Стоимость", "الكامل يتيح فحص الحوادث والاستيراد والاستدعاءات. الكشف يكلّف", "completo permite revisar accidentes, importación y revisiones. Desbloquearlo cuesta"],
    "לתשלום": ["Pay", "Оплатить", "للدفع", "Pagar"],
    "התשלום יופעל בקרוב": ["Payment coming soon", "Оплата скоро", "الدفع قريبًا", "Pago próximamente"],
    "לא עכשיו": ["Not now", "Не сейчас", "ليس الآن", "Ahora no"],

    // ---- history sheet ----
    "כל החיפושים": ["All searches", "Все поиски", "كل عمليات البحث", "Todas las búsquedas"],
    "שמורים": ["Saved", "Сохранённые", "المحفوظة", "Guardados"],
    "אתמול": ["yesterday", "вчера", "أمس", "ayer"],
    "עוד לא שמרת רכבים. לחצו על הלב בדוח כדי לשמור": ["No saved cars yet. Tap the heart in a report to save", "Сохранённых машин нет. Нажмите на сердечко в отчёте", "لا توجد سيارات محفوظة. اضغط على القلب في التقرير", "Aún no hay autos guardados. Toca el corazón en un informe"],
    "עוד לא חיפשת רכבים": ["No searches yet", "Поисков пока нет", "لا توجد عمليات بحث بعد", "Aún no hay búsquedas"],
    "ההיסטוריה שמורה במכשיר הזה": ["History is saved on this device", "История хранится на этом устройстве", "السجل محفوظ على هذا الجهاز", "El historial se guarda en este dispositivo"],
    "התחברו": ["Sign in", "Войдите", "سجّل الدخول", "Inicia sesión"],
    "כדי לראות אותה מכל מכשיר": ["to see it on any device", "чтобы видеть её везде", "لرؤيته من أي جهاز", "para verlo en cualquier dispositivo"],
    "נקה היסטוריה (הרכבים השמורים יישארו)": ["Clear history (saved cars stay)", "Очистить историю (сохранённые останутся)", "مسح السجل (تبقى السيارات المحفوظة)", "Borrar historial (los guardados se quedan)"],
    "בטוח? לחצו שוב לניקוי": ["Sure? Tap again to clear", "Точно? Нажмите ещё раз", "متأكد؟ اضغط مجددًا للمسح", "¿Seguro? Toca otra vez para borrar"],

    // ---- account ----
    "חשבונות משתמשים": ["User accounts", "Аккаунты", "حسابات المستخدمين", "Cuentas"],
    "ההרשמה עוד לא הופעלה באתר הזה. בינתיים ההיסטוריה והרכבים השמורים נשמרים במכשיר הזה בלבד": ["Sign-up isn't on yet. For now, history and saved cars stay on this device", "Регистрация пока не включена. История хранится только на этом устройстве", "التسجيل غير مفعّل بعد. السجل محفوظ على هذا الجهاز فقط", "El registro aún no está activo. Por ahora todo se guarda en este dispositivo"],
    "הבנתי": ["Got it", "Понятно", "فهمت", "Entendido"],
    "שמרו רכבים, כתבו חוות דעת וראו את ההיסטוריה שלכם מכל מכשיר": ["Save cars, write reviews and see your history on any device", "Сохраняйте машины, пишите отзывы и смотрите историю везде", "احفظ السيارات واكتب التقييمات وشاهد سجلك من أي جهاز", "Guarda autos, escribe opiniones y ve tu historial en cualquier dispositivo"],
    "כדי לשמור רכבים בחשבון ולראות אותם מכל מכשיר, התחברו או הירשמו": ["To save cars to your account and see them anywhere, sign in or sign up", "Чтобы сохранять машины в аккаунте, войдите или зарегистрируйтесь", "لحفظ السيارات في حسابك ورؤيتها من أي جهاز، سجّل الدخول أو أنشئ حسابًا", "Para guardar autos en tu cuenta, inicia sesión o regístrate"],
    "הרשמה": ["Sign up", "Регистрация", "إنشاء حساب", "Registrarse"],
    "אימייל": ["Email", "Эл. почта", "البريد الإلكتروني", "Correo"],
    "סיסמה": ["Password", "Пароль", "كلمة المرور", "Contraseña"],
    "התחבר": ["Sign in", "Войти", "دخول", "Entrar"],
    "צור חשבון": ["Create account", "Создать аккаунт", "إنشاء حساب", "Crear cuenta"],
    "בהרשמה אתם מסכימים ל": ["By signing up you agree to", "Регистрируясь, вы соглашаетесь с", "بالتسجيل أنت توافق على", "Al registrarte aceptas"],
    "ביטול": ["Cancel", "Отмена", "إلغاء", "Cancelar"],
    "רגע": ["One moment", "Секунду", "لحظة", "Un momento"],
    "שלחנו מייל אימות. אחרי האישור אפשר להתחבר": ["We sent a verification email. Sign in after confirming", "Мы отправили письмо. После подтверждения войдите", "أرسلنا بريد تحقق. سجّل الدخول بعد التأكيد", "Te enviamos un correo de verificación. Entra tras confirmarlo"],
    "האימייל או הסיסמה לא נכונים": ["Wrong email or password", "Неверная почта или пароль", "البريد أو كلمة المرور غير صحيحة", "Correo o contraseña incorrectos"],
    "האימייל הזה כבר רשום. נסו להתחבר": ["This email is already registered. Try signing in", "Этот адрес уже зарегистрирован. Войдите", "هذا البريد مسجّل بالفعل. جرّب تسجيل الدخول", "Este correo ya está registrado. Inicia sesión"],
    "צריך לאשר את המייל שנשלח אליכם": ["Please confirm the email we sent you", "Подтвердите письмо, которое мы отправили", "يرجى تأكيد البريد المرسل إليك", "Confirma el correo que te enviamos"],
    "הסיסמה צריכה להכיל לפחות 6 תווים": ["Password must be at least 6 characters", "Пароль — минимум 6 символов", "كلمة المرور 6 أحرف على الأقل", "La contraseña debe tener al menos 6 caracteres"],
    "משהו השתבש": ["Something went wrong", "Что-то пошло не так", "حدث خطأ ما", "Algo salió mal"],
    "בהיסטוריה": ["in history", "в истории", "في السجل", "en el historial"],
    "עמוד ניהול": ["Admin page", "Админ-панель", "صفحة الإدارة", "Administración"],
    "התנתקות": ["Sign out", "Выйти", "تسجيل الخروج", "Cerrar sesión"],
    "מחיקת חשבון": ["Delete account", "Удалить аккаунт", "حذف الحساب", "Eliminar cuenta"],
    "כן, למחוק לצמיתות": ["Yes, delete forever", "Да, удалить навсегда", "نعم، احذف نهائيًا", "Sí, eliminar para siempre"],
    "המחיקה תסיר את החשבון, את כל הרכבים השמורים ואת כל חוות הדעת שלך. אי אפשר לבטל אותה": ["This removes your account, saved cars and reviews. It can't be undone", "Будут удалены аккаунт, машины и отзывы. Отменить нельзя", "سيُحذف الحساب والسيارات المحفوظة والتقييمات. لا يمكن التراجع", "Se eliminarán tu cuenta, autos guardados y opiniones. No se puede deshacer"],
    "מוחק": ["Deleting", "Удаляем", "جارٍ الحذف", "Eliminando"],
    "המחיקה נכשלה. נסו שוב, או כתבו לנו דרך מדיניות הפרטיות": ["Delete failed. Try again, or contact us via the privacy policy", "Не удалось удалить. Повторите или напишите нам", "فشل الحذف. حاول مجددًا أو تواصل معنا", "No se pudo eliminar. Inténtalo de nuevo o escríbenos"],
    "החשבון נמחק": ["Account deleted", "Аккаунт удалён", "تم حذف الحساب", "Cuenta eliminada"],
    "כל המידע שלך נמחק מהשרת": ["All your data was removed from the server", "Все ваши данные удалены", "حُذفت كل بياناتك من الخادم", "Todos tus datos se eliminaron del servidor"],

    // ---- admin ----
    "טוען נתונים": ["Loading data", "Загружаем данные", "تحميل البيانات", "Cargando datos"],
    "אין הרשאת ניהול, או שהגדרות הניהול עוד לא הותקנו ב": ["No admin access, or admin setup isn't installed in", "Нет прав администратора или не настроено в", "لا صلاحية إدارة أو لم تُثبَّت الإعدادات في", "Sin acceso de administrador o sin configurar en"],
    "כניסות לאתר": ["Site visits", "Посещения", "زيارات الموقع", "Visitas"],
    "טוען כניסות": ["Loading visits", "Загружаем посещения", "تحميل الزيارات", "Cargando visitas"],
    "משתמשים ותוכן": ["Users & content", "Пользователи и контент", "المستخدمون والمحتوى", "Usuarios y contenido"],
    "משתמשים רשומים": ["Registered users", "Пользователи", "المستخدمون المسجّلون", "Usuarios registrados"],
    "חדשים השבוע": ["New this week", "Новые за неделю", "جدد هذا الأسبوع", "Nuevos esta semana"],
    "רכבים שנבדקו": ["Cars checked", "Проверено машин", "سيارات تم فحصها", "Autos consultados"],
    "הדגמים הכי נבדקים": ["Most checked models", "Самые проверяемые модели", "الطرازات الأكثر فحصًا", "Modelos más consultados"],
    "בדיקות": ["Checks", "Проверки", "الفحوصات", "Consultas"],
    "אין עדיין נתונים": ["No data yet", "Данных пока нет", "لا توجد بيانات بعد", "Aún no hay datos"],
    "נרשמו לאחרונה": ["Recent sign-ups", "Новые регистрации", "التسجيلات الأخيرة", "Registros recientes"],
    "נרשם": ["Signed up", "Регистрация", "سُجّل", "Registro"],
    "התחבר לאחרונה": ["Last sign-in", "Последний вход", "آخر دخول", "Último acceso"],
    "אין עדיין משתמשים": ["No users yet", "Пользователей пока нет", "لا يوجد مستخدمون بعد", "Aún no hay usuarios"],
    "חוות דעת אחרונות": ["Latest reviews", "Последние отзывы", "أحدث التقييمات", "Últimas opiniones"],
    "אין עדיין חוות דעת": ["No reviews yet", "Отзывов пока нет", "لا توجد تقييمات بعد", "Aún no hay opiniones"],
    "מבקרים היום": ["Visitors today", "Посетители сегодня", "زوار اليوم", "Visitantes hoy"],
    "צפיות היום": ["Views today", "Просмотры сегодня", "مشاهدات اليوم", "Visitas de página hoy"],
    "מבקרים אתמול": ["Visitors yesterday", "Посетители вчера", "زوار الأمس", "Visitantes ayer"],
    "מבקרים ב-7 ימים": ["Visitors, 7 days", "Посетители за 7 дней", "زوار 7 أيام", "Visitantes, 7 días"],
    "מבקרים ב-30 ימים": ["Visitors, 30 days", "Посетители за 30 дней", "زوار 30 يومًا", "Visitantes, 30 días"],
    "ספירת הכניסות עוד לא הותקנה ב": ["Visit counting isn't installed yet in", "Счётчик посещений ещё не настроен в", "عدّ الزيارات غير مثبّت بعد في", "El contador de visitas aún no está en"],
    "מבקר נספר פעם אחת ביום לכל מכשיר. הכניסות שלך לא נספרות. לא נשמר שום מידע מזהה על המבקרים": ["Each device counts once a day. Your visits aren't counted. No identifying data is stored", "Каждое устройство учитывается раз в день. Ваши визиты не считаются. Личные данные не хранятся", "يُحتسب كل جهاز مرة يوميًا. لا تُحتسب زياراتك. لا تُحفظ بيانات تعريفية", "Cada dispositivo cuenta una vez al día. Tus visitas no cuentan. No se guardan datos personales"],
    "שיא": ["Peak", "Пик", "الذروة", "Máximo"],
    "ביום": ["a day", "в день", "يوميًا", "al día"],

    "· המדיניות זמינה בעברית בלבד": ["· This policy is available in Hebrew only", "· Политика доступна только на иврите", "· السياسة متوفرة بالعبرية فقط", "· Esta política solo está disponible en hebreo"],
    // ---- tips page ----
    "טיפים לקניית רכב יד שנייה": ["Tips for buying a used car", "Советы по покупке б/у машины", "نصائح لشراء سيارة مستعملة", "Consejos para comprar un auto usado"],
    "מה לבדוק, מה לבקש מהמוכר ואיך לסגור עסקה בלי הפתעות": ["What to check, what to ask the seller and how to close the deal without surprises", "Что проверить, что спросить у продавца и как заключить сделку без сюрпризов", "ماذا تفحص وماذا تطلب من البائع وكيف تُتمّ الصفقة دون مفاجآت", "Qué revisar, qué pedir al vendedor y cómo cerrar el trato sin sorpresas"],
    "→ חזרה ל-AutoCars": ["← Back to AutoCars", "← Назад в AutoCars", "→ العودة إلى AutoCars", "← Volver a AutoCars"],
    "לפני שנוסעים לראות את הרכב": ["Before you go see the car", "Перед осмотром машины", "قبل الذهاب لرؤية السيارة", "Antes de ir a ver el auto"],
    "בודקים מהבית, בחינם": ["Check from home, for free", "Проверяем из дома бесплатно", "افحص من البيت مجانًا", "Revisa desde casa, gratis"],
    "בודקים את מספר הרישוי באפליקציה: יד, עבר ליסינג או השכרה, ריקולים פתוחים, ביטול סופי, יבוא אישי ותוקף הרישיון": ["Check the plate in the app: owners, lease or rental past, open recalls, deregistration, personal import and registration validity", "Проверьте номер в приложении: владельцы, лизинг или прокат, отзывы, снятие с учёта, частный импорт и регистрация", "افحص رقم اللوحة في التطبيق: المالكون، التأجير، الاستدعاءات، الإلغاء، الاستيراد الشخصي وصلاحية الترخيص", "Consulta la matrícula en la app: dueños, leasing o alquiler, revisiones pendientes, bajas, importación y vigencia del permiso"],
    "משווים את הקילומטראז׳ במודעה לקילומטראז׳ שדווח בטסט האחרון. אם המודעה מראה פחות, זה סימן אזהרה רציני": ["Compare the ad's mileage to the last inspection reading. If the ad shows less, that's a serious red flag", "Сравните пробег в объявлении с последним техосмотром. Если в объявлении меньше — это серьёзный сигнал", "قارن الكيلومترات في الإعلان بقراءة آخر فحص. إن كانت أقل فهذه علامة تحذير جدّية", "Compara el kilometraje del anuncio con el de la última ITV. Si el anuncio muestra menos, es una alerta seria"],
    "בודקים כמה רכבים דומים מבקשים ביד2 ובאתרים אחרים, וכמה ההערכה באפליקציה, כדי לדעת מה מחיר סביר": ["Check what similar cars ask on Yad2 and other sites, and the app's estimate, to know a fair price", "Посмотрите цены похожих машин на Yad2 и оценку приложения, чтобы понять разумную цену", "تحقّق من أسعار سيارات مشابهة على Yad2 ومن تقدير التطبيق لمعرفة السعر المعقول", "Mira cuánto piden por autos similares en Yad2 y la estimación de la app para saber un precio justo"],
    "שואלים בטלפון: למה מוכרים, כמה זמן הרכב אצלם, אם היו תאונות, ואם יש ספר טיפולים": ["Ask by phone: why they're selling, how long they've had it, any accidents, and whether there's a service book", "Спросите по телефону: почему продают, сколько владеют, были ли ДТП и есть ли сервисная книжка", "اسأل هاتفيًا: لماذا يبيع، ومنذ متى يملكها، وهل وقعت حوادث، وهل يوجد دفتر صيانة", "Pregunta por teléfono: por qué vende, cuánto tiempo lo tiene, si hubo accidentes y si hay libro de mantenimiento"],
    "בדיקת רכב לפי מספר רישוי": ["Check a car by plate number", "Проверить машину по номеру", "افحص سيارة برقم اللوحة", "Consultar un auto por matrícula"],
    "מסמכים לבקש מהמוכר": ["Documents to ask the seller for", "Какие документы попросить", "مستندات تطلبها من البائع", "Documentos que pedir al vendedor"],
    "בלי זה לא מתקדמים": ["Don't move on without these", "Без этого не продолжайте", "لا تتقدّم بدونها", "Sin esto no sigas"],
    "רישיון רכב בתוקף,": ["Valid registration,", "Действующая регистрация,", "ترخيص سارٍ،", "Permiso de circulación vigente,"],
    "ושהשם בו הוא של מי שמוכר לכם. אם המוכר הוא לא הבעלים, מבקשים ייפוי כוח": ["in the seller's name. If the seller isn't the owner, ask for a power of attorney", "на имя продавца. Если продавец не владелец, нужна доверенность", "باسم البائع. إن لم يكن هو المالك اطلب توكيلًا", "a nombre del vendedor. Si no es el dueño, pide un poder"],
    "ספר טיפולים או חשבוניות מהמוסך,": ["Service book or garage invoices,", "Сервисная книжка или счета,", "دفتر صيانة أو فواتير الكراج،", "Libro de mantenimiento o facturas del taller,"],
    "כדי לראות שהרכב טופל בזמן": ["to see the car was serviced on time", "чтобы убедиться в своевременном ТО", "للتأكد من صيانة السيارة في وقتها", "para ver que se mantuvo a tiempo"],
    "אישור העדר תביעות": ["No-claims letter", "Справка об отсутствии выплат", "شهادة عدم وجود مطالبات", "Certificado de no siniestralidad"],
    "מחברת הביטוח של המוכר. הוא מראה אם היו תביעות על תאונות בשנים האחרונות": ["from the seller's insurer. It shows whether there were accident claims in recent years", "от страховщика продавца. Показывает, были ли выплаты по ДТП", "من شركة تأمين البائع. تُظهر إن كانت هناك مطالبات حوادث في السنوات الأخيرة", "de la aseguradora del vendedor. Muestra si hubo reclamaciones por accidentes"],
    "בדיקת שעבוד": ["Lien check", "Проверка залога", "فحص الرهن", "Comprobación de cargas"],
    "ברשם המשכונות. רכב משועבד, למשל לבנק, אי אפשר להעביר על שמכם עד שהשעבוד מוסר": ["at the Pledges Registrar. A car under lien, e.g. to a bank, can't be transferred until it's released", "в реестре залогов. Машину в залоге, например у банка, нельзя переоформить до снятия", "لدى مسجّل الرهونات. لا يمكن نقل سيارة مرهونة، مثلًا لبنك، قبل فكّ الرهن", "en el Registro de Prendas. Un auto con carga, p. ej. de un banco, no se puede transferir hasta liberarla"],
    "מוודאים שמספר השלדה ברישיון זהה למספר שעל הרכב עצמו": ["Make sure the VIN on the registration matches the one on the car", "Убедитесь, что VIN в документах совпадает с VIN на машине", "تأكّد أن رقم الهيكل في الترخيص مطابق للرقم على السيارة", "Comprueba que el VIN del permiso coincide con el del auto"],
    "נסיעת מבחן": ["Test drive", "Тест-драйв", "قيادة تجريبية", "Prueba de manejo"],
    "מה לבדוק בעצמכם": ["What to check yourself", "Что проверить самому", "ما تفحصه بنفسك", "Qué revisar tú mismo"],
    "מבקשים להתניע כשהמנוע קר. רעשים, עשן או התנעה קשה בולטים יותר במנוע קר": ["Ask to start it cold. Noises, smoke or hard starts show more on a cold engine", "Попросите завести холодный двигатель. Шумы, дым и тяжёлый пуск заметнее на холодную", "اطلب تشغيلها والمحرك بارد. الأصوات والدخان وصعوبة التشغيل تظهر أكثر", "Pide arrancarlo en frío. Ruidos, humo o arranque difícil se notan más"],
    "בודקים שאין נורות אזהרה דולקות בלוח המחוונים אחרי ההתנעה": ["Check no warning lights stay on after starting", "Проверьте, что после запуска нет горящих предупреждений", "تأكّد من عدم بقاء أضواء تحذير بعد التشغيل", "Comprueba que no quedan testigos encendidos"],
    "נוסעים גם בעיר וגם בכביש מהיר: מעברי הילוכים חלקים, בלמים בלי רעידות, הגה שלא מושך לצד": ["Drive in town and on the highway: smooth shifts, no brake shudder, no pulling to one side", "Проедьте по городу и трассе: плавные переключения, тормоза без вибраций, руль не тянет", "قُد داخل المدينة وعلى طريق سريع: تبديل سلس، فرامل دون اهتزاز، مقود لا يميل", "Conduce en ciudad y carretera: cambios suaves, frenos sin vibraciones, que no tire hacia un lado"],
    "בודקים מזגן, חלונות חשמליים, מראות, אורות ומערכת מולטימדיה": ["Check the AC, power windows, mirrors, lights and multimedia", "Проверьте кондиционер, стеклоподъёмники, зеркала, свет и мультимедиа", "افحص المكيّف والنوافذ الكهربائية والمرايا والأضواء ونظام الوسائط", "Revisa el aire, elevalunas, espejos, luces y multimedia"],
    "מסתכלים על הפחים: מרווחים לא שווים בין חלקים או גוון צבע שונה יכולים להעיד על תיקון אחרי תאונה": ["Look at the panels: uneven gaps or mismatched paint can mean accident repairs", "Осмотрите кузов: неровные зазоры или разный оттенок краски говорят о ремонте после ДТП", "افحص الهيكل: الفجوات غير المتساوية أو اختلاف لون الطلاء قد يدلّ على إصلاح بعد حادث", "Mira la carrocería: huecos desiguales o tonos distintos pueden indicar reparación tras un accidente"],
    "בודקים את הצמיגים: עומק החריצים, ושחיקה לא אחידה שיכולה להעיד על בעיית כיוון": ["Check the tires: tread depth, and uneven wear that can mean an alignment problem", "Проверьте шины: глубину протектора и неравномерный износ — признак проблем с развалом", "افحص الإطارات: عمق النقشة والتآكل غير المتساوي الذي قد يدلّ على مشكلة في الضبط", "Revisa los neumáticos: profundidad y desgaste irregular, señal de problemas de alineación"],
    "בדיקה במכון": ["Garage inspection", "Проверка на станции", "الفحص في مركز", "Inspección en taller"],
    "שווה כל שקל": ["Worth every shekel", "Стоит своих денег", "تستحق كل شيكل", "Vale cada shékel"],
    "לפני שמשלמים, לוקחים את הרכב לבדיקת קנייה במכון בדיקה מוסמך. הבדיקה עולה כמה מאות שקלים, ויכולה לחסוך עשרות אלפים": ["Before paying, take the car for a pre-purchase inspection at a licensed garage. It costs a few hundred shekels and can save tens of thousands", "Перед оплатой отвезите машину на предпродажную проверку. Это несколько сотен шекелей, а сэкономить можно десятки тысяч", "قبل الدفع خذ السيارة لفحص ما قبل الشراء في مركز معتمد. يكلّف بضع مئات من الشواكل وقد يوفّر عشرات الآلاف", "Antes de pagar, lleva el auto a una inspección previa en un taller autorizado. Cuesta unos cientos de shékels y puede ahorrar decenas de miles"],
    "מבקשים בדיקה של שלדה, מנוע, תיבת הילוכים, מתלים ומחשב הרכב": ["Ask for checks of the chassis, engine, gearbox, suspension and car computer", "Попросите проверить раму, двигатель, коробку, подвеску и компьютер", "اطلب فحص الهيكل والمحرك وناقل الحركة والتعليق وكمبيوتر السيارة", "Pide revisar chasis, motor, caja de cambios, suspensión y centralita"],
    "ברכב היברידי או חשמלי מבקשים גם בדיקה של מצב הסוללה": ["For a hybrid or electric car, also ask for a battery health check", "Для гибрида или электромобиля проверьте и батарею", "في الهجينة أو الكهربائية اطلب أيضًا فحص حالة البطارية", "En un híbrido o eléctrico, pide también revisar la batería"],
    "מוכר שמסרב לבדיקה במכון הוא סימן אזהרה": ["A seller who refuses an inspection is a red flag", "Продавец, отказывающийся от проверки, — тревожный знак", "البائع الذي يرفض الفحص علامة تحذير", "Un vendedor que se niega a la inspección es una alerta"],
    "משא ומתן על המחיר": ["Negotiating the price", "Торг", "التفاوض على السعر", "Negociar el precio"],
    "להגיע מוכנים": ["Come prepared", "Приходите подготовленными", "تعال مستعدًا", "Ve preparado"],
    "מתחילים מהערכת השווי ומהמודעות של רכבים דומים, לא מהמחיר שהמוכר ביקש": ["Start from the value estimate and similar listings, not the asking price", "Начинайте с оценки и похожих объявлений, а не с цены продавца", "ابدأ من التقدير والإعلانات المشابهة، لا من سعر البائع", "Parte de la estimación y de anuncios similares, no del precio pedido"],
    "כל ממצא מהמכון הוא סיבה להוריד מחיר, לפי מה שיעלה לתקן": ["Every inspection finding is a reason to lower the price by the repair cost", "Каждая находка на проверке — повод снизить цену на стоимость ремонта", "كل عيب في الفحص سبب لخفض السعر بقدر تكلفة الإصلاح", "Cada hallazgo de la inspección es motivo para bajar el precio según la reparación"],
    "יד גבוהה, עבר ליסינג, קילומטראז׳ גבוה או ריקול פתוח הם סיבות לגיטימיות לבקש הנחה": ["Many owners, a lease past, high mileage or an open recall are fair reasons to ask for a discount", "Много владельцев, лизинг, большой пробег или открытый отзыв — веские причины для скидки", "كثرة المالكين أو التأجير أو كثرة الكيلومترات أو استدعاء مفتوح أسباب مشروعة لطلب خصم", "Muchos dueños, pasado de leasing, mucho kilometraje o una revisión pendiente justifican pedir descuento"],
    "מחשבים מראש את העלות החודשית, כולל ביטוח, דלק ואגרה, ולא רק את מחיר הקנייה": ["Work out the monthly cost up front, with insurance, fuel and fees, not just the purchase price", "Посчитайте расходы в месяц заранее, со страховкой, топливом и сборами", "احسب التكلفة الشهرية مسبقًا مع التأمين والوقود والرسوم، وليس سعر الشراء فقط", "Calcula el coste mensual con seguro, combustible y tasas, no solo el precio de compra"],
    "סגירת העסקה והעברת בעלות": ["Closing the deal and transferring ownership", "Сделка и переоформление", "إتمام الصفقة ونقل الملكية", "Cerrar el trato y transferir la propiedad"],
    "הצעדים האחרונים": ["The final steps", "Последние шаги", "الخطوات الأخيرة", "Los últimos pasos"],
    "חותמים על זיכרון דברים: מחיר, מצב הרכב, קילומטראז׳ ותאריך מסירה": ["Sign a memorandum: price, condition, mileage and handover date", "Подпишите соглашение: цена, состояние, пробег и дата передачи", "وقّعا مذكرة تفاهم: السعر والحالة والكيلومترات وتاريخ التسليم", "Firma un acuerdo: precio, estado, kilometraje y fecha de entrega"],
    "משלמים בהעברה בנקאית או בצ׳ק בנקאי, ולא במזומן": ["Pay by bank transfer or bank check, not cash", "Платите переводом или банковским чеком, не наличными", "ادفع بتحويل بنكي أو شيك بنكي، وليس نقدًا", "Paga por transferencia o cheque bancario, no en efectivo"],
    "מעבירים בעלות יחד עם המוכר, בסניף דואר או באתר משרד התחבורה. כשמתבקשים לדווח על מחיר העסקה, כדאי לדווח: זה עוזר לבנות מחירון אמיתי לכולם": ["Transfer ownership together with the seller at the post office or on the Ministry site. When asked to report the price, do it: it helps build a real price guide for everyone", "Переоформите вместе с продавцом на почте или на сайте Минтранса. Если просят указать цену сделки — укажите: это помогает всем", "انقلا الملكية معًا في البريد أو عبر موقع الوزارة. عند طلب الإبلاغ عن السعر، أبلغ: هذا يساعد في بناء دليل أسعار حقيقي", "Transfiere con el vendedor en Correos o en la web del Ministerio. Si te piden el precio de la venta, indícalo: ayuda a crear una guía real"],
    "מסדרים ביטוח חובה על שמכם לפני הנסיעה הראשונה": ["Get mandatory insurance in your name before the first drive", "Оформите обязательную страховку на себя до первой поездки", "رتّب التأمين الإلزامي باسمك قبل أول قيادة", "Contrata el seguro obligatorio a tu nombre antes de conducir"],
    "סימני אזהרה ועקיצות נפוצות": ["Red flags and common scams", "Тревожные сигналы и мошенничество", "علامات تحذير وعمليات احتيال شائعة", "Alertas y estafas comunes"],
    "אם משהו מזה קורה, עוצרים": ["If any of this happens, stop", "Если это происходит — остановитесь", "إن حدث شيء من هذا فتوقّف", "Si pasa algo de esto, detente"],
    "המוכר מבקש מקדמה לפני שראיתם את הרכב": ["The seller wants a deposit before you've seen the car", "Продавец просит задаток до осмотра", "البائع يطلب عربونًا قبل رؤية السيارة", "El vendedor pide una señal antes de ver el auto"],
    "המחיר נמוך בהרבה מרכבים דומים, בלי הסבר משכנע": ["The price is far below similar cars with no convincing reason", "Цена намного ниже рынка без объяснений", "السعر أقل بكثير من سيارات مشابهة دون تفسير مقنع", "El precio es mucho más bajo que autos similares sin razón convincente"],
    "השם ברישיון לא תואם למי שמוכר, ואין ייפוי כוח": ["The name on the registration doesn't match the seller, with no power of attorney", "Имя в документах не совпадает с продавцом, доверенности нет", "الاسم في الترخيص لا يطابق البائع ولا يوجد توكيل", "El nombre del permiso no coincide con el vendedor y no hay poder"],
    "הקילומטראז׳ ברכב נמוך מזה שדווח בטסט האחרון": ["The odometer shows less than the last inspection reading", "Пробег меньше, чем на последнем техосмотре", "العدّاد يُظهر أقل من قراءة آخر فحص", "El cuentakilómetros marca menos que la última ITV"],
    "המוכר לחוץ לסגור מהר ולא מאפשר בדיקה במכון": ["The seller pushes to close fast and won't allow an inspection", "Продавец торопит и не даёт проверить машину", "البائع يستعجل الإغلاق ولا يسمح بالفحص", "El vendedor presiona para cerrar rápido y no permite la inspección"],
    "טיפ: אם משהו מרגיש לא בסדר, עדיף לוותר. תמיד יהיה עוד רכב": ["Tip: if something feels off, walk away. There's always another car", "Совет: если что-то не так — откажитесь. Будет другая машина", "نصيحة: إن شعرت أن شيئًا ليس على ما يرام فتراجع. ستجد سيارة أخرى دائمًا", "Consejo: si algo no te cuadra, renuncia. Siempre habrá otro auto"],
    "המידע כאן כללי ואינו מחליף ייעוץ מקצועי או בדיקה במכון": ["This is general information and doesn't replace professional advice or an inspection", "Это общая информация и не заменяет проверку специалиста", "هذه معلومات عامة ولا تغني عن استشارة مهنية أو فحص", "Es información general y no sustituye el consejo profesional ni la inspección"],
    "מקור: מאגרי משרד התחבורה ב-data.gov.il. הנתונים מתעדכנים מעת לעת": ["Source: Ministry of Transport records on data.gov.il. Data is updated periodically", "Источник: данные Минтранса на data.gov.il. Обновляются периодически", "المصدر: سجلات وزارة المواصلات على data.gov.il. تُحدَّث دوريًا", "Fuente: registros del Ministerio de Transporte en data.gov.il. Se actualizan periódicamente"],

    // ---- values that come from the ministry data ----
    "בנזין": ["Petrol", "Бензин", "بنزين", "Gasolina"], "דיזל": ["Diesel", "Дизель", "ديزل", "Diésel"], "סולר": ["Diesel", "Дизель", "سولار", "Diésel"],
    "היברידי": ["Hybrid", "Гибрид", "هجين", "Híbrido"], "חשמל/בנזין": ["Hybrid (electric/petrol)", "Гибрид (электро/бензин)", "هجين (كهرباء/بنزين)", "Híbrido (eléctrico/gasolina)"],
    "פרטי": ["Private", "Частный", "خاص", "Particular"], "ליסינג": ["Leasing", "Лизинг", "تأجير تمويلي", "Leasing"], "השכרה": ["Rental", "Прокат", "تأجير", "Alquiler"],
    "חברה": ["Company", "Компания", "شركة", "Empresa"], "סוחר": ["Dealer", "Дилер", "تاجر", "Concesionario"], "מונית": ["Taxi", "Такси", "تاكسي", "Taxi"],
    "לבן": ["White", "Белый", "أبيض", "Blanco"], "שחור": ["Black", "Чёрный", "أسود", "Negro"], "כסף": ["Silver", "Серебристый", "فضي", "Plata"],
    "כסף מטלי": ["Metallic silver", "Серебристый металлик", "فضي معدني", "Plata metalizado"], "אפור": ["Gray", "Серый", "رمادي", "Gris"],
    "אפור מטלי": ["Metallic gray", "Серый металлик", "رمادي معدني", "Gris metalizado"], "כחול": ["Blue", "Синий", "أزرق", "Azul"],
    "כחול כהה": ["Dark blue", "Тёмно-синий", "أزرق داكن", "Azul oscuro"], "אדום": ["Red", "Красный", "أحمر", "Rojo"], "ירוק": ["Green", "Зелёный", "أخضر", "Verde"],
    "חום": ["Brown", "Коричневый", "بني", "Marrón"], "בז'": ["Beige", "Бежевый", "بيج", "Beige"], "זהב": ["Gold", "Золотистый", "ذهبي", "Dorado"],
    "כתום": ["Orange", "Оранжевый", "برتقالي", "Naranja"], "צהוב": ["Yellow", "Жёлтый", "أصفر", "Amarillo"], "סגול": ["Purple", "Фиолетовый", "بنفسجي", "Morado"],
    "בורדו": ["Burgundy", "Бордовый", "عنابي", "Burdeos"], "תכלת": ["Light blue", "Голубой", "أزرق فاتح", "Celeste"], "לבן שנהב": ["Ivory white", "Слоновая кость", "أبيض عاجي", "Blanco marfil"],
    "האצ'בק": ["Hatchback", "Хэтчбек", "هاتشباك", "Hatchback"], "סדאן": ["Sedan", "Седан", "سيدان", "Sedán"], "סטיישן": ["Station wagon", "Универсал", "ستيشن", "Familiar"],
    "קופה": ["Coupe", "Купе", "كوبيه", "Cupé"], "קבריולט": ["Convertible", "Кабриолет", "مكشوفة", "Descapotable"], "מיניוואן": ["Minivan", "Минивэн", "ميني فان", "Monovolumen"],
    "טנדר": ["Pickup", "Пикап", "بيك أب", "Pickup"], "קדמית": ["Front-wheel", "Передний", "أمامي", "Delantera"], "אחורית": ["Rear-wheel", "Задний", "خلفي", "Trasera"],

    // ---- manufacturers (shown in car names) ----
    "מאזדה": ["Mazda", "Mazda", "مازدا", "Mazda"], "טויוטה": ["Toyota", "Toyota", "تويوتا", "Toyota"], "יונדאי": ["Hyundai", "Hyundai", "هيونداي", "Hyundai"],
    "קיה": ["Kia", "Kia", "كيا", "Kia"], "סקודה": ["Skoda", "Skoda", "سكودا", "Skoda"], "פולקסווגן": ["Volkswagen", "Volkswagen", "فولكس فاجن", "Volkswagen"],
    "ניסאן": ["Nissan", "Nissan", "نيسان", "Nissan"], "מיצובישי": ["Mitsubishi", "Mitsubishi", "ميتسوبيشي", "Mitsubishi"], "סוזוקי": ["Suzuki", "Suzuki", "سوزوكي", "Suzuki"],
    "הונדה": ["Honda", "Honda", "هوندا", "Honda"], "סובארו": ["Subaru", "Subaru", "سوبارو", "Subaru"], "שברולט": ["Chevrolet", "Chevrolet", "شيفروليه", "Chevrolet"],
    "פורשה": ["Porsche", "Porsche", "بورشه", "Porsche"], "פורד": ["Ford", "Ford", "فورد", "Ford"], "רנו": ["Renault", "Renault", "رينو", "Renault"],
    "פיג'ו": ["Peugeot", "Peugeot", "بيجو", "Peugeot"], "סיטרואן": ["Citroën", "Citroën", "ستروين", "Citroën"], "אופל": ["Opel", "Opel", "أوبل", "Opel"],
    "מרצדס": ["Mercedes", "Mercedes", "مرسيدس", "Mercedes"], "אאודי": ["Audi", "Audi", "أودي", "Audi"], "וולוו": ["Volvo", "Volvo", "فولفو", "Volvo"],
    "סיאט": ["SEAT", "SEAT", "سيات", "SEAT"], "קופרה": ["Cupra", "Cupra", "كوبرا", "Cupra"], "דאצ'יה": ["Dacia", "Dacia", "داسيا", "Dacia"],
    "פיאט": ["Fiat", "Fiat", "فيات", "Fiat"], "לקסוס": ["Lexus", "Lexus", "لكزس", "Lexus"], "טסלה": ["Tesla", "Tesla", "تسلا", "Tesla"],
    "ג'יפ": ["Jeep", "Jeep", "جيب", "Jeep"], "ג'ילי": ["Geely", "Geely", "جيلي", "Geely"], "צ'רי": ["Chery", "Chery", "شيري", "Chery"],
    "לנד רובר": ["Land Rover", "Land Rover", "لاند روفر", "Land Rover"], "מיני": ["Mini", "Mini", "ميني", "Mini"], "איסוזו": ["Isuzu", "Isuzu", "إيسوزو", "Isuzu"],
    "מזראטי": ["Maserati", "Maserati", "مازيراتي", "Maserati"], "יגואר": ["Jaguar", "Jaguar", "جاكوار", "Jaguar"], "ג'נסיס": ["Genesis", "Genesis", "جينيسيس", "Genesis"],
  };

  // sentences with numbers in the middle, where word order changes between languages
  const RULES = [
    [/לפני (\d+) ימים/g, ["$1 days ago", "$1 дн. назад", "قبل $1 أيام", "hace $1 días"]],
    [/ירד בכ-(\d+)% מאז שהיה חדש/g, ["Down about $1% since new", "Подешевела примерно на $1% с момента покупки", "انخفضت نحو $1% منذ كانت جديدة", "Bajó cerca de un $1% desde nueva"]],
    [/כ-(₪[\d,]+) בשנה/g, ["about $1 a year", "около $1 в год", "نحو $1 سنويًا", "unos $1 al año"]],
    [/(\d+) חוות דעת של משתמשים/g, ["$1 user reviews", "отзывов: $1", "$1 تقييمات للمستخدمين", "$1 opiniones de usuarios"]],
    [/הצג את כל (\d+) חוות הדעת/g, ["Show all $1 reviews", "Показать все отзывы ($1)", "عرض كل التقييمات ($1)", "Ver las $1 opiniones"]],
    [/יד (\d+), הרבה בעלים/g, ["$1 owners, many owners", "$1 владельцев — много", "$1 مالكين، عدد كبير", "$1 dueños, muchos"]],
    [/(\d+) ריקולים פתוחים שלא בוצעו/g, ["$1 open recalls not done", "$1 невыполненных отзывов", "$1 استدعاءات مفتوحة", "$1 revisiones pendientes"]],
    [/(\d+) כוכבי בטיחות ב-Euro NCAP/g, ["$1 Euro NCAP safety stars", "$1 звёзд Euro NCAP", "$1 نجوم سلامة في Euro NCAP", "$1 estrellas Euro NCAP"]],
  ];

  const KEY = "carcheck.lang";
  let lang = "he";
  try { lang = localStorage.getItem(KEY) || ""; } catch (_) {}
  if (!LANGS[lang]) lang = "he";

  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const keys = Object.keys(D).sort((a, b) => b.length - a.length);
  const RX = new RegExp(`(?<![\\u0590-\\u05FF])(?:${keys.map(esc).join("|")})(?![\\u0590-\\u05FF])`, "g");
  const HEB = /[֐-׿]/;

  function tr(text) {
    if (lang === "he" || !HEB.test(text)) return text;
    const i = LANGS[lang].i;
    let out = text;
    for (const [rx, outs] of RULES) out = out.replace(rx, outs[i]);
    out = out.replace(RX, (m) => (D[m] && D[m][i]) || m);
    return out;
  }

  const ATTRS = ["placeholder", "aria-label", "title", "alt"];
  const orig = new WeakMap();
  const skip = (el) => !el || el.closest?.("[data-notr],script,style,textarea,code");

  function translateNode(node) {
    if (node.nodeType === 3) {
      const p = node.parentElement;
      if (skip(p)) return;
      if (!orig.has(node)) { if (!HEB.test(node.data)) return; orig.set(node, node.data); }
      const t = tr(orig.get(node));
      if (node.data !== t) node.data = t;
      return;
    }
    if (node.nodeType !== 1 || skip(node)) return;
    for (const a of ATTRS) {
      if (!node.hasAttribute(a)) continue;
      const key = "data-he-" + a;
      if (!node.hasAttribute(key)) { const v = node.getAttribute(a); if (!HEB.test(v)) continue; node.setAttribute(key, v); }
      const t = tr(node.getAttribute(key));
      if (node.getAttribute(a) !== t) node.setAttribute(a, t);
    }
    if (node.tagName === "TITLE" && !orig.has(node)) orig.set(node, node.textContent);
    for (const c of node.childNodes) translateNode(c);
  }

  function applyDir() {
    const L = LANGS[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = L.dir;
    const label = document.getElementById("langLabel");
    if (label) label.textContent = L.short;
  }

  let busy = false;
  const mo = new MutationObserver((list) => {
    if (busy || lang === "he") return;
    busy = true;
    for (const m of list) {
      if (m.type === "childList") m.addedNodes.forEach(translateNode);
      else if (m.type === "attributes" && m.target.hasAttribute("data-he-" + m.attributeName) === false) translateNode(m.target);
    }
    busy = false;
  });

  function run() {
    applyDir();
    busy = true;
    translateNode(document.documentElement);
    busy = false;
  }

  function setLang(code) {
    if (!LANGS[code]) return;
    lang = code;
    try { localStorage.setItem(KEY, code); } catch (_) {}
    run();
  }

  function start() {
    run();
    mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ATTRS });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();

  window.I18N = { LANGS, setLang, tr, get lang() { return lang; } };
})();
