   // Crée une boîte de 2m de large, 3m de haut, 0,2m d'épaisseur
   var wall = BABYLON.MeshBuilder.CreateBox("wall", { width: 7, height: 5, depth: 0.2 }, scene);

   // Positionne le mur à 1 mètre devant la caméra
   wall.position = new BABYLON.Vector3(0, 0, -6);

   // Applique une texture au mur
   var wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
   wallMaterial.diffuseTexture = new BABYLON.Texture("wall.jpg", scene);
   wallMaterial.diffuseTexture.uScale = 1; // Répète la texture deux fois en largeur
   wallMaterial.diffuseTexture.vScale = 1; // Répète la texture trois fois en hauteur
   wall.material = wallMaterial;

   //Position du sol
   wall.position.y = 3.5;

   //Crée le sol
   var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 100, subdivisions: 2 }, scene);

   //Ajoute une texture au sol
   var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
   groundMaterial.diffuseTexture = new BABYLON.Texture("ground.png", scene);
   groundMaterial.diffuseTexture.uScale = 50; // Répète la texture deux fois en largeur
   groundMaterial.diffuseTexture.vScale = 50; // Répète la texture trois fois en hauteur
   ground.material = groundMaterial;


   ground.receiveShadows = true;

   ground.rotate.y = 180;
