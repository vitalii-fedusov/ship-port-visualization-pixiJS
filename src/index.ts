import { Application, Graphics } from "pixi.js";

(async () => {
  const app = new Application();
  const { innerHeight, innerWidth } = window;

  await app.init({ background: "#1099bb", width: 640, height: 500 });

  document.body.appendChild(app.canvas);

  const rectangle = new Graphics();

  rectangle.rect(10, 10, innerWidth / 10, innerHeight / 5);
  rectangle.stroke({color: 'yellow', width: 4})

  app.stage.addChild(rectangle);
})();
