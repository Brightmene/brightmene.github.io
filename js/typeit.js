type();

setInterval(function(){ 
  new TypeIt('#typed', {
    speed: 30,
    autoStart: false
  })
  .delete();
  type();
 }, 21000);

 function type(){
  return new TypeIt('#typed', {
    speed: 50,
    autoStart: false
  })
  .type('Fullstack')
  .pause(700)
  .type(' Web Developer')
  .pause(1000)
  .delete()
  .type('I build...')
  .pause(500)
  .break() .pause(700)
  .type('Static websites')
  .pause(600)
  .delete(15)
  .type('Dynamic websites')
  .pause(600)
  .delete(16)
  .type('Progressive Web Apps')
  .pause(600)
  .delete(20)
  .type('Bots')
  .pause(600)
  .delete(4)
  .type('Secure and Scalable APIs')
  .pause(600)
  .delete(27)
  .pause(750)
  .options({speed: 50})
  .delete()
  .type('Basically I make Stuff that works on the web.');
 }