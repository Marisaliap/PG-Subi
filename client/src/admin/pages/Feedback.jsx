import React, { useEffect, useState } from 'react'
import {
    MailOutline,
    PermIdentity,
    Message
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux"
import { getAllUsers, getMejorasYReclamos, deleteReclamos } from "../../actions"
import "../../styles/UserList.css";


export default function Feedback() {
    const dispatch = useDispatch()
    const { reclamosymejoras } = useSelector(state => state)
    const [reclamos, setReclamos] = useState(reclamosymejoras)
    // ------------------------------<useEffect> ------------------------------
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getMejorasYReclamos())
        return () => {
            dispatch(getAllUsers());
            dispatch(getMejorasYReclamos())
        };
    }, [dispatch, reclamos])

    // --------------------------<handles>--------------------------

    function deleteSuggestion(id) {
        setReclamos(reclamos.filter(reclamo => reclamo.id !== id))
        dispatch(deleteReclamos(id))
    }
    // ______________________________________________________________________________________
    return (
        <div className="userAdmin">
            <div className="userTitleContainer">
                <h1 className="userTitle">Users Suggestions</h1>
            </div>
            <div className="userContainerAdmin">
                <div className="userShow">
                    <div className="userShowBottom">
                        <span className="userShowTitle">Suggestions</span>
                        {/* {reclamos ? ( */}

                        {reclamos && reclamos?.map((e, i) => {
                            return <div key={i + "d"} className="userShowSuggestion" >
                                <div>
                                    <PermIdentity className="userShowIcon" />
                                    <span key={i + "h"} className="userShowInfoTitle" >{e.author}</span>
                                </div>
                                <div>
                                    < MailOutline className="userShowIcon" />
                                    <span key={i + "p1"} className="userShowInfoTitle" >{e.authorEmail}</span>
                                </div>
                                <div>
                                < Message className="userShowIcon" />
                                <span key={i + "p2"}> {e.suggestion}</span>
                                </div>
                                <button key={i + "b"} className="userButtonSuggestion" onClick={() => deleteSuggestion(e.id)} >Delete</button>

                            </div>
                        })

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

