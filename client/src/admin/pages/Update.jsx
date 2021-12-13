import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import "../../styles/User.css";
import { editUser, getUserProfile, getAllUsers, getUserAdmin, editCar } from "../../actions";


export default function Update() {
    const { id, userAdmin, carAdmin, usuariosRegistrados } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory();
    let booleanDNI;
    console.log(userAdmin.photoDni)
    console.log(carAdmin)

    // -------------------------------------<useEffect>-------------------------------------
    useEffect(() => {
        dispatch(getUserAdmin(id));
        dispatch(getAllUsers());
        // dispatch(getUserProfile(id)); //sin esto funciona
       
        return () => {
            dispatch(getUserAdmin(id));
            dispatch(getAllUsers());
        };
    }, [dispatch, id]);


    //   -------------------------------------< estados> --------------------------------
    const [errorsCars, setErrorsCars] = useState({});
    const [errorsUser, setErrorsUser] = useState({});
    const [image, setImage] = useState(userAdmin?.photo);
    const [dniFront, setDniFront] = useState(userAdmin?.photoDni[0]);
    const [dniBack, setDniBack] = useState(userAdmin?.photoDni[1]);
    const [greencard, setGreencard] = useState(carAdmin?.greencard === undefined?carAdmin?.greencard:carAdmin?.greencard);
    // const [greencard, setGreencard] = useState(carAdmin?.greencard);

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


    // ------------------<handles>------------------

    const handleSubmitUser = (e) => {
        e.preventDefault();
        dispatch(getUserProfile(id))
        dispatch(editUser(id, input));
        dispatch(getUserAdmin(id))
        handleSubmitPhoto(e)
        handleSubmitPhoto2(e)
        dispatch(getAllUsers())
        history.push("/admin/users")
    }

    const handleSubmitPhoto = (e) => {
        e.preventDefault();
        setImage('');
        setDniFront("");
        setDniBack("");
        setGreencard('');
        dispatch(editUser(id, input));
        dispatch(getUserAdmin(id));
    }
    const handleSubmitPhoto2 = (e) => {
        e.preventDefault();
        setGreencard('');
        dispatch(editUser(id, input));
        dispatch(getUserAdmin(id));
        carAdmin?.id && dispatch(editCar(carAdmin.id, auto))

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


    const uploadImagefront = async (e) => {
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

        setDniFront(file.secure_url);

    };

    const uploadImageback = async (e) => {
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
        setDniBack(file.secure_url);

    };

    const uploadImage3 = async (e) => {
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
        setGreencard(file.secure_url);
    };
    //   ___________________________________________________________________________________________


    // -----------------------------------------< gestion de errores>-----------------------------------
    function validateuser(input) {
        booleanDNI = true;
        for (let i = 0; i < usuariosRegistrados.length; i++) {
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
                                <br />
                                <span className="userShowTitle">DNI FRONT</span>
                                <div className="userUpdateUpload">
                                    {!userAdmin.photoDni ? "" : <img src={userAdmin.photoDni[0]} alt="" className="userUpdateImg" />}

                                    <div>
                                        <input
                                            onChange={(e) => uploadImagefront(e)}
                                            className="userUpdateInput"
                                            type="file"
                                            name="dniFront"
                                            accept="image/png, image/jpeg"
                                        />
                                    </div>
                                    <div Style="display:none">{(input.photoDni[0] = dniFront)}</div>

                                </div>
                                <br />
                                <span className="userShowTitle">DNI BACK</span>
                                <div className="userUpdateUpload">
                                    {!userAdmin.photoDni ? "" : <img src={userAdmin.photoDni[1]} alt="" className="userUpdateImg" />}

                                    <div>
                                        <input
                                            onChange={(e) => uploadImageback(e)}
                                            className="userUpdateInput"
                                            type="file"
                                            name="dniFront"
                                            accept="image/png, image/jpeg"
                                        />
                                    </div>
                                    <div Style="display:none">{(input.photoDni[1] = dniBack)}</div>

                                </div>
                                <br />
                                {userAdmin?.cars?.length > 0 &&
                                    <>
                                        <span className="userShowTitle">GreenCard</span>

                                        <div className="userUpdateUpload">
                                            <img
                                                className="userUpdateImg"
                                                src={carAdmin?.greencard}
                                                alt=""
                                            />
                                            <div>
                                                <input
                                                    onChange={(e) => uploadImage3(e)}
                                                    className="userUpdateInput"
                                                    type="file"
                                                    name="greencard"
                                                    accept="image/png, image/jpeg"
                                                />
                                            </div>
                                            <div Style="display:none">{(auto.greencard = greencard)}</div>

                                        </div>
                                    </>
                                }


                            </div>

            
                        </div>
                        <button onClick={(e) => { handleSubmitUser(e) }} className="userUpdateButton">Update</button>
                    </div>
                </div>
            </div>
        </div>)
}