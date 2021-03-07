class Question{
constructor(){

  this.input = createInput("Enter your name here");
  this.input1=createInput("Enter your answer ._.");
  this.button = createButton('submit');
  this.question=createElement('h2')
  this.greeting = createElement('h3');
  this.title = createElement('h1');
  this.option1=createElement('h3')
  this.option2=createElement('h3')
  this.option3=createElement('h3')
}

hide(){
  this.input.hide()
}

  
    display(){
     
     this. title.html("myQuiz game");
      this.title.position(160, 0);

      this.question.html(" Qn: what is the answer of : 234567+98765")
      this.question.position(60,80)

      this.option1.html("1 : 233332 ")
      this.option1.position(60,130)

      this.option2.html("2 : 253332 ")
      this.option2.position(60,170)

      this.option3.html("3 : 333332 ")
      this.option3.position(60,210)
      
     
      this. input.position(40, 300);
     this. input1.position( 300,300)

      
      this.button.position(230, 350);

     

      this.button.mousePressed(function(){
       this.input.hide();
        this.button.hide();
        this.input1.hide();
  
        contestant.name = this.input.value();
        
        contestantCount+=1;
        contestant.index=contestantCount
        contestant.update()
        contestant.updateCount(contestantCount);
        
        this.greeting.html("Hello " + contestant.name )
        this.greeting.position(130, 160)
      });
      
      

      
  
    }
  }
  