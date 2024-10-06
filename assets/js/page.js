let bugunYil = prompt('Hangi yıldayız?');
let bugunAy = prompt('Kaçıncı aydayız?');
let bugunGun = prompt('Gün olarak hangi tarihteyiz?');

let dogumYili = prompt("Lütfen doğum yılınızı girin:");
let dogumAyi = prompt("Lütfen doğum ayınızı girin:");
let dogumGunu = prompt("Lütfen doğum gününüzü girin:");

let yasYil = bugunYil - dogumYili;
let yasAy = Math.abs(bugunAy - dogumAyi);
let yasGun = Math.abs(bugunGun - dogumGunu);

alert("Tam yaşınız: " + yasYil + " yıl, " + yasAy + " ay, " + yasGun + " gün.");

