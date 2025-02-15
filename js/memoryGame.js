let questions = [
    {
        question: "איזו חברה ייצרה את מערכת ההפעלה Windows?",
        answers: ["Apple", "Microsoft", "Google", "IBM"],
        correct: "Microsoft"
    },
    {
        question: "מה משמעות ראשי התיבות HTML?",
        answers: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyper Transfer Main Logic", "Hyper Tool Multi Language"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "מהו ה-CPU במחשב?",
        answers: ["כרטיס מסך", "זיכרון", "מעבד", "כונן קשיח"],
        correct: "מעבד"
    },
    {
        question: "מהו הדפדפן הפופולרי ביותר בעולם?",
        answers: ["Mozilla Firefox", "Google Chrome", "Microsoft Edge", "Safari"],
        correct: "Google Chrome"
    },
    {
        question: "באיזו שנה הוקמה חברת Apple?",
        answers: ["1976", "1984", "1991", "2000"],
        correct: "1976"
    },
    {
        question: "איזו שפת תכנות נחשבת לנפוצה ביותר לפיתוח אתרים?",
        answers: ["Java", "Python", "JavaScript", "C#"],
        correct: "JavaScript"
    },
    {
        question: "איזו חברה פיתחה את מערכת ההפעלה Linux?",
        answers: ["IBM", "Microsoft", "Apple", "Linus Torvalds"],
        correct: "Linus Torvalds"
    },
    {
        question: "איזה סוג זיכרון משמש לאחסון נתונים זמניים במחשב?",
        answers: ["ROM", "RAM", "SSD", "HDD"],
        correct: "RAM"
    },
    {
        question: "מהי מערכת ההפעלה שמשמשת בעיקר בשרתים?",
        answers: ["Windows", "Linux", "MacOS", "Chrome OS"],
        correct: "Linux"
    },
    {
        question: "מהי פונקציית ה-CTRL + C במקלדת?",
        answers: ["העתקה", "הדבקה", "מחיקה", "שמירה"],
        correct: "העתקה"
    },
    {
        question: "איזו חברת טכנולוגיה פיתחה את שפת התכנות Java?",
        answers: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
        correct: "Sun Microsystems"
    },
    {
        question: "איזה פורמט קובץ משמש בעיקר לשמירת תמונות דחוסות?",
        answers: ["PNG", "JPG", "GIF", "BMP"],
        correct: "JPG"
    },
    {
        question: "איזה פרוטוקול משמש להעברת קבצים באינטרנט?",
        answers: ["HTTP", "FTP", "SMTP", "DNS"],
        correct: "FTP"
    },
    {
        question: "מהי החומרה האחראית על הצגת תמונות במסך המחשב?",
        answers: ["CPU", "RAM", "GPU", "SSD"],
        correct: "GPU"
    },
    {
        question: "איזו חברה פיתחה את שפת התכנות Python?",
        answers: ["Guido van Rossum", "Microsoft", "Google", "IBM"],
        correct: "Guido van Rossum"
    },
    {
        question: "איזה מכשיר אחסון מספק גישה מהירה יותר לנתונים?",
        answers: ["HDD", "SSD", "CD-ROM", "Floppy Disk"],
        correct: "SSD"
    },
    {
        question: "מהו שמו של מייסד חברת Microsoft?",
        answers: ["סטיב ג'ובס", "ביל גייטס", "מארק צוקרברג", "ג'ף בזוס"],
        correct: "ביל גייטס"
    },
    {
        question: "איזו מערכת הפעלה נמצאת בסמארטפונים של Apple?",
        answers: ["Android", "Windows Phone", "iOS", "Symbian"],
        correct: "iOS"
    },
    {
        question: "איזה מכשיר משמש לאבטחת חיבור לרשת האינטרנט?",
        answers: ["ראוטר", "מודם", "כונן חיצוני", "מסך מחשב"],
        correct: "ראוטר"
    },
    {
        question: "איזה מחשב נחשב למחשב האישי הראשון?",
        answers: ["IBM PC", "Apple I", "Commodore 64", "Altair 8800"],
        correct: "Altair 8800"
    },
    {
        question: "כמה ביטים יש ב-1 בייט?",
        answers: ["4", "8", "16", "32"],
        correct: "8"
    },
    {
        question: "איזו חברת טכנולוגיה שחררה את הסרטון '1984' כדי לפרסם את המוצר שלה?",
        answers: ["Apple", "Microsoft", "IBM", "Sony"],
        correct: "Apple"
    },
    {
        question: "מה היה הדפדפן הראשון בעולם?",
        answers: ["Internet Explorer", "Netscape Navigator", "Mosaic", "Opera"],
        correct: "Mosaic"
    },
    {
        question: "איזו מדינה ידועה בשם 'ארץ הסטארט-אפ'?",
        answers: ["ארה\"ב", "ישראל", "יפן", "סין"],
        correct: "ישראל"
    },
    {
        question: "מה השם של הבאג המפורסם שאילץ NASA להשבית משימה ב-1999?",
        answers: ["Y2K Bug", "Mars Climate Orbiter Error", "Apollo 13 Glitch", "Voyager Signal Failure"],
        correct: "Mars Climate Orbiter Error"
    },
    {
        question: "איזו מערכת הפעלה נבנתה במקור על ידי סטודנט לפיזיקה?",
        answers: ["Windows", "Linux", "MacOS", "DOS"],
        correct: "Linux"
    },
    {
        question: "מהו 'החוק הראשון של רובוטיקה' של אסימוב?",
        answers: ["רובוטים לא יכולים להזיק לבני אדם", "רובוטים חייבים לציית לכל פקודה", "רובוטים חייבים להגן על עצמם בכל מחיר", "רובוטים יכולים להחליט בעצמם"],
        correct: "רובוטים לא יכולים להזיק לבני אדם"
    },
    {
        question: "איך קוראים לסוג ההתקפה שבה האקר מציף שרת עם בקשות עד שהוא קורס?",
        answers: ["Phishing", "DDoS", "Man-in-the-Middle", "Brute Force"],
        correct: "DDoS"
    },
    {
        question: "מה הייתה מערכת ההפעלה הראשונה עם ממשק גרפי?",
        answers: ["Windows 1.0", "Mac OS", "Xerox Alto", "IBM OS/2"],
        correct: "Xerox Alto"
    },
    {
        question: "מהי משמעות המונח 'Dark Web'?",
        answers: ["רשת שלא ניתנת לגישה דרך דפדפנים רגילים", "רשת של האקרים", "רשת חברתית לא חוקית", "שרתים של גוגל שאינם פומביים"],
        correct: "רשת שלא ניתנת לגישה דרך דפדפנים רגילים"
    },
    {
        question: "כמה תווים יכולים להיות בשם קובץ ב-Windows?",
        answers: ["64", "128", "255", "512"],
        correct: "255"
    },
    {
        question: "איזה אתר היה הראשון להגיע למיליארד צפיות בסרטון אחד?",
        answers: ["Gangnam Style - YouTube", "Despacito - YouTube", "Charlie Bit My Finger - YouTube", "TikTok Trend"],
        correct: "Gangnam Style - YouTube"
    },
    {
        question: "איזה אלמנט חשוב חסר בשפת התכנות Python?",
        answers: ["סוגריים מסולסלים", "פסיקים", "שמות משתנים", "לולאות"],
        correct: "סוגריים מסולסלים"
    },
    {
        question: "מהי תקשורת Bluetooth נקראת כך?",
        answers: ["על שם מלך ויקינגי", "על שם צבע האור הנפלט", "כי זה נשמע מגניב", "קיצור של טכנולוגיה בלו-ריי"],
        correct: "על שם מלך ויקינגי"
    },
    {
        question: "מהו השם של האינטליגנציה המלאכותית שפיתחה OpenAI?",
        answers: ["Siri", "Alexa", "ChatGPT", "DeepMind"],
        correct: "ChatGPT"
    },
    {
        question: "איזה מכשיר הציל את אפל מפשיטת רגל בשנות ה-2000?",
        answers: ["MacBook", "iPhone", "iPod", "Apple Watch"],
        correct: "iPod"
    },
    {
        question: "כמה צבעים ניתן להציג בתצוגת 24 ביט?",
        answers: ["16.7 מיליון", "256", "4 מיליארד", "16 אלף"],
        correct: "16.7 מיליון"
    },
    {
        question: "איזו שפת תכנות קרויה על שם קומיקאית?",
        answers: ["Python", "Java", "Ruby", "Ada"],
        correct: "Ada"
    },
    {
        question: "מהי התוכנה המזיקה הראשונה בהיסטוריה?",
        answers: ["ILOVEYOU", "Creeper", "Stuxnet", "Melissa"],
        correct: "Creeper"
    },
    {
        question: "איזו חברת טכנולוגיה היא הגדולה ביותר בעולם לפי שווי שוק?",
        answers: ["Microsoft", "Apple", "Google", "Amazon"],
        correct: "Apple"
    },
    {
        question: "מהו המטבע הדיגיטלי הראשון?",
        answers: ["Ethereum", "Bitcoin", "Litecoin", "Dogecoin"],
        correct: "Bitcoin"
    },
    {
        question: "מה שם הרובוט ששלחה NASA למאדים בשנת 2021?",
        answers: ["Curiosity", "Opportunity", "Spirit", "Perseverance"],
        correct: "Perseverance"
    },
    {
        question: "איזה סמל משמש לזיהוי קוד פתוח?",
        answers: ["תפוח", "פינגווין", "רובוט", "חץ מעגלי"],
        correct: "פינגווין"
    },
    {
        question: "באיזו שנה יצא לאור הדפדפן Google Chrome?",
        answers: ["2004", "2006", "2008", "2010"],
        correct: "2008"
    },
    {
        question: "איזה פרוטוקול משמש לאבטחת תעבורת אינטרנט?",
        answers: ["HTTP", "FTP", "HTTPS", "TCP"],
        correct: "HTTPS"
    },
    {
        question: "מהו שמו של מייסד חברת Tesla?",
        answers: ["ג'ף בזוס", "ביל גייטס", "אלון מאסק", "סטיב ג'ובס"],
        correct: "אלון מאסק"
    },
    {
        question: "איזו מערכת הפעלה קיימת גם במחשבים וגם בסמארטפונים?",
        answers: ["Windows", "Linux", "MacOS", "Android"],
        correct: "Linux"
    },
    {
        question: "מהו מנוע החיפוש הפופולרי ביותר?",
        answers: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
        correct: "Google"
    },
    {
        question: "מהו היצרן המוביל בשוק המעבדים נכון ל-2024?",
        answers: ["Intel", "AMD", "NVIDIA", "Apple"],
        correct: "Intel"
    },
    {
        question: "איזו חברת טכנולוגיה ייצרה את הדפדפן Safari?",
        answers: ["Microsoft", "Google", "Apple", "Mozilla"],
        correct: "Apple"
    },
    {
        question: "איזו חברת טכנולוגיה פיתחה את מערכת ההפעלה Android?",
        answers: ["Google", "Samsung", "Microsoft", "Nokia"],
        correct: "Google"
    },
    {
        question: "מהי חברת התוכנה הגדולה בעולם?",
        answers: ["Apple", "Microsoft", "Google", "Amazon"],
        correct: "Microsoft"
    },
    {
        question: "איזו שפת תכנות נחשבת לקלה ללמידה עבור מתחילים?",
        answers: ["C++", "Python", "Java", "Assembly"],
        correct: "Python"
    },
    {
        question: "מהי התוכנה הפופולרית ביותר לעריכת תמונות?",
        answers: ["GIMP", "CorelDRAW", "Photoshop", "MS Paint"],
        correct: "Photoshop"
    },
    {
        question: "איזו מדינה אחראית ליצירת TikTok?",
        answers: ["ארה\"ב", "סין", "דרום קוריאה", "רוסיה"],
        correct: "סין"
    },
    {
        question: "מהו השם של המטבע הדיגיטלי של פייסבוק?",
        answers: ["Bitcoin", "Ethereum", "Libra", "Ripple"],
        correct: "Libra"
    },
    {
        question: "איזו מערכת קבצים פופולרית ב-Windows?",
        answers: ["NTFS", "EXT4", "APFS", "HFS+"],
        correct: "NTFS"
    },
    {
        question: "איזה סוג של קובץ משמש להרחבת זיכרון וירטואלי ב-Windows?",
        answers: [".dll", ".exe", ".sys", ".swap"],
        correct: ".swap"
    },
    {
        question: "מהי המהירות של חיבור USB 3.0?",
        answers: ["5Gbps", "10Gbps", "480Mbps", "40Gbps"],
        correct: "5Gbps"
    },
    {
        question: "איזו טכנולוגיה משמשת למסכים גמישים?",
        answers: ["LCD", "OLED", "CRT", "Plasma"],
        correct: "OLED"
    },
    {
        question: "מהי תצורת הצפנה מאובטחת יותר?",
        answers: ["AES", "DES", "MD5", "SHA-1"],
        correct: "AES"
    },
    {
        question: "איזו חברת טכנולוגיה פיתחה את מעבדי ה-M1?",
        answers: ["Intel", "AMD", "Apple", "Qualcomm"],
        correct: "Apple"
    },
    {
        question: "מהו השם של הרובוט האנושי שפותח על ידי Boston Dynamics?",
        answers: ["Atlas", "Sophia", "ASIMO", "Pepper"],
        correct: "Atlas"
    },
    {
        question: "איזו חברת טכנולוגיה יצרה את השעון החכם הראשון?",
        answers: ["Apple", "Samsung", "IBM", "Sony"],
        correct: "IBM"
    },
    {
        question: "מהי החברה שמייצרת את כרטיסי המסך GeForce?",
        answers: ["AMD", "Intel", "NVIDIA", "Qualcomm"],
        correct: "NVIDIA"
    },
    {
        question: "מהו גודל הזיכרון המינימלי הנדרש ל-Windows 11?",
        answers: ["2GB", "4GB", "8GB", "16GB"],
        correct: "4GB"
    },
    {
        question: "מהי חברת הטכנולוגיה שמאחורי המותג PlayStation?",
        answers: ["Microsoft", "Nintendo", "Sony", "Sega"],
        correct: "Sony"
    },
    {
        question: "איזה מכשיר נחשב לקונסולת המשחקים הנמכרת ביותר בכל הזמנים?",
        answers: ["PlayStation 2", "Nintendo Switch", "Xbox 360", "PlayStation 5"],
        correct: "PlayStation 2"
    },
    {
        question: "איזו מערכת הפעלה קיימת במכשירי Raspberry Pi?",
        answers: ["Windows", "MacOS", "Raspberry Pi OS", "Android"],
        correct: "Raspberry Pi OS"
    },
    {
        question: "איזה פרוטוקול משמש לשליחת מיילים?",
        answers: ["HTTP", "SMTP", "POP3", "IMAP"],
        correct: "SMTP"
    },
    {
        question: "מהו סוג החיבור הנפוץ ביותר למסכים?",
        answers: ["VGA", "DVI", "HDMI", "DisplayPort"],
        correct: "HDMI"
    },
    {
        question: "מהו התקן האחסון המהיר ביותר כיום?",
        answers: ["HDD", "SSD", "NVMe SSD", "USB Drive"],
        correct: "NVMe SSD"
    },
    {
        question: "איזו שפת תכנות משמשת לפיתוח אפליקציות אנדרואיד?",
        answers: ["C#", "Swift", "Kotlin", "Go"],
        correct: "Kotlin"
    },
    {
        question: "איזה פלטפורמה משמשת לאירוח קוד פתוח?",
        answers: ["Bitbucket", "GitHub", "GitLab", "SourceForge"],
        correct: "GitHub"
    },
    {
        question: "איזו חברת טכנולוגיה רכשה את WhatsApp?",
        answers: ["Google", "Microsoft", "Facebook", "Amazon"],
        correct: "Facebook"
    },
    {
        question: "מהי מערכת ההפעלה של Xbox?",
        answers: ["Windows", "Linux", "Xbox OS", "DirectX OS"],
        correct: "Xbox OS"
    },
    {
        question: "מהו הדפדפן הראשון שהציע גלישה פרטית?",
        answers: ["Chrome", "Firefox", "Safari", "Internet Explorer"],
        correct: "Safari"
    },
    {
        question: "מהי חברת הטכנולוגיה שמאחורי פלטפורמת Azure?",
        answers: ["Amazon", "Microsoft", "Google", "IBM"],
        correct: "Microsoft"
    }

];
let screenedQuestions = [];
let timerInterval;
let count = 0;


const randQuiz = () =>{
    let quizDiv = document.querySelector("#quizDiv")
    quizDiv.innerHTML = ""
    let randIndex = indexLottery()
    if(count <= 2){
        if(validRand(randIndex) && questions[randIndex]){
            count++
            let randQuiz = questions[randIndex].question
            let answer1 = questions[randIndex].answers[0]
            let answer2 = questions[randIndex].answers[1]
            let answer3 = questions[randIndex].answers[2]
            let answer4 = questions[randIndex].answers[3]
            screenedQuestions.push(randIndex)
            quizDiv.innerHTML += `<h2 class="quiz">${randQuiz}</h2>`
            quizDiv.innerHTML += `<br>`
            quizDiv.innerHTML += `<button class="btnA" onclick="checkAnswer(this, '${questions[randIndex].correct}')">${answer1}</button>`
            quizDiv.innerHTML += `<button class="btnA" onclick="checkAnswer(this, '${questions[randIndex].correct}')">${answer2}</button>`
            quizDiv.innerHTML += `<button class="btnA" onclick="checkAnswer(this, '${questions[randIndex].correct}')">${answer3}</button>`
            quizDiv.innerHTML += `<button class="btnA" onclick="checkAnswer(this, '${questions[randIndex].correct}')">${answer4}</button>`
            startTimer();
        }
        else{
            randQuiz()
        }
    }
    else{
        quizDiv.innerHTML = `Game Over`
    }
}

const startTimer = () =>{
    let timer = 10
    document.getElementById('timer').innerHTML = timer
    clearInterval(timerInterval)
    timerInterval = setInterval(()=>{
        timer--
        document.getElementById('timer').innerHTML = timer
        if(timer <= 0){
            clearInterval(timerInterval)
            handleTimout()
        }
    }, 1000)
}

const indexLottery = () => {
    return Math.floor(Math.random() * (questions.length - 1))
}

const validRand = (index) => {
    if (screenedQuestions.includes(index)) {
        return false
    }
    return true
}

const initGame = () => {
    updateHeader();
    randQuiz()
}

initGame()