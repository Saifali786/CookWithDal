import React, { useState } from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


//https://mdbootstrap.com/docs/react/extended/profiles/

export default function DisplayProfilePage() {
    const navigate = useNavigate();

    var list = JSON.parse(localStorage.getItem("list"));
    console.log(list);

    if (list === undefined || list === null || list.length == 0) {
        list = ["Nothing is added in the list"];
    }
    const listItems = list.map((listItem) => <li>{listItem}</li>);

    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const [displayType, setDisplayType] = useState("created"); // initial display

    function deleterecipe() {
        alert("Recipe deleted Successfully");
    }
    function updaterecipe() {
        navigate("/updateRecipe");
    }

    function onSavedHandler() {
        setShowModal(true);
        setShow(true);
        setDisplayType("saved");
    }

    function onCreatedHandler() {
        setDisplayType("created");
    }

    const handleClose = () => setShow(false);

    // render content based on displayType
    const renderContent = () => {
        if (displayType === "created") {
            return (
                <div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBCardText className="lead fw-normal mb-0">
                            Recent Recipes
                        </MDBCardText>
                        <MDBCardText className="mb-0">
                            <a href="#!" className="text-muted">
                                Show all
                            </a>
                        </MDBCardText>
                    </div>
                    {/* <p>Created posts</p> */}

                    {/* display created posts */}
                    <MDBRow>
                        <MDBCol className="mb-2">
                            <div>
                                <MDBCardImage
                                    src="6.jpg"
                                    alt="image 1"
                                    className="w-100 rounded-3"
                                />

                            </div>
                            <div className="mt-2 mb-2">
                                <MDBBtn
                                    outline
                                    color="dark"
                                    onClick={deleterecipe}
                                    style={{ height: "36px", overflow: "visible" }}
                                >
                                    Delete
                                </MDBBtn>
                                &nbsp; &nbsp; &nbsp;
                                <MDBBtn
                                    outline
                                    color="dark"
                                    onClick={updaterecipe}
                                    style={{ height: "36px", overflow: "visible" }}
                                >
                                    Update
                                </MDBBtn>
                            </div>
                        </MDBCol>

                        <MDBCol className="mb-2">
                            <MDBCardImage
                                src="7.jpg"
                                alt="image 1"
                                className="w-100 rounded-3"
                            />
                            <div className="mt-2 mb-2">
                                <MDBBtn
                                    outline
                                    color="dark"
                                    onClick={deleterecipe}
                                    style={{ height: "36px", overflow: "visible" }}
                                >
                                    Delete
                                </MDBBtn>
                                &nbsp; &nbsp; &nbsp;
                                <MDBBtn
                                    outline
                                    color="dark"
                                    onClick={updaterecipe}
                                    style={{ height: "36px", overflow: "visible" }}
                                >
                                    Update
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="g-2">
                        <MDBCol className="mb-2">
                            <MDBCardImage
                                src="8.jpg"
                                alt="image 1"
                                className="w-100 rounded-3"
                            />
                            <div className="mt-2 mb-2">
                                <MDBBtn
                                    outline
                                    color="dark"
                                    onClick={deleterecipe}
                                    style={{ height: "36px", overflow: "visible" }}
                                >
                                    Delete
                                </MDBBtn>
                                &nbsp; &nbsp; &nbsp;
                                <MDBBtn
                                    outline
                                    color="dark"
                                    onClick={updaterecipe}
                                    style={{ height: "36px", overflow: "visible" }}
                                >
                                    Update
                                </MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol className="mb-2">
                            <MDBCardImage
                                src="9.jpg"
                                alt="image 1"
                                className="w-100 rounded-3"
                            />
                            <div className="mt-2 mb-2">
                                <MDBBtn
                                    outline
                                    color="dark"
                                    onClick={deleterecipe}
                                    style={{ height: "36px", overflow: "visible" }}
                                >
                                    Delete
                                </MDBBtn>
                                &nbsp; &nbsp; &nbsp;
                                <MDBBtn
                                    outline
                                    color="dark"
                                    onClick={updaterecipe}
                                    style={{ height: "36px", overflow: "visible" }}
                                >
                                    Update
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>
            );
        } else if (displayType === "saved") {
            return (
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Saved Posts</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ul>{listItems}</ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBCardText className="lead fw-normal mb-0">
                            Saved Recipes
                        </MDBCardText>
                        <MDBCardText className="mb-0">
                            <a href="#!" className="text-muted">
                                Show all
                            </a>
                        </MDBCardText>
                    </div>
                    {/* <p>Saved posts</p> */}
                    {/* display saved posts */}
                </div>
            );
        }
    };

    return (
        <div className="gradient-custom-2">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="10" xl="10">
                        <MDBCard>
                            <div
                                className="rounded-top text-white d-flex flex-row"
                                style={{ backgroundColor: "#000", height: "200px" }}
                            >
                                <div
                                    className="ms-4 mt-5 d-flex flex-column"
                                    style={{ width: "150px" }}
                                >
                                    <MDBCardImage
                                        src="abby1.png"
                                        alt="Generic placeholder image"
                                        className="mt-4 mb-2 img-thumbnail"
                                        fluid
                                        style={{ width: "150px", zIndex: "1" }}
                                    />
                                    <MDBBtn
                                        outline
                                        color="dark"
                                        style={{ height: "36px", overflow: "visible" }}
                                    >
                                        Edit profile
                                    </MDBBtn>
                                </div>
                                <div className="ms-3" style={{ marginTop: "130px" }}>
                                    <MDBTypography tag="h5">Abby Johns</MDBTypography>
                                    <MDBCardText>Halifax, NS</MDBCardText>
                                </div>
                            </div>
                            <div
                                className="p-4 text-black"
                                style={{ backgroundColor: "#f8f9fa" }}
                            >
                                <div>
                                    <MDBBtn
                                        outline
                                        color="dark"
                                        onClick={() => navigate("/updateProfile")}
                                        style={{ height: "36px", overflow: "visible" }}
                                    >
                                        Edit Profile
                                    </MDBBtn>
                                </div>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <MDBCardText className="mb-1 h5">253</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">
                                            Photos
                                        </MDBCardText>
                                    </div>
                                    <div className="px-3">
                                        <MDBCardText className="mb-1 h5">1026</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">
                                            Followers
                                        </MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className="mb-1 h5">478</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">
                                            Following
                                        </MDBCardText>
                                    </div>
                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Bio</p>
                                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                        <MDBCardText className="font-italic mb-1">
                                            Web Developer
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-1">
                                            Lives in Halifax
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-0">
                                            Artist
                                        </MDBCardText>
                                    </div>
                                </div>
                                <div>
                                    <MDBBtn
                                        outline
                                        focus
                                        color="dark"
                                        style={{ height: "36px", overflow: "visible" }}
                                        onClick={onCreatedHandler}
                                    >
                                        Created
                                    </MDBBtn>
                                    &nbsp; &nbsp; &nbsp;
                                    <MDBBtn
                                        outline
                                        color="dark"
                                        style={{ height: "36px", overflow: "visible" }}
                                        onClick={onSavedHandler}
                                    >
                                        Saved
                                    </MDBBtn>
                                </div>
                                <div className="mt-5">
                                    {renderContent()}
                                </div>

                                {/* <div className="d-flex justify-content-between mt-3">
                                    <Button variant="success" onClick={updaterecipe}>
                                        Update
                                    </Button>
                                    <Button variant="danger" onClick={deleterecipe}>
                                        Delete
                                    </Button>
                                </div> */}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}





