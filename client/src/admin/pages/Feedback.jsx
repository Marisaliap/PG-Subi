import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllUsers, getMejorasYReclamos, deleteReclamos } from "../../actions"
import "../../styles/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

export default function Feedback() {
    const { reclamosymejoras } = useSelector(state => state)
    const [reclamos, setReclamos] = useState(reclamosymejoras)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getMejorasYReclamos())
    }, [dispatch, reclamos])

    // --------------------------<handles>--------------------------

    function deleteSuggestion(id) {
        setReclamos(reclamos.filter(reclamo => reclamo.id !== id))
        dispatch(deleteReclamos(id))
    }






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
                            return <div key={i + "d"}>
                                <h3 key={i + "h"}>{e.author}</h3>
                                <p key={i + "p1"}>{e.email}</p>
                                <p key={i + "p2"}>{e.suggestion}</p>
                                <button key={i + "b"} className="userAddButton" onClick={() => deleteSuggestion(e.id)} >Delete</button>
                            </div>
                        })

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
//
