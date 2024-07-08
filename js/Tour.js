AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];

    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderE1 = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbnail(item);
      borderE1.appendChild(thumbNail);
     
      // Title Text Element
      const titleE1 = this.createTitleE1(position,item);
      borderE1.appendChild(titleE1);

      this.placesContainer.appendChild(borderE1);
    }
  },
  createBorder: function (position, id){
    const entityE1 = document.createElement("a-entity")
    entityE1.setAttribute("id",id);
    entityE1.setAttribute("visible",true);
    entityE1.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    });
    entityE1.setAttribute("position",position)
    entityE1.setAttribute("material",{
      color:"black",
      opacity:1
    })
    return entityE1 
  },
  createThumbnail: function(item){
    const entityE1 = document.createElement("a-entity")
    entityE1.setAttribute("visible", true);
    entityE1.setAttribute("geometry",{
      primitive:"circle",
      radius:9
    })
    entityE1.setAttribute("material",{src:item.url});
    return entityE1
  },
  createTitleE1:function (position,item){
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:70, 
      color:"red",
      value:item.title
    });
    const elPosition = position
    elPosition.y = -20
    entityE1.setAttribute("position",elPosition);
    entityE1.setAttribute("visible",true);
    return entityE1
  }
});


