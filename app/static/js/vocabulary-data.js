
// ==========================================
// HANGEUL STUDIO AI
// KOREAN VOCABULARY DATABASE
// ==========================================

const vocabularyWords = [];

// ==========================================
// NATIVE KOREAN NUMBERS (1–99)
// ==========================================

const nativeNumbers = [
    ["하나", "Hana"],
    ["둘", "Dul"],
    ["셋", "Set"],
    ["넷", "Net"],
    ["다섯", "Daseot"],
    ["여섯", "Yeoseot"],
    ["일곱", "Ilgop"],
    ["여덟", "Yeodeol"],
    ["아홉", "Ahop"],
    ["열", "Yeol"]
];

const nativeTens = [
    "열", "스물", "서른", "마흔", "쉰",
    "예순", "일흔", "여든", "아흔"
];

const nativeTensRoman = [
    "Yeol", "Seumul", "Seoreun", "Maheun", "Swin",
    "Yesun", "Ilheun", "Yeodeun", "Aheun"
];

const nativeOnesRoman = [
    "", "Hana", "Dul", "Set", "Net", "Daseot",
    "Yeoseot", "Ilgop", "Yeodeol", "Ahop"
];

const nativeOnes = [
    "", "하나", "둘", "셋", "넷", "다섯",
    "여섯", "일곱", "여덟", "아홉"
];

for (let i = 1; i <= 99; i++) {

    let korean;
    let romanization;

    if (i <= 10) {
        korean = nativeNumbers[i - 1][0];
        romanization = nativeNumbers[i - 1][1];
    } else {
        const tens = Math.floor(i / 10);
        const ones = i % 10;

        korean = nativeTens[tens - 1];

        romanization = nativeTensRoman[tens - 1];

        if (ones !== 0) {
            korean += nativeOnes[ones];
            romanization += " " + nativeOnesRoman[ones];
        }
    }

    vocabularyWords.push({
        korean,
        romanization,
        meaning: `Native Korean number ${i}`,
        example: `${korean} 개`,
        exampleMeaning: `${i} items`,
        category: "Numbers"
    });
}

// ==========================================
// NATIVE KOREAN 100
// ==========================================

vocabularyWords.push({
    korean: "백",
    romanization: "Baek",
    meaning: "One hundred (100)",
    example: "백 개 있어요.",
    exampleMeaning: "There are 100 items.",
    category: "Numbers"
});


// ==========================================
// SINO-KOREAN NUMBERS (1–100)
// ==========================================

const sinoNumbers = [
    ["일", "Il"],
    ["이", "I"],
    ["삼", "Sam"],
    ["사", "Sa"],
    ["오", "O"],
    ["육", "Yuk"],
    ["칠", "Chil"],
    ["팔", "Pal"],
    ["구", "Gu"],
    ["십", "Sip"]
];

const sinoTens = [
    "십", "이십", "삼십", "사십", "오십",
    "육십", "칠십", "팔십", "구십"
];

const sinoTensRoman = [
    "Sip", "Isip", "Samsip", "Sasip", "Osip",
    "Yuksip", "Chilsip", "Palsip", "Gusip"
];

for (let i = 1; i <= 100; i++) {

    let korean;
    let romanization;

    if (i <= 10) {
        korean = sinoNumbers[i - 1][0];
        romanization = sinoNumbers[i - 1][1];
    } else if (i === 100) {
        korean = "백";
        romanization = "Baek";
    } else {
        const tens = Math.floor(i / 10);
        const ones = i % 10;

        korean = sinoTens[tens - 1];
        romanization = sinoTensRoman[tens - 1];

        if (ones !== 0) {
            korean += sinoNumbers[ones - 1][0];
            romanization += " " + sinoNumbers[ones - 1][1];
        }
    }

    vocabularyWords.push({
        korean,
        romanization,
        meaning: `Sino-Korean number ${i}`,
        example: `${korean} 명`,
        exampleMeaning: `${i} people`,
        category: "Numbers"
    });
}

// ==========================================
// EVERYDAY KOREAN VOCABULARY — PART 1
// GREETINGS, PEOPLE & FAMILY (50 WORDS)
// ==========================================

const everydayVocabulary1 = [

    // GREETINGS
    ["안녕하세요", "Annyeonghaseyo", "Hello", "안녕하세요! 만나서 반가워요.", "Hello! Nice to meet you.", "Greetings"],
    ["안녕", "Annyeong", "Hi / Bye (casual)", "안녕! 잘 지냈어?", "Hi! Have you been well?", "Greetings"],
    ["감사합니다", "Gamsahamnida", "Thank you", "도와주셔서 감사합니다.", "Thank you for helping me.", "Greetings"],
    ["고마워요", "Gomawoyo", "Thank you (polite)", "선물 고마워요.", "Thank you for the gift.", "Greetings"],
    ["죄송합니다", "Joesonghamnida", "I'm sorry", "늦어서 죄송합니다.", "I'm sorry for being late.", "Greetings"],
    ["미안해요", "Mianhaeyo", "I'm sorry (polite)", "정말 미안해요.", "I'm really sorry.", "Greetings"],
    ["안녕히 가세요", "Annyeonghi gaseyo", "Goodbye (to someone leaving)", "안녕히 가세요! 다음에 봐요.", "Goodbye! See you next time.", "Greetings"],
    ["안녕히 계세요", "Annyeonghi gyeseyo", "Goodbye (when you leave)", "안녕히 계세요. 감사합니다.", "Goodbye. Thank you.", "Greetings"],
    ["잘 지내요?", "Jal jinaeyo?", "How are you?", "요즘 잘 지내요?", "How have you been lately?", "Greetings"],
    ["만나서 반가워요", "Mannaseo bangawoyo", "Nice to meet you", "만나서 반가워요!", "Nice to meet you!", "Greetings"],

    // PEOPLE
    ["사람", "Saram", "Person", "저 사람은 누구예요?", "Who is that person?", "People"],
    ["친구", "Chingu", "Friend", "제 친구예요.", "This is my friend.", "People"],
    ["남자", "Namja", "Man", "저 남자는 학생이에요.", "That man is a student.", "People"],
    ["여자", "Yeoja", "Woman", "그 여자는 선생님이에요.", "That woman is a teacher.", "People"],
    ["아이", "Ai", "Child", "아이가 놀아요.", "The child is playing.", "People"],
    ["아기", "Agi", "Baby", "아기가 자요.", "The baby is sleeping.", "People"],
    ["학생", "Haksaeng", "Student", "저는 학생이에요.", "I am a student.", "People"],
    ["선생님", "Seonsaengnim", "Teacher", "선생님이 오셨어요.", "The teacher has arrived.", "People"],
    ["의사", "Uisa", "Doctor", "의사를 만나야 해요.", "I need to see a doctor.", "People"],
    ["가수", "Gasu", "Singer", "그 가수는 유명해요.", "That singer is famous.", "People"],

    // FAMILY
    ["가족", "Gajok", "Family", "우리 가족은 행복해요.", "My family is happy.", "Family"],
    ["어머니", "Eomeoni", "Mother", "어머니는 요리해요.", "Mother cooks.", "Family"],
    ["아버지", "Abeoji", "Father", "아버지는 회사에 가요.", "Father goes to work.", "Family"],
    ["엄마", "Eomma", "Mom", "엄마, 사랑해요.", "Mom, I love you.", "Family"],
    ["아빠", "Appa", "Dad", "아빠가 집에 있어요.", "Dad is at home.", "Family"],
    ["부모님", "Bumonim", "Parents", "부모님을 사랑해요.", "I love my parents.", "Family"],
    ["형", "Hyeong", "Older brother (male speaker)", "형은 회사원이에요.", "My older brother is an office worker.", "Family"],
    ["오빠", "Oppa", "Older brother (female speaker)", "오빠가 책을 읽어요.", "My older brother is reading a book.", "Family"],
    ["누나", "Nuna", "Older sister (male speaker)", "누나는 친절해요.", "My older sister is kind.", "Family"],
    ["언니", "Eonni", "Older sister (female speaker)", "언니와 쇼핑해요.", "I shop with my older sister.", "Family"],
    ["동생", "Dongsaeng", "Younger sibling", "동생이 있어요.", "I have a younger sibling.", "Family"],
    ["남동생", "Namdongsaeng", "Younger brother", "남동생은 학생이에요.", "My younger brother is a student.", "Family"],
    ["여동생", "Yeodongsaeng", "Younger sister", "여동생은 귀여워요.", "My younger sister is cute.", "Family"],
    ["할머니", "Halmeoni", "Grandmother", "할머니를 만나요.", "I meet my grandmother.", "Family"],
    ["할아버지", "Harabeoji", "Grandfather", "할아버지는 친절하세요.", "Grandfather is kind.", "Family"],
    ["아들", "Adeul", "Son", "아들이 학교에 가요.", "The son goes to school.", "Family"],
    ["딸", "Ttal", "Daughter", "딸이 노래해요.", "The daughter sings.", "Family"],
    ["남편", "Nampyeon", "Husband", "남편은 요리해요.", "My husband cooks.", "Family"],
    ["아내", "Anae", "Wife", "아내는 책을 읽어요.", "My wife reads a book.", "Family"],
    ["부부", "Bubu", "Married couple", "그 부부는 행복해요.", "That couple is happy.", "Family"],

    // EVERYDAY EXPRESSIONS
    ["네", "Ne", "Yes", "네, 알겠습니다.", "Yes, I understand.", "Greetings"],
    ["아니요", "Aniyo", "No", "아니요, 괜찮아요.", "No, it's okay.", "Greetings"],
    ["괜찮아요", "Gwaenchanayo", "It's okay", "괜찮아요. 걱정하지 마세요.", "It's okay. Don't worry.", "Greetings"],
    ["주세요", "Juseyo", "Please give me", "물 주세요.", "Please give me water.", "Greetings"],
    ["잠깐만요", "Jamkkanmanyo", "Just a moment", "잠깐만요! 기다려 주세요.", "Just a moment! Please wait.", "Greetings"],
    ["실례합니다", "Sillyehamnida", "Excuse me", "실례합니다. 화장실이 어디예요?", "Excuse me. Where is the bathroom?", "Greetings"],
    ["축하해요", "Chukhahaeyo", "Congratulations", "생일 축하해요!", "Happy birthday!", "Greetings"],
    ["사랑해요", "Saranghaeyo", "I love you", "가족을 사랑해요.", "I love my family.", "Greetings"],
    ["잘 자요", "Jal jayo", "Good night", "오늘은 잘 자요.", "Sleep well tonight.", "Greetings"],
    ["화이팅", "Hwaiting", "You can do it! / Good luck!", "시험 잘 봐요! 화이팅!", "Do well on the exam! You can do it!", "Greetings"]
];

everydayVocabulary1.forEach(word => {
    vocabularyWords.push({
        korean: word[0],
        romanization: word[1],
        meaning: word[2],
        example: word[3],
        exampleMeaning: word[4],
        category: word[5]
    });
});

// ==========================================
// EVERYDAY KOREAN VOCABULARY — PART 2
// FOOD, DRINKS & RESTAURANTS (50 WORDS)
// ==========================================

const everydayVocabulary2 = [

    // FOOD
    ["음식", "Eumsik", "Food", "한국 음식을 좋아해요.", "I like Korean food.", "Food"],
    ["밥", "Bap", "Rice / Meal", "밥을 먹어요.", "I eat rice.", "Food"],
    ["김치", "Gimchi", "Kimchi", "김치는 맛있어요.", "Kimchi is delicious.", "Food"],
    ["고기", "Gogi", "Meat", "고기를 먹어요.", "I eat meat.", "Food"],
    ["닭고기", "Dakgogi", "Chicken", "닭고기를 좋아해요.", "I like chicken.", "Food"],
    ["소고기", "Sogogi", "Beef", "소고기를 샀어요.", "I bought beef.", "Food"],
    ["돼지고기", "Dwaejigogi", "Pork", "돼지고기를 요리해요.", "I cook pork.", "Food"],
    ["생선", "Saengseon", "Fish", "생선을 먹어요.", "I eat fish.", "Food"],
    ["계란", "Gyeran", "Egg", "계란 두 개 주세요.", "Please give me two eggs.", "Food"],
    ["빵", "Ppang", "Bread", "빵을 먹어요.", "I eat bread.", "Food"],
    ["과일", "G fruit", "Fruit", "과일을 좋아해요.", "I like fruit.", "Food"],
    ["사과", "Sagwa", "Apple", "사과를 먹어요.", "I eat an apple.", "Food"],
    ["바나나", "Banana", "Banana", "바나나가 달아요.", "The banana is sweet.", "Food"],
    ["딸기", "Ttalgi", "Strawberry", "딸기를 좋아해요.", "I like strawberries.", "Food"],
    ["포도", "Podo", "Grapes", "포도를 샀어요.", "I bought grapes.", "Food"],
    ["수박", "Subak", "Watermelon", "수박은 시원해요.", "Watermelon is refreshing.", "Food"],
    ["채소", "Chaeso", "Vegetables", "채소를 먹어야 해요.", "I should eat vegetables.", "Food"],
    ["당근", "Danggeun", "Carrot", "당근을 잘라요.", "I cut a carrot.", "Food"],
    ["감자", "Gamja", "Potato", "감자를 요리해요.", "I cook potatoes.", "Food"],
    ["토마토", "Tomato", "Tomato", "토마토를 샀어요.", "I bought tomatoes.", "Food"],

    // DRINKS
    ["물", "Mul", "Water", "물을 마셔요.", "I drink water.", "Drinks"],
    ["우유", "Uyu", "Milk", "우유를 마셔요.", "I drink milk.", "Drinks"],
    ["커피", "Keopi", "Coffee", "커피를 좋아해요.", "I like coffee.", "Drinks"],
    ["차", "Cha", "Tea", "차 한 잔 주세요.", "Please give me a cup of tea.", "Drinks"],
    ["주스", "Juseu", "Juice", "오렌지 주스를 마셔요.", "I drink orange juice.", "Drinks"],
    ["오렌지 주스", "Orenji juseu", "Orange juice", "오렌지 주스가 맛있어요.", "Orange juice is delicious.", "Drinks"],
    ["녹차", "Nokcha", "Green tea", "녹차를 마셔요.", "I drink green tea.", "Drinks"],
    ["레몬차", "Lemoncha", "Lemon tea", "레몬차를 좋아해요.", "I like lemon tea.", "Drinks"],
    ["아이스커피", "Aiseu keopi", "Iced coffee", "아이스커피 주세요.", "Please give me iced coffee.", "Drinks"],
    ["음료수", "Eumryosu", "Beverage / Soft drink", "음료수를 샀어요.", "I bought a drink.", "Drinks"],

    // RESTAURANTS
    ["식당", "Sikdang", "Restaurant", "식당에서 밥을 먹어요.", "I eat at a restaurant.", "Restaurants"],
    ["메뉴", "Menyu", "Menu", "메뉴를 보여 주세요.", "Please show me the menu.", "Restaurants"],
    ["주문", "Jumun", "Order", "주문할게요.", "I'd like to order.", "Restaurants"],
    ["계산", "Gyesan", "Bill / Payment", "계산해 주세요.", "Please bring the bill.", "Restaurants"],
    ["가격", "Gagyeok", "Price", "가격이 얼마예요?", "How much is the price?", "Restaurants"],
    ["맛", "Mat", "Taste / Flavor", "맛이 좋아요.", "It tastes good.", "Restaurants"],
    ["맛있어요", "Masisseoyo", "Delicious", "이 음식은 맛있어요.", "This food is delicious.", "Restaurants"],
    ["맛없어요", "Madeopseoyo", "Not delicious", "이 음식은 맛없어요.", "This food is not delicious.", "Restaurants"],
    ["맵다", "Maepda", "To be spicy", "이 음식은 매워요.", "This food is spicy.", "Restaurants"],
    ["달다", "Dalda", "To be sweet", "케이크가 달아요.", "The cake is sweet.", "Restaurants"],

    // MORE FOOD WORDS
    ["국", "Guk", "Soup", "국을 먹어요.", "I eat soup.", "Food"],
    ["라면", "Ramyeon", "Instant noodles", "라면을 끓여요.", "I cook instant noodles.", "Food"],
    ["국수", "Guksu", "Noodles", "국수를 좋아해요.", "I like noodles.", "Food"],
    ["떡볶이", "Tteokbokki", "Spicy rice cakes", "떡볶이를 먹어요.", "I eat tteokbokki.", "Food"],
    ["불고기", "Bulgogi", "Marinated grilled beef", "불고기는 맛있어요.", "Bulgogi is delicious.", "Food"],
    ["비빔밥", "Bibimbap", "Mixed rice", "비빔밥을 주문해요.", "I order bibimbap.", "Food"],
    ["만두", "Mandu", "Dumplings", "만두를 좋아해요.", "I like dumplings.", "Food"],
    ["치킨", "Chikin", "Fried chicken", "치킨을 먹어요.", "I eat fried chicken.", "Food"],
    ["피자", "Pija", "Pizza", "피자를 주문했어요.", "I ordered pizza.", "Food"],
    ["아이스크림", "Aiseukeurim", "Ice cream", "아이스크림을 먹어요.", "I eat ice cream.", "Food"]
];

everydayVocabulary2.forEach(word => {
    vocabularyWords.push({
        korean: word[0],
        romanization: word[1],
        meaning: word[2],
        example: word[3],
        exampleMeaning: word[4],
        category: word[5]
    });
});

// ==========================================
// EVERYDAY KOREAN VOCABULARY — PART 3
// HOME, SCHOOL & WORK (50 WORDS)
// ==========================================

const everydayVocabulary3 = [

    // HOME
    ["집", "Jip", "House / Home", "저는 집에 있어요.", "I am at home.", "Home"],
    ["방", "Bang", "Room", "제 방은 커요.", "My room is big.", "Home"],
    ["거실", "Geosil", "Living room", "거실에서 쉬어요.", "I relax in the living room.", "Home"],
    ["부엌", "Bueok", "Kitchen", "엄마는 부엌에 있어요.", "Mom is in the kitchen.", "Home"],
    ["화장실", "Hwajangsil", "Bathroom / Toilet", "화장실이 어디예요?", "Where is the bathroom?", "Home"],
    ["문", "Mun", "Door", "문을 열어요.", "I open the door.", "Home"],
    ["창문", "Changmun", "Window", "창문을 닫아요.", "I close the window.", "Home"],
    ["침대", "Chimdae", "Bed", "침대에서 자요.", "I sleep in bed.", "Home"],
    ["책상", "Chaeksang", "Desk", "책상 위에 책이 있어요.", "There is a book on the desk.", "Home"],
    ["의자", "Uija", "Chair", "의자에 앉아요.", "I sit on a chair.", "Home"],
    ["소파", "Sopa", "Sofa", "소파에서 쉬어요.", "I relax on the sofa.", "Home"],
    ["냉장고", "Naengjanggo", "Refrigerator", "우유는 냉장고에 있어요.", "The milk is in the refrigerator.", "Home"],
    ["텔레비전", "Tellebijeon", "Television", "텔레비전을 봐요.", "I watch television.", "Home"],
    ["전화", "Jeonhwa", "Telephone / Phone call", "전화해 주세요.", "Please call me.", "Home"],
    ["열쇠", "Yeolsoe", "Key", "열쇠를 찾아요.", "I look for the key.", "Home"],

    // SCHOOL
    ["학교", "Hakgyo", "School", "학교에 가요.", "I go to school.", "School"],
    ["교실", "Gyosil", "Classroom", "교실에 학생들이 있어요.", "There are students in the classroom.", "School"],
    ["책", "Chaek", "Book", "책을 읽어요.", "I read a book.", "School"],
    ["공책", "Gongchaek", "Notebook", "공책에 써요.", "I write in a notebook.", "School"],
    ["연필", "Yeonpil", "Pencil", "연필로 써요.", "I write with a pencil.", "School"],
    ["펜", "Pen", "Pen", "펜을 주세요.", "Please give me a pen.", "School"],
    ["지우개", "Jiugae", "Eraser", "지우개로 지워요.", "I erase it with an eraser.", "School"],
    ["가방", "Gabang", "Bag", "가방이 무거워요.", "The bag is heavy.", "School"],
    ["시험", "Siheom", "Exam / Test", "내일 시험이 있어요.", "I have an exam tomorrow.", "School"],
    ["숙제", "Sukje", "Homework", "숙제를 해요.", "I do homework.", "School"],
    ["질문", "Jilmun", "Question", "질문이 있어요.", "I have a question.", "School"],
    ["대답", "Daedap", "Answer / Reply", "대답해 주세요.", "Please answer.", "School"],
    ["수업", "Sueop", "Class / Lesson", "수업이 시작해요.", "The class is starting.", "School"],
    ["공부", "Gongbu", "Study", "한국어를 공부해요.", "I study Korean.", "School"],
    ["도서관", "Doseogwan", "Library", "도서관에서 공부해요.", "I study at the library.", "School"],

    // WORK
    ["회사", "Hoesa", "Company", "회사에 가요.", "I go to the company.", "Work"],
    ["직장", "Jikjang", "Workplace", "직장이 가까워요.", "The workplace is nearby.", "Work"],
    ["직원", "Jigwon", "Employee", "그 직원은 친절해요.", "That employee is kind.", "Work"],
    ["사장님", "Sajangnim", "Boss / Company president", "사장님을 만나요.", "I meet the boss.", "Work"],
    ["동료", "Dongnyo", "Colleague", "동료와 이야기해요.", "I talk with my colleague.", "Work"],
    ["회의", "Hoeui", "Meeting", "회의가 있어요.", "There is a meeting.", "Work"],
    ["일", "Il", "Work / Job", "오늘 일이 많아요.", "I have a lot of work today.", "Work"],
    ["월급", "Wolgeup", "Monthly salary", "월급을 받아요.", "I receive my salary.", "Work"],
    ["시간", "Sigan", "Time", "시간이 없어요.", "I don't have time.", "Work"],
    ["컴퓨터", "Keompyuteo", "Computer", "컴퓨터를 사용해요.", "I use a computer.", "Work"],
    ["인터넷", "Inteonet", "Internet", "인터넷이 느려요.", "The internet is slow.", "Work"],
    ["이메일", "Imeil", "Email", "이메일을 보내요.", "I send an email.", "Work"],
    ["전화번호", "Jeonhwabeonho", "Phone number", "전화번호를 알려 주세요.", "Please tell me your phone number.", "Work"],
    ["사무실", "Samusil", "Office", "사무실에서 일해요.", "I work in the office.", "Work"],
    ["휴가", "Hyuga", "Vacation / Leave", "다음 주에 휴가예요.", "I am on vacation next week.", "Work"],

    // MORE SCHOOL & LEARNING
    ["한국어", "Hangugeo", "Korean language", "한국어를 배워요.", "I learn Korean.", "School"],
    ["영어", "Yeongeo", "English language", "영어를 공부해요.", "I study English.", "School"],
    ["수학", "Suhak", "Mathematics", "수학을 좋아해요.", "I like mathematics.", "School"],
    ["역사", "Yeoksa", "History", "역사를 공부해요.", "I study history.", "School"],
    ["과학", "Gwahak", "Science", "과학은 재미있어요.", "Science is interesting.", "School"]
];

everydayVocabulary3.forEach(word => {
    vocabularyWords.push({
        korean: word[0],
        romanization: word[1],
        meaning: word[2],
        example: word[3],
        exampleMeaning: word[4],
        category: word[5]
    });
});

// ==========================================
// EVERYDAY KOREAN VOCABULARY — PART 4
// TRAVEL, TRANSPORT, SHOPPING & PLACES
// ==========================================

const everydayVocabulary4 = [

    // TRANSPORT
    ["자동차", "Jadongcha", "Car", "자동차를 타요.", "I ride in a car.", "Transport"],
    ["버스", "Beoseu", "Bus", "버스를 타요.", "I take the bus.", "Transport"],
    ["지하철", "Jihacheol", "Subway", "지하철을 타요.", "I take the subway.", "Transport"],
    ["기차", "Gicha", "Train", "기차가 빨라요.", "The train is fast.", "Transport"],
    ["비행기", "Bihaenggi", "Airplane", "비행기를 타요.", "I take an airplane.", "Transport"],
    ["택시", "Taeksi", "Taxi", "택시를 불러 주세요.", "Please call a taxi.", "Transport"],
    ["자전거", "Jajeongeo", "Bicycle", "자전거를 타요.", "I ride a bicycle.", "Transport"],
    ["오토바이", "Otobai", "Motorcycle", "오토바이가 빨라요.", "The motorcycle is fast.", "Transport"],
    ["역", "Yeok", "Station", "역에 가요.", "I go to the station.", "Transport"],
    ["공항", "Gonghang", "Airport", "공항에 도착했어요.", "I arrived at the airport.", "Transport"],

    // TRAVEL
    ["여행", "Yeohaeng", "Travel / Trip", "여행을 좋아해요.", "I like travelling.", "Travel"],
    ["호텔", "Hotel", "Hotel", "호텔을 예약했어요.", "I booked a hotel.", "Travel"],
    ["여권", "Yeogwon", "Passport", "여권을 가져왔어요.", "I brought my passport.", "Travel"],
    ["표", "Pyo", "Ticket", "기차표를 샀어요.", "I bought a train ticket.", "Travel"],
    ["지도", "Jido", "Map", "지도를 봐요.", "I look at the map.", "Travel"],
    ["짐", "Jim", "Luggage", "짐이 많아요.", "I have a lot of luggage.", "Travel"],
    ["관광", "Gwangwang", "Sightseeing", "관광을 해요.", "I go sightseeing.", "Travel"],
    ["사진", "Sajin", "Photograph", "사진을 찍어요.", "I take a photograph.", "Travel"],
    ["바다", "Bada", "Sea", "바다가 아름다워요.", "The sea is beautiful.", "Travel"],
    ["산", "San", "Mountain", "산에 올라가요.", "I climb the mountain.", "Travel"],

    // SHOPPING
    ["가게", "Gage", "Shop / Store", "가게에 가요.", "I go to the shop.", "Shopping"],
    ["시장", "Sijang", "Market", "시장에서 과일을 사요.", "I buy fruit at the market.", "Shopping"],
    ["백화점", "Baekhwajeom", "Department store", "백화점에서 쇼핑해요.", "I shop at the department store.", "Shopping"],
    ["마트", "Mateu", "Supermarket", "마트에서 우유를 사요.", "I buy milk at the supermarket.", "Shopping"],
    ["돈", "Don", "Money", "돈이 필요해요.", "I need money.", "Shopping"],
    ["카드", "Kadeu", "Card", "카드로 계산할게요.", "I'll pay by card.", "Shopping"],
    ["현금", "Hyeongeum", "Cash", "현금이 있어요.", "I have cash.", "Shopping"],
    ["할인", "Harin", "Discount", "할인이 있어요.", "There is a discount.", "Shopping"],
    ["영수증", "Yeongsujeung", "Receipt", "영수증 주세요.", "Please give me the receipt.", "Shopping"],
    ["쇼핑", "Syoping", "Shopping", "쇼핑을 좋아해요.", "I like shopping.", "Shopping"],

    // PLACES
    ["병원", "Byeongwon", "Hospital", "병원에 가야 해요.", "I need to go to the hospital.", "Places"],
    ["약국", "Yakguk", "Pharmacy", "약국에서 약을 사요.", "I buy medicine at the pharmacy.", "Places"],
    ["은행", "Eunhaeng", "Bank", "은행에 가요.", "I go to the bank.", "Places"],
    ["우체국", "Ucheguk", "Post office", "우체국에서 편지를 보내요.", "I send a letter at the post office.", "Places"],
    ["경찰서", "Gyeongchalseo", "Police station", "경찰서가 어디예요?", "Where is the police station?", "Places"],
    ["공원", "Gongwon", "Park", "공원에서 걸어요.", "I walk in the park.", "Places"],
    ["영화관", "Yeonghwagwan", "Cinema", "영화관에서 영화를 봐요.", "I watch a movie at the cinema.", "Places"],
    ["식당", "Sikdang", "Restaurant", "식당에서 점심을 먹어요.", "I eat lunch at a restaurant.", "Places"],
    ["카페", "Kape", "Cafe", "카페에서 커피를 마셔요.", "I drink coffee at a cafe.", "Places"],
    ["박물관", "Bangmulgwan", "Museum", "박물관을 방문해요.", "I visit the museum.", "Places"],

    // DIRECTIONS & LOCATION
    ["왼쪽", "Oenjjok", "Left", "왼쪽으로 가세요.", "Go left.", "Travel"],
    ["오른쪽", "Oreunjjok", "Right", "오른쪽으로 가세요.", "Go right.", "Travel"],
    ["앞", "Ap", "Front / In front", "학교 앞에 있어요.", "It is in front of the school.", "Travel"],
    ["뒤", "Dwi", "Behind / Back", "집 뒤에 공원이 있어요.", "There is a park behind the house.", "Travel"],
    ["옆", "Yeop", "Beside / Next to", "은행 옆에 있어요.", "It is next to the bank.", "Travel"],
    ["여기", "Yeogi", "Here", "여기에 앉으세요.", "Please sit here.", "Travel"],
    ["거기", "Geogi", "There", "거기에 있어요.", "It is there.", "Travel"],
    ["저기", "Jeogi", "Over there", "저기에 학교가 있어요.", "There is a school over there.", "Travel"],
    ["거리", "Geori", "Street / Distance", "거리가 멀어요.", "The distance is far.", "Travel"],
    ["주소", "Juso", "Address", "주소를 알려 주세요.", "Please tell me the address.", "Travel"]
];

everydayVocabulary4.forEach(word => {
    vocabularyWords.push({
        korean: word[0],
        romanization: word[1],
        meaning: word[2],
        example: word[3],
        exampleMeaning: word[4],
        category: word[5]
    });
});

const everydayVocabulary5 = [
    // Body and health
    ["머리", "Meori", "Head", "머리가 아파요.", "My head hurts.", "Body"],
    ["얼굴", "Eolgul", "Face", "얼굴을 씻어요.", "I wash my face.", "Body"],
    ["눈", "Nun", "Eye", "눈이 예뻐요.", "The eyes are beautiful.", "Body"],
    ["코", "Ko", "Nose", "코가 작아요.", "The nose is small.", "Body"],
    ["입", "Ip", "Mouth", "입을 벌리세요.", "Please open your mouth.", "Body"],
    ["귀", "Gwi", "Ear", "귀가 아파요.", "My ear hurts.", "Body"],
    ["손", "Son", "Hand", "손을 씻어요.", "I wash my hands.", "Body"],
    ["발", "Bal", "Foot", "발이 아파요.", "My foot hurts.", "Body"],
    ["다리", "Dari", "Leg", "다리가 길어요.", "The legs are long.", "Body"],
    ["배", "Bae", "Stomach", "배가 고파요.", "I am hungry.", "Body"],

    // Health and feelings
    ["병원", "Byeongwon", "Hospital", "병원에 가요.", "I go to the hospital.", "Health"],
    ["약", "Yak", "Medicine", "약을 먹어요.", "I take medicine.", "Health"],
    ["의사", "Uisa", "Doctor", "의사를 만나요.", "I meet a doctor.", "Health"],
    ["간호사", "Ganhosa", "Nurse", "간호사가 친절해요.", "The nurse is kind.", "Health"],
    ["건강", "Geongang", "Health", "건강이 중요해요.", "Health is important.", "Health"],
    ["아프다", "Apeuda", "To be sick or hurt", "오늘은 몸이 아파요.", "My body hurts today.", "Health"],
    ["피곤하다", "Pigonhada", "To be tired", "너무 피곤해요.", "I am very tired.", "Feelings"],
    ["행복하다", "Haengbokhada", "To be happy", "저는 행복해요.", "I am happy.", "Feelings"],
    ["슬프다", "Seulpeuda", "To be sad", "조금 슬퍼요.", "I am a little sad.", "Feelings"],
    ["걱정", "Geokjeong", "Worry", "걱정하지 마세요.", "Please don't worry.", "Feelings"],

    // Weather and nature
    ["날씨", "Nalssi", "Weather", "오늘 날씨가 좋아요.", "The weather is nice today.", "Weather"],
    ["비", "Bi", "Rain", "비가 와요.", "It is raining.", "Weather"],
    ["눈", "Nun", "Snow", "눈이 와요.", "It is snowing.", "Weather"],
    ["바람", "Baram", "Wind", "바람이 불어요.", "The wind is blowing.", "Weather"],
    ["해", "Hae", "Sun", "해가 밝아요.", "The sun is bright.", "Nature"],
    ["달", "Dal", "Moon", "달이 예뻐요.", "The moon is beautiful.", "Nature"],
    ["별", "Byeol", "Star", "별이 많아요.", "There are many stars.", "Nature"],
    ["하늘", "Haneul", "Sky", "하늘이 파래요.", "The sky is blue.", "Nature"],
    ["꽃", "Kkot", "Flower", "꽃이 예뻐요.", "The flower is beautiful.", "Nature"],
    ["나무", "Namu", "Tree", "나무가 커요.", "The tree is big.", "Nature"],

    // Common verbs
    ["가다", "Gada", "To go", "학교에 가요.", "I go to school.", "Verbs"],
    ["오다", "Oda", "To come", "친구가 와요.", "My friend is coming.", "Verbs"],
    ["먹다", "Meokda", "To eat", "밥을 먹어요.", "I eat rice.", "Verbs"],
    ["마시다", "Masida", "To drink", "물을 마셔요.", "I drink water.", "Verbs"],
    ["보다", "Boda", "To see or watch", "영화를 봐요.", "I watch a movie.", "Verbs"],
    ["듣다", "Deutda", "To listen", "음악을 들어요.", "I listen to music.", "Verbs"],
    ["읽다", "Ikda", "To read", "책을 읽어요.", "I read a book.", "Verbs"],
    ["쓰다", "Sseuda", "To write", "편지를 써요.", "I write a letter.", "Verbs"],
    ["자다", "Jada", "To sleep", "밤에 자요.", "I sleep at night.", "Verbs"],
    ["일어나다", "Ireonada", "To wake up", "아침에 일어나요.", "I wake up in the morning.", "Verbs"],

    // Useful adjectives
    ["크다", "Keuda", "To be big", "집이 커요.", "The house is big.", "Adjectives"],
    ["작다", "Jakda", "To be small", "가방이 작아요.", "The bag is small.", "Adjectives"],
    ["좋다", "Jota", "To be good", "음식이 좋아요.", "The food is good.", "Adjectives"],
    ["싫다", "Silta", "To dislike", "저는 추운 날씨가 싫어요.", "I dislike cold weather.", "Adjectives"],
    ["예쁘다", "Yeppeuda", "To be pretty", "꽃이 예뻐요.", "The flower is pretty.", "Adjectives"],
    ["빠르다", "Ppareuda", "To be fast", "차가 빨라요.", "The car is fast.", "Adjectives"],
    ["느리다", "Neurida", "To be slow", "인터넷이 느려요.", "The internet is slow.", "Adjectives"],
    ["쉽다", "Swipda", "To be easy", "한국어가 쉬워요.", "Korean is easy.", "Adjectives"],
    ["어렵다", "Eoryeopda", "To be difficult", "시험이 어려워요.", "The exam is difficult.", "Adjectives"],
    ["재미있다", "Jaemiitda", "To be interesting or fun", "이 책은 재미있어요.", "This book is interesting.", "Adjectives"]
];

everydayVocabulary5.forEach(word => {
    vocabularyWords.push({
        korean: word[0],
        romanization: word[1],
        meaning: word[2],
        example: word[3],
        exampleMeaning: word[4],
        category: word[5]
    });
});

const everydayVocabulary6 = [
    // Time
    ["시간", "Sigan", "Time", "시간이 없어요.", "I don't have time.", "Time"],
    ["오늘", "Oneul", "Today", "오늘은 바빠요.", "I am busy today.", "Time"],
    ["어제", "Eoje", "Yesterday", "어제 영화를 봤어요.", "I watched a movie yesterday.", "Time"],
    ["내일", "Naeil", "Tomorrow", "내일 만나요.", "See you tomorrow.", "Time"],
    ["아침", "Achim", "Morning", "아침에 운동해요.", "I exercise in the morning.", "Time"],
    ["점심", "Jeomsim", "Lunch or noon", "점심을 먹어요.", "I eat lunch.", "Time"],
    ["저녁", "Jeonyeok", "Evening or dinner", "저녁에 공부해요.", "I study in the evening.", "Time"],
    ["밤", "Bam", "Night", "밤에 책을 읽어요.", "I read a book at night.", "Time"],
    ["주말", "Jumal", "Weekend", "주말에 쉬어요.", "I rest on the weekend.", "Time"],
    ["매일", "Maeil", "Every day", "매일 한국어를 공부해요.", "I study Korean every day.", "Time"],

    // Daily routine
    ["일어나다", "Ireonada", "To wake up", "일찍 일어나요.", "I wake up early.", "Daily Routine"],
    ["씻다", "Ssitda", "To wash", "손을 씻어요.", "I wash my hands.", "Daily Routine"],
    ["샤워하다", "Syawohada", "To take a shower", "아침에 샤워해요.", "I take a shower in the morning.", "Daily Routine"],
    ["공부하다", "Gongbuhada", "To study", "한국어를 공부해요.", "I study Korean.", "Daily Routine"],
    ["일하다", "Ilhada", "To work", "회사에서 일해요.", "I work at a company.", "Daily Routine"],
    ["운동하다", "Undonghada", "To exercise", "매일 운동해요.", "I exercise every day.", "Daily Routine"],
    ["요리하다", "Yorihada", "To cook", "집에서 요리해요.", "I cook at home.", "Daily Routine"],
    ["청소하다", "Cheongsohada", "To clean", "방을 청소해요.", "I clean my room.", "Daily Routine"],
    ["쉬다", "Swida", "To rest", "집에서 쉬어요.", "I rest at home.", "Daily Routine"],
    ["만나다", "Mannada", "To meet", "친구를 만나요.", "I meet a friend.", "Daily Routine"],

    // Technology
    ["컴퓨터", "Keompyuteo", "Computer", "컴퓨터를 사용해요.", "I use a computer.", "Technology"],
    ["휴대폰", "Hyudaepon", "Mobile phone", "휴대폰이 있어요.", "I have a mobile phone.", "Technology"],
    ["인터넷", "Inteonet", "Internet", "인터넷을 사용해요.", "I use the internet.", "Technology"],
    ["웹사이트", "Websaiteu", "Website", "웹사이트를 만들어요.", "I create a website.", "Technology"],
    ["이메일", "Imeil", "Email", "이메일을 보내요.", "I send an email.", "Technology"],
    ["사진", "Sajin", "Photo", "사진을 찍어요.", "I take a photo.", "Technology"],
    ["영상", "Yeongsang", "Video", "영상을 봐요.", "I watch a video.", "Technology"],
    ["음악", "Eumak", "Music", "음악을 들어요.", "I listen to music.", "Technology"],
    ["게임", "Geim", "Game", "게임을 해요.", "I play games.", "Technology"],
    ["비밀번호", "Bimilbeonho", "Password", "비밀번호를 입력해요.", "I enter the password.", "Technology"],

    // Useful expressions
    ["괜찮아요", "Gwaenchanayo", "It's okay", "네, 괜찮아요.", "Yes, it's okay.", "Expressions"],
    ["잠깐만요", "Jamkkanmanyo", "Just a moment", "잠깐만요, 기다리세요.", "Just a moment, please wait.", "Expressions"],
    ["천천히", "Cheoncheonhi", "Slowly", "천천히 말해 주세요.", "Please speak slowly.", "Expressions"],
    ["다시", "Dasi", "Again", "다시 말해 주세요.", "Please say it again.", "Expressions"],
    ["정말", "Jeongmal", "Really", "정말 좋아요.", "I really like it.", "Expressions"],
    ["물론", "Mullon", "Of course", "물론 할 수 있어요.", "Of course, I can do it.", "Expressions"],
    ["아마", "Ama", "Maybe or probably", "아마 내일 올 거예요.", "Maybe they will come tomorrow.", "Expressions"],
    ["함께", "Hamkke", "Together", "함께 공부해요.", "Let's study together.", "Expressions"],
    ["혼자", "Honja", "Alone", "혼자 가요.", "I go alone.", "Expressions"],
    ["왜", "Wae", "Why", "왜 웃어요?", "Why are you laughing?", "Expressions"],

    // More useful words
    ["친구", "Chingu", "Friend", "친구와 이야기해요.", "I talk with a friend.", "People"],
    ["이름", "Ireum", "Name", "이름이 뭐예요?", "What is your name?", "People"],
    ["질문", "Jilmun", "Question", "질문이 있어요.", "I have a question.", "Study"],
    ["대답", "Daedap", "Answer", "대답을 해 주세요.", "Please give an answer.", "Study"],
    ["문제", "Munje", "Problem or question", "문제를 풀어요.", "I solve a problem.", "Study"],
    ["약속", "Yaksok", "Appointment or promise", "내일 약속이 있어요.", "I have an appointment tomorrow.", "Daily Life"],
    ["선물", "Seonmul", "Gift", "선물을 샀어요.", "I bought a gift.", "Daily Life"],
    ["돈", "Don", "Money", "돈이 필요해요.", "I need money.", "Daily Life"],
    ["도움", "Doum", "Help", "도움이 필요해요.", "I need help.", "Daily Life"],
    ["꿈", "Kkum", "Dream", "제 꿈은 선생님이에요.", "My dream is to become a teacher.", "Daily Life"]
];

everydayVocabulary6.forEach(word => {
    vocabularyWords.push({
        korean: word[0],
        romanization: word[1],
        meaning: word[2],
        example: word[3],
        exampleMeaning: word[4],
        category: word[5]
    });
});

const colorVocabulary = [
    ["빨간색", "ppalgansaek", "Red", "빨간색 사과예요.", "It is a red apple.", "Colors"],
    ["파란색", "paransaek", "Blue", "파란 하늘이에요.", "It is a blue sky.", "Colors"],
    ["노란색", "noransaek", "Yellow", "노란 꽃이에요.", "It is a yellow flower.", "Colors"],
    ["초록색", "choroksaek", "Green", "초록색 나무예요.", "It is a green tree.", "Colors"],
    ["검은색", "geomeunsaek", "Black", "검은색 가방이에요.", "It is a black bag.", "Colors"],
    ["흰색", "huinsaek", "White", "흰색 고양이예요.", "It is a white cat.", "Colors"],
    ["분홍색", "bunhongsaek", "Pink", "분홍색 꽃이에요.", "It is a pink flower.", "Colors"],
    ["보라색", "borasaek", "Purple", "보라색 옷이에요.", "It is purple clothing.", "Colors"],
    ["주황색", "juhwangsaek", "Orange", "주황색 오렌지예요.", "It is an orange.", "Colors"],
    ["갈색", "galsaek", "Brown", "갈색 강아지예요.", "It is a brown puppy.", "Colors"],
    ["회색", "hoesaek", "Gray", "회색 자동차예요.", "It is a gray car.", "Colors"],
    ["금색", "geumsaek", "Gold", "금색 반지예요.", "It is a gold ring.", "Colors"],
    ["은색", "eunsaek", "Silver", "은색 시계예요.", "It is a silver watch.", "Colors"],
    ["하늘색", "haneulsaek", "Sky blue", "하늘색 셔츠예요.", "It is a sky-blue shirt.", "Colors"],
    ["남색", "namsaek", "Navy blue", "남색 바지예요.", "It is navy-blue pants.", "Colors"]
];

colorVocabulary.forEach(item => {
    vocabularyWords.push({
        korean: item[0],
        romanization: item[1],
        meaning: item[2],
        example: item[3],
        exampleMeaning: item[4],
        category: item[5]
    });
});
