import React,{useState} from 'react'
import WorkAPI from "./WorkAPI";



 const HowitWorks = () => {

    const [work ,setwork]=useState(WorkAPI);
    return (
        <>
          <section className="howitwork">
              <div className="container main_section_container">
              <h1 className="main_heading text-center">How does it works</h1>
              <div className="row">



              {work.map((curval)=>{
                const  {id,logo,title,info}=curval;
                  return(
                      <>
                      
                      <div className="col-12 col-md-4 col -lg-4 text-center grow work-container-subdiv">
                      <i className={`font_awesome_style ${logo}`}></i>
                      <h2>{title}</h2>
                      
                       <p className="main_hero_para">{info}</p>
                     </div>
                      </>
                  )
              })}
             
         
            
        



            </div>
              </div>
          </section>
        </>
    )
};
export default HowitWorks;
