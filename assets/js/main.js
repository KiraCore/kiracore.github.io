// ONSCROLL COLOR CHANGE NAVBAR START
$(window).on("scroll", function() {
	if($(window).scrollTop() > 0) {
	  	$("#header").addClass("active");
	} else {
	  	//remove the background property so it comes transparent again (defined in your css)
	 	$("#header").removeClass("active");
	}
});
// ONSCROLL COLOR CHANGE NAVBAR CLOSE


// TABLET & MOBILE VIEW NAVBAR START
function openNav() {
  document.getElementById("myNav").style.height = "100%";
};

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
};
// TABLET & MOBILE VIEW NAVBAR CLOSE


// ACCORDIAN START
$("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
    $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
});

$('#accordion').on('shown.bs.collapse', function () {
  
  var card = $(this).find('.show');
  
  $('html, body').animate({
        scrollTop: card.offset().top -110
  }, 10);
  
});
// ACCORDIAN CLOSE


// SMOOTH SCROLING START
const makeNavLinksSmooth = ( ) => {
  const navLinks = document.querySelectorAll( '.nav-link, .smoothBtn' );

  for ( let n in navLinks ) {
    if ( navLinks.hasOwnProperty( n ) ) {
      navLinks[ n ].addEventListener( 'click', e => {
        e.preventDefault( );
        document.querySelector( navLinks[ n ].hash )
          .scrollIntoView( {
            behavior: "smooth"
          } );
      } );
    }
  }
}

const spyScrolling = ( ) => {
  const sections = document.querySelectorAll( '.hero-bg' );

  window.onscroll = ( ) => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for ( let s in sections )
      if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
        const id = sections[ s ].id;
        document.querySelector( '.active' ).classList.remove( 'active' );
        document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
      }
  } 
}

makeNavLinksSmooth( );
spyScrolling( );
// SMOOTH SCROLING CLOSE