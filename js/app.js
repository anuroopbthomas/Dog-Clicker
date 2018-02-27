var model = {
  currentDog: null,
  dogs: [
    {
      clickCount: 0,
      name: 'Snowflake',
      imgSrc: 'https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg'

    },
    {
      clickCount: 0,
      name: 'Pup',
      imgSrc: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg'

    },
    {
      clickCount: 0,
      name: 'Rusty',
      imgSrc: 'https://goo.gl/usQ5kw'

    },
    {
      clickCount: 0,
      name: 'Bob',
      imgSrc: 'https://goo.gl/5CpHgq'

    },
    {
      clickCount: 0,
      name: 'Tom',
      imgSrc: 'https://goo.gl/WsSYuw'

    }
  ]
};

var controller = {
  init: function() {
    model.currentDog = model.dogs[0];
    dogListView.init();
    dogView.init();
  },
  getCurrentDog: function() {
    return model.currentDog;
  },
  getDogs: function() {
    return model.dogs;
  },

  setCurrentDog: function(dog) {
    model.currentDog = dog;
  },

  incrementCounter: function() {
    model.currentDog.clickCount++;
    dogView.render();
  }
};

var dogView = {
  init: function() {
    this.dogElem = document.getElementById('dog');
    this.dogNameElem = document.getElementById('dog-name');
    this.dogImageElem = document.getElementById('dog-img');
    this.countElem = document.getElementById('dog-count');

    this.dogImageElem.addEventListener('click', function(e) {
      controller.incrementCounter();
    });

    this.render();
  },

  render: function() {
    var currentDog = controller.getCurrentDog();
    this.countElem.textContent = currentDog.clickCount;
    this.dogNameElem.textContent = currentDog.name;
    this.dogImageElem.src = currentDog.imgSrc;
  }
};

var dogListView = {

  init: function() {
    this.dogListElem = document.getElementById('dog-list');

    this.render();

  },

  render: function() {
    var dog, elem, i;
    var dogs = controller.getDogs();

    this.dogListElem.innerHTML = '';

    for (i = 0; i < dogs.length; i++) {
      dog = dogs[i];

      elem = document.createElement('button');
      elem.textContent = dog.name;
      elem.className = 'btn btn-primary';

      elem.addEventListener('click', (function(dogCopy) {
        return function() {
          controller.setCurrentDog(dogCopy);
          dogView.render();
        };
      })(dog));

      this.dogListElem.appendChild(elem);

    }
  }
};

controller.init();
