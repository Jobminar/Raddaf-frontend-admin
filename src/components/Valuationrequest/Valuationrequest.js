import React, { useEffect, useState } from 'react'
import backarrow from '../Images/backarrow.png'
import { useNavigate } from 'react-router-dom'
import "./Valuationrequest.css"
// import samplelistinreq from "../ListingRequest/samplelistingrequest.js";
import axios from "axios"

const Valuationrequest = () => {
  const navigate = useNavigate()
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raddaf-be.onrender.com/evalRequests');
        setListingData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const nnn = () => {
    return listingData.map((data) => (
      <div key={data.id}>
        <div style={{ margin: "50px" }}>
          <p style={{textAlign:"start",marginLeft:"20px"}}>{data.createdOn}</p>
          <div style={{display:'flex'}}>
            <div className='hhh' style={{backgroundColor:"#FFD2B1",borderStyle:"solid",borderColor:"#955108",borderTop:"none",borderWidth:"6px",borderBottom:"none",borderRight:"none",padding:"20px",marginLeft:"20px",width:"80%"}}>
               {/* <div style={{display:"flex",justifyContent:"space-between"}}>
                 <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"80%"}}>
                  <div>
                    <p>name</p>
                  </div>
                  <div>
                    <p>address</p>
                  </div>
                  <div>
                    <p>pincode</p>
                  </div>
                  <div>
                    <p>property</p>
                  </div>
                </div>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "80%" }}>
                <div>
                  <p>{data.firstName}</p>
                </div>
                <div>
                  <p>{data.address}</p>
                </div>
                <div>
                  <p>{data.postCode}</p>
                </div>
                <div>
                  <p>{data.propertyAction}</p>
                </div>
              </div> */}
              <table>
                            <thead style={{marginBottom:"px"}}>
                                <tr style={{borderBottom:"0.1%",borderColor:"#955108",borderStyle:"groove",borderTop:"none",borderLeft:"none",borderRight:"none"}}>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Pin code</th>
                                    <th>Property</th>
                                    {/* <th></th> */}
                                </tr>
                            
                            </thead>
                            <tbody>
                                <tr class="hove">
                                    <td>{data.username}</td>
                                    <td>{data.address}</td>
                                    <td>{data.postCode}</td>
                                    <td>{data.propertyAction}</td>
                                    {/* <td> */}
                                        {/* <div style={{textAlign:"center"}} className='nn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleProduct(data)} width="40" style={{paddingRight:"60px"}} height="40" fill="#955108" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                            </svg>
                                        </div> */}
                                    {/* </td> */}
                                </tr>
                            </tbody>
                        </table>
              {/* <div style={{}}>
                <button style={{ padding: "50px" }}>Valuate </button>
              </div> */}
            </div>
            <div className='hhh'>
                <button style={{ padding: "75px",backgroundColor:"#955108",border:"none",color:"white",fontSize:"20px" }}>Valuate </button>
              </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div className='list-hea'>
        <img src={backarrow} alt='back-arrow' onClick={() => { navigate('/') }} />
        <h1>Valuation Request</h1>
      </div>
      <div>
        {nnn()}
      </div>
    </div>
  )
}

export default Valuationrequest
