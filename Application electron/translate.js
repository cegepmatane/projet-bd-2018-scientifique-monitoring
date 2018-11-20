this.Traducteur = function(detailBouee)
{
var language;


function initialiser()
{
var locale;

if (window.navigator.languages) {
    locale = window.navigator.languages[0];
} else {
    locale = window.navigator.userLanguage || window.navigator.language;
}

   // console.log("Locale: " + locale);
    locale = locale.split("-");
    language = locale[0];
    //console.log("Language: " + language);
}

this.retournerLangue = function()
{
    return language;
}

    

this.traduire = function(language, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";
    console.log("traduction de la page en " + language);
  
        script.onload = function(){
            //callback();
        }
    
    if(detailBouee){
        script.src = "../traduction/" + language + ".js";
        document.getElementsByTagName("head")[0].appendChild(script); 
    }
    else 
    {   
    script.src = "traduction/" + language + ".js";
    document.getElementsByTagName("head")[0].appendChild(script);
    }
}
    initialiser();
}