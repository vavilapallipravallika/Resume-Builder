import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import "./App.css";

export default function App(){
  const ref = useRef();

  const [d,setD]=useState({
    name:"", phone:"", email:"", location:"",
    github:"", linkedin:"",
    objective:"",
    skills:"",
    eduCollege:"", eduDegree:"", eduYear:"", eduCgpa:"",
    expCompany:"", expRole:"", expDuration:"", expPoints:"",
    projectTitle:"", projectPoints:"",
    certifications:"",
    languages:""
  });

  const h=e=>setD({...d,[e.target.name]:e.target.value});

  const bullets=t=>t.split("\n").filter(x=>x)
    .map((x,i)=><li key={i}>{x}</li>);

  const pdf=()=>html2pdf().from(ref.current).save();

  return(
  <div className="container">

    {/* FORM */}
    <div className="form">
      <h2>Resume Builder</h2>

      <input name="name" placeholder="Name" onChange={h}/>
      <input name="phone" placeholder="Phone" onChange={h}/>
      <input name="email" placeholder="Email" onChange={h}/>
      <input name="location" placeholder="Location" onChange={h}/>
      <input name="github" placeholder="GitHub" onChange={h}/>
      <input name="linkedin" placeholder="LinkedIn" onChange={h}/>

      <textarea name="objective" placeholder="Objective" onChange={h}/>
      <textarea name="skills" placeholder="Skills (one per line)" onChange={h}/>

      <h4>Education</h4>
      <input name="eduCollege" placeholder="College" onChange={h}/>
      <input name="eduDegree" placeholder="Degree" onChange={h}/>
      <input name="eduYear" placeholder="Year" onChange={h}/>
      <input name="eduCgpa" placeholder="CGPA" onChange={h}/>

      <h4>Experience</h4>
      <input name="expCompany" placeholder="Company" onChange={h}/>
      <input name="expRole" placeholder="Role" onChange={h}/>
      <input name="expDuration" placeholder="Duration" onChange={h}/>
      <textarea name="expPoints" placeholder="Points" onChange={h}/>

      <h4>Project</h4>
      <input name="projectTitle" placeholder="Title" onChange={h}/>
      <textarea name="projectPoints" placeholder="Points" onChange={h}/>

      <textarea name="certifications" placeholder="Certifications" onChange={h}/>
      <textarea name="languages" placeholder="Languages" onChange={h}/>

      <button onClick={pdf}>Download PDF</button>
    </div>

    {/* RESUME */}
    <div ref={ref} className="resume">

      {/* HEADER */}
      <h1 className="name">{d.name}</h1>

      <p className="contactLine">
        📞 {d.phone} | ✉️ {d.email} | 📍 {d.location} |
        💻 {d.github} | 🔗 {d.linkedin}
      </p>

      {/* OBJECTIVE */}
      <h3>OBJECTIVE</h3>
      <p>{d.objective}</p>

      {/* SKILLS */}
      <h3>SKILLS</h3>
      <ul>{bullets(d.skills)}</ul>

      {/* EDUCATION */}
      <h3>EDUCATION</h3>
      <p><b>{d.eduDegree}</b></p>
      <p>{d.eduCollege} | {d.eduYear}</p>
      <p>CGPA: {d.eduCgpa}</p>

      {/* EXPERIENCE */}
      <h3>EXPERIENCE</h3>
      <p><b>{d.expCompany}</b></p>
      <p><i>{d.expRole} | {d.expDuration}</i></p>
      <ul>{bullets(d.expPoints)}</ul>

      {/* PROJECT */}
      <h3>PROJECT</h3>
      <p><b>{d.projectTitle}</b></p>
      <ul>{bullets(d.projectPoints)}</ul>

      {/* CERTIFICATIONS */}
      <h3>CERTIFICATIONS</h3>
      <ul>{bullets(d.certifications)}</ul>

      {/* LANGUAGES */}
      <h3>LANGUAGES</h3>
      <p>{d.languages}</p>

    </div>
  </div>
  );
}
