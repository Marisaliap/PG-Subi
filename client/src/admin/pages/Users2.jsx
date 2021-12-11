import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
    AssignmentInd,
    WcOutlined,
    Event,
    PhotoCamera,
    DirectionsCar,
    Facebook,
    Instagram,
    Home,
    VpnKey,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../../styles/User.css";
import { useAuth0 } from "@auth0/auth0-react";
import { editUser, getUserProfile, getAllUsers, getUserAdmin, getUserDetail } from "../../actions";

export default function User2(props) {
    const { id, userAdmin, carAdmin, usuariosRegistrados, car } = useSelector(state => state)
    const users = useSelector(state => state.user)
    const { user } = useAuth0();
    const dispatch = useDispatch()
    let booleanDNI;
    // -------------------------------------<useEffect>-------------------------------------
    useEffect(() => {
        dispatch(getUserAdmin(id));
        dispatch(getAllUsers());  
           
        // window.location.reload(true)
    }, [dispatch, id]);
    //   -------------------------------------< estados> --------------------------------
    const [errorsCars, setErrorsCars] = useState({});
    const [errorsUser, setErrorsUser] = useState({});
    const [image, setImage] = useState("")
    const [dni, setDni] = useState([])
    var adminUser = {email: userAdmin.email,
            name: userAdmin.name,
            lastName: userAdmin.lastName,
            genre: userAdmin.genre,
            age: userAdmin.age,
            dni: userAdmin.dni,
            street: userAdmin.street,
            city: userAdmin.city,
            province: userAdmin.province,
            telephone: userAdmin.telephone,
            facebook: userAdmin.facebook,
            instagram: userAdmin.instagram,
            photo: userAdmin.photo,
            photoDni: userAdmin.photoDni,
            isAdmin: userAdmin.isAdmin,
            car: userAdmin.cars}
            console.log(adminUser, "adminUser")
    const [input, setInput] = useState(adminUser)
    // const [input, setInput] = useState({
    //     email: props.email,
    //     name: props.name,
    //     lastName: props.lastName,
    //     genre: props.genre,
    //     age: props.age,
    //     dni: props.dni,
    //     street: props.street,
    //     city: props.city,
    //     province: props.province,
    //     telephone: props.telephone,
    //     facebook: props.facebook,
    //     instagram: props.instagram,
    //     photo: props.photo,
    //     photoDni: props.photoDni,
    //     isAdmin: props.isAdmin,
    //     car: props.cars
    // });

    // const [input, setInput] = useState({
    //     email: userAdmin.email,
    //     name: userAdmin.name,
    //     lastName: userAdmin.lastName,
    //     genre: userAdmin.genre,
    //     age: userAdmin.age,
    //     dni: userAdmin.dni,
    //     street: userAdmin.street,
    //     city: userAdmin.city,
    //     province: userAdmin.province,
    //     telephone: userAdmin.telephone,
    //     facebook: userAdmin.facebook,
    //     instagram: userAdmin.instagram,
    //     photo: userAdmin.photo,
    //     photoDni: userAdmin.photoDni,
    //     isAdmin: userAdmin.isAdmin,
    //     car: userAdmin.cars
    // });
    
    console.log("USER ADMIN" , userAdmin)
    console.log(input,"input input")
   
   
    const [auto, setAuto] = useState(userAdmin?.cars?.length === 0 ? ({
        brand: "",
        model: "",
        patent: "",
        color: "",
        cylinder: "",
        greencard: "",
    }) : ({
        brand: carAdmin.brand,
        model: carAdmin.model,
        patent: carAdmin.patent,
        color: carAdmin.color,
        cylinder: carAdmin.cylinder,
        greencard: carAdmin.greencard,
    }));
    console.log(auto, "auto")
    // ------------------<handles>------------------
    const handleSubmitUser = (e) => {
        e.preventDefault();
        setDni([])
        setImage('');
        dispatch(editUser(id, input));
        dispatch(getUserProfile(id));
        dispatch(getUserAdmin(id))
    }
    const handleSubmitPhoto = (e) => {
        e.preventDefault();
        setImage('');
        dispatch(editUser(id, input));
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        // setAuto({
        //   ...auto,
        //   [e.target.name]: e.target.value,
        // });
        // setErrorsCars(
        //   validatecars({
        //     ...auto,
        //     [e.target.name]: e.target.value,
        //   })
        // );
        // setErrorsUser(
        //     validateuser({
        //         ...input,
        //         [e.target.name]: e.target.value,
        //     })
        // );
    }


    // const uploadImage = async (e) => {
    //     const files = e.target.files;
    //     const data = new FormData();
    //     data.append("file", files[0]);
    //     data.append("upload_preset", "photoAdmin");


    //     const res = await fetch(
    //         "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
    //         {
    //             method: "POST",
    //             body: data,
    //         }
    //     );

    //     const file = await res.json();
    //     setImage(file.secure_url);
    // };
    // const uploadImage2 = async (e) => {
    //     const files = e.target.files;
    //     const data = new FormData();
    //     data.append("file", files[0]);
    //     data.append("upload_preset", "dniAdmin");


    //     const res = await fetch(
    //         "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
    //         {
    //             method: "POST",
    //             body: data,
    //         }
    //     );

    //     const file = await res.json();
    //     setDni([...dni, file.secure_url]);
    // };
    //   ___________________________________________________________________________________________


    // -----------------------------------------< gestion de errores>-----------------------------------
    // function validateuser(input) {
    //     booleanDNI = true;
    //     for (let i = 0; i < usuariosRegistrados.length; i++) {
    //         // if (usuariosRegistrados[i].dni.toString() === input.dni) {
    //         if (usuariosRegistrados[i].dni === input.dni) {
    //             booleanDNI = false;
    //         }
    //     }
    //     let errors = {};
    //     const wordvalidate = /^[a-zA-ZüéáíóúñÑ ]+$/;
    //     const phonevalidate = /^[0-9]+$/;
    //     if (!input.name) {
    //         errors.name = 'Name is required';
    //     } else if (wordvalidate.test(input.name) === false) {
    //         errors.name = 'Invalid Name: No Symbols Allowed';
    //     } else if (!input.lastName) {
    //         errors.lastName = 'Last name is required';
    //     } else if (wordvalidate.test(input.lastName) === false) {
    //         errors.lastName = 'Invalid Last Name: No Symbols Allowed';
    //     } else if (!input.dni) {
    //         errors.dni = 'DNI is required';
    //     } else if (booleanDNI === false) {
    //         errors.dni = 'DNI already exists';
    //     } else if (!input.age) {
    //         errors.age = 'Age required';
    //     } else if (input.age < 18) {
    //         errors.age = 'You must be 18 years old or older to register';
    //     } else if (!input.telephone) {
    //         errorsUser.telephone = 'Telephone is required';
    //     } else if (phonevalidate.test(input.telephone) === false) {
    //         errorsUser.telephone = 'Invalid Phone: Only Numbers Allowed';
    //     } else if (!input.street) {
    //         errors.street = 'Street is required';
    //     } else if (!input.city) {
    //         errors.city = 'City is required';
    //     } else if (wordvalidate.test(input.city) === false) {
    //         errors.city = 'Invalid City: No Symbols Allowed';
    //     } else if (!input.province) {
    //         errors.province = 'Province is required';
    //     } else if (wordvalidate.test(input.province) === false) {
    //         errors.province = 'Invalid Province: No Symbols Allowed';
    //     }
    //     return errors;
    // }
    //   __________________________________________________________________________________________


    // -----------------------------------------< gestion car>-----------------------------------
    // function validatecars(input) {
    //     const numberandlettervalidate = /^[0-9a-zA-Z ]+$/;
    //     const wordvalidate = /^[a-zA-Z]+$/;
    //     const floatvalidate = /^[0-9]*\.?[0-9]+$/;
    //     let errorsCars = {};
    //     if (!input.brand) {
    //       errorsCars.brand = 'Brand is required';
    //     } else if (wordvalidate.test(input.brand) === false) {
    //       errorsCars.brand = 'Invalid Brand: No Symbols Allowed';
    //     } else if (!input.model) {
    //       errorsCars.model = 'Model is required';
    //     } else if (!input.patent) {
    //       errorsCars.patent = 'Plate is required';
    //     } else if (numberandlettervalidate.test(input.patent) === false) {
    //       errorsCars.patent = 'Invalid Plate';
    //     } else if (!input.color) {
    //       errorsCars.color = 'Color is required';
    //     } else if (wordvalidate.test(input.color) === false) {
    //       errorsCars.color = 'Invalid Color: No Symbols Allowed';
    //     } else if (!input.cylinder) {
    //       errorsCars.cylinder = 'Cylinder is required';
    //     } else if (floatvalidate.test(input.cylinder) === false) {
    //       errorsCars.cylinder = 'Invalid Cylinder: No Symbols Allowed';
    //     }
    //     return errorsCars;
    //   }
    //   __________________________________________________________________________________________
    return (
        <div className="userAdmin">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/admin/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainerAdmin">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={userAdmin.photo || user.picture}
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{userAdmin.name}</span>
                            <span className="userShowUserTitle">{userAdmin?.cars?.length > 0 ? "Driver" : "Passenger"}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{userAdmin.name}</span>
                            <span className="userShowInfoTitle">{userAdmin.lastName}</span>
                        </div>
                        <div className="userShowInfo">
                            < AssignmentInd className="userShowIcon" />
                            <span className="userShowInfoTitle">{userAdmin.dni}</span>
                        </div>
                        <div className="userShowInfo">
                            <Event className="userShowIcon" />
                            <span className="userShowInfoTitle">{userAdmin.age}</span>
                        </div>
                        <div className="userShowInfo">
                            <WcOutlined className="userShowIcon" />
                            <span className="userShowInfoTitle">{userAdmin.genre}</span>
                        </div>
                        <div className="userShowInfo">
                            <Home className="userShowIcon" />
                            <span className="userShowInfoTitle">{userAdmin.street + "|"}</span>
                            <span className="userShowInfoTitle">{userAdmin.city + "|"}</span>
                            <span className="userShowInfoTitle">{userAdmin.province}</span>
                        </div>
                        <div className="userShowInfo">
                            <VpnKey className="userShowIcon" />
                            <span className="userShowInfoTitle">{userAdmin.isAdmin === true ? "Admin" : "Not Admin"}</span>
                        </div>
                        <span className="userShowTitle">Account Documents</span>
                        <div className="userShowInfo">
                            <PhotoCamera className="userShowIcon" />
                            {!userAdmin.photoDni ? "" : userAdmin.photoDni.map(e => <img src={e} alt="" className="userShowImge" />)}

                        </div>
                        <div className="userShowInfo">
                            <DirectionsCar className="userShowIcon" />
                            <img className="userShowInfoTitle" src={carAdmin?.greencard} />
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">{userAdmin.telephone}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{userAdmin.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <Facebook className="userShowIcon" />
                            <span className="userShowInfoTitle">{!userAdmin.facebook ? "No Facebook added" : userAdmin.facebook}</span>
                        </div>
                        <div className="userShowInfo">
                            <Instagram className="userShowIcon" />
                            <span className="userShowInfoTitle">{!userAdmin.instagram ? "No Instagram added" : userAdmin.instagram}</span>
                        </div>


                        {/*----------------------------------------------------<info car>----------------------------------------------------------------------------------- */}

                        {userAdmin?.cars?.length > 0 && (
                            <div className="userShow">
                                <div className="userShowBottom">
                                    <span className="userShowTitle">Car Details</span>
                                    <div className="userShowInfo">
                                        <PermIdentity className="userShowIcon" />
                                        <span className="userShowInfoTitle">{carAdmin?.brand}</span>

                                    </div>
                                    <div className="userShowInfo">
                                        < AssignmentInd className="userShowIcon" />
                                        <span className="userShowInfoTitle">{carAdmin?.color}</span>
                                    </div>
                                    <div className="userShowInfo">
                                        <Event className="userShowIcon" />
                                        <span className="userShowInfoTitle">{carAdmin?.model}</span>
                                    </div>
                                    <div className="userShowInfo">
                                        <WcOutlined className="userShowIcon" />
                                        <span className="userShowInfoTitle">{carAdmin?.cylinder}</span>
                                    </div>
                                    <div className="userShowInfo">
                                        <Home className="userShowIcon" />
                                        <span className="userShowInfoTitle">{carAdmin?.patent}</span>

                                    </div>
                                </div>
                            </div>)}
                    </div>




                </div>
                {/* ________________________< HASTA ACA PARA ARRIBA FUNCIONA_________________________________________ */}

                {/* ----------------------------------------<FORM>------------------------------------------------- */}
                {/* ------------------------<SI NO FUNCIONA ES CULPA DE MARI =)>------------------------------------------------- */}
                {/* <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <div className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Name</label>
                                <input
                                    // onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="name"
                                    placeholder={user.name}
                                    value={input.name}
                                    className="userUpdateInput"
                                />
                                {errorsUser.name && (
                                    <p className="errorcar">{errorsUser.name}</p>
                                )}

                            </div>

                            <div className="userUpdateItem">
                                <label>LastName</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="lastName"
                                    placeholder={userAdmin.lastName}
                                    value={input.lastName}
                                    className="userUpdateInput"
                                />

                                {errorsUser.lastName && (
                                    <p className="errorcar">{errorsUser.lastName}</p>
                                )}

                            </div>
                            <div className="userUpdateItem">
                                <label>DNI</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="number"
                                    name="dni"
                                    placeholder={userAdmin.dni}
                                    value={input.dni}
                                    className="userUpdateInput"
                                />
                                {errorsUser.dni && (
                                    <p className="errorcar">{errorsUser.dni}</p>
                                )}
                            </div>
                            <div className="userUpdateItem">
                                <label>Age</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="number"
                                    name="age"
                                    placeholder={userAdmin.age}
                                    value={input.age}
                                    className="userUpdateInput"
                                />
                                {errorsUser.age && (
                                    <p className="errorcar">{errorsUser.age}</p>
                                )}
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="telephone"
                                    placeholder={userAdmin.telephone}
                                    value={input.telephone}
                                    className="userUpdateInput"
                                />
                                {errorsUser.telephone && (
                                    <p className="errorcar">{errorsUser.telephone}</p>
                                )}
                            </div>

                            <div className="userUpdateItem">
                                <label>street</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="street"
                                    placeholder={userAdmin.street}
                                    value={input.street}
                                    className="userUpdateInput"
                                />
                                {errorsUser.street && (
                                    <p className="errorcar">{errorsUser.street}</p>
                                )}
                            </div>

                            <div className="userUpdateItem">
                                <label>City</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="city"
                                    placeholder={userAdmin.city}
                                    value={input.city}
                                    className="userUpdateInput"
                                />
                                {errorsUser.city && (
                                    <p className="errorcar">{errorsUser.city}</p>
                                )}
                            </div>

                            <div className="userUpdateItem">
                                <label>Province</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="province"
                                    placeholder={userAdmin.province}
                                    value={input.province}
                                    className="userUpdateInput"
                                />
                                {errorsUser.province && (
                                    <p className="errorcar">{errorsUser.province}</p>
                                )}
                            </div>

                            <div className="userUpdateItem">
                                <label>Admin</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="isAdmin"
                                    placeholder={userAdmin.isAdmin === true ? "true" : "false"}
                                    value={input.isAdmin}
                                    className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Genre</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="genre"
                                    placeholder={userAdmin.genre}
                                    value={input.genre}
                                    className="userUpdateInput"
                                />

                            </div>
                            <div className="userUpdateItem">
                                <label>Instagram</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="instagram"
                                    placeholder={userAdmin.instagram}
                                    value={input.instagram}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Facebook</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="facebook"
                                    placeholder={userAdmin.facebook}
                                    value={input.facebook}
                                    className="userUpdateInput"
                                />
                            </div>
                        </div> */}


                {/* ___________________________________________________________________________ */}



                {/* ----------------------------<container center Car>------------------------ */}
                {/* {carAdmin?.brand && (
                            <div className="userUpdateCenter">
                                <div className="userUpdateItem">
                                    <label>Brand</label>
                                    <input
                                        onChange={(e) => handleChange(e)}
                                        type="text"
                                        name="brand"
                                        placeholder={carAdmin.brand}
                                        className="userUpdateInput"
                                        value={auto.brand}
                                    />
                                    {errorsCars.brand && (
                                        <p className="errorcar">{errorsCars.brand}</p>
                                    )}
                                </div>

                                <div className="userUpdateItem">
                                    <label>Model</label>
                                    <input
                                        onChange={(e) => handleChange(e)}
                                        type="text"
                                        name="brand"
                                        placeholder={carAdmin.model}
                                        className="userUpdateInput"
                                        value={auto.model}
                                    />
                                    {errorsCars.model && (
                                        <p className="errorcar">{errorsCars.model}</p>
                                    )}
                                </div>

                                <div className="userUpdateItem">
                                    <label>Color</label>
                                    <input
                                        onChange={(e) => handleChange(e)}
                                        type="text"
                                        name="brand"
                                        placeholder={carAdmin.color}
                                        className="userUpdateInput"
                                        value={auto.color}
                                    />
                                    {errorsCars.color && (
                                        <p className="errorcar">{errorsCars.color}</p>
                                    )}
                                </div>

                                <div className="userUpdateItem">
                                    <label>Cylinder</label>
                                    <input
                                        onChange={(e) => handleChange(e)}
                                        type="text"
                                        name="brand"
                                        placeholder={carAdmin.cylinder}
                                        className="userUpdateInput"
                                        value={auto.cylinder}
                                    />
                                    {errorsCars.cylinder && (
                                        <p className="errorcar">{errorsCars.cylinder}</p>
                                    )}
                                </div>
                            </div>)
                        } */}

                {/* ______________________________________________________________________ */}

                {/* <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <span className="userShowTitle">Photo User</span> */}
                {/* <img
                                    className="userUpdateImg"
                                    src={userAdmin.photo}
                                    alt=""
                                />
                                <div>
                                    <input
                                        onChange={(e) => uploadImage(e)}
                                        className="userUpdateInput"
                                        type="file"
                                        name="photo"
                                        value={input.photo}
                                        accept="image/png, image/jpeg"
                                    />
                                </div>

                                <br />
                                <span className="userShowTitle">DNI</span>
                                <div className="userUpdateUpload">
                                    {!userAdmin.photoDni ? "" : userAdmin.photoDni.map(e => <img src={e} alt="" className="userUpdateImg" />)}

                                    <div>
                                        <input
                                            onChange={(e) => uploadImage2(e)}
                                            className="userUpdateInput"
                                            type="file"
                                            name="photo"
                                            value={input.photo}
                                            accept="image/png, image/jpeg"
                                        />
                                    </div>


                                </div>
                                <br />
                                <span className="userShowTitle">GreenCard</span>
                                <div className="userUpdateUpload">
                                    <img
                                        className="userUpdateImg"
                                        src={auto?.greencard}
                                        alt=""
                                    />
                                    <div>
                                        <input
                                            onChange={(e) => uploadImage2(e)}
                                            className="userUpdateInput"
                                            type="file"
                                            name="photo"
                                            value={auto?.greencard}
                                            accept="image/png, image/jpeg"
                                        />
                                    </div>


                                </div>
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label> */}

                {/* <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button onClick={(e) => handleSubmitUser(e)} className="userUpdateButton">Update</button>
                        </div>
                    </div>
                </div> */}

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                   
                                    placeholder="annabeck99"
                                    value={input.name}
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Anna Becker"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="annabeck99@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="+1 123 456 67"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="New York | USA"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>


            </div >
        </div >
    )
}
