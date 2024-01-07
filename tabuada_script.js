function Tabuada() {
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if (num.value.length == 0 || end.value.length == 0){
      window.alert(`[ERRO] por favor coloque seus dados sesejados`)
    } else{
    var n = Number(num.value)
    var e = Number(end.value)
    var x = 0
    var r = ''
    var resultado = window.document.getElementById('resultado')
    resultado.innerHTML = `a tabuada do ${n} é <br>`
    do{
        r = n*x
        resultado.innerHTML += `${x} x ${n} = ${r} <br>`
        x++
    }  while (x <= e)
  }
}



function colorBody() {

  var back = document.getElementById("color")
  back = color.style.background = "rgb(239,235,228)"


  var title = document.getElementById("titles")
  title = titles.style.color = "black"

  var square = document.getElementsByClassName("quadro")
  square = quadro.style.background = "rgb(48, 48, 48)"
  square = quadro.style.color = "white"
  

  var close = document.getElementById("closer")
  close = closer.style.display = "none"
  
  var Open =document.getElementById("Open")
  Open = Open.style.display = "flex"
  
}

function Bodycolor(){

  var bnt = document.getElementById("open")
  bnt = Open.style.display = "none"

  var title = document.getElementById("titles")
  title = titles.style.color = "white"

  var back = document.getElementById("color")
  back = color.style.background = "rgb(48, 48, 48)"


  var square = document.getElementsByClassName("quadro")
  square = quadro.style.background = " rgb(239,235,228)"
  square = quadro.style.color = "black"


  var close = document.getElementById("closer")
  close = closer.style.display = "flex"
}
