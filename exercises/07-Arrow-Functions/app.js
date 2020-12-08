
  // const rapid = (str) => {for (let index = 0; index < str.length; index++)
  //  {
    //   if(index != 'a' || index != "e" || index != "i" || index != "o" || index != "u" ) 
//{
     //   const element = str[index];
     //  }
      
      //return element.toUpperCase(); 
      
  // }

  const rapid =(str) =>
  {
    var textoSinVocal ="";
    for (let i =0; i < str.length; i++)
    {
        if(!esVocal(str[i]))
        {
            textoSinVocal += str[i];
        }
    }
        return textoSinVocal.toUpperCase();

  }

  function esVocal (char)
  {
      return 'aeiou'.includes(char);
  }
   
   
   
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));


