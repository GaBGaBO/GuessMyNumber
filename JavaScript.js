document.querySelector(`body`).style.backgroundColor = `aqua`;

document.querySelector(`.again`).style.cursor = `pointer`;
document.querySelector(`.guess`).style.cursor = `pointer`;

// 2 ვიწყებთ ამით 

const number2 = Math.trunc(Math.random() * 20 + 1); //და რეალურად ამის საშუალებით ციფრები დაიბეჭდება რენდომად :) 1 დან 20 ამდე დამრგვალებუალდ
//და რეალურად რენდომად დაიბეჭდება კითხვითი ნიშნის ქვეშ
// დამრგვალებული  ციფრები 0 დან 20 ამდე :) 
// document.querySelector(`.guess`).textContent = number2;
//აქ კი ვირჩევთ კითხვითი ნიშანს და შინაარს შევუცვლით და მივუთითებთ
// ამ რენდომ ციფრებზე და ყოველ რილოუდზე დაიბეჭდება განსხხვავებული
// ციფრები
// პროექტის ბოლოს კი ეს უნდა გავაქროთ რადგან არ იყოს ხილვადი


//ვქმნით რაღაც ცვლადს და ვუთითებთ რომ ქულების თავდაპირველი სახე იქნება
// 4 ვიწყებთ ამით
let StartingScore = 20;
//და შემდეგ უნდა ჩავიდეთ ქვევით სადაც ჩვენ გვიწერია თუ მეტი იქნება
// ციფრი რენდომ ციფრეზე მეტიაო, თუ ნაკლები იქნება რენდომ ციფრეზე ეს
// არის ნაკლებიო და სწორედ მაგ დროს უნდა დავბეჭდოთ რომთითო თითო
// დააკლდეს არასწორ ვარიანტზე


//highscore variable;
let highscore = 0;
//შემდეგ უკვე სადაც ვიგებთ თამაშს, ანუ სადაც ემთხვევა ჩვენთვის
// მოცემული ციფრი, რენდომ ციფრს, მანდ ვიყენებთ იფ ბლოკში

// 1 ვიწყებთ ამით 
//როდესაც დავაწვებით ჩექ ღილაკს, გადაეცეს მეორე პარამეტრად ფუქნცია
// რომელიც შეასრულებს შემდეგ სამუშაოს, რომ ყოველი ციფრი რომელსაც
// შიგნით დავწერთ ის გადაცემულ იქნას კონსოლში :)
document.querySelector(`.check`).addEventListener(
  `click`, function(){
   const number = Number(document.querySelector(`.number`).value )
   console.log(number, typeof number);
 
   // 3 ვიწყებთ ამით 

   //რეალურად აქ დაიწერა ამდაგვარი ლოგიკა რომ თუ ინფათი არ იქნება 
  //  ანუს საერთოდ თუ არაფერი არ დაიბეჭდება დაიბეჭდოს არ არის ციფრი
    if(!number ){
 document.querySelector(`.guessing`).textContent = `No Number⛔!`;
 //სხვაშემთხვევაში თუ ინფათის ციფრი გაუტოლდება  კითხვითი ნიშნის ციფრს
//  (რომელიც ამოდის რენდომად),დაიბეჭდოს რომ ეს არის სწორი ციფრი

    }else if(number === number2){
document.querySelector(`.guessing`).textContent = `🎉Correct Number!`;
document.querySelector(`.guess`).textContent = number2;

document.querySelector(`body`).style.backgroundColor = `green`;
document.querySelector(`.guess`).style.width = `200px`;

//ანუ გვიწერია რეალურად რომ, იმ შემთხვევაში თუ ჩვენთვის მოცემული
// სთართინგ სქოური რომელიც უდრის 20ს, მეტი იქნება ჰაიგსქორზე ანუ 0 ზე
// დაიბეჭდოს რომ ეს სქორი უდრის სთართინგსქორს, და შემდეგ ამას
// ავსახავთ ელემენტებში
if(StartingScore  > highscore){
  highscore = StartingScore;
  document.querySelector(`.hgsc`).textContent = highscore; 
}
// თუ ინფათის ციფრი მეტი იქნება რენდომის ციფრზე დაბეჭდოს რომ ეს არის მეტი
    }else if(number > number2){
      if(StartingScore > 0){
      document.querySelector(`.guessing`).textContent = `📉Too high!`
 //და გამოვიყენებთ ზემოთ დაწერილ ცვლადს ანუ ეს თავიდან იქნება 20
  // მერე გვიწერია რომ 20ს გამოაკლდება 1ი, და ეხა რაშემთხვევაში,
  // თუ ციფრი იქნება მეტი მაშინ კონტენტი შეიცვლება და
  // დააკლდება თითო თით
  StartingScore--; 
  document.querySelector(`span`).textContent = StartingScore;
      }else{
        document.querySelector(`.guessing`).textContent = `You Lost The Game 😞`
        document.querySelector(`.guessing`).style.color = `black`;
      }
     
 // თუ ინფათის ციფრი ნაკლები იქნება რენდომის ციფრზე დაბეჭდოს რომ ეს არის ნაკლები
 //და აქ ისივე როგორც ზევით გვიწერია რომ თუ ჩვენი სთართინგსქოური რომელიც არის 20
//  ვქმნით ახალ იფს და ვწერთ რომ ეს თუ მეტი იქნება 0 ზე და ყველას
//  ჩავსვამთ შიგნით :) და სხვა შემთხვევაში როცა უკვე ჩამოვა 0ზე
// დაბეჭდოს მესიჯად გესინგში რომ შენ წააგე თამაში :)
    }else if(number < number2){
      if(StartingScore > 1){
        document.querySelector(`.guessing`).textContent = `📈Too Low!`;
        StartingScore--;
        document.querySelector(`span`).textContent = StartingScore;
      }
      else{
        document.querySelector(`.guessing`).textContent = `You Lost The Game 😞 `
        document.querySelector(`.guessing`).style.color = `black`;

      }
     

    }
    
  }
  )

  //რეალურად ამით ვაკეთებთ ეგეინ ღილაკის ფუნქციას, ანუ ეს რას ნიშნავს
  // ეხლა, იმ შემთხვევაში თუ ჩვენ ავდგებით და დავაწვებით ეგეინ ღილაკს
  // ყველაფერი  უნდა გადაიტვირთოს და დაიბეჭდოს თავიდან
  // ამიტომაც ყველაფერს ვაძლევთ თავდაპირველ სახეს, როგორც იყო თავიდან
document.querySelector(`.again`).addEventListener(
  `click`, function(){
    document.querySelector(`body`).style.backgroundColor = `aqua`;
    document.querySelector(`.guess`).style.width = `150px`;
    document.querySelector(`.guessing`).textContent = `Start Guessing...`;
    document.querySelector(`.number`).value = ``;
    document.querySelector(`span`).textContent = 20;
    document.querySelector(`.guess`).textContent = "?";
  }
)


//გეგმა თუ როგორ უნდა ავაწყოთ ეს თამაში;

// 1) რითაც ვიწყებთ არის ვაკეთებთ ჩექ ღილაკზე მანიპულაციას, ანუ რა ციფრიც არ უნდა ჩაიწეროს შიგ იმას დაააკონსოლებს :),
// 2)უკვე ვაკეთებთ რენდომ ციფრებს 20 ამდე და შემდეგ უვკე ამას ელემენტის სახით გამოვაჩენთ უვკე ? ის ნაცვლად   ყველა
// რილოუდზე დაიბეჭდება ახალი ციფრი
// 3) შემდეგ უკვევ ვწერთ if ბლოკში, თუ არ იქნება ინფათში რამე, ელემენტად მესიჯად რაც გამოდის, იქ დაიბეჭდოს რომ არ არის ციფრი
// შემდეგ უკვე თუ გაუტოლდება ინფათის და   კითხვით ნიშანში დაბეჭდილი ციფრები ერთმანეთს დაბეჭდოს რომ ეს არის სწორი ციფრი
// თუ მეტი იქნება დაბეჭდოს ეს არის მეტი ციფრი, თუ ნაკლები იქნება ეს არის ნაკლები 

//შემდეგ უკვე გვინდა რომ ქულებს დააკლდეს თითო თითო, ეს იმას ნიშნავს რომ როცა იქნება არასწორი მოაკლდეს ერთი, ამიტომ
// მანამდე რაღაც ცვლადში ვწერთ თავდაპირველ სახეს ამ ქულის იქნება 20, და 2 ვარიანტში სადაც გვაქ მეტია ციფრი და ნაკლებია ციფრი იქ ვწერთ
// mag: score --; mere elementad gamovsaxaavt .textContent = score; ესე ვაკეთებთ რეალურად ორივეში;
// მერე უკვე გვინდა რომ როცა ჩამოვა ქულები 0 ზე ანუ აღარ გვექნება შანსი რა მოხდეს ? მაგ შემთხვევაში დავბეჭდავთ if( highscore > 1)ზე და
// ყველა ორივე სცენარის კოდს და დაკლებასთან ერთად გადავიტანთ იქ

//მერე უკვე გავაკეთებთ გამარჯვებისას რა მოხდეს და ისევ როცა ქულები ემთხვევა ერთმანეთს იქ ბადიზე ვახდენთ მანიპულაციას და თუ გვინდა
// ასევე ვადიდებთ ციფრი სადაც წერია ? ნიშანი იმასაც

//მერე უკვე ეგეინ ღილაკსსაც ვაკეთებთ და მაგ დროს უკვე რეალურად ყველაფრის რილოუდს გავაკეთებთ და როცა დავარილოუდებთ
// ყველაფერს უნდა ქონდეს პირვანდელი სახე :) 

//ბოლოს მერე უკვე ავდგებით და დავწერთ ჰაიგსქორსაც რომ თავიდან უდრის 0ს და გამარჯვების ბლოკში იფ ით დავწერთ რომ თუ
// startingscore anu 20 racaa ra score is > iqneba am scoreze mashin gautoldes ertmanets da mere elementis saxit gamovsaxavt  

