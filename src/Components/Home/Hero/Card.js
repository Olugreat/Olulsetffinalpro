import React, {useState, useEffect } from 'react';
import Styled from 'styled-components';
import { db } from '../../Base';
import { collection, getDocs } from 'firebase/firestore';
import './Style.css'





function App() {


  
  const [loading, setLoading] = useState([])
  const useCollectionRef = collection(db, 'biodatas')

  const getData = async ()=>{
    const data = await getDocs(useCollectionRef)
    setLoading(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
  }

  useEffect(()=>{
    getData();
  },[]);

  return(
    <Container>
      <Hosting>
        {loading.map((proj)=>
        <div>
        <img style={{height: '150px'}} src={proj.image}/>
        <h3>Name:{proj.name}</h3>
        <p>Comment:{proj.comment}</p>
        <a className="github_float" 
      target='_blank'
      href={`${proj.github}`}>
        <i class="fa fa-github"></i>
        </a>
      &nbsp; &nbsp; &nbsp;
      <a className="linkedin_float" 
      target='_blank'
      href={`${proj.linkedin}`}><i class='fa fa-linkedin-square'></i></a>
      &nbsp; &nbsp; &nbsp;
      <a className="facebook_float"
      target='_blank'
      href={`${proj.facebook}`}><i class='fa fa-facebook-square'></i></a>
      &nbsp; &nbsp; &nbsp;
      <a
        className="whatsapp_float"
        target='_blank'
      href={`${proj.whatsApp}`}
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      </div>
        )}

        
      </Hosting>
    </Container>
 
  )
}
export default App

const Container = Styled.div`
width: 100%;
background: grey;
display: flex;
justify-content: center;
`
const Hosting = Styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: center;
background: pink;

div{
  width:25%;
  background: white;
  margin: 20px;
  border-radius: 10px;
}
`
  
  



  // const [data, setDaata] = useState(null)

  // useEffect(() =>{getBiodatas()}, [])

  // if (loading || !data) {
  //   return(
  //     <div>
  //       <p>app is loading</p>
  //     </div>
  //   )
  // }
  
  // if (error) {
  //   return(
  //     <div>
  //       <p>error try again</p>
  //     </div>
  //   )
  // }

//   return (
//     <div>
//       {/* {
//         data.map(biodatas => <Card biodatas={biodatas} key={biodatas.whatsapp} />)
//       } */}
//     </div>
//   )
// }







// function Card({biodatas}) {
//   return ( 
//     <div>
//         <img src={biodatas.img} alt={biodatas.name} style={{height: '120px', width: '120px'}}/>
//         <a>Name: {biodatas.name}</a>
//         <a>Comment: {biodatas.comment}</a>
//         <a>Whatsapp: {biodatas.whatsapp}</a> 
//         <a>Facebook: {biodatas.facebook}</a>
//         <a>LinkedIn: {biodatas.linkedIn}</a>
//         <a>Github: {biodatas.github}</a>
//     </div>
//   );
// }

// export default Card;
