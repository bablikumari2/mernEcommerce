import React from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="ProductType">
      {/* <div class="text-banner-container">
        <h4 class="text-banner-title">CATEGORIES TO BAG</h4>
      </div>

      <div class="img-link-container-2">
        <a href="">
          <img onClick={() => navigate("")}
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"
            alt=""
          />
        </a>
        <a href="">
          <img onClick={() => navigate("")}
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"
            alt=""
          />
        </a>

       

        <a href="">
          <img onClick={() => navigate("")}
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg"
            alt=""
          />
        </a>
        <a href="">
          <img onClick={() => navigate("")}
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg"
            alt=""
          />
        </a>
      </div> */}

      <div class="text-banner-container">
        <h4 class="text-banner-title">EXPLORE TOP BRANDS</h4>
      </div>

      <div class="img-link-container">
        
         
       
        <a href="">
          <img onClick={() => navigate("")}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg"
            alt=""
          />
        </a> 
        
        <a href="">
          <img onClick={() => navigate("")}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg"
            alt=""
          />
        </a>
        <a href="">
          <img onClick={() => navigate("")}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg"
            alt=""
          />
        </a>
        
        <a href="">
          <img onClick={() => navigate("")}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/046ab589-87d5-4afa-8ab3-10e06fdbe6a61598348260596-W.jpg"
            alt=""
          />
        </a>
        <a href="">
          <img onClick={() => navigate("/")}
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}