describe("Burger Builder Ingredient Rendering", function() {
  it("should set cheese display to 'inherit' if state.Cheese is true, otherwise 'none'", function() {
    // Set state and call renderCheese
    state.Cheese = true;
    renderCheese();
    expect(document.querySelector("#cheese").style.display).toBe('inherit');

    state.Cheese = false;
    renderCheese();
    expect(document.querySelector("#cheese").style.display).toBe('none');
  });
  it("should set tomato display to 'inherit' if state.Tomatoes is true, otherwise 'none'", function() {
    // Set state and call renderTomatoes
    state.Tomatoes = true;
    renderTomatoes();
    expect(tomato.style.display).toBe('inherit');

    state.Tomatoes = false;
    renderTomatoes();
    expect(tomato.style.display).toBe('none');
  });

  it("should set onion display to 'inherit' if state.Onions is true, otherwise 'none'", function() {
    // Set state and call renderOnions
    state.Onions = true;
    renderOnions();
    expect(onion.style.display).toBe('inherit');

    state.Onions = false;
    renderOnions();
    expect(onion.style.display).toBe('none');
  });

  it("should set lettuce display to 'inherit' if state.Lettuce is true, otherwise 'none'", function() {
    // Set state and call renderLettuce
    state.Lettuce = true;
    renderLettuce();
    expect(lettuce.style.display).toBe('inherit');

    state.Lettuce = false;
    renderLettuce();
    expect(lettuce.style.display).toBe('none');
  });
  it("should toggle active class based on state", function() {
    let btnCheese, btnTomatoes, btnOnions, btnLettuce;
  
    // Mock the DOM elements
    btnCheese = document.createElement('button');
    btnCheese.className = 'btn-cheese';
    document.body.appendChild(btnCheese);
  
    btnTomatoes = document.createElement('button');
    btnTomatoes.className = 'btn-tomatoes';
    document.body.appendChild(btnTomatoes);
  
    btnOnions = document.createElement('button');
    btnOnions.className = 'btn-onions';
    document.body.appendChild(btnOnions);
  
    btnLettuce = document.createElement('button');
    btnLettuce.className = 'btn-lettuce';
    document.body.appendChild(btnLettuce);
  
    // Spy on document.querySelector to return the mock buttons
    spyOn(document, 'querySelector').and.callFake(function(selector) {
      switch (selector) {
        case '.btn-cheese':
          return btnCheese;
        case '.btn-tomatoes':
          return btnTomatoes;
        case '.btn-onions':
          return btnOnions;
        case '.btn-lettuce':
          return btnLettuce;
        default:
          return null;
      }
    });
  
    // Initial state
    state.Cheese = true;
    state.Tomatoes = false;
    state.Onions = true;
    state.Lettuce = false;
  
    // Call renderButtons function
    renderButtons();
  
    // Check the class toggles
    expect(btnCheese.classList.contains('active')).toBe(true);
    expect(btnTomatoes.classList.contains('active')).toBe(false);
    expect(btnOnions.classList.contains('active')).toBe(true);
    expect(btnLettuce.classList.contains('active')).toBe(false);
  
    // Change the state
    state.Cheese = false;
    state.Tomatoes = true;
    state.Onions = false;
    state.Lettuce = true;
  
    // Call renderButtons function again
    renderButtons();
  
    // Check the class toggles again
    expect(btnCheese.classList.contains('active')).toBe(false);
    expect(btnTomatoes.classList.contains('active')).toBe(true);
    expect(btnOnions.classList.contains('active')).toBe(false);
    expect(btnLettuce.classList.contains('active')).toBe(true);
  
    // Clean up
    document.body.removeChild(btnCheese);
    document.body.removeChild(btnTomatoes);
    document.body.removeChild(btnOnions);
    document.body.removeChild(btnLettuce);
  });
  
  it("should set visibility of ingredients based on state", function() {
    let cheese, tomato, onion, lettuce;
  
    // Mock the DOM elements
    cheese = document.createElement('div');
    cheese.id = 'cheese';
    document.body.appendChild(cheese);
  
    tomato = document.createElement('div');
    tomato.id = 'tomato';
    document.body.appendChild(tomato);
  
    onion = document.createElement('div');
    onion.id = 'onion';
    document.body.appendChild(onion);
  
    lettuce = document.createElement('div');
    lettuce.id = 'lettuce';
    document.body.appendChild(lettuce);
  
    // Spy on document.getElementById to return the mock elements
    spyOn(document, 'getElementById').and.callFake(function(id) {
      switch (id) {
        case 'cheese':
          return cheese;
        case 'tomato':
          return tomato;
        case 'onion':
          return onion;
        case 'lettuce':
          return lettuce;
        default:
          return null;
      }
    });
  
    // Initial state
    state.Cheese = true;
    state.Tomatoes = false;
    state.Onions = true;
    state.Lettuce = false;
  
    // Call renderIngredients function
    renderIngredients();
  
    // Check the visibility
    expect(cheese.style.visibility).toBe('visible');
    expect(tomato.style.visibility).toBe('hidden');
    expect(onion.style.visibility).toBe('visible');
    expect(lettuce.style.visibility).toBe('hidden');
  
    // Change the state
    state.Cheese = false;
    state.Tomatoes = true;
    state.Onions = false;
    state.Lettuce = true;
  
    // Call renderIngredients function again
    renderIngredients();
  
    // Check the visibility again
    expect(cheese.style.visibility).toBe('hidden');
    expect(tomato.style.visibility).toBe('visible');
    expect(onion.style.visibility).toBe('hidden');
    expect(lettuce.style.visibility).toBe('visible');
  
    // Clean up
    document.body.removeChild(cheese);
    document.body.removeChild(tomato);
    document.body.removeChild(onion);
    document.body.removeChild(lettuce);
  });
  it("should calculate and display the correct price based on state", function() {
    const basePrice = 10;
    const cheesePrice = 10;
    const tomatoPrice = 20;
    const onionPrice = 20;
    const lettucePrice = 20;
  
    // Mock the DOM element
    const priceDetails = document.createElement('p');
    priceDetails.className = 'price-details';
    document.body.appendChild(priceDetails);
  
    // Spy on document.querySelector to return the mock element
    spyOn(document, 'querySelector').and.returnValue(priceDetails);
  
    // Set initial state
    state = {
      Cheese: true,
      Tomatoes: false,
      Onions: true,
      Lettuce: false
    };
  
    // Define ingredient prices globally (since they were used in the function)
    window.basePrice = basePrice;
    window.cheesePrice = cheesePrice;
    window.tomatoPrice = tomatoPrice;
    window.onionPrice = onionPrice;
    window.lettucePrice = lettucePrice;
  
    // Call renderPrice function
    renderPrice();
  
    // Check the price
    const expectedPrice1 = basePrice + (state.Cheese * cheesePrice) + (state.Tomatoes * tomatoPrice) + (state.Onions * onionPrice) + (state.Lettuce * lettucePrice);
    expect(priceDetails.innerText).toBe("INR " + expectedPrice1);
  
    // Change the state
    state.Cheese = false;
    state.Tomatoes = true;
    state.Onions = false;
    state.Lettuce = true;
  
    // Call renderPrice function again
    renderPrice();
  
    // Check the price again
    const expectedPrice2 = basePrice + (state.Cheese * cheesePrice) + (state.Tomatoes * tomatoPrice) + (state.Onions * onionPrice) + (state.Lettuce * lettucePrice);
    expect(priceDetails.innerText).toBe("INR " + expectedPrice2);
  
    // Clean up
    document.body.removeChild(priceDetails);
  });
  
  
  });