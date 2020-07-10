class sideStripe {
  constructor() {
    this.praefix            = 'ss_';
    this.transitionTime     = '0.3s';
    this.transitionEase     = 'ease-in-out';
    this.styles             = '#'+this.praefix+'_outer'+'{position:fixed;right:-10px;top:30%;}';
    this.styles            += '#'+this.praefix+'_outer .'+this.praefix+'_elm'+'{margin-bottom: 5px;background-size:70%;background-position:50%;background-repeat:no-repeat;cursor:pointer;position:relative;}';
    this.styles            += '#'+this.praefix+'_outer .'+this.praefix+'_elm:hover'+'{margin-bottom: 5px;background-size:60%;background-position:50%;background-repeat:no-repeat;cursor:pointer;animation: wiggleElmFrames linear 2s;animation-iteration-count: infinite;transform-origin: 50% 50%;-webkit-animation: wiggleElmFrames linear 2s;-webkit-animation-iteration-count: infinite;-webkit-transform-origin: 50% 50%;-moz-animation: wiggleElmFrames linear 2s;-moz-animation-iteration-count: infinite;-moz-transform-origin: 50% 50%;-o-animation: wiggleElmFrames linear 2s;-o-animation-iteration-count: infinite;-o-transform-origin: 50% 50%;-ms-animation: wiggleElmFrames linear 2s;-ms-animation-iteration-count: infinite;-ms-transform-origin: 50% 50%;}';
    this.styles            += '#'+this.praefix+'_popUp'+'{position:fixed;text-align:center;width:600px;height:750px;left:50%;top:-100%;margin-left:-350px;border:5px #fff solid;z-index:1000;background-color:#fff;transition:all '+this.transitionTime+' '+this.transitionEase+';-webkit-transition:all '+this.transitionTime+' '+this.transitionEase+';-ms-transition:all '+this.transitionTime+' '+this.transitionEase+';-o-transition:all '+this.transitionTime+' '+this.transitionEase+';-moz-transition:all '+this.transitionTime+' '+this.transitionEase+';}';
    this.styles            += '#'+this.praefix+'_popUp .'+this.praefix+'_headimg'+'{width:100%;height:250px;background-size:cover;background-position:0% 0%;background-repeat:no-repeat;}';
    this.styles            += '#'+this.praefix+'_popUp h3'+'{text-align:center; font-size:28}';
    this.styles            += '#'+this.praefix+'_popUp button'+'{padding:10px;font-size:20px;margin:0px auto 25px auto;border:3px #fff solid;text-transform:uppercase;border-radius:8px;cursor:pointer;}';
    this.styles            += '#'+this.praefix+'_popUp p'+'{text-align:center;width:70%;margin:25px auto;}';
    this.styles            += '#'+this.praefix+'_popUp .'+this.praefix+'_line'+'{width:80%;margin:0px auto;height:2px;}';
    this.styles            += '#'+this.praefix+'_popUp.active'+'{top:50px;transition:all '+this.transitionTime+' '+this.transitionEase+';-webkit-transition:all '+this.transitionTime+' '+this.transitionEase+';-ms-transition:all '+this.transitionTime+' '+this.transitionEase+';-o-transition:all '+this.transitionTime+' '+this.transitionEase+';-moz-transition:all '+this.transitionTime+' '+this.transitionEase+';}';
    this.styles            += '@keyframes wiggleElmFrames{0% {transform:  translate(0px,0px)  ;}13% {transform:  translate(-10px,0px)  ;}24% {transform:  translate(-5px,0px)  ;}36% {transform:  translate(-10px,0px)  ;}48% {transform:  translate(0px,0px)  ;}100% {transform:  translate(0px,0px)  ;}}@-moz-keyframes wiggleElmFrames{0% {-moz-transform:  translate(0px,0px)  ;}13% {-moz-transform:  translate(-10px,0px)  ;}24% {-moz-transform:  translate(-5px,0px)  ;}36% {-moz-transform:  translate(-10px,0px)  ;}48% {-moz-transform:  translate(0px,0px)  ;}100% {-moz-transform:  translate(0px,0px)  ;}}@-webkit-keyframes wiggleElmFrames {0% {-webkit-transform:  translate(0px,0px)  ;}13% {-webkit-transform:  translate(-10px,0px)  ;}24% {-webkit-transform:  translate(-5px,0px)  ;}36% {-webkit-transform:  translate(-10px,0px)  ;}48% {-webkit-transform:  translate(0px,0px)  ;}100% {-webkit-transform:  translate(0px,0px)  ;}}@-o-keyframes wiggleElmFrames {0% {-o-transform:  translate(0px,0px)  ;}13% {-o-transform:  translate(-10px,0px)  ;}24% {-o-transform:  translate(-5px,0px)  ;}36% {-o-transform:  translate(-10px,0px)  ;}48% {-o-transform:  translate(0px,0px)  ;}100% {-o-transform:  translate(0px,0px)  ;}}@-ms-keyframes wiggleElmFrames {0% {-ms-transform:  translate(0px,0px)  ;}13% {-ms-transform:  translate(-10px,0px)  ;}24% {-ms-transform:  translate(-5px,0px)  ;}36% {-ms-transform:  translate(-10px,0px)  ;}48% {-ms-transform:  translate(0px,0px)  ;}100% {-ms-transform:  translate(0px,0px)  ;}}';
    this.target             = 'body';
    this.elmInfos           = new Array();
    this.popUpInfos         = {};
    //BuildCSS
    $('head').append('<style type="text/css">'+this.styles+'</style>');
  }
  init(target) {
    this.target = target;
    if($(target).find('#'+this.praefix+'_outer').length<=0) $(target).append('<div id="'+this.praefix+'_outer"></div>');
    $('body').append('<div id="'+this.praefix+'_popUp"><div class="'+this.praefix+'_headimg"></div><h3></h3><div class="'+this.praefix+'_line"></div><p></p><button></button></div>');
  }
  buildElm(icon,img,highlightcolor,headtxt,bodytxt,btntxt,inlinecss) {
    $('#'+this.praefix+'_outer').append('<div data-stripenr="'+this.elmInfos.length+'" class="'+this.praefix+'_elm" style="'+inlinecss+';background-image:url('+icon+')"></div>');
    this.elmInfos.push({headline:headtxt,text:bodytxt,color:highlightcolor,btntext:btntxt});
  }
   buildElmInfo(icon,img,highlightcolor,headtxt,bodytxt,btntxt,inlinecss) {
    $('#'+this.praefix+'_outer').append('<div data-stripenr="'+this.elmInfos.length+'" class="'+this.praefix+'_elm" style="'+inlinecss+';background-image:url('+icon+')"></div>');
    this.elmInfos.push({headline:headtxt,text:bodytxt,color:highlightcolor,btntext:btntxt});
  }
  showPopUp(fireObj) {
    var thisRef = this;
    $('#'+this.praefix+'_popUp .'+this.praefix+'_headimg').css('background-image','url(img/Pop-Up-Info.jpg');
    $('#'+this.praefix+'_popUp h3').html(this.elmInfos[$(fireObj).attr('data-stripenr')].headline).css('color',this.elmInfos[$(fireObj).attr('data-stripenr')].color);
    $('#'+this.praefix+'_popUp p').html(this.elmInfos[$(fireObj).attr('data-stripenr')].text);
    $('#'+this.praefix+'_popUp .'+this.praefix+'_line').css('background-color',this.elmInfos[$(fireObj).attr('data-stripenr')].color);
    $('#'+this.praefix+'_popUp button').html(this.elmInfos[$(fireObj).attr('data-stripenr')].btntext).css('border-color',this.elmInfos[$(fireObj).attr('data-stripenr')].color).css('color',this.elmInfos[$(fireObj).attr('data-stripenr')].color);
    $('#'+this.praefix+'_popUp').css('border-color',this.elmInfos[$(fireObj).attr('data-stripenr')].color);
    setTimeout(function() {$('#'+thisRef.praefix+'_popUp').addClass('active');},100);
  }
  customPopUp(icon,img,highlightcolor,headtxt,bodytxt,btntxt,inlinecss) {
    var thisRef = this;
    $('#'+this.praefix+'_popUp .'+this.praefix+'_headimg').css('background-image','url(img/Pop-Up-Moos.jpg');
    $('#'+this.praefix+'_popUp h3').html(headtxt).css('color',highlightcolor);
    $('#'+this.praefix+'_popUp p').html(bodytxt);
    $('#'+this.praefix+'_popUp .'+this.praefix+'_line').css('background-color',highlightcolor);
    $('#'+this.praefix+'_popUp button').html(btntxt).css('border-color',highlightcolor).css('color',highlightcolor);
    $('#'+this.praefix+'_popUp').css('border-color',highlightcolor);
    setTimeout(function() {$('#'+thisRef.praefix+'_popUp').addClass('active');},100);
  }
  run() {
    var thisRef = this;
    $('html').on('click',function(event) {
      $('#'+thisRef.praefix+'_popUp').removeClass('active');
    });
    $('#'+this.praefix+'_popUp button').on('click',function(event) {
      $('#'+thisRef.praefix+'_popUp').removeClass('active');
    });
    $('#'+this.praefix+'_popUp').on('click',function(event) {
      event.stopPropagation();
    });
    $('#'+this.praefix+'_outer .'+this.praefix+'_elm').on("click",function(event) {
      event.stopPropagation();
      thisRef.showPopUp($(this));
    });
  }
}

/*Init*/
var sideStripeInstance = new sideStripe();
sideStripeInstance.init('body');
//Hier Definieren:
/****************************/
sideStripeInstance.buildElm('img/icon_info.png', //IconImage
                            'img/Pop-Up-Info.jpg', //HeadImage
                            '#1e8250', //Highlight
                            '', //Headline
                            '<info_Text><greentext>Anfahrt:</greentext></br>Museum Natur pur</br>Lange Brüdergasse 3</br>99947 Bad Langensalza</br>www.museum-natur-pur.de</br></br><greentext>Öffnungszeiten:</greentext></br>Dienstag bis Freitag:  9 Uhr bis 17 Uhr</br>Samstag, Sonn- und Feiertag: 10 Uhr bis 17 Uhr</br>Für Gruppen nach Absprache.</br>Geschlossen am 1. Januar, 1. Mai, 24. Dezember und, 31. Dezember.</br></br><greentext>Eintrittspreise:</greentext></br>Regulärer Eintritt: 3,50 EUR</br>Ermäßigter Eintritt: 2,50 EUR (Kinder, Personen ab 65 Jahren, Schwerbehinderte, Studierende)</br>Familien: 7,– EUR</br>Gruppen (ab 7 Personen) pro Person: 2,50 EUR</info_Text>', //MainText
                            'Fenster schließen »', //ButtonText
                            'background-color:#1e8250;width:75px;height:75px;border-radius:8px;'); //OwnBoxStyle
sideStripeInstance.buildElm('img/icon_snapchat.png', //IconImage
                            'img/Pop-Up-Info.jpg', //HeadImage
                            '#1d8452', //Highlight
                            'Modawaos<br />Wie läuft es sich auf Moos?', //Headline
                            'Wir gehen barfuß, mit Socken und Schuhen über den Waldboden. Wir probieren es mit verbundenen Augen. Und wir beobachten und vergleichen, was passiert.', //MainText
                            'Fenster schließen »', //ButtonText
                            'background-color:#fffc00;width:75px;height:75px;border-radius:8px;'); //OwnBoxStyle
sideStripeInstance.buildElm('img/icon_instagram.png', //IconImage
                            'img/Pop-Up-Info.jpg', //HeadImage
                            '#1d8452', //Highlight
                            'Moos<br />Wie läuft es sich auf Moos?', //Headline
                            'Wir gehen barfuß, mit Socken und Schuhen über den Waldboden. Wir probieren es mit verbundenen Augen. Und wir beobachten und vergleichen, was passiert.', //MainText
                            'Fenster schließen »', //ButtonText
                            'background-color:#f00075;width:75px;height:75px;border-radius:8px;'); //OwnBoxStyle
sideStripeInstance.buildElm('img/icon_facebook.png', //IconImage
                            'img/Pop-Up-Info.jpg', //HeadImage
                            '#1d8452', //Highlight
                            'Moos<br />Wie läuft es sich auf Moos?', //Headline
                            'Wir gehen barfuß, mit Socken und Schuhen über den Waldboden. Wir probieren es mit verbundenen Augen. Und wir beobachten und vergleichen, was passiert.', //MainText
                            'Fenster schließen »', //ButtonText
                            'background-color:#1877f2;width:75px;height:75px;border-radius:8px;'); //OwnBoxStyle
/****************************/
sideStripeInstance.run();


$('.sunIcon').click(function() {
  sideStripeInstance.customPopUp('img/icon_waves.png', //IconImage
                              'img/Pop-Up-Moos.jpg', //HeadImage
                              '#F7931E', //Highlight
                              'Sonne<br/>Wo spüre ich die Sonne?', //Headline
                              'Wir springen in den Schatten und decken uns mit Zweigen zu. Erst strecken wir den nackten Bauch ins Licht und danach die geschlossenen Augen. Und wir beobachten und vergleichen, was passiert.', //MainText
                              'Fenster schließen »', //ButtonText
                              'background-color:#1677f2;width:80px;height:80px;border-radius:8px;'); //OwnBoxStyle
});
$('.berryIcon').click(function() {
  sideStripeInstance.customPopUp('img/icon_waves.png', //IconImage
                              'img/Pop-Up-Moos.jpg', //HeadImage
                              '#C1272D', //Highlight
                              'Walderdbeere<br/>Wie schmeckt die Walderdbeere?', //Headline
                              'Wir sammeln Beeren und machen einen Geschmackstest mit verbundenen Augen. Und wir beobachten und vergleichen, was passiert, wenn wir sehen, was wir essen.', //MainText
                              'Fenster schließen »', //ButtonText
                              'background-color:#1677f2;width:80px;height:80px;border-radius:8px;'); //OwnBoxStyle
});
$('.beeIcon').click(function() {
  sideStripeInstance.customPopUp('img/icon_waves.png', //IconImage
                              'img/Pop-Up-Moos.jpg', //HeadImage
                              '#E8CB05', //Highlight
                              'Waldbienen<br/>Wo finden Waldbienen ihr Zuhause?', //Headline
                              'Wir stromern durch den Wald und verstecken uns hinter Zweigen, um dem Weg der Waldbienen auf die Spur zu kommen. Und wir beobachten und vergleichen, was passiert.', //MainText
                              'Fenster schließen »', //ButtonText
                              'background-color:#1677f2;width:80px;height:80px;border-radius:8px;'); //OwnBoxStyle
});
$('.riverIcon').click(function() {
  sideStripeInstance.customPopUp('img/icon_waves.png', //IconImage
                              'img/Pop-Up-Moos.jpg', //HeadImage
                              '#2E3192', //Highlight
                              'Bachwasser<br/>Wann prickelt das Bachwasser an den Beinen?', //Headline
                              'Wir krempeln die Hosenbeine hoch und steigen an verschiedenen Stellen in den Bach. Dann lassen wir uns mit verbundenen Augen durchs Wasser führen. Und wir beobachten und vergleichen, was passiert.', //MainText
                              'Fenster schließen »', //ButtonText
                              'background-color:#1677f2;width:80px;height:80px;border-radius:8px;'); //OwnBoxStyle
});
$('.mossIcon').click(function() {
  sideStripeInstance.customPopUp('', //IconImage
                              'img/Pop-Up-Moos.jpg', //HeadImage
                              '#0094A2', //Highlight
                              'Moos<br/>Wie läuft es sich auf Moos?', //Headline
                              'Wir gehen barfuß, mit Socken und mit Schuhen über den Waldboden. Wir probieren es mit verbundenen Augen. Und wir beobachten und vergleichen, was passiert.', //MainText
                              'Fenster schließen »', //ButtonText
                              'background-color:#1677f2;width:80px;height:80px;border-radius:8px;'); //OwnBoxStyle
});
