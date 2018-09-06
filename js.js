// Move down in Y axis every interval
// if bullets from invaders are in same position as player you lose
// if they move down and y is same as y of player
// invaders move in x axis

function returnRandom(move)
{
    return Math.floor((Math.random() * move) + 10)
}
var aPosTop = 10;
var aLeft;
function dropAttackers()
{
    aPosTop += 10;
    //console.log(aPosTop);
    aLeft = returnRandom(40);
    var attacker = document.getElementById("attackers");
    //console.log(attacker);
    attacker.style.top = aPosTop+"px";
    attacker.style.left = aLeft+"px";
}
setInterval(dropAttackers,1000);
var bulletCounter = 0;
function shoot()
{
    bulletCounter++;
    var bullet = document.createElement("div");
    bullet.innerHTML = "*";
    bullet.setAttribute("id","bullet"+bulletCounter);
    bullet.setAttribute("style", "position:absolute; bottom: 40px");
    document.getElementsByTagName('body')[0].appendChild(bullet);
    bullet.style.left = pLeft+75+"px";
    
    setInterval(function() { shootUP(bullet); }, 50);
}
var bulletBottom = 40;
function shootUP(currentBullet)
{
    var bullet = currentBullet;
    bulletBottom += 2;
    bullet.style.bottom = bulletBottom+"px";
}
var pLeft = 10;
function movePlayer(e)
{
    var player = document.getElementById("gun");
    if(window.event)
    {
        if(e.key=='d')
        {
            pLeft+=3;
            player.style.left = pLeft+"px"
        }
        if(e.key=='a')
        {
            pLeft-=3;
            player.style.left = pLeft+"px"
        }
        if(pLeft<-30)
        {
            pLeft = -30;
        }
        else if(pLeft>130)
        {
            pLeft = 130;
        }
    }
}