function ber(broj1, broj2, broj3){
    if(broj1 == broj2 || broj1 == broj3 || broj2 == broj3){
        return alert(true);
    }else{
        return alert(false);
    }
}
ber(18, 25, "25");


function adem(ay, yil= null) {
    if (ay === 2 && !yil) {
      yil = prompt("Enter a year to check if it's a leap year:");
    }



    if (ay === 2) {
      if (yil % 4 === 0 && (yil % 100 !== 0 || yil % 400 === 0)) {
        return 29;
      } else {
        return 28;
      }
    } else if ([4, 6, 9, 11].includes(ay)) {
      return 30;
    } else {
      return 31;
    }
  }
  const ay = parseInt(prompt("Enter a month number (1-12):"));
  console.log(`The month ${ay} has ${adem(ay)} days.`);