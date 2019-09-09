function SetUpColors(){
  var colorTable = isRandomColor ? temp.randomColor : temp.timeColor;
  $('style').innerHTML = `
    .timeback {
      background: ${isBackColorShow ? colorTable.back : 'rgba(0,0,0,0)'}
    }
    .timeh0 {
      background: ${colorTable.h[0]}
    }
    .timeh1 {
      background: ${isHColorSame ? colorTable.h[0] : colorTable.h[1]}
    }
    .timem0{
        background: ${colorTable.m[0]}
    }
    .timem1{
      background: ${isMColorSame ? colorTable.m[0] : colorTable.m[1]}
    }
    .times0 {
        background: ${colorTable.s[0]}
    }
    .times1 {
      background: ${isSColorSame ? colorTable.s[0] : colorTable.s[1]}
    }
    .timecolon0 {
      background: ${colonColorMode === '2' 
      ? colorTable.h[isHColorSame ? 0 : 1]
      : colorTable.colon[0]}
    }
    .timecolon1 {
      background: ${
        colonColorMode === '2' 
          ? colorTable.m[isMColorSame ? 0 : 1] 
          : colonColorMode === '1' 
            ? colorTable.colon[0] 
            : colorTable.colon[1]}
    }
  `;
}

function getRandomColorTable() {
  const rc = () => `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  temp.randomColor = {
    back: rc(),
    h: [rc(), rc()],
    m: [rc(), rc()],
    s: [rc(), rc()],
    colon: [rc(), rc()]
  }
}