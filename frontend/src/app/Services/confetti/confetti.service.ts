import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';
@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  launchConfetti() {
    const end = Date.now() + (2 * 1000);

    const colors = ['#bb0000', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}
