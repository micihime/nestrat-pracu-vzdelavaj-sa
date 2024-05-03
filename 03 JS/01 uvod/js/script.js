//VIDEO 6
(function($) {
    //chcem, aby aj ked ma clovek vypnuty JS, tak aby videl cely obsah - mohli by byt skryte od zaciatku v CSS, no pouzivatel by to nikdy nevidel
    //  preto najprv necham vsetko zobrazene a skryjem to az na zaciatku JS file
    let list = $('.zoznam');
    list.find('dd').hide(); //alternativa: $('zoznam dd').hide();

    list.find('dt').on('click', function(){
       $(this) //ten konkretny dt element, na kt som klikla
        .next().slideToggle() //nasledovny element, element, kt po nom nasleduje - surodenec
        .siblings('dd').slideUp(); //vsetkych ostatnych surodencov zatvorit
    });
    
    //event bubbling 
    //- ked kliknem na DT, klikam aj na jeho deti a aj na jeho rodicov
    //- kliknem na DT, ale klikla som vlastne aj  na vnutorny SPAN, ktory oznami rodicovi, ze bolo nan kliknute
    list.find('span').on('click', function(event) { //kazda event funkcia so sebou posiela event object
        event.stopPropagation(); //funkcia stopPropagation() zastavuje event bubbling - SPAN neoznami rodicovi, ze nan bolo kliknute a tak funkcia otvarania a zatvarania nebude fungovat
    });

    //traverzovanie po DOM
    domTraversingExample(list);
})(jQuery);

function domTraversingExample(list)
{
    console.log('vsetky deti zoznamu')
    console.log(list.children());
    
    console.log('vsetky deti zoznamu, kt su zaroven DT')
    console.log(list.children('dt'));
    
    console.log('1. dieta zoznamu typu DT')
    console.log(list.children('dt').first());

    console.log('1. dieta zoznamu - pouzitim pseudo selektora')
    console.log(list.children(':first-child'));
    
    console.log('3. dieta zoznamu - pouzitim pseudo selektora')
    console.log(list.children(':nth-child(3)'));
    
    console.log('nasledujuci element po 3. dietati zoznamu - pouzitim pseudo selektora')
    console.log(list.children(':nth-child(3)').next());
    
    console.log('3. dieta zoznamu - pouzitim indexu (JS cisluje od nuly!!! avsak CSS cisluje od 1)')
    console.log(list.children().eq(2));
    
    console.log('predosly element po 3. dietati zoznamu, pouzitim indexu')
    console.log(list.children().eq(2).prev());
        
    console.log('vsetky predosle element po 3. dietati zoznamu, pouzitim indexu')
    console.log(list.children().eq(2).prevAll());
    
    console.log('vsetky nasledujuce elementy po 3. dietati zoznamu - pouzitim pseudo selektora')
    console.log(list.children(':nth-child(3)').nextAll());
    
    console.log('vsetky nasledujuce elementy po 3. dietati zoznamu, pouzitim pseudo selektora, ktore su DT')
    console.log(list.children(':nth-child(3)').nextAll('dt'));
    
    console.log('vsetci surodenci 1. dietata zoznamu pouzitim pseudo selektora')
    console.log(list.children(':first-child').siblings());

    console.log('vsetci surodenci 1. dietata zoznamu pouzitim pseudo selektora, kt su zaroven DT')
    console.log(list.children(':first-child').siblings('dt'));

    console.log('priamy rodic zoznamu')
    console.log(list.parent());

    console.log('vsetci rodicia zoznamu')
    console.log(list.parents());
}

//VIDEO 5
/*
(function() {
    alert('ahoj!');
})(); //self-invoking anonymous function

(function(meno) {
    alert('ahoj '+ meno);
})('Belzebub'); //self-invoking anonymous function

(function($) {
    console.log("ak by sme mali viacero kniznic, ktore obsahuju dolar ako funkciu/keyword, takymto sposobom viem obalit kod, kde pouzivam dolar a ten dolar odkazuje na jQuery objekt");
})(jQuery); //skripty poukladane za sebou, poskladaju sa do 1 suboru/1 guce a mozu sa bit - $ z jQuery kniznice sa moze byt s tym, co $ znamena v dalsej kniznici
*/

//VIDEO 4
/*
$(function () { //$(document).ready(function () {
    console.log("Bud dam na zaciatok JS suboru document ready alebo uvediem skripty v HTML subore na zaver, pred ukoncovaci BODY tag.");
});
*/

//VIDEO 4
/*
let fadeOut = $('.fade-out'),
    styleObj = { 
        position: 'relative', 
        background: 'blue',
        zIndex: 10 //v CSS property z-index, v JS sa pise camel case - plati pre vsetky viacslovne CSS properties
    },
    siteHeight = $('body').height(),
    animationDuration = 3000;

fadeOut.css(styleObj);
fadeOut.on('mouseenter', function() {
    this.animate({ top: siteHeight }, animationDuration).fadeOut();
});
*/

//VIDEO 3
/*
//predvyrobene animacie - menia css vlastnosti
$('.fade-out').fadeOut();
$('.fade-out').fadeIn();
$('.fade-out').fadeToggle(); //zisti si hodnotu a urobi opak
$('.fade-out').fadeToggle();
//mozem si urobit vlastnu animaciu
$('.slow-hide').animate({ width: 1000 });
$('.post-title').animate({ width: 1000 }, 3000);

//najlepsie je ulozit si element do premennej, aby ho jQuery hladal v DOM len 1x
let fadeOut = $('.fade-out');
fadeOut.css({ position: 'relative', background: 'blue' });
fadeOut.animate({ top: 1000 }, 3000);
*/

//VIDEO 2
/*
$('.post-title').css({
    background: 'blue',
    color: 'yellow'
});

let obj = {
    background: 'yellow',
    color: 'blue'
}
$('#wow-element').css(obj);

console.log($('#wow-element').css('background'));

$('.slow-hide').text(); //getter
$('.slow-hide').text('wooooooooooooooooow'); //setter
*/

//VIDEO 1
/*
$('.post-title').hide();
$('.post-title').show();
$('h2').hide();
$('#wow-element').hide();
$('#wow-element h2').hide();

$('.slow-hide').hide(5000);
$('.fade-out').fadeOut(5000);
$('.fade-out').fadeIn(5000);

$('.post-title').hide().fadeIn(); //method chaining
*/