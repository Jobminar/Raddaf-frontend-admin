import React from 'react'
import './propertyviewpage.css'
import bedroomlogo from '../Images/bedsymbol.png';
import toilet from '../Images/toilet-logo.png';
import washroom from '../Images/washroom.png';
import parking from '../Images/car.png';
import { useLocation } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import backarrow from '../Images/backarrow.png'
import { useNavigate } from 'react-router-dom';
// mui
import DirectionsIcon from '@mui/icons-material/Directions';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

const Propertyviewpage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
    const selectedobject= location.state ? location.state.selectedproperty : null;
    const data = selectedobject
    console.log(data)


    // image switch
    const [mainImage, setMainImage] = useState('');

    const clicktop = (imageSrc) => {
      setMainImage(imageSrc);
    };

  return (
    <>
         {/* <div>
            {data && Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}: </strong> {typeof value === 'object' ? JSON.stringify(value) : value}
                </div>
            ))}
        </div> */}
        <div className='backarrow'>
            <img src={backarrow} alt='backarrow' onClick={()=>{navigate('/myrentalrequests')}}/>
        </div>
       <div className='propertyviewpage-con'>
            <div className='property-image-con'>
                <div className='property-main-img'>
                       {mainImage ? (
                            <img src={mainImage} alt="Main" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                            ) : (
                                data.images.length > 0 && <img src={selectedobject.images[0].Value} alt="First" />
                       )}
                </div>
                <div className='property-sub-img'>
                     {data.images.map((image, index) => (
                                <div key={index} onClick={() => clicktop(image.Value)} className='sub-img-con-rental'>
                                <img src={image.Value} alt={`Image ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                                </div>
                     ))}
                </div>
            </div>
            <div className='property-section-2'>
                <div className='property-section-2-left'>
                    <div className='address-roomdetails'>
                        <div className='address-details'>
                          <h1>{data.place}</h1>
                          <p>{data.noOfBedrooms} bedroom flat for rent</p>
                        </div>
                       
                        <div className='room-details'>
                            <div>
                                <img src={bedroomlogo} alt='bedroomlogo'/>
                                {data.noOfBedrooms}
                            </div>   
                            <div>
                                <img src={toilet} alt='toilet'/>
                                {data.noOfToilets}
                            </div> 
                            <div>
                                <img src={washroom} alt='washroom'/>
                                {data.noOfBathrooms}
                            </div> 
                            <div>
                                <img src={parking} alt='parking'/>
                                {data.parkingCapacity}
                            </div>  
                        </div>
                    </div>
                    <div className='distances'>
                        <div className='distances-sub'>
                            Hospital
                            <div>
                                <DirectionsIcon/>
                                {data.nearby.hospital.distance} Km
                            </div>
                        </div>
                        <div className='distances-sub'>
                            School
                            <div>
                                <DirectionsIcon/>
                                {data.nearby.school.distance} Km
                            </div>
                        </div>
                        <div className='distances-sub'>
                            Busstation
                            <div>
                                <DirectionsIcon/>
                                {data.nearby.busStation.distance} Km
                            </div>
                        </div>
                    </div>
                </div>
                <div className='property-section-2-right'>
                    <div className='contact-no'>
                      {data.contactDetails.phoneNumber}
                    </div>
                    <div className='mail-id'>
                        <EmailIcon/>
                        {data.contactDetails.email}                    
                    </div>
                    <div className='book-viewings'>

                        Book service
                    </div>
                    <div className='sharethis file'>
                        <SendIcon/>
                        Share This
                    </div>
                </div>
            </div>
            <div className='property-section-3'>
                <div className='property-checkboxes'>

                </div>
                <div className='description'>
                        {data.propertyDescription}
                </div>
                <div className='property-dimensions'>
                    <div className='property-dimensions-reception'>
                            Reception 
                            <div>
                            7.80m x 2.96m
                            </div>
                    </div>
                    <div className='property-dimensions-masterbedroom'>
                          Master bedroom 
                            <div>
                            7.80m x 2.96m
                            </div>
                    </div>
                    <div className='property-dimensions-bedroom'>
                          Bedroom 
                            <div>
                            7.80m x 2.96m
                            </div>
                    </div>
                    <div className='property-dimensions-kitchen'>
                          Kitchen 
                            <div>
                            7.80m x 2.96m
                            </div>
                    </div>

                </div>  
                <div className='raddaf-default-notes'>
                    <h1>IMPORTANT NOTICE FROM RADDAF HOMES</h1>
                    <p>Descriptions of the property are subjective and are used in good faith as an opinion and NOT as a statement of fact. Please make further 
                        specific enquires to ensure that our descriptions are likely to match any expectations you may have of the property. We have not tested 
                        any services, systems or appliances at this property. We strongly recommend that all the information we provide be verified by you on 
                        inspection, and by your Surveyor and Conveyancer.</p>
                </div>
            </div>

       </div>
    </>
 
  )
}

export default Propertyviewpage