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
import { editUser, getUserProfile, getAllUsers, getUserAdmin, getUserDetail, editCar } from "../../actions";


export default function Update() {
    const { id, userAdmin, carAdmin, usuariosRegistrados, car } = useSelector(state => state)
    const users = useSelector(state => state)
    const { user } = useAuth0();
    const dispatch = useDispatch()
    let booleanDNI;
    // -------------------------------------<useEffect>-------------------------------------
    useEffect(() => {
        dispatch(getUserAdmin(id));
        dispatch(getAllUsers());
    }, [dispatch, id]);
    //   -------------------------------------< estados> --------------------------------
    const [errorsCars, setErrorsCars] = useState({});
    const [errorsUser, setErrorsUser] = useState({});
    const [image, setImage] = useState(userAdmin?.photo);
    const [dni, setDni] = useState([]);

    const [input, setInput] = useState({
        email: userAdmin.email,
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
        car: userAdmin.cars
    });

    console.log("INPUT", input)
    console.log("USERAMIN2", userAdmin)
    console.log("link ", image)
    console.log("DNI ", dni)




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
    console.log("CAR", carAdmin)

    // ------------------<handles>------------------
    const handleSubmitUser = (e) => {
        e.preventDefault();
        dispatch(editUser(id, input));
        dispatch(getUserProfile(id));
        dispatch(getUserAdmin(id))
        carAdmin?.id && dispatch(editCar(carAdmin.id, auto))
        handleSubmitPhoto(e)
        handleSubmitPhoto2(e)

    }
    const handleSubmitPhoto = (e) => {
        e.preventDefault();
        setImage('');
        dispatch(editUser(id, input));
        dispatch(getUserAdmin(id))
        dispatch(getUserProfile(id));
    }
    const handleSubmitPhoto2 = (e) => {
        e.preventDefault();
        setDni([]);
        dispatch(editUser(id, input));
        dispatch(getUserAdmin(id))
        dispatch(getUserProfile(id));
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setAuto({
            ...auto,
            [e.target.name]: e.target.value,
        });
        setErrorsCars(
            validatecars({
                ...auto,
                [e.target.name]: e.target.value,
            })
        );
        setErrorsUser(
            validateuser({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }


    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "photoAdmin");


        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
            {
                method: "POST",
                body: data,
            }
        );

        const file = await res.json();
        setImage(file.secure_url);
    };

    const uploadImage2 = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "dniAdmin");


        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
            {
                method: "POST",
                body: data,
            }
        );

        const file = await res.json();
        setDni([...dni, file.secure_url]);
    };
    //   ___________________________________________________________________________________________


    // -----------------------------------------< gestion de errores>-----------------------------------
    function validateuser(input) {
        booleanDNI = true;
        for (let i = 0; i < usuariosRegistrados.length; i++) {
            // if (usuariosRegistrados[i].dni.toString() === input.dni) {
            if (usuariosRegistrados[i].dni === input.dni) {
                booleanDNI = false;
            }
        }
        let errors = {};
        const wordvalidate = /^[a-zA-ZüéáíóúñÑ ]+$/;
        const phonevalidate = /^[0-9]+$/;
        if (!input.name) {
            errors.name = 'Name is required';
        } else if (wordvalidate.test(input.name) === false) {
            errors.name = 'Invalid Name: No Symbols Allowed';
        } else if (!input.lastName) {
            errors.lastName = 'Last name is required';
        } else if (wordvalidate.test(input.lastName) === false) {
            errors.lastName = 'Invalid Last Name: No Symbols Allowed';
        } else if (!input.dni) {
            errors.dni = 'DNI is required';
        } else if (booleanDNI === false) {
            errors.dni = 'DNI already exists';
        } else if (!input.age) {
            errors.age = 'Age required';
        } else if (input.age < 18) {
            errors.age = 'You must be 18 years old or older to register';
        } else if (!input.telephone) {
            errorsUser.telephone = 'Telephone is required';
        } else if (phonevalidate.test(input.telephone) === false) {
            errorsUser.telephone = 'Invalid Phone: Only Numbers Allowed';
        } else if (!input.street) {
            errors.street = 'Street is required';
        } else if (!input.city) {
            errors.city = 'City is required';
        } else if (wordvalidate.test(input.city) === false) {
            errors.city = 'Invalid City: No Symbols Allowed';
        } else if (!input.province) {
            errors.province = 'Province is required';
        } else if (wordvalidate.test(input.province) === false) {
            errors.province = 'Invalid Province: No Symbols Allowed';
        }
        return errors;
    }
    // -----------------------------------------< gestion car>-----------------------------------
    function validatecars(input) {
        const numberandlettervalidate = /^[0-9a-zA-Z ]+$/;
        const wordvalidate = /^[a-zA-Z]+$/;
        const floatvalidate = /^[0-9]*\.?[0-9]+$/;
        let errorsCars = {};
        if (!input.brand) {
            errorsCars.brand = 'Brand is required';
        } else if (wordvalidate.test(input.brand) === false) {
            errorsCars.brand = 'Invalid Brand: No Symbols Allowed';
        } else if (!input.model) {
            errorsCars.model = 'Model is required';
        } else if (!input.patent) {
            errorsCars.patent = 'Plate is required';
        } else if (numberandlettervalidate.test(input.patent) === false) {
            errorsCars.patent = 'Invalid Plate';
        } else if (!input.color) {
            errorsCars.color = 'Color is required';
        } else if (wordvalidate.test(input.color) === false) {
            errorsCars.color = 'Invalid Color: No Symbols Allowed';
        } else if (!input.cylinder) {
            errorsCars.cylinder = 'Cylinder is required';
        } else if (floatvalidate.test(input.cylinder) === false) {
            errorsCars.cylinder = 'Invalid Cylinder: No Symbols Allowed';
        }
        return errorsCars;
    }
    return (
        <div className="userAdmin">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
            </div>
            <div className="userContainerAdmin">

                <div className="userUpdate">
                    <span className="userUpdateTitle">{userAdmin.name}</span>
                    <div className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Name</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    name="name"
                                    placeholder={userAdmin.name}
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
                                    placeholder={userAdmin.isAdmin}
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
                        </div>


                        {/* ___________________________________________________________________________ */}



                        {/* ----------------------------<container center Car>------------------------ */}
                        {carAdmin?.brand && (
                            <div className="userUpdateCenter">
                                <div className="userUpdateItem">
                                    <label>Brand</label>
                                    <input
                                        onChange={(e) => handleChange(e)}
                                        type="text"
                                        name="brand"
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
                                        name="model"
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
                                        name="color"
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
                                        name="cylinder"
                                        className="userUpdateInput"
                                        value={auto.cylinder}
                                    />
                                    {errorsCars.cylinder && (
                                        <p className="errorcar">{errorsCars.cylinder}</p>
                                    )}
                                </div >
                            </div >
                        )

                        }

                        {/* ______________________________________________________________________ */}

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <span className="userShowTitle">Photo User</span>
                                <img
                                    className="userUpdateImg"
                                    src={userAdmin.photo}
                                    alt=""
                                />
                                <div>
                                    <input
                                        onChange={(e) => uploadImage(e)}
                                        className="userUpdateInput"
                                        type="file"
                                        name="image"
                                        accept="image/png, image/jpeg"
                                    />
                                </div>
                                <div Style="display:none">{(input.photo = image)}</div>
                                {/* <button onClick={(e) => handleSubmitPhoto(e)} className="userUpdateButton" >update</button> */}
                                <br />
                                <span className="userShowTitle">DNI</span>
                                <div className="userUpdateUpload">
                                    {!userAdmin.photoDni ? "" : userAdmin.photoDni.map(e => <img src={e} alt="" className="userUpdateImg" />)}

                                    {/* <div>
                                        <input
                                            onChange={(e) => uploadImage2(e)}
                                            className="userUpdateInput"
                                            type="file"
                                            name="dni"
                                            accept="image/png, image/jpeg"
                                        />
                                    </div>
                                    <div Style="display:none">{(input.dni = dni)}</div> */}

                                </div>
                                <br />
                                {userAdmin?.cars?.length > 0 &&
                                    <>
                                        <span className="userShowTitle">GreenCard</span>

                                        <div className="userUpdateUpload">
                                            <img
                                                className="userUpdateImg"
                                                src={auto?.greencard}
                                                alt=""
                                            />
                                            {/* <div>
                                                <input
                                                    onChange={(e) => uploadImage2(e)}
                                                    className="userUpdateInput"
                                                    type="file"
                                                    name="photo"
                                                    value={auto?.greencard}
                                                    accept="image/png, image/jpeg"
                                                />
                                            </div> */}


                                        </div>
                                    </>
                                }


                            </div>

                            {/* <input type="file" id="file" style={{ display: "none" }} /> */}
                        </div>
                        <Link to="/admin/users"> <button onClick={(e) => handleSubmitUser(e)} className="userUpdateButton">Update</button></Link>
                    </div>









                </div>
            </div>
        </div>)
}