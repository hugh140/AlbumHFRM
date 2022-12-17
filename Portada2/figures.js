let expansion = 0

class Cube 
{
    constructor()
    {
        this.x1 = Math.random() * canvas.width
        this.y1 = Math.random() * canvas.height
        this.x2 = Math.random() * canvas.width 
        this.y2 = Math.random() * canvas.height
        this.size = Math.random() * 200 / 2 + 50
        this.size2 = Math.random() * this.size / 2 + this.size / 2
    }

    update()
    {
        this.x1 = Math.random() * canvas.width - canvas.width * expansion
        this.y1 = Math.random() * canvas.height - canvas.height * expansion
        this.x2 = Math.random() * canvas.width - canvas.width * expansion
        this.y2 = Math.random() * canvas.height - canvas.height * expansion
        this.size = Math.random() * 200 / 2 + 50
        this.size2 = Math.random() * this.size / 2 + this.size / 2

        this.draw()
    }

    draw() 
    {
        let color = Math.random()*255

        // Dibujar cuadrados
        ctx.beginPath()
        ctx.strokeStyle = "rgb("+color+","+color+","+color+")"
        ctx.fillStyle = "rgb("+color+","+color+","+color+")"
        ctx.rect(this.x1, this.y1, this.size, this.size)
        if (Math.random() > 0.5) 
            ctx.stroke()
        else
            ctx.fill()

        ctx.beginPath()
        ctx.rect(this.x2, this.y2, this.size2, this.size2)
        if (Math.random() > 0.5)
            ctx.stroke()
        else ctx.fill()

        //Dibujar líneas
        color = Math.random()*255

        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.x2, this.y2)
        ctx.strokeStyle = "rgba("+color+","+color+","+color+","+Math.random()+")"
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(this.x1 + this.size, this.y1)
        ctx.lineTo(this.x2 + this.size2, this.y2)
        ctx.strokeStyle = "rgba("+color+","+color+","+color+","+Math.random()+")"
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1 + this.size)
        ctx.lineTo(this.x2, this.y2 + this.size2)
        ctx.strokeStyle = "rgba("+color+","+color+","+color+","+Math.random()+")"
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(this.x1 + this.size, this.y1 + this.size)
        ctx.lineTo(this.x2  + this.size2, this.y2 + this.size2)
        ctx.strokeStyle = "rgba("+color+","+color+","+color+","+Math.random()+")"
        ctx.stroke()

        ctx.stroke()
    }
}

class Circle 
{
    constructor() 
    {
        this.x = Math.random() * canvas.width 
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 200 + 100
    }

    update()
    {
        this.x = Math.random() * canvas.width - canvas.width * expansion
        this.y = Math.random() * canvas.height - canvas.width * expansion
        this.radius = Math.random() * 200 + 100

        this.draw()
    }

    draw()
    {
        ctx.beginPath()
        ctx.strokeStyle = 'black'
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.lineWidth = 5
        ctx.stroke()

        ctx.lineWidth = 1
    }
}
