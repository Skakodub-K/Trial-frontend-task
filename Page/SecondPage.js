function CreateHeader(){
    let BackRef =$('<a class="BackRefHead"> Back </a>');
        LogoRef = $('<img class="ref_logo" alt="RefLogo">');
        Header = $('<div class="Header"></div>');
    LogoRef.attr("src","./image/logoMain.svg"); 
    BackRef.attr("href","./first.html");
    Header.append(BackRef,LogoRef);
    LogoRef.wrap("<a class='LogoRefHead' href='./first.html'></a>");
    
    return Header; 
}
function MenuBar(Obj){
    let name_img = "./image/"+ Obj.image;
        LevBack = $('<button class="LevBack"></button>');
        MenuCard = $('<div class="MenuCard"></div>');
        LevNext = $('<button class="LevNext"></button>');
        Menu_bar = $('<div class="menu_bar"></div>');
        ImageMain = $("<img class='card_menu' alt='CardMenu'>");
        Title = $("<p class='TitleText'></p>");
    MenuCard.append(ImageMain);
    ImageMain.attr("src",name_img);
    MenuCard.append(Title);
    Title.text(Obj.name);
    Menu_bar.append(LevBack, MenuCard,LevNext);
    return Menu_bar;
}
function FindCountParent(id){
    var count = 0;
    for(var i = 0;i<global.inputArray.length;i++){
        if(id === global.inputArray[i].parent){
            count++;
        }
    }
    return count;
} 
function MainContent(Obj){
   
    let DivAllCards = $('<div class="CardsParent"></div>')
    for(var i = 0; i < global.inputArray.length;i++){
        if(Obj.id === global.inputArray[i].parent){
            let name_img = "./image/"+ global.inputArray[i].image;
                imageParent = $('<img class="imageParent">');
                TextName = $('<p class="Name"></p>');
                TextPost = $('<p class="Post"></p>');
                textNP = $('<div class="textNP"></div>');
                divParent = $('<div class="parent_cards"></div>');
                divIconRef = $('<div class="IconREF"></div>');
                Icon = $('<div class="Icon"></div>');
                texticon = $('<p class="IconText"></p>');
            imageParent.attr({
                'src': name_img,
                'alt': global.inputArray[i].name
            }); 
            divIconRef.append(imageParent);
            var count = FindCountParent(global.inputArray[i].id);
            if(count !== 0 ){
                texticon.text(count);
                Icon.append(texticon);
                divIconRef.append(Icon);
                texticon.wrap('<strong></strong>') 
            }
              
            TextName.text(global.inputArray[i].name);
            TextPost.text(global.inputArray[i].post);
            textNP.append(TextName,TextPost);
            divParent.append(divIconRef,textNP);
            DivAllCards.append(divParent);
            imageParent.wrap("<a href='./three.html'></a>");
        }
    }
    return DivAllCards;  
}
function CrossingThreePage() {
  $('.CardsParent a').click(function(event) {
    event.preventDefault();
    localStorage.setItem('HelpContentThreePage', $(this).children().attr('alt'));
    url = './three.html';
    location.replace(url);
  });
}

function CrossingHeaderPage() {
  $('.Header a').click(function(event) {
    event.preventDefault();
    url = './first.html';
    window.location.href = url;
  });
}

function NextButton(event) {
  event.preventDefault();
    let cont = localStorage.getItem('HelpContentSecondPage');
        fl = false;
    for(var i = 0; i < global.inputArray.length;i++){
      if(cont === global.inputArray[i].name){
        for(var j = i+1; j < global.inputArray.length;j++){
          if(global.inputArray[j].parent === global.inputArray[i].parent){
            localStorage.setItem('HelpContentSecondPage',global.inputArray[j].name);
            url = './second.html';
            location.replace(url);
            fl = true;
            break;
          }
        }
        if(fl){
          break;
        }
        else{
          for(var j = 0;j < i;j++){
            if(global.inputArray[j].parent === global.inputArray[i].parent){
              localStorage.setItem('HelpContentSecondPage', global.inputArray[j].name);
              url = './second.html';
              location.replace(url);
              fl = true;
              break;
            }
          }
        }
        if(fl){
          break;
        }
      }
    }
  }
function LastButton(event) {
  event.preventDefault();
    let cont = localStorage.getItem('HelpContentSecondPage');
        fl = false;
    for(var i = 0; i < global.inputArray.length;i++){
      if(cont === global.inputArray[i].name){
        for(var j = i-1; j >= 0;j--){
          if(global.inputArray[j].parent === global.inputArray[i].parent){
            localStorage.setItem('HelpContentSecondPage', global.inputArray[j].name);
            url = './second.html';
            location.replace(url);
            fl = true;
            break;
          }
        }
        if(fl){
          break;
        }
        else{
          for(var j = global.inputArray.length-1;j >= i;j--){
            if(global.inputArray[j].parent === global.inputArray[i].parent){
              localStorage.setItem('HelpContentSecondPage', global.inputArray[j].name);
              url = './second.html';
              location.replace(url);
              fl = true;
              break;
            }
          }
        }
        if(fl){
          break;
        }
      }
    }
}
$(function(){
    
    let Objy;
        cont = localStorage.getItem('HelpContentSecondPage');
    
    for(var i = 0; i < global.inputArray.length;i++){
        if(cont === global.inputArray[i].name){
            Objy = global.inputArray[i];
            break;
        }
    }

    let divs = $('<div></div>');
        centerLine = $('<div class="CenterLine"></div>');
    divs.append(CreateHeader(), MenuBar(Objy), centerLine, MainContent(Objy));
    $('#container').append(divs);
    CrossingThreePage();
    CrossingHeaderPage();
    let bN = document.querySelector('.LevNext');
        bB = document.querySelector('.LevBack');

    bN.addEventListener('click', NextButton);
    bB.addEventListener('click',LastButton);
});