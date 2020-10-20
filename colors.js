
  var Links ={

    //jquery using (same with under)


    // links : document.querySelectorAll('a'),//해결못함, 밑에서 변수 안만들고 이렇게 하고 싶은데...
     setColor : function(color){
       $('a').css('color',color);

    //   var links = document.querySelectorAll('a');
    //   for(let i=0;i<links.length;i++){
    //     links[i].style.color=color;
    //   }
        }

      /*for(let i =0 ;i<links.length;i++){
        document.write(links[i]+"sss"+"<br>")
      }*/


  }

  var Active={
    setColor : function (color){
      var active = document.querySelector('#active');
      active.style.color = color;

    }
  }


  var Body={
    setColor : function (color){
      document.querySelector('body').style.color =color;
      //$('body').css('color',color);  //with jquery
    },
    setBGColor : function (color){
      document.querySelector('body').style.backgroundColor =color;
      //$('body').css('backgroundColor',color);  //with jquery
    }

  }

  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value ==='night'){
      Body.setBGColor('black');
      Body.setColor('white');
      self.value='day';
      Links.setColor('white');
      Active.setColor('lightcoral');
    } else{
      Body.setBGColor('white');
      Body.setColor('black');
      self.value='night';
      Links.setColor('black');
      Active.setColor('red');
    }
  }
