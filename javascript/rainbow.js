const elements = document.querySelectorAll(".rainbow");

let r = 255, g = 0, b = 0;
let phase = 0;
const speed = 2;

function updateColor() {
    switch (phase) {
        case 0: g += speed; if (g >= 255) { g = 255; phase = 1; } break;
        case 1: r -= speed; if (r <= 0)   { r = 0;   phase = 2; } break;
        case 2: b += speed; if (b >= 255) { b = 255; phase = 3; } break;
        case 3: g -= speed; if (g <= 0)   { g = 0;   phase = 4; } break;
        case 4: r += speed; if (r >= 255) { r = 255; phase = 5; } break;
        case 5: b -= speed; if (b <= 0)   { b = 0;   phase = 0; } break;
    }

    const color = `rgb(${r}, ${g}, ${b})`;
    elements.forEach(el => {
        el.style.color = color;
    });

    requestAnimationFrame(updateColor);
}

updateColor();