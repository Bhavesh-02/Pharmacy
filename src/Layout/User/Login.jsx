import Button from 'react-bootstrap/Button';

function Login(){
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
        <div style={{fontSize:"2rem", color:"red", fontWeight:"600", marginBottom:"3%"}}>Login</div>
        <form> 

          <div data-mdb-input-init class="form-outline mb-2">
            <input type="email" id="form1Example13" placeholder="YOUR EMAIL" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13"></label>
          </div>


          <div data-mdb-input-init class="form-outline mb-2">
            <input type="password" id="form1Example23" placeholder="YOUR PASSWORD" class="form-control form-control-lg" />
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
          <Button style={{backgroundColor:"#FFF", color:"black",width:"100%", border:"1px solid rgba(0,0,0,0.20)", margin:"3% 0%"}} variant="primary"> 
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z" fill="#FFC107"/>
          <path d="M3.94141 9.18188L8.04828 12.1938C9.15953 9.4425 11.8508 7.5 15.0002 7.5C16.912 7.5 18.6514 8.22125 19.9758 9.39937L23.5114 5.86375C21.2789 3.78312 18.2927 2.5 15.0002 2.5C10.1989 2.5 6.03516 5.21062 3.94141 9.18188Z" fill="#FF3D00"/>
          <path d="M15.0002 27.5004C18.2289 27.5004 21.1627 26.2648 23.3808 24.2554L19.5121 20.9817C18.2151 21.9686 16.6299 22.5022 15.0002 22.5004C11.7489 22.5004 8.98832 20.4273 7.94832 17.5342L3.87207 20.6748C5.94082 24.7229 10.1421 27.5004 15.0002 27.5004Z" fill="#4CAF50"/>
          <path d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5714 18.8853 20.6833 20.0957 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z" fill="#1976D2"/>
         </svg>
          Sign up with google</Button>
          <Button style={{backgroundColor:"#3D5898", width:"100%", border:"1px solid rgba(0,0,0,0.20)" }} variant="primary">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 14H16.5L17.5 10H14V8C14 6.97 14 6 16 6H17.5V2.64C17.174 2.597 15.943 2.5 14.643 2.5C11.928 2.5 10 4.157 10 7.2V10H7V14H10V22.5H14V14Z" fill="white"/>
          </svg>
            Sign up with Facebook</Button>
        </form>
      </div>
    </div>
  </div>
</section>
    );
    
}

export default Login;