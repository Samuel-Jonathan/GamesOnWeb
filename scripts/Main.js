// Créer le moteur de rendu
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

// Créer une scène
var scene = new BABYLON.Scene(engine);

// Créer la caméra
var camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, 75 * (Math.PI / 180), 20, BABYLON.Vector3.Zero(), scene);

// Ajouter une lumière
var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);


// Désactiver le scroll de la fenêtre
document.body.style.overflow = "hidden";


// Crée une boucle d'animation pour la marche
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
var UiPanel = new BABYLON.GUI.StackPanel();
UiPanel.width = "220px";
UiPanel.fontSize = "14px";
UiPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
UiPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
advancedTexture.addControl(UiPanel);
// ..
var button = BABYLON.GUI.Button.CreateSimpleButton("but1", "animate_start1");
button.paddingTop = "10px";
button.width = "100px";
button.height = "50px";
button.color = "white";
button.background = "green";
button.onPointerDownObservable.add(() => {
    animationGroups[0].play(true);
});
UiPanel.addControl(button);
// ..
var button1 = BABYLON.GUI.Button.CreateSimpleButton("but2", "animate_stop1");
button1.paddingTop = "10px";
button1.width = "100px";
button1.height = "50px";
button1.color = "white";
button1.background = "green";
button1.onPointerDownObservable.add(() => {
    animationGroups[0].pause()
});
UiPanel.addControl(button1);

// Afficher la scène
engine.runRenderLoop(function () {
    scene.render();
});

