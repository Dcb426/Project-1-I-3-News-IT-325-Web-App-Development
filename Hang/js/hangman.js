$(document).ready(function() {
    var fiveMinutes = 60 * 5;
    display = document.querySelector('#time');
    function pauseGame() {
      if (!gamePaused) {
        game = clearTimeout(game);
        gamePaused = true;
      } else if (gamePaused) {
        game = setTimeout(gameLoop, 1000 / 30);
        gamePaused = false;
      }
    }
    player1();
    player2();
    startTimer(fiveMinutes, display);
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
  function player1(){
    var hangman = { 
    alphabetArray: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    wordList: [],
    assetsLoaded: 0,
    theWord: "", 
    guessWord: [], 
    newGuessWord: "",
    theCanvas: $("#hangmancanvas").get(0),
    numWrong:0,
    gameOver: false,
    imageCounter: 0, 
    imageInterval: null,
    hangmanSheet: new Image(),
    score: 0,
    danceMusic: new Audio(),
    guessedLetters:[] 
}
hangman.hangmanSheet.addEventListener("load",incrementAssetsLoaded,false); 
hangman.hangmanSheet.src = "spriteSheet.png";
hangman.danceMusic.src = "MegaHyperUltrastorm.mp3"; 
hangman.danceMusic.addEventListener('canplaythrough',incrementAssetsLoaded,false); 
hangman.danceMusic.load();
var totalScore = 0;
var ctx = hangman.theCanvas.getContext("2d");
//var danceMusicAudio = "lol"+getAudioExtension(hangman.danceMusic);
  $.ajax({ 
    type: 'GET', 
    url: "wordlist.txt", 
    success: function( data ) { 
      hangman.wordList = data.split("\r\n"); 
      if (hangman.wordList.length === 1) {  //no \r\n so assume \n alone is linebreak 
        hangman.wordList = data.split("\n"); 
      } 
      incrementAssetsLoaded(); 
    }, 
    dataType: "text" 
  });
  function incrementAssetsLoaded() { 
  hangman.assetsLoaded += 1; 
  if(hangman.assetsLoaded == 3){ 
    startGame();
  } 
  }
  function startGame(){ 
    createGuessWord();
    drawCanvas();
    enableButtons();
    addKeyListener(); 
  }
  function doWin(){ 
     hangman.imageCounter = 0;
     hangman.danceMusic.currentTime=0;
     updateWinScore(); 
    hangman.imageInterval = setInterval(drawWinScreen,120); 
  }
  function drawWinScreen(){ 
    clearCanvas(ctx,hangman.theCanvas); 
    if(hangman.imageCounter >= 85){ 
      clearInterval(hangman.imageInterval); 
      setTimeout(clearAndRestartGame,3000); 
    } 
    ctx.drawImage(hangman.hangmanSheet,164*hangman.imageCounter,0,164,264,120,48,164,264); 
    drawText("CORRECT!!",20,375,"bold 35px serif","RED"); 
    hangman.imageCounter++;
    hangman.danceMusic.play(); 
  }
  function clearAndRestartGame(){ 
    hangman.danceMusic.pause();
    doGameOver(); 
  }
  function doGameOver(){ 
    hangman.numWrong = 0; 
    hangman.gameOver = false;
    hangman.guessedLetters = new Array(); 
    startGame(); 
  }
  function createGuessWord(){ 
    hangman.guessWord = new Array(); 
    var randomWord = Math.floor(Math.random() * hangman.wordList.length); 
    hangman.theWord = hangman.wordList[randomWord]; 
    //Global variable for player two
    if(hangman.theWord.length < 3 || hangman.theWord.length > 5){ 
      createGuessWord(); 
    } 
    //alert(hangman.theWord);

    console.log(hangman.theWord); 
    for(var i = 0; i < hangman.theWord.length; i++){ 
        if(hangman.theWord.charAt(i) == "-"){ 
          hangman.guessWord[i] ="-"; 
        }else{ 
          hangman.guessWord[i]="?"; 
        } 
    } 
    hangman.newGuessWord = hangman.guessWord.join(""); 
  }
  function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
  }
  
  function drawGallows(){
    ctx.moveTo(120,305);
    ctx.lineTo(280,305);
    ctx.moveTo(260,305);
    ctx.lineTo(260,70);
    ctx.lineTo(180,70);
    ctx.lineTo(180,96);
    ctx.stroke();
  
  }
  function drawHead(){
      ctx.beginPath();
    ctx.arc(180,120,23,0,Math.PI*2,false);
    ctx.closePath();
    ctx.stroke();
    }
  function drawBody(){
        ctx.moveTo(180,143);
      ctx.lineTo(180,248);
      ctx.stroke();
   }
   function drawArm1(){
  ctx.moveTo(180,175);
  ctx.lineTo(142,167);
  ctx.stroke();
  }
  function drawArm2(){
    ctx.moveTo(180,175);
      ctx.lineTo(218,167);
      ctx.stroke();
   }
    function drawLeg1(){
    ctx.moveTo(180,245);
    ctx.lineTo(145,270);
    ctx.stroke();
  }
   function drawLeg2(){
    ctx.moveTo(180,245);
    ctx.lineTo(215,270);
    ctx.stroke();
  }
  function drawHangman(drawNum){ 
  switch(drawNum) 
  { 
     case 0: 
      drawGallows(); 
     break; 
     case 1: 
      drawHead(); 
     break; 
     case 2: 
      drawBody(); 
     break; 
     case 3: 
      drawArm1(); 
     break; 
     case 4: 
      drawArm2(); 
     break; 
     case 5: 
      drawLeg1(); 
     break; 
     case 6: 
      drawLeg2(); 
     break; 
     } 
  }
  function drawText(word,textX,textY,font,color){ 
    ctx.font = font; 
    ctx.fillStyle = color 
    ctx.fillText(word, textX, textY); 
  }
  function drawCanvas()
  { 
    clearCanvas(ctx,hangman.theCanvas); 
    ctx.font = "bold 35px serif"; 
    ctx.fillStyle = "#0000FF"; 
    ctx.fillText(hangman.newGuessWord,50,27);

    for(var i=0;i<=hangman.numWrong;i++){ 
    drawHangman(i); 
    } 
    if(hangman.gameOver){
      //alert("The correct word was\n "+hangman.theWord) 
      disableButtons();
      removeKeyListener();
      drawText("Wrong!!",20,225, "bold 35px serif","red"); 
      drawText(hangman.theWord, 20, 300, "bold 35px serif", "#0000FF"); 
      updateLostScore(); 
      setTimeout(doGameOver,1500); 
    }else{ 
        drawText(hangman.newGuessWord,50,27,"bold 35px serif","#0000FF"); 
    }
    drawText("Games Won " + getWinScore(), 40, 350, "bold 20px serif", "#0000FF");
    drawText("Games Lost " + getLostScore(), 220, 350, "bold 20px serif", "#FF0000"); 
  }

  for (var i = 0; i < hangman.alphabetArray.length; i++) { 
    $('<button/>', { 
      text: hangman.alphabetArray[i], 
      id: 'btn_' + hangman.alphabetArray[i], 
      width: "20px", 
      click: function (event) { 
        checkGuess(event, false); 
      } 
    }).appendTo("#buttondiv"); 
  }
  function disableButtons(){ 
  $("#buttondiv button").attr("disabled","disabled"); 
  } 
  disableButtons();
  function enableButtons(){ 
  $("#buttondiv button").removeAttr("disabled"); 
  }
  function addKeyListener(){ 
    $(document).on("keyup",function(event){ 
        checkGuess(event,true); 
    }); 
  }
  function removeKeyListener(){ 
    $(document).off("keyup"); 
  }
  function checkGuess(event,isKeyPress){ 
  var currentButton; 
  var theLetter;
  var RegEx = /[a-zA-Z]/;
  var correctGuess = false;
  
  if(isKeyPress)
  {
    currentButton = "btn_" + String.fromCharCode(event.keyCode); 
    theLetter = $("#" + currentButton).text().toLowerCase(); 
    $("#" + currentButton).attr("disabled", "disabled"); 
    if (!RegEx.test(theLetter)) { 
        return; 
    }
    } else { 
        currentButton = $(event.target); 
        $(currentButton).attr("disabled", "disabled"); 
        theLetter = $(currentButton).text().toLowerCase(); 
    }
      if(hangman.guessedLetters.indexOf(theLetter) >= 0){ 
      return; 
      }else{ 
          hangman.guessedLetters.push(theLetter); 
      } 
    for(var i =0; i < hangman.theWord.length; i++){ 
      if(hangman.theWord.charAt(i) == theLetter){ 
        hangman.guessWord[i] = theLetter; 
        correctGuess = true; 
      } 
    } 
    hangman.newGuessWord = hangman.guessWord.join("");    
  
  if(!correctGuess){ 
    hangman.numWrong++ 
  } 
  if(hangman.newGuessWord == hangman.theWord){ 
    disableButtons();
    removeKeyListener();
    setTimeout(doWin,1500);
    //update score
  } 
  if(hangman.numWrong == 6){ 
    hangman.gameOver = true;
    //change later
  } 
  drawCanvas(); 
  }
  function getAudioExtension(audio) { 
    var extension = ""; 
    if (audio.canPlayType("audio/ogg") == "probably" || audio.canPlayType("audio/ogg") == "maybe") {  
        extension = ".ogg"; 
    } else if (audio.canPlayType("audio/mp3") == "probably" || audio.canPlayType("audio/mp3") == "maybe") { 
        extension = ".mp3"; 
    } 
    return extension; 
  }
  function setWinScore(){ 
      if(!localStorage.numWins){ 
          localStorage.numWins = 0; 
      } 
  } 
  setWinScore();
  function updateWinScore(){ 
    localStorage.numWins = Number(localStorage.numWins)+1; 
  }
  function getWinScore(){ 
    if(localStorage.numWins){ 
        return localStorage.numWins; 
    } 
  }
  function setLostScore(){ 
    if(!localStorage.numLost){ 
        localStorage.numLost = 0; 
    } 
  } 
  setLostScore();
  function updateLostScore(){ 
    localStorage.numLost = Number(localStorage.numLost)+1; 
  }
  function getLostScore(){ 
    if(localStorage.numLost){ 
        return localStorage.numLost; 
    } 
  }
}
    function player2(){
    var hangman2 = { 
    alphabetArray2: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    wordList2: [],
    assetsLoaded2: 0,
    theWord2: "", 
    guessWord2: [], 
    newGuessWord2: "",
    theCanvas2: $("#hangmancanvas2").get(0),
    numWrong2:0,
    gameOver2: false,
    imageCounter2: 0, 
    imageInterval2: null,
    hangmanSheet2: new Image(),
    score2: 0,
    danceMusic2: new Audio(),
    guessedLetters2:[] 
}
hangman2.hangmanSheet2.addEventListener("load",incrementAssetsLoaded2,false); 
hangman2.hangmanSheet2.src = "spriteSheet.png";
hangman2.danceMusic2.src = "MegaHyperUltrastorm.mp3"; 
hangman2.danceMusic2.addEventListener('canplaythrough',incrementAssetsLoaded2,false); 
hangman2.danceMusic2.load();
var totalScore2 = 0;
var ctx2 = hangman2.theCanvas2.getContext("2d");
//var danceMusicAudio = "lol"+getAudioExtension(hangman.danceMusic);
  $.ajax({ 
    type: 'GET', 
    url: "wordlist.txt", 
    success: function( data ) { 
      hangman2.wordList2 = data.split("\r\n"); 
      if (hangman2.wordList2.length === 1) {  //no \r\n so assume \n alone is linebreak 
        hangman2.wordList2 = data.split("\n"); 
      } 
      incrementAssetsLoaded2(); 
    }, 
    dataType: "text" 
  });
  function incrementAssetsLoaded2() { 
  hangman2.assetsLoaded2 += 1; 
  if(hangman2.assetsLoaded2 == 3){ 
    startGame2();
  } 
  }
  function startGame2(){ 
    createGuessWord2();
    drawCanvas2();
    enableButtons2();
    addKeyListener2(); 
  }
  function doWin2(){ 
     hangman.imageCounter2 = 0;
     hangman2.danceMusic2.currentTime2=0;
     updateWinScore2(); 
    hangman2.imageInterval2 = setInterval(drawWinScreen2,120); 
  }
  function drawWinScreen2(){ 
    clearCanvas2(ctx2,hangman2.theCanvas2); 
    if(hangman2.imageCounter2 >= 85){ 
      clearInterval(hangman2.imageInterval2); 
      setTimeout(clearAndRestartGame2,3000); 
    } 
    ctx2.drawImage(hangman2.hangmanSheet2,164*hangman2.imageCounter2,0,164,264,120,48,164,264); 
    drawText2("CORRECT!!",20,375,"bold 35px serif","RED"); 
    hangman2.imageCounter2++;
    hangman2.danceMusic2.play(); 
  }
  function clearAndRestartGame2(){ 
    hangman2.danceMusic2.pause();
    doGameOver2(); 
  }
  function doGameOver2(){ 
    hangman2.numWrong2 = 0; 
    hangman2.gameOver2 = false;
    hangman2.guessedLetters2 = new Array(); 
    startGame2(); 
  }
  function createGuessWord2(){ 
    hangman2.guessWord2 = new Array(); 
    var randomWord2 = Math.floor(Math.random() * hangman2.wordList2.length); 
    hangman2.theWord2 = hangman2.wordList2[randomWord2]; 
    //Global variable for player two
    if(hangman2.theWord2.length < 3 || hangman2.theWord2.length > 5){ 
      createGuessWord2(); 
    } 
    //alert(hangman.theWord);

    console.log(hangman2.theWord2); 
    for(var i = 0; i < hangman2.theWord2.length; i++){ 
        if(hangman2.theWord2.charAt(i) == "-"){ 
          hangman2.guessWord2[i] ="-"; 
        }else{ 
          hangman2.guessWord2[i]="?"; 
        } 
    } 
    hangman2.newGuessWord2 = hangman2.guessWord2.join(""); 
  }
  function clearCanvas2(context2, canvas2) {
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    var w2 = canvas2.width;
    canvas2.width = 1;
    canvas2.width = w2;
  }
  
  function drawGallows2(){
    ctx2.moveTo(120,305);
    ctx2.lineTo(280,305);
    ctx2.moveTo(260,305);
    ctx2.lineTo(260,70);
    ctx2.lineTo(180,70);
    ctx2.lineTo(180,96);
    ctx2.stroke();
  
  }
  function drawHead2(){
      ctx2.beginPath();
    ctx2.arc(180,120,23,0,Math.PI*2,false);
    ctx2.closePath();
    ctx2.stroke();
    }
  function drawBody2(){
        ctx2.moveTo(180,143);
      ctx2.lineTo(180,248);
      ctx2.stroke();
   }
   function drawArm12(){
  ctx2.moveTo(180,175);
  ctx2.lineTo(142,167);
  ctx2.stroke();
  }
  function drawArm22(){
    ctx2.moveTo(180,175);
      ctx2.lineTo(218,167);
      ctx2.stroke();
   }
    function drawLeg12(){
    ctx2.moveTo(180,245);
    ctx2.lineTo(145,270);
    ctx2.stroke();
  }
   function drawLeg22(){
    ctx2.moveTo(180,245);
    ctx2.lineTo(215,270);
    ctx2.stroke();
  }
  function drawHangman2(drawNum2){ 
  switch(drawNum2) 
  { 
     case 0: 
      drawGallows2(); 
     break; 
     case 1: 
      drawHead2(); 
     break; 
     case 2: 
      drawBody2(); 
     break; 
     case 3: 
      drawArm12(); 
     break; 
     case 4: 
      drawArm22(); 
     break; 
     case 5: 
      drawLeg12(); 
     break; 
     case 6: 
      drawLeg22(); 
     break; 
     } 
  }
  function drawText2(word2,textX2,textY2,font2,color2){ 
    ctx2.font = font2; 
    ctx2.fillStyle = color2 
    ctx2.fillText(word2, textX2, textY2); 
  }
  function drawCanvas2()
  { 
    clearCanvas2(ctx2,hangman2.theCanvas2); 
    ctx2.font = "bold 35px serif"; 
    ctx2.fillStyle = "#0000FF"; 
    ctx2.fillText(hangman2.newGuessWord2,50,27);

    for(var i=0;i<=hangman2.numWrong2;i++){ 
    drawHangman2(i); 
    } 
    if(hangman2.gameOver2){
      //alert("The correct word was\n "+hangman.theWord) 
      disableButtons2();
      removeKeyListener2();
      drawText2("Wrong!!",20,225, "bold 35px serif","red"); 
      drawText2(hangman2.theWord2, 20, 300, "bold 35px serif", "#0000FF"); 
      updateLostScore2(); 
      setTimeout(doGameOver2,1500); 
    }else{ 
        drawText2(hangman2.newGuessWord2,50,27,"bold 35px serif","#0000FF"); 
    }
    drawText2("Games Won " + getWinScore2(), 40, 350, "bold 20px serif", "#0000FF");
    drawText2("Games Lost " + getLostScore2(), 220, 350, "bold 20px serif", "#FF0000"); 
  }

  for (var i = 0; i < hangman2.alphabetArray2.length; i++) { 
    $('<button/>', { 
      text: hangman2.alphabetArray2[i], 
      id: 'btn_' + hangman2.alphabetArray2[i], 
      width: "20px", 
      click: function (event) { 
        checkGuess2(event, false); 
      } 
    }).appendTo("#buttondiv2"); 
  }
  function disableButtons2(){ 
  $("#buttondiv2 button").attr("disabled","disabled"); 
  } 
  disableButtons2();
  function enableButtons2(){ 
  $("#buttondiv2 button").removeAttr("disabled"); 
  }
  function addKeyListener2(){ 
    $(document).on("keyup",function(event){ 
        checkGuess2(event,true); 
    }); 
  }
  function removeKeyListener2(){ 
    $(document).off("keyup"); 
  }
  function checkGuess2(event2,isKeyPress2){ 
  var currentButton2; 
  var theLetter2;
  var RegEx2 = /[a-zA-Z]/;
  var correctGuess2 = false;
  if(isKeyPress2 = true)
  {
    currentButton2 = "btn_" + String.fromCharCode(event.keyCode); 
    theLetter2 = $("#" + currentButton2).text().toLowerCase(); 
    $("#" + currentButton2).attr("disabled", "disabled"); 
    if (!RegEx2.test(theLetter2)) { 
        return; 
    }
    } else { 
        currentButton2 = $(event.target); 
        $(currentButton2).attr("disabled", "disabled"); 
        theLetter2 = $(currentButton2).text().toLowerCase(); 
    } 
    for(var i =0; i < hangman2.theWord2.length; i++){ 
      if(hangman2.theWord2.charAt(i) == theLetter2){ 
        hangman2.guessWord2[i] = theLetter2; 
        correctGuess2 = true; 
      } 
    } 
    hangman2.newGuessWord2 = hangman2.guessWord2.join(""); 
  if(hangman2.guessedLetters2.indexOf(theLetter2) >= 0){ 
      return; 
  }else{ 
      hangman2.guessedLetters2.push(theLetter2); 
  }   
  
  if(!correctGuess2){ 
    hangman2.numWrong2++ 
  } 
  if(hangman2.newGuessWord2 == hangman2.theWord2){ 
    disableButtons2();
    removeKeyListener2();
    setTimeout(doWin2,1500);
    //update score
  } 
  if(hangman2.numWrong2 == 6){ 
    hangman2.gameOver2 = true;
    //change later
  } 
  drawCanvas2(); 
  }
  function getAudioExtension(audio) { 
    var extension = ""; 
    if (audio.canPlayType("audio/ogg") == "probably" || audio.canPlayType("audio/ogg") == "maybe") {  
        extension = ".ogg"; 
    } else if (audio.canPlayType("audio/mp3") == "probably" || audio.canPlayType("audio/mp3") == "maybe") { 
        extension = ".mp3"; 
    } 
    return extension; 
  }
  function setWinScore2(){ 
      if(!localStorage.numWins){ 
          localStorage.numWins = 0; 
      } 
  } 
  setWinScore2();
  function updateWinScore2(){ 
    localStorage.numWins = Number(localStorage.numWins)+1; 
  }
  function getWinScore2(){ 
    if(localStorage.numWins){ 
        return localStorage.numWins; 
    } 
  }
  function setLostScore2(){ 
    if(!localStorage.numLost){ 
        localStorage.numLost = 0; 
    } 
  } 
  setLostScore2();
  function updateLostScore2(){ 
    localStorage.numLost = Number(localStorage.numLost)+1; 
  }
  function getLostScore2(){ 
    if(localStorage.numLost){ 
        return localStorage.numLost; 
    } 
  }
}
});