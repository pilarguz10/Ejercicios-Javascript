
   const rapid = (str) => {for (let index = 0; index < str.length; index++)
    {
       if(index != 'a' || index != "e" || index != "i" || index != "o" || index != "u" ) 
       {
        const element = str[index];
       }
      
      return element.toUpperCase(); 
      //prueba
   }
   
   
   
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));


