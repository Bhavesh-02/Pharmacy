import Button from 'react-bootstrap/Button';

function Registration(){
    return(
    <section >
      <div style={{textAlign:"center", fontSize:"2.2rem", fontWeight:"401", color:"red", padding:"3% 0%"}}>Pharmacist</div>
  <div class="container">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="images/Login.png" alt='House'
          class="img-fluid"  />
          <div style={{textAlign:"center", marginTop:"2%"}}>
           <div style={{fontSize:"1.7rem", color:"#045E55", fontWeight:"600", padding:"0% 15%"}}>Welcome To Janhit Chemist</div>
           <div style={{fontSize:"0.76rem", fontWeight:"600", marginBottom:"3%", padding:"0% 15%"}}>Sign up with us and get exclusive discounts and saving on medicines. Get express delivery in 2hrs.</div>
           </div>
      </div>
      <div  style={{backgroundColor:"#F9F9F9", padding:"2%", paddingBottom:"10%", marginBottom:"3%"}} class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 ">
        <div style={{fontSize:"2rem", color:"red", fontWeight:"600", marginBottom:"3%"}}>Sign Up</div>
        <form> 

          <div data-mdb-input-init class="form-outline mb-2">
            <input type="email" id="form1Example13" placeholder="NAME" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13"></label>
          </div>

          <div data-mdb-input-init class="form-outline mb-2">
            <input type="email" id="form1Example13" placeholder="PHONE NUMBER" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13"></label>
          </div>

          <div data-mdb-input-init class="form-outline mb-2">
            <input type="email" id="form1Example13" placeholder="EMAIL" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13"></label>
          </div>

          <div data-mdb-input-init class="form-outline mb-2">
            <input type="password" id="form1Example23" placeholder="PASSWORD" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23"></label>
          </div>

          <div class="d-flex justify-content-between align-items-center mb-4">

            <div >
            <Button style={{backgroundColor:"#045E55"}} variant="primary">SHOP NOW</Button>
                        </div>
            <a style={{textDecoration:"none", color:"#000", fontWeight:"500"}} href="#!">Forgot password?</a>
          </div>

          <div class="divider d-flex align-items-center my-4 height-0 border-black" className='divider'>
            <p class="text-center fw-bold mx-3 mb-0 border-1" className='divider-or'>OR</p>
          </div>

          <div style={{textDecoration:"none", color:"#000", fontWeight:"500",display:"flex",justifyContent:"center"}} > Already have an account
          <a style={{textDecoration:"none", color:"#000", fontWeight:"500"}} href="#!">Forgot password?</a>
          </div>
         
        </form>
      </div>
    </div>
  </div>
</section>
    );
    
}

export default Registration;