
let star_for_of = ""; 
for (let char of "".repeat(6)) 
{
    star_for_of += char; 
    console.log(star_for_of); 
}


console.log();

for (let i = 1; i <= 6; i++) 
{
    let star_standard = ""; 
    for (let j = 1; j <= i; j++)
    {
        star_standard += ""; 
    }
    console.log(star_standard); 
}


console.log();


let i = 1; 
while (i <= 6) 
{
    let star_while = ''; 
    let j = 1; 

    while (j <= i) 
    {
        star_while += ''; 
        j++;
    }
    console.log(star_while); 
    i++; 
}