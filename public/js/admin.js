let products = [];

function addProduct() {
    const name = document.getElementById('product-name-field').value;
    const price = document.getElementById('product-price-field').value;
    const category = document.getElementById('product-category-field').value;
    const color = document.getElementById('product-color-field').value;
    const gender = document.getElementById('product-gender-field').value;
    const image = document.getElementById('product-image-field').value;

    if (name === '' || price === '' || category === '' || color === '' || gender === '' || image === '') {
        alert("Please fill all fields");
        return;
    }

    const product = {
        name: name,
        price: price,
        category: category,
        color: color,
        gender: gender,
        image: image
    }

    $.ajax({
        url: `/products`,
        method: "POST",
        dataType: "json",
        data: product,
        success: function (response) {
            updateProducts();
            loadPanel('admin/manageHallsForm')
            alert("Screen was updated successfuly");
        },
        error: function (xhr, status, error) {
            console.log("AJAX request failed: " + error);
        },
    });
}

function updateProducts() {
    $.ajax({
        url: `/products`,
        method: "GET",
        dataType: "json",
        success: function (response) {
            products = response;
        },
        error: function (xhr, status, error) {
            console.log("AJAX request failed: " + error);
        },
    });
}

function loadPanel(panelUrl) {
    const adminPanel = document.getElementById('admin-panel');
    $.ajax({
        url: panelUrl,
        method: "GET",
        success: function (response) {
            adminPanel.innerHTML = response;
            loadPanelElements(panelUrl)
        },
        error: function (xhr, status, error) {
            console.log("AJAX request failed: " + error);
        },
    });
}

function initNavBarElements() {
    const navBar = document.getElementById('navbar');
    const navbarElements = navBar.getElementsByTagName("a")
    for (let i = 0; i < navbarElements.length; i++) {
        navbarElements[i].classList = ["unselected-nav"];
    }
}

function loadPanelElements(panelUrl) {
    initNavBarElements();
    let adminPanel;

    if (panelUrl === 'admin/createMovieForm') {
        adminPanel = document.getElementById('createMovieFormLink');
    }
    else if (panelUrl === 'admin/manageMoviesForm') {
        adminPanel = document.getElementById('manageMoviesFormLink');
        loadMovieTable();
    }
    else if (panelUrl === 'admin/createScreenForm') {
        adminPanel = document.getElementById('createScreenFormLink');
        loadCreateScreenForm();
    }
    else if (panelUrl === 'admin/manageScreensForm') {
        adminPanel = document.getElementById('manageScreensFormLink');
        loadScreensTable();
    }
    else if (panelUrl === 'admin/createHallForm') {
        adminPanel = document.getElementById('createHallFormLink');
    }
    else if (panelUrl === 'admin/manageHallsForm') {
        adminPanel = document.getElementById('manageHallsFormLink');
        loadHallsTable();
    }
    else if (panelUrl === 'admin/createBranchForm') {
        adminPanel = document.getElementById('createBranchFormLink');
    }
    else if (panelUrl === 'admin/manageBranchesForm') {
        adminPanel = document.getElementById('manageBranchesFormLink');
        loadBranchesTable();
    }
    else if (panelUrl === 'admin/createAdminForm') {
        adminPanel = document.getElementById('createAdminFormLink');
    }
    else if (panelUrl === 'admin/manageAdminsForm') {
        adminPanel = document.getElementById('manageAdminsFormLink');
        loadAdminsTable();
    }

    adminPanel.classList = ["selected-nav"];
}