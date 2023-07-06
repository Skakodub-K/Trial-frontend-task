function CountryCards(){
    let DivAllCards=$('<div class="CardsCountrys"></div>');
    for(var i =0;i < global.inputArray.length;i++){
        if(!global.inputArray[i].hasOwnProperty('parent')){
            let ImageCountry=$('<img class="imageCountry">');
            TitleName=$('<p></p>');
            DivCard=$('<div class="country_cards"></div>');
            ImageCountry.attr({
                "src": "./image/" + global.inputArray[i].image,
                "alt" : global.inputArray[i].name 
            });
            TitleName.text(global.inputArray[i].name);
            DivCard.append(ImageCountry,TitleName);
            ImageCountry.wrap('<a href="./second.html"></a>');
            DivAllCards.append(DivCard);
        }
    }
    return DivAllCards;
}
function CrossingSecondPage(){
    let link = $('a');
  for(var i = 0; i < link.length; i++ ){
        link[i].addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.setItem('HelpContentSecondPage', $(this).parent().text());
            url = './second.html';
            location.replace(url);
    });
  }
}
  
$(function(){
    let divs = $('<div></div>');
        logoImg = $('<div class="Logo"><img class="LogoMain" src="./image/logoMain.svg" alt="Logo"></div>');
    divs.append(logoImg, CountryCards());
    $('#container').append(divs);
     CrossingSecondPage();
});