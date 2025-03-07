export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        const [x, y, width, height] = prediction['bbox'];
        const text = prediction['class']; 

        const color = 'green'
        ctx.strokeSylt = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        // draw rectangles and text 
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}

