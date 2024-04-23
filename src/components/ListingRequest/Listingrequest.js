import React, { useEffect, useState } from 'react';
import backarrow from '../Images/backarrow.png';
import { Link, useNavigate } from 'react-router-dom';
// import Store from "../Viewdocuments/viewdocuments.js"

import axios from 'axios';
import "./Listingrequest.css"
// import './Valuationrequest.css';

const Listingrequest = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState([]);

  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raddaf-be.onrender.com/listing-property/get-listings');
        setListingData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleProduct = (item) => {
    setSelectedProduct(item);
    navigate('/viewdocuments', { state: { selectedProduct: item } });
    console.log(item,'data')
  };


  const renderListings = () => {
    return listingData.map((data) => {
      const timestamp = data.scheduleDateTime;
      const dateOnly = timestamp ? timestamp.substring(0, 10) : null;
    return  (
      <div key={data.id}>
        <div style={{ margin: '50px' }}>
          <h3 style={{display:'flex',paddingLeft:"20px"}}>{dateOnly}</h3>
          <div className='hhh' style={{ display: 'flex', overflow:"auto" }}>
            <div
              style={{
                backgroundColor: '#FFD2B1',
                borderStyle: 'solid',
                borderColor: '#955108',
                borderTop: 'none',
                borderWidth: '6px',
                borderBottom: 'none',
                borderRight: 'none',
                padding: '20px',
                marginLeft: '20px',
                width: '100%',
              }}
            >
              {/* <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"flex-start" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                  <div>
                    <p>Name</p>
                  </div>
                  <div>
                    <p>Address</p>
                  </div>
                  <div>
                    <p>Pincode</p>
                  </div>
                  <div>
                    <p>Contact Details</p>
                  </div>
                  <div>
                    <p>View Documents</p>
                  </div>
                </div>
              </div>
              <hr />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                <div>
                  <p>{data.contactDetails.name}</p>
                </div>
                <div>
                  <p>{data.place}</p>
                </div>
                <div>
                  <p>{data.place}</p>
                </div>
                <div>
                  <p>{data.contactDetails.phoneNumber}</p>
                  <p>{data.contactDetails.email}</p>
                </div>
                <div className='nn'>

                 <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleProduct(data)} width="40" style={{paddingRight:"60px"}} height="40" fill="#955108" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                 </svg>
                 
               </div>
              </div> */}
              
                        <table>
                            <thead style={{marginBottom:"px"}}>
                                <tr style={{borderBottom:"0.1%",borderColor:"#955108",borderStyle:"groove",borderTop:"none",borderLeft:"none",borderRight:"none"}}>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Pin code</th>
                                    <th>contact Details</th>
                                    <th>View Docuemnts</th>
                                </tr>
                            
                            </thead>
                            <tbody>
                                <tr class="hove">
                                    <td>{data.contactDetails.name}</td>
                                    <td>{data.place}</td>
                                    <td>{data.place}</td>
                                    <td>{data.contactDetails.phoneNumber}<br/>{data.contactDetails.email}</td>
                                    <td>
                                        <div style={{textAlign:"center"}} className='nn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleProduct(data)} width="40" style={{paddingRight:"60px"}} height="40" fill="#955108" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    
            
            
               </div>
            {/* <div style={{}}>
              <button style={{ padding: '75px', backgroundColor: '#955108', border: 'none', color: 'white', fontSize: '20px' }}>Valuate </button>
            </div> */}
          </div>
        </div>
      </div>
    )
    });
  };

  return (
    <div>
      <div className='list-head'>
        <img src={backarrow} alt='back-arrow' onClick={() => navigate('/')} />
        <h1>Listing Request</h1>
      </div>
      <div>{renderListings()}</div>
      {/* <Store selectedProduct={selectedProduct} /> */}
    </div>
  );
};

export default Listingrequest;
