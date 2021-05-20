window.addEventListener('DOMContentLoaded', () => {


    let canvas = document.getElementById('myCanvas')
    let ctx = canvas.getContext('2d')

    let imgAsteroid = document.getElementById('asteroid')
    let imgPlanet = document.getElementById('planet')
    
    // let shieldLocationX = 300
    // let shieldLocationY = 550
    // let health = 100
    // let score = 50
    


    class Asteroid {
        constructor(imgSrc, xPos, yPos, xSize, ySize, radius, xTarget, yTarget, xSpeed, ySpeed) {
            this.imgSrc = imgSrc
            this.xPos = xPos
            this.yPos = yPos
            this.xSize = xSize
            this.ySize = ySize
            this.radius = xSize/2.5 // radius is equal to xSize/2.5
            this.xTarget = xPos + (xSize/2) // xTarget is equal to 
            this.yTarget = yPos + (ySize/2) // yTarget is equal to 
            this.xSpeed = xSpeed
            this.ySpeed = ySpeed
        }

        drawAst() {
            ctx.beginPath()
            ctx.drawImage(this.imgSrc, this.xPos, this.yPos, this.xSize, this.ySize)
            ctx.fill()
            ctx.closePath()
            this.xPos = this.xPos + this.xSpeed
            this.yPos = this.yPos + this.ySpeed
            this.xTarget = this.xPos + (this.xSize/2)
            this.yTarget = this.yPos + (this.ySize/2)
            // resets Object position if offscreen
            if (this.xPos > 1300 || this.xPos < -100 || this.yPos > 700 || this.yPos < -100) {
                this.yPos = Math.floor(Math.random() * 600)
                this.xPos = -100
                this.xSpeed = 4
                this.ySpeed = Math.ceil(Math.random() * 4) - 2
            }
        }

        collisionDetectionAst() {
            let distanceXA1 = planet1.xTarget - a1.xTarget
            let distanceYA1 = planet1.yTarget - a1.yTarget
            let distanceA1 = Math.sqrt(distanceXA1 * distanceXA1 + distanceYA1 * distanceYA1)
            if (distanceA1 < planet1.radius + a1.radius) {
                this.yPos = Math.floor(Math.random() * 600)
                this.xPos = -100
                this.xSpeed = 4
                this.ySpeed = Math.ceil(Math.random() * 4) - 2

            //     health = health - 25
            }
        }

        checkClick(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let xMousePosition = event.clientX - rect.left;
            let yMousePosition = event.clientY - rect.top;
            // console.log(`x= ${x} and y= ${y}`)
            console.log(`x click= ${xMousePosition} and y click= ${yMousePosition}`)

            if (xMousePosition > (this.xTarget - this.radius) && xMousePosition < (this.xTarget + this.radius) && yMousePosition > (this.yTarget - this.radius) && yMousePosition < (this.yTarget + this.radius)) {
                this.yPos = Math.floor(Math.random() * 600)
                this.xPos = -100
                this.xSpeed = 4
                this.ySpeed = Math.ceil(Math.random() * 4) - 2

                // score = score + 10
            }

        }

    }
    let a1 = new Asteroid(imgAsteroid, 50, 50, 50, 50, 0, 0, 0, 3, 2)   
    // let a2 = new Asteroid(imgAsteroid, 50, 50, 50, 50, 50, 0, 0, 2, 3)   
    // let a3 = new Asteroid(imgAsteroid, 50, 50, 50, 50, 50, 0, 0, 1, 2)

    let planet1 = new Asteroid(imgPlanet, 500, 150, 200, 200, 80, 0, 0, 0, 0) 


    function move () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        a1.drawAst()
        // a2.drawAst()
        // a3.drawAst()
        planet1.drawAst()
        a1.collisionDetectionAst()
    }

        canvas.addEventListener("mousedown", function(e)
        {
            a1.checkClick(canvas, e);
        });

    let interval = setInterval(move, 50)

})


    // let x = -100
    // let y = Math.floor(Math.random() * 600)
    // let dx = 2
    // let dy = 0

    // let x2 = -100
    // let y2 = Math.floor(Math.random() * 600)
    // let dx2 = 2
    // let dy2 = -2

    // // circle colllision detection
    // let planetTarget = {radius: 80, x: 600, y: 250}
    // let asteroidTarget = {radius: 20, x: x, y: y}
    // let distanceX = planetTarget.x - asteroidTarget.x
    // let distanceY = planetTarget.y - asteroidTarget.y
    // let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    
    // let asteroid2Target = {radius: 17, x: x2, y: y2}
    // let distance2X = planetTarget.x - asteroid2Target.x
    // let distance2Y = planetTarget.y - asteroid2Target.y
    // let distance2 = Math.sqrt(distance2X * distance2X + distance2Y * distance2Y)

    // let planetX = 500
    // let planetY = 150




    // function drawPlanet () {
    //     ctx.beginPath()
    //     ctx.drawImage(imgPlanet, planetX, planetY, 200, 200)
    //     ctx.closePath()
    // }



    // function drawShield() {
    //     ctx.font = '16px Arial'
    //     ctx.fillStyle = 'green'
    //     ctx.fillText('Trade 25 health for 25 points', shieldLocationX, shieldLocationY)
    // }

    // function drawHealth() {
    //     ctx.font = '16px Arial'
    //     ctx.fillStyle = 'red'
    //     ctx.fillText('Health: ' + health, 550, 550)
    // }
    // function drawScore() {
    //     ctx.font = '16px Arial'
    //     ctx.fillStyle = 'red'
    //     ctx.fillText('Score: ' + score, 700, 550)
    // }

    // function collisionDetection() {
    //     planetTarget = {radius: 80, x: 600, y: 250}
    //     asteroidTarget = {radius: 20, x: x, y: y}
    //     distanceX = planetTarget.x - asteroidTarget.x
    //     distanceY = planetTarget.y - asteroidTarget.y
    //     distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    //     if (distance < planetTarget.radius + asteroidTarget.radius) {
    //         y = Math.floor(Math.random() * 600)
    //         x = -100
    //         dx = 4
    //         dy = Math.ceil(Math.random() * 4) - 2
    //         health = health - 25
    //     }

    //     asteroid2Target = {radius: 17, x: x2, y: y2}
    //     distance2X = planetTarget.x - asteroid2Target.x
    //     distance2Y = planetTarget.y - asteroid2Target.y
    //     distance2 = Math.sqrt(distance2X * distance2X + distance2Y * distance2Y)
    //     if (distance2 < planetTarget.radius + asteroid2Target.radius) {
    //         y2 = Math.floor(Math.random() * 600)
    //         x2 = -100
    //         dx2 = 4
    //         dy2 = Math.ceil(Math.random() * 4) - 2
    //         health = health - 25
    //     }   
    //     if (health === 0) {
    //         alert('You lose ☠️')
    //         clearInterval(interval)
    //         interval = setInterval(move, 10)
    //         health = 100
    //         score = 0
    //     }
    // }

    // function drawPlanet () {
    //     ctx.beginPath()
    //     ctx.drawImage(imgPlanet, planetX, planetY, 200, 200)
    //     ctx.closePath()
    // }
    

    // function drawAsteroid() {
    //     ctx.beginPath()
    //     ctx.drawImage(imgAsteroid, x, y, 50, 50)
    //     ctx.fill()
    //     ctx.closePath()
    //     if (x > 1300 || x < -100 || y > 700 || y < -100) {
    //         y = Math.floor(Math.random() * 600)
    //         x = 0
    //         dx = 4
    //         dy = Math.ceil(Math.random() * 4) - 2
    //     }
    // }
    // function drawAsteroid2() {
    //     ctx.beginPath()
    //     ctx.drawImage(imgAsteroid, x2, y2, 40, 40)
    //     ctx.fill()
    //     ctx.closePath()
    //     if (x2 > 1300 || x2 < -100 || y2 > 700 || y2 < -100) {
    //         y2 = Math.floor(Math.random() * 600)
    //         x2 = 0
    //         dx2 = 4
    //         dy2 = Math.ceil(Math.random() * 4) - 2
    //     }
    // }

    // function move () {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     a1.drawAst()
    //     // a2.drawAst()
    //     // a3.drawAst()
    //     planet1.drawAst()
    //     a1.collisionDetectionAst()
    //     drawAsteroid()
    //     drawAsteroid2()
    //     drawPlanet()
    //     collisionDetection()
    //     drawHealth()
    //     drawScore()
    //     drawShield()
    //     x += dx
    //     y += dy
    //     x2 += dx2
    //     y2 += dy2

    // }

    // repositions the asteroids on click
    // function checkClick(canvas, event) {
    //     let rect = canvas.getBoundingClientRect();
    //     let xPosition = event.clientX - rect.left;
    //     let yPosition = event.clientY - rect.top;
    //     // console.log(`x= ${x} and y= ${y}`)
    //     console.log(`x click= ${xPosition} and y click= ${yPosition}`)

    //     if (xPosition > (x) && xPosition< (x + 30) && yPosition > (y) && yPosition < (y + 30)) {
    //         y = Math.floor(Math.random() * 600)
    //         x = -100
    //         dx = 4
    //         dy = Math.ceil(Math.random() * 4) - 2
    //         score = score + 10
    //     }
    //     if (xPosition > (x2) && xPosition< (x2 + 30) && yPosition > (y2) && yPosition < (y2 + 30)) {
    //         y2 = Math.floor(Math.random() * 600)
    //         x2 = -100
    //         dx2 = 4
    //         dy2 = Math.ceil(Math.random() * 4) - 2
    //         score = score + 10
    //     }
    //     if (score >= 25) {
    //         if (xPosition > (shieldLocationX) && xPosition< (shieldLocationX + 200) && yPosition < (shieldLocationY) && yPosition > (shieldLocationY - 20)) {
    //             score = score - 25
    //             health = health + 25
    //         }
    //     }    
    // }
          
    //     canvas.addEventListener("mousedown", function(e)
    //     {
    //         a1.checkClick(canvas, e);
    //     });

    // let interval = setInterval(move, 50)




    // Create ctxs
    // Add movement
    // Add ability to remove when clicked


    // Create Planet
    // Add health attribute

    // Create colision detection
    // Decrease health upon colision


// })







