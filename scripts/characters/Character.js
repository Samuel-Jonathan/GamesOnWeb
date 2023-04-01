  // Chargement du modèle de personnage et de l'animation
  var playerMesh;
  var playerSkeletons;

 BABYLON.SceneLoader.ImportMesh("", "", "walking.glb", scene, function (meshes, particleSystems, skeletons, animationGroups) {
      // Le premier mesh dans la liste est le mesh du personnage
      playerMesh = meshes[0];
      // Désactiver le mesh du personnage par défaut
      playerMesh.setEnabled(true);
      // Les squelettes du personnage sont stockés dans un tableau
      playerSkeletons = skeletons;



      playerMesh.position.z += 3;
      animationGroups[0].pause();

      // Faire suivre la caméra au personnage
      camera.lockedTarget = playerMesh;

      scene.onKeyboardObservable.add((kbInfo) => {
          switch (kbInfo.type) {
              case BABYLON.KeyboardEventTypes.KEYDOWN:
                  switch (kbInfo.event.key) {
                      case "ArrowUp":
                          animationGroups[0].play();
                          console.log('ok');
                          playerMesh.position.z -= 0.05;
                          break;
                      case "ArrowDown":
                          animationGroups[0].play(true);
                          break;
                      case "ArrowLeft":
                          animationGroups[0].play(true);
                          break;
                      case "ArrowRight":
                          animationGroups[0].play(true);
                          break;

                  }

                  break;
          }


      });


      scene.onKeyboardObservable.add((kbInfo) => {
          switch (kbInfo.type) {
              case BABYLON.KeyboardEventTypes.KEYUP:
                  switch (kbInfo.event.key) {
                      case "ArrowUp":
                          console.log('ok2');
                          animationGroups[0].pause();
                          break;
                  }
              }
          });


      // Tourner le mesh de 180 degrés autour de l'axe Y
      playerMesh.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);

  });
