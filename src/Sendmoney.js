import React,{useState} from 'react'
import SendAPI from "./SendAPI";



function Sendmoney() {

    const[send , setsend]=useState(SendAPI);

    return (
        <>
            <section className="howitwork">
                <div className="container ">
                <h1 className="text-center main_heading">how to send money</h1>
                <div className="row ">

                {send.map((curval)=>{
                    const{id,logo,title,info}=curval;
                    return(
                        <>
                    <div className="col-12 col-md-4 col-lg-4 work-container-subdiv grow send_money  text-center p-5 g-5 ">
                        
                        <i className={`font_awesome_style ${logo} `}></i>
                        <h1>{title}ney</h1>
                        <p>className="main_hero_para"{info}</p>
                    </div>

                        </>
                    )
                })}

                    
                   
                </div>

                </div>
            </section>
        </>
    )
}

export default Sendmoney;
