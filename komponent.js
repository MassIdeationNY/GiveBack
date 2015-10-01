// cooper s - All callback functions must be unique or they will interfere with other callbacks
/*
var Komponent = function(){
  console.log("Komponent");

 
  this.insertComponent = function(div, komp_callback ){
    console.log('insert component: ' , this  );

    var komp_click_callback = komp_callback;
    div.click(onKompClicked());

/*
    komp_click_callback = komp_callback;

    setupKompClickHandling();

    function setupKompClickHandling() {
        //console.log('setuuClickHandling' );
      $(this).click(function(e){ onKompClicked(e,  komp_click_callback ); return false; }); };
    }

    var onKompClicked = function(evt, callback ){
      console.log("Do we have a callback list: ", $.Callbacks());
      console.log("komponent clicked: " , evt.target );
      var hello_html = '<div>Hello There!!</div';
      //callback(hello_html);     
    }

}
*/

var Komponent = function(){
  this.insertComponent = function(div, komp_callback ){
    // listen for clicks in div
    console.log("div",div)

    div.html("HELLO WORLD!")

    var internalClickHandler =function(e){
      console.log("foo",e)
      div.html("I WAS CLICKED!")
      komp_callback()
    }

    div.click(internalClickHandler)
  }
}