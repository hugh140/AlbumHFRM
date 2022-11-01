class Circulo{
    constructor(radio){
        this.radio = radio
        this.radioInicial = this.radio
        this.pedazos = 50
        this.cantidadPedazos = Math.PI / this.pedazos
        this.angInicial = 0
        this.angFinal = this.cantidadPedazos
        this.color = 'white'
        this.rotacion = true
        this.anchoLinea = 5
    }
    update(){
        this.angInicial = this.angFinal
        this.cantidadPedazos = Math.PI / this.pedazos
        if (this.angFinal <= Math.PI * 2)
            this.angFinal += this.cantidadPedazos
        else {
            this.angInicial = 0
            this.angFinal = this.cantidadPedazos
        }
    }
    draw(){
        ctx.beginPath()
        ctx.arc(canvas.width/2, canvas.height/2, this.radio,this.angInicial,this.angFinal)
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.anchoLinea
        ctx.stroke()
    }
}

class CirculosRitmo{
    constructor(radio){
        this.radio = radio
        this.radioInicial = this.radio
        this.avg = 100
        this.velocidad = 0.2
    }
    update(){
        this.radio -= this.velocidad
        if (this.radio < this.radioInicial - 20)
            this.radio = this.radioInicial
    }
    draw(){
        ctx.beginPath()

        ctx.fillStyle = 'rgba(0,0,0,0.001)'
        ctx.arc(canvas.width/2, canvas.height/2, this.radioInicial,0,Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = 'rgb('+this.avg+','+this.avg+','+this.avg+')'
        ctx.lineWidth = 2
        ctx.arc(canvas.width/2, canvas.height/2, this.radio,0,Math.PI * 2)
        ctx.stroke()
    }
}

class Lineas{
    constructor(radio, velocidad, desplazamiento){
        this.desplazamiento = desplazamiento
        this.radio = radio
        this.lineaInicio = 0
        this.lineaFinal = this.lineaInicio + this.desplazamiento
        this.velocidad = velocidad
    }
    update(){
        if (this.lineaInicio > 360) this.lineaInicio -= 360
        if (this.lineaFinal > 360) this.lineaFinal -= 360
        this.lineaInicio += this.velocidad
        this.lineaFinal = this.lineaInicio + this.desplazamiento
    }
    draw(){
        let xInicio = (Math.cos(this.lineaInicio) * this.radio) + canvas.width / 2
        let yInicio = (Math.sin(this.lineaInicio) * this.radio) + canvas.height / 2
        let xFinal = (Math.cos(this.lineaFinal) * this.radio) + canvas.width / 2
        let yFinal = (Math.sin(this.lineaFinal) * this.radio) + canvas.height / 2

        ctx.beginPath()
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 1
        ctx.moveTo(xInicio, yInicio)
        ctx.lineTo(xFinal, yFinal)
        ctx.stroke()
    }
}

class CirculoRitmo{
    constructor(radio, inicio, final, expansion){
        this.radioInicial = radio
        this.radio = this.radioInicial
        this.avg = 50
        this.inicio = inicio
        this.final = final
        this.expansion = expansion
    }
    update(){
        this.radio = this.radioInicial + track.getVolumeRange(this.inicio,this.final) * 3 * this.expansion
        this.avg = track.getVolumeRange(this.inicio,this.final) * 5 * this.expansion
    }
    draw(){
        ctx.beginPath()
        ctx.fillStyle = 'rgb('+this.avg+','+this.avg+','+this.avg+')'
        ctx.arc(canvas.width/2,canvas.height/2,this.radio,Math.random()*Math.PI*2,Math.random()*Math.PI*2)
        ctx.stroke()
    }
}

class LineasRitmo{
    constructor(x,y,altura){
        this.x = x
        this.y = y
        this.altura = altura
    }
    draw(){
        ctx.beginPath()
        ctx.strokeStyle = 'rgb(30,30,30)'
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y + this.altura)
        ctx.stroke()
    }
}

class LineasRandom{
    constructor(
        x = Math.random() * canvas.width, 
        y = Math.random() * canvas.height)
    {
        this.x = x
        this.y = y
        this.longitud = Math.random() * 90 + 10
        this.xFinal = Math.random() * this.longitud + this.x
        this.yFinal = Math.random() * this.longitud + this.y
    }
    update(){
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.longitud = Math.random() * 90 + 10
        this.xFinal = Math.random() * this.longitud + this.x
        this.yFinal = Math.random() * this.longitud + this.y
    }
    draw(){
        ctx.beginPath()
        ctx.strokeStyle = 'rgb(25,25,25)'
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.xFinal, this.yFinal)
        ctx.stroke()
    }
}

class LineasTV{
    constructor(y = 0){
        this.x = 0
        this.y = y
        this.velocidad = 2
    }
    update(){
        this.y += this.velocidad
        if (this.y >= canvas.height)
            this.y = 0
    }
    draw(){
        ctx.beginPath()
        ctx.strokeStyle = 'rgb(10,10,10)'
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(canvas.width, this.y)
        ctx.stroke()
    }
}