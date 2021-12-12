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

export default function User2() {
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
    const [image, setImage] = useState("")
    const [dni, setDni] = useState([])

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
    console.log("USERAMIN", userAdmin)




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
        })
    };

    function Click() {
        dispatch(getUserAdmin(id))
    }
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

            <Link to="/admin/Update"><button className="userUpdateButton" onClick={() => Click()}>Update</button></Link>
        </div>
    </div>









)
}
