const cancion = new AudioTools()

const canvas = document.getElementById("canvas-script")
const ctx = canvas.getContext("2d")

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    canvas.width = window.innerWidth
    canvas.height = canvas.width
}
else{
    canvas.height = window.innerHeight - 200
    canvas.width = canvas.height
}

// Instanciar objetos

const cubes = []
for (let i = 0; i < 20; i++)
    cubes.push(new Cube())

const circle = new Circle()

const bodyDOM = document.querySelector('body')

//Dibujar y animar objetos

let frames = 0
let colorRandom = true

const update = () => {

    let velocidadFPS = -45 * (cancion.getVolume() * 5) + 50
    if (frames > velocidadFPS) frames = 0

    if (frames == 0)
    {
        if (velocidadFPS > 10) {
            ctx.fillStyle = "rgb(255,255,255)"
            bodyDOM.style.backgroundColor = "rgb(245,245,245)"
        }
        else {
            if (colorRandom) { 
                ctx.fillStyle = "rgb(255,255,255)"
                bodyDOM.style.backgroundColor = "rgb(245,245,245)"
            }
            else { 
                ctx.fillStyle = "rgb(30,30,30)"
                bodyDOM.style.backgroundColor = "rgb(50,50,50)"
            }
        }
        ctx.fillRect(0,0,canvas.width,canvas.height)

        cubes.forEach(cubie => {
            if (velocidadFPS > 30) ctx.fillStyle = "rgba(255,255,255,0.1)"
            else {
                if (colorRandom) ctx.fillStyle = "rgba(255,255,255,0.1)"
                else ctx.fillStyle = "rgba(30,30,30,0.1)"
            }
            ctx.fillRect(0,0,canvas.width,canvas.height)
            cubie.update()
        })
        
        circle.update()
    }
    frames++
    colorRandom = !colorRandom

    //Ritmo
    // expansion = -(cancion.getVolume() * - 128) * (50000/909) + (54545/909)
    // console.log(expansion)

    requestAnimationFrame(update)
}
update()
    
