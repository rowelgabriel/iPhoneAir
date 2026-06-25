var specsRow = document.getElementById('specs-row');

for (var i = 0; i < specs.length; i++) {
  specsRow.innerHTML +=
    `
      <div class="col-lg-6 mb-4 px-lg-2 px-4">
        <div class="card shadow border-0 p-2 h-100">
          <div class="row g-0 align-items-center">
            <div class="col-2 d-flex justify-content-center align-items-center">
              <img src="`+ specs[i].image + `" class="img-fluid" style="max-width: 70px;">
            </div>
            <div class="col-10">
              <div class="card-body">
                <div class="card-title fw-bold">`+ specs[i].title + `</div>
                <div class="card-text text-muted" style="text-align:justify;">`+ specs[i].desc + `</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
}

var accessoriesRow = document.getElementById('accessories-row');

for (var i = 0; i < accessories.length; i++) {
  accessoriesRow.innerHTML +=
    `
      <div class="col-lg-4 col-md-6 px-lg-3 px-md-4 px-5">
        <div class="card shadow border-0 p-4 h-100">
          <div class="text-center">
            <img src="`+ accessories[i].image + `" class="img-fluid" style="max-width: 230px;">
          </div>
          <div class="card-body d-flex flex-column">
            <div class="card-title text-center fw-bold">
              `+ accessories[i].title + `
            </div>
            <a href="`+ accessories[i].link + `" target="_blank" class="btn btn-dark mt-auto">
              <i class="bi bi-cart-fill me-2"></i>Buy Now
            </a>
          </div>
        </div>
      </div>
      `;
}