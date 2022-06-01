export function getHouseForm(){
  return`
  <form class="col-12" onsubmit="app.housesController.createHouse()">
          <h3>List of Houses</h3>
          <div class="row">
            <div class=" col-12 form-floating mb-3">
              <input type="text" class="form-control" name="address"id="address" placeholder="">
              <label for="floatingInput">Address</label>
            </div>
            <div class=" col-md-3 form-floating">
              <input type="number" min="1900" class="form-control" name="yearMade" id="yearMade" placeholder="Password">
              <label for="floatingPassword">Year</label>
            </div>

            <div class=" col-md-3 form-floating mb-3">
              <input type="number" min="1" class="form-control" name="bedroom" id="bedroom" placeholder="">
              <label for="floatingInput">Bed</label>
            </div>
            <div class=" col-md-3 form-floating">
              <input type="number" min="1" class="form-control" name="bathroom" id="bathroom" placeholder="">
              <label for="floatingPassword">Bath</label>
            </div>
            <div class=" col-md-3 form-floating mb-3">
              <input type="text" class="form-control" name="sqFeet"id="sqFeet" placeholder="">
              <label for="floatingInput">sqFeet</label>
            </div>
            <div class=" col-12 form-floating">
              <input type="text" class="form-control" name="description" id="description" placeholder="">
              <label for="floatingPassword">description</label>
            </div>
            <div class=" col-md-3 form-floating">
              <input type="number" class="form-control" name="price" id="price" placeholder="">
              <label for="floatingPassword">Price</label>
            </div>
            <div class=" col-md-6 form-floating">
              <input type="text" class="form-control" name="imgURL" id="imgURL" placeholder="">
              <label for="floatingPassword">imgURL</label>
            </div>
          </div>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary px-3 py-2" title="create a house"><i class="mdi mdi-plus"></i>Create</button>
  
        
        </form>
  
  
  
  `
}