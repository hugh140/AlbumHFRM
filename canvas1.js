const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = canvas.width

const circRotatorio = new Circulo(canvas.width/3)
const circRotatorio2 = new Circulo(canvas.width/900)
circRotatorio2.color = 'rgb(152, 152, 152)'
const circInicio = new CirculosRitmo(canvas.width/3.1)
const circMedio = new CirculosRitmo(canvas.width/4.74)
const linea = new Lineas(canvas.width/3.16, 0.7, 130)
const linea2 = new Lineas(canvas.width/4.74, -0.2, 190)
const circRitmo = new CirculoRitmo(100,192,256, 20)
const lineaRandom = new LineasRandom()
const lineastv = new LineasTV()
const lineastv2 = new LineasTV(canvas.height / 4)

const track = new AudioTools()
const bodyDOM = document.querySelector('body')
let frames = 0
let segundos = 0
let rotacion = Math.random() * 10

let lineasRitmoAbajo = []
let cantidadLineas = 256
let distancia = canvas.width / cantidadLineas
for (let i = 0; i <= cantidadLineas; i++) {
    lineasRitmoAbajo.push(new LineasRitmo(i * distancia,canvas.height,-50))
}
let lineasRitmoArriba = []
for (let i = 0; i <= cantidadLineas; i++) {
    lineasRitmoArriba.push(new LineasRitmo(i * distancia,0,50))
}

function animate(){

    const volumen = track.getVolume()
    const samples = track.getSamples()

    circRitmo.draw()
    circRitmo.update()

    let avg = (2 * 255 / (volumen * 2 + 1)) - 350
    if (avg > 20) avg = 20

    ctx.fillStyle = 'rgba('+avg+','+avg+','+avg*2+','+volumen/5+')'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    avg -= 10
    bodyDOM.style.backgroundColor = 'rgb('+avg+','+avg+','+avg*2.5+')'
    
    circInicio.draw()
    circInicio.update()
    circMedio.draw()
    circMedio.update()
    circInicio.avg = volumen * 255 * 1.2
    circMedio.avg = volumen * 150

    circRotatorio.draw()
    circRotatorio.update()
    circRotatorio.pedazos = 150 * 10 / ((volumen * 200) + 10)
    circRotatorio.anchoLinea = volumen * 50 + 1
    circRotatorio2.draw()
    circRotatorio2.update()
    circRotatorio2.pedazos = 150 * 10 / ((volumen * 200) + 40)
    circRotatorio2.radio = volumen * 120

    linea.draw()
    linea.update()
    linea2.draw()
    linea2.update()
    linea2.desplazamiento = volumen * 5 / 1.7 * volumen * 2.5
    linea.desplazamiento = volumen * 5 / 2.5 * volumen * 2.2

    lineaRandom.draw()
    lineaRandom.update()

    lineasRitmoArriba.forEach((linea, index) => {
        linea.altura = Math.abs(samples[index]) * 60
        linea.draw()
    })
    lineasRitmoAbajo.forEach((linea, index) => {
        linea.altura = Math.abs(samples[index]) * -60
        linea.draw()
    })

    frames++
    if (frames >= 60){
        frames = 0
        segundos += 1

        if (segundos > rotacion){
            if (Math.random() < 0.5)
                linea.velocidad = linea.velocidad * -1
            else linea2.velocidad = linea2.velocidad * -1
            segundos = 0
            rotacion = Math.random() * 10
        }
    }

    lineastv2.draw()
    lineastv2.update()
    lineastv.draw()
    lineastv.update()

    requestAnimationFrame(animate)
}
animate()