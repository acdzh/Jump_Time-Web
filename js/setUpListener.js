const pToRgb = s => `rgb(${s.split(' ').map(c => parseFloat(c)*255.0).join(',')})`;
const devColorTableString = () => {
t = isRandomColor ? temp.randomColor : temp.timeColor;
$('timeColorTable').innerHTML = `<b>${isRandomColor ? 'Random' : 'Normal'}</b> Color Table:<br>
Random color change time: ${randomColorTime / 1000}s,<br>
Back: <span style="color: ${t.back}">${t.back}</span>,<br>
Back ${isBackColorShow ? 'is' : 'is <b>NOT</b>'} shown;<br>
Hou 0: <span style="color: ${t.h[0]}">${t.h[0]}</span>,<br>
Hou 1: <span style="color: ${t.h[1]}">${t.h[1]}</span>,<br>
Hous ${isHColorSame ? 'is' : 'is <b>NOT</b>'} the same;<br>
Min 0: <span style="color: ${t.m[0]}">${t.m[0]}</span>,<br>
Min 1: <span style="color: ${t.m[1]}">${t.m[1]}</span>,<br>
Mins ${isMColorSame ? 'is' : 'is <b>NOT</b>'} the same;<br>
Sec 0: <span style="color: ${t.s[0]}">${t.s[0]}</span>,<br>
Sec 1: <span style="color: ${t.s[1]}">${t.s[1]}</span>,<br>
Secs ${isSColorSame ? 'is' : 'is <b>NOT</b>'} the same;<br>
Col 0: <span style="color: ${t.colon[0]}">${t.colon[0]}</span>,<br>
Col 1: <span style="color: ${t.colon[1]}">${t.colon[1]}</span>,<br>
Col mode is <b>${colonColorMode}</b>;
`;
}
wallpaperPropertyListener = {
  applyUserProperties : function(props) {
    if (props._backgroundColor) {
      temp.backgroundColorRGB = pToRgb(props._backgroundColor.value);
      document.body.style = `background-color: ${temp.backgroundColorRGB}`;
      if (isDebugMode) $('backgroundColor').innerHTML = `BackgroundColor: ${temp.backgroundColorRGB}`;
    }
    if (props._minJumpTimes) {
      temp.minJumpTimes = props._minJumpTimes.value;
      [minJumpTimes, maxJumpTimes] = temp.minJumpTimes < temp.maxJumpTimes
        ? [temp.minJumpTimes, temp.maxJumpTimes]
        : [temp.maxJumpTimes, temp.minJumpTimes];
      if (isDebugMode) $('jumpTimes').innerHTML = `Ball Jumps Times Range: ${minJumpTimes} - ${maxJumpTimes}`;
    }
    if (props._maxJumpTimes) {
      temp.maxJumpTimes = props._maxJumpTimes.value;
      [minJumpTimes, maxJumpTimes] = temp.minJumpTimes < temp.maxJumpTimes
        ? [temp.minJumpTimes, temp.maxJumpTimes]
        : [temp.maxJumpTimes, temp.minJumpTimes];
      if (isDebugMode) $('jumpTimes').innerHTML = `Ball Jumps Times Range: ${minJumpTimes} - ${maxJumpTimes}`;
    }
    if (props._backColor) {
      temp.timeColor.back = pToRgb(props._backColor.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._c0Color) {
      temp.timeColor.colon[0] = pToRgb(props._c0Color.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._c1Color) {
      temp.timeColor.colon[1] = pToRgb(props._c1Color.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._h0Color) {
      temp.timeColor.h[0] = pToRgb(props._h0Color.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._h1Color) {
      temp.timeColor.h[1] = pToRgb(props._h1Color.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._m0Color) {
      temp.timeColor.m[0] = pToRgb(props._m0Color.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._m1Color) {
      temp.timeColor.m[1] = pToRgb(props._m1Color.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._s0Color) {
      temp.timeColor.s[0] = pToRgb(props._s0Color.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._s1Color) {
      temp.timeColor.s[1] = pToRgb(props._s1Color.value);
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._randomColor) {
      isRandomColor = props._randomColor.value;
      if (isRandomColor){
        getRandomColorTable();
        SetUpColors();
        randomColorInterval = setInterval(()=>{
          getRandomColorTable();
          SetUpColors();
          if (isDebugMode) devColorTableString();
        }, randomColorTime);
      }
      else {
        clearInterval(randomColorInterval);
        SetUpColors();
      };
      if (isDebugMode) devColorTableString();
    }
    if (props._randomColorTime) {
      randomColorTime = 1000 * props._randomColorTime.value;
      if (isRandomColor) {
        clearInterval(randomColorInterval);
        randomColorInterval = setInterval(()=>{
          getRandomColorTable();
          SetUpColors();
          if (isDebugMode) devColorTableString();
        }, randomColorTime);
      }
      if (isDebugMode) devColorTableString();
    }
    if (props._sameCColor) {
      colonColorMode = props._sameCColor.value;
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._sameHColor) {
      isHColorSame = props._sameHColor.value;
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._sameMColor) {
      isMColorSame = props._sameMColor.value;
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._sameSColor) {
      isSColorSame = props._sameSColor.value;
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }
    if (props._showBackColor) {
      isBackColorShow = props._showBackColor.value;
      SetUpColors();
      if (isDebugMode) devColorTableString();
    }

    if (props._debugMode) {
      isDebugMode = props._debugMode.value;
      for (i of $('debug0').children) i.style.display = isDebugMode ? 'block' : 'none';
      if (isDebugMode) {
        $('backgroundColor').innerHTML = `BackgroundColor: ${temp.backgroundColorRGB}`;
        $('jumpTimes').innerHTML = `Ball Jumps Times Range: ${minJumpTimes} - ${maxJumpTimes}`;
        devColorTableString();
      }
    }
  }
}