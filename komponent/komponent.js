// cooper s - All callback functions must be unique or they will interfere with other callbacks

var Komponent = function(){

  this.insertKomponent = function(div, komp_callback ){
    // listen for clicks in div
    console.log("komponent div: ", div);

   // div.html("HELLO WORLD!");

    var internalClickHandler = function(e) {
      alert("foo",e);
      console.log("foo",e);
      div.html("I WAS CLICKED!");
      komp_callback();
    }

    div.click(internalClickHandler)
  }
}