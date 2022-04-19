import React from 'react'
import { CareerData, ListOne, ListTwo } from './CareerDetailData'
import { useState } from 'react';



// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};


const CareerDetail = () => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <>
            <div className="container">
                <div className="row m-0 mt-5 mb-5">
                    <div className="col-lg-7 col-md-12">
                        <div className="row m-0">

                            {CareerData.map((obj) => {
                                return (
                                    <>
                                        <div className="col-12">
                                            <h1 className='career_detail_heading'>{obj.heading}</h1>
                                            <p className='career_detail_title'>{obj.title}</p>
                                            <p className='career_detail_text'>{obj.text}</p>

                                        </div>
                                    </>
                                );
                            })}

                        </div>

                        <div className="row m-0">
                            {ListOne.map((obj) => {
                                return (
                                    <>
                                        <div className="col-12">
                                            <p className='career_detail_title'>{obj.title}</p>
                                            <ul>
                                                <li className='career_detail_list_items'>{obj.item}</li>
                                            </ul>
                                        </div>
                                    </>
                                );
                            })}

                        </div>

                        <div className="row m-0">
                            {ListTwo.map((obj) => {
                                return (
                                    <>
                                        <div className="col-12">
                                            <p className='career_detail_title'>{obj.title}</p>
                                            <ul>
                                                <li className='career_detail_list_items'>{obj.item}</li>
                                            </ul>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row form_wrapper">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="form-control"
                                            value={contact.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            value={contact.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="number"
                                            placeholder="Phone number"
                                            className="form-control"
                                            value={contact.number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            className="form-control"
                                            value={contact.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="text"
                                            cols="30"
                                            rows="6"
                                            placeholder="Write your message..."
                                            className="form-control"
                                            value={contact.text}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="default-btn">
                                        Send Message
                                        <i className="ri-arrow-right-line"></i>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <style jsx>{`
                .career_detail_list_items{
                        
                        
                }
                .career_detail_title{
                    font-size: 18px;
                    font-weight: 500;
                    margin-top: 10px;
                }
            .form_wrapper{
                background-color: #F4F8FC;
                padding-top: 30px;
                padding-bottom: 30px;
                padding-left: 15px;
                padding-right: 15px;
                border-radius: 10px;
            }
            .form-group {
                    margin-bottom: 20px;
                }
                .form-group .form-control {
                    display: block;
                    width: 100%;
                    height: 45px;
                    outline: 0;
                    background-color: white;
                    border: 0px solid #E6EDF6;
                    border-radius: 5px;
                    -webkit-box-shadow: none;
                            box-shadow: none;
                    padding: 15px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    font-size: 15px;
                }
                .form-group .form-control::-webkit-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                .form-group .form-control:-ms-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                .form-group .form-control::-ms-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                .form-group .form-control::placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                .form-group .form-control:focus {
                    outline: 0;
                    -webkit-box-shadow: none;
                            box-shadow: none;
                }

                .form-group .form-control:focus::-webkit-input-placeholder {
                    color: transparent;
                }
                
                .form-group .form-control:focus:-ms-input-placeholder {
                    color: transparent;
                }
                
                .form-group .form-control:focus::-ms-input-placeholder {
                    color: transparent;
                }
                
                .form-group .form-control:focus::placeholder {
                    color: transparent;
                }
                
                .form-group textarea.form-control {
                    height: auto;
                    padding: 15px;
                    line-height: 1.5rem;
                }
                
                .form-group .help-block.with-errors ul {
                    color: red;
                    margin-bottom: 0;
                    margin-top: 10px;
                    text-align: left;
                }
                
                .form-group .help-block.with-errors ul li {
                    font-size: 14px;
                }
                `}</style>
            </div>
        </>
    )
}

export default CareerDetail