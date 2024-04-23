import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./viewdocuments.css";
import proimg from "../Images/profile.png"
import SingleBedIcon from '@mui/icons-material/SingleBed';
import toiletlogo from '../Images/toilet-logo.png'
import BathtubIcon from '@mui/icons-material/Bathtub';
import { useNavigate } from 'react-router-dom';
import backarrow from '../Images/backarrow.png'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { useLocation } from 'react-router-dom';
import bedroomlogo from '../Images/bedsymbol.png';
import toilet from '../Images/toilet.png';
import washroom from '../Images/washroom.png';
import parking from '../Images/car.png';



const Listingrequest = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState("");
  const location = useLocation();
  const selectedProduct = location.state ? location.state.selectedProduct : null;

  console.log(selectedProduct, "show data");
  const timestamp = selectedProduct.scheduleDateTime;
  const dateOnly = timestamp ? timestamp.substring(0, 10) : null;


  const downloadPropertyTitleDeals = () => {
    const content = selectedProduct.propertyDocuments;
    const fileName = 'propertyDocuments.txt';
    download(content, fileName);
  };

  const downloadFittingAndContentsForm = () => {
    const content = selectedProduct.fittingAndContentsForm;
    const fileName = 'fittingAndContentsForm.txt';
    download(content, fileName);
  };

  const downloadFloorplan = () => {
    const content = selectedProduct.floorplan;
    const fileName = 'floorplan.txt';
    download(content, fileName);
  };
  const downloadEnergyPerformenceCertificate = () => {
    const content = selectedProduct.energyPerformanceCertificate;
    const fileName = 'EnergyPerformenceCertificate.txt';
    download(content, fileName);
  };
  const downloadLeaseholdInformation = () => {
    const content = selectedProduct.leaseholdInformation;
    const fileName = 'leaseholdInformation.txt';
    download(content, fileName);
  };
  const downloadPropertyInfoForm = () => {
    const content = selectedProduct.propertyInfoForm;
    const fileName = 'propertyInfoForm.txt';
    download(content, fileName);
  };
  const downloadLocalAuthoritySearch = () => {
    const content = selectedProduct.localAuthoritySearch;
    const fileName = 'localAuthoritySearch.txt';
    download(content, fileName);
  };
  const downloadPropertyValuationReport = () => {
    const content = selectedProduct.propertyValuationReport;
    const fileName = 'propertyValuationReport.txt';
    download(content, fileName);
  };

  const download = (content, fileName) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const [selectedOptiona, setSelectedOptiona] = useState(null);

  // Options for the dropdown
  const options = [
    "For Sale",
    "To-Let"
  ];

  // Event handler for option selection
  const handleSelect = (optionb) => {
    setSelectedOptiona(optionb);
  };
  const [selectedOptionb, setSelectedOptionb] = useState(null);

  // Options for the dropdown
  const optionb = [
    "1",
    "1.5",
    "2",
    "2.5",
    "3"
  ];

  // Event handler for option selection
  const handleSelectb = (option) => {
    setSelectedOptionb(option);
  };

 
  return (
    <div className='main'>
      <div className='list-head'>
        <img alt='back-arrow' src={backarrow} onClick={()=>{navigate('/')}} />
        <h1>Listing Request</h1>
        <div>
          {/* <FormControl sx={{ m: 1, minWidth: 250 }}> */}
            
            <select
        value={selectedOptiona}
        onChange={(e) => handleSelect(e.target.value)} style={{background:"#BE6B2E",color:"white",borderRadius:"10px",border:"none",width:"100%",padding:"20px",fontSize:"18px"}}
      >
        {/* <option value="">My Properties</option> */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
            </select>
          {/* </FormControl> */}
        </div>
        <div className='seconddrop'>
        {/* <FormControl sx={{ m: 1, minWidth: 250 }}>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                backgroundColor: '#9E5C08',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#9E5C08',
                },
                '&:focus': {
                  backgroundColor: '#9E5C08',
                  borderColor: 'blue', // Change border color on focus
                },
                '& .MuiSelect-icon': {
                  color: 'white',
                },
              }}
            >
              <MenuItem value="" disabled>Generate Invoice</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="1.5">1.5</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="2.5">2.5</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
          </FormControl> */}
          <select
        value={selectedOptionb}
        onChange={(e) => handleSelectb(e.target.value)} style={{background:"#BE6B2E",color:"white",borderRadius:"10px",border:"none",width:"100%",padding:"20px",fontSize:"18px"}}
      >
        <option value="">Generate Invoice</option>
        {optionb.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
            </select>
        </div>
      </div>
      <div style={{display:"flex"}}>
        {/* {renderListings()} */}
        <div>
            {/* <div> */}
          <img style={{width:"100%"}} src={proimg} alt='userimage'/>
          {/* </div> */}
          <div style={{display:'flex'}}>
            <div>Name </div>
            <div style={{paddingLeft:"35px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.name}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Address </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.place}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Pincode </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.place}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Phone No </div>
            <div style={{paddingLeft:"5px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.phoneNumber}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Emain </div>
            <div style={{paddingLeft:"30px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.email}</div>
          </div>
          
          {/* <p>Address : No48</p>
          <p>Pincode : 600234</p>
          <p>COntact Details</p>
          <p>phone : 987654321</p>
          <p>Mail ID: mmm@gmail.com</p> */}
        </div>
        <hr/>
        

      <div className='cont3'>
        {/* <div >jnaljlnaf</div> */}
                    <p style={{textAlign:"start"}}> Documents</p>
                    <div className='cont4'>
                        
                        <div className='contche' onClick={downloadPropertyTitleDeals}>
                            
                            <div className='doc'>
                                <h3>Property title deals</h3>
                            </div>
                           
                        </div>
                        <div className='contche' onClick={downloadFittingAndContentsForm}>
                            
                            <div className='doc'>
                                <h3>Fitting and contents form(TA10)</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadEnergyPerformenceCertificate} >
                            
                            <div className='doc'>
                                <h3>Energy Performence Certificate(EPC)</h3>
                            </div>
                            
                        </div>
                        <div className='contche'onClick={downloadLeaseholdInformation} >
                            
                            <div className='doc'>
                                <h3>Leasehold Information(If applicable)</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadPropertyInfoForm}>
                            
                            <div className='doc'>
                                <h3>Property Info Form(TA6)</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadLocalAuthoritySearch} >
                            
                            <div className='doc'>
                                <h3>Local Authority Search</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadPropertyValuationReport} >
                            
                            <div className='doc'>
                                <h3>Property Valuation Report</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadFloorplan}>
                            
                            <div className='doc'>
                                <h3>Floor Plan</h3>
                            </div>
                            
                        </div>
                        <div >
                          <h1 style={{textAlign:"start"}}>
                            Property Descrition:
                          </h1>
                          <p style={{textAlign:"start"}} className='bpara'>{selectedProduct.propertyDescription}</p>
                        </div>
                          <div className='rooms-info' style={{paddingTop:"20px",paddingLeft:"10px"}}>
                  {/* <h1 >Property Details</h1>
                  <div className='rooms-info-sub' style={{marginTop:"20px"}}>
                      <div >
                      <SingleBedIcon  sx={{fontSize:'40px'}}/>    
                      <h1>{selectedProduct.noOfBedrooms}           </h1>
                      </div>
                      <div>
                      <BathtubIcon  sx={{fontSize:'40px'}}/> 
                      <h1>   
                      {selectedProduct.noOfBathrooms}     
                      </h1>        
                      </div>
                      <div>
                      <img src={toiletlogo} alt='toilet' style={{width:'40px'}}/>    
                      <h1>{selectedProduct.noOfToilets}</h1>            
                      </div>
                      <div>
                      <DirectionsCarFilledIcon sx={{fontSize:'40px'}}/>   
                      <h1>{selectedProduct.parkingCapacity}</h1>            
                      </div>
                  </div> */}
                  {/* <div className='rooms-detai'>
                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {selectedProduct.noOfBedrooms}</div>
                <div className='bahrooms'><img src={washroom} alt='washroom'/>  {selectedProduct.noOfBathrooms}</div>
                <div className='toilets'><img src={toilet} alt='toilet'/>  {selectedProduct.noOfToilets}</div>
                <div className='parking'><img src={parking} alt='parking'/>  {selectedProduct.parkingCapacity}</div>
              </div> */}
                

                          </div>
                          <div style={{marginBottom:"20px",marginTop:"10px"}} className='rooms-detai'>
                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {selectedProduct.noOfBedrooms}</div>
                <div className='bahrooms'><img src={washroom} alt='washroom'/>  {selectedProduct.noOfBathrooms}</div>
                <div className='toilets'><img src={toilet} alt='toilet'/>  {selectedProduct.noOfToilets}</div>
                <div className='parking'><img src={parking} alt='parking'/>  {selectedProduct.parkingCapacity}</div>
              </div>
                    </div>
                          <div style={{display:"flex",}}>
                            <div style={{marginRight:"40px"}}><h3>Any Special condition :</h3></div>
                            <div style={{backgroundColor:"#FFECDE", padding:"10px"}}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div>
                          </div>
                          <div style={{display:"flex",marginTop:"20px"}}>
                                <div style={{marginRight:"40px"}}><h3>Property Viewing Schedule :</h3></div>
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{marginRight:"30px",marginTop:"20px"}} fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                        </svg>
                                      </div>
                            <div style={{backgroundColor:"#FFECDE", padding:"10px"}}><p>{dateOnly}</p></div>
                          </div>
                          {/* <button style={{padding:"20px",borderRadius:"10px",fontSize:"20px",fontWeight:"bold",backgroundColor:"#9E5C08",border:"none",color:"white",width:"10%",marginRight:"20px"}}>Approve</button>
                          <button style={{padding:"20px",borderRadius:"10px",fontSize:"20px",fontWeight:"bold",border:"none",color:"#9E5C08",width:"10%",marginRight:"20px"}}>Decline</button> */}
                          <button style={{width:"10%",height:"7%",backgroundColor:"#9E5C08",borderRadius:"10px",fontSize:"100%",fontWeight:"bold",marginBottom:"20px",border:"none",color:"white",marginRight:"10px"}}>Approve</button>
                          <button style={{width:"10%",height:"7%",backgroundColor:"white",borderRadius:"10px",fontSize:"100%",fontWeight:"bold",marginBottom:"20px",borderColor:"#9E5C08",borderStyle:"solid",color:"#9E5C08",marginRight:"10px"}}>Decline</button>
                    </div>                    
      </div>
    </div>
  );
}

export default Listingrequest;
