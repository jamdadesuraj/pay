import React from 'react';

const Useapp = ()=>{
    return(
        <>
<section className="use_section">
    <div className="container main_use_container">
        <div className="row">
            <div className="col-12 com-md-6 col-lg-6">
                <img src="./images/hero1.jpg" alt="hero1" className="img-fluid"/>
            </div>

            {/* ---------right side text--------- */}
            <div className="col-12 col-md-6 col-lg-6">
                <p className="main_use_para">--avaliable @gogle and ios app store only</p>
                <h1 className="main_hero_heading">how to use app ?</h1>
                <h3>sign in</h3>
                <p className="use_para">type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                <h3>add your bank account</h3>
                <p className="use_para">type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                <h3>send payment request</h3>
                <p className="use_para">type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                <button className="btn btn-outline-primary use_btn">learn more</button>
            </div>
        </div>
    </div>
</section>
        </>
    );
};
export default Useapp;