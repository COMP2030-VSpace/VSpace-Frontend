/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef, useContext, useState } from "react";
import "./setup.scss";
import { AuthContext } from "../../contexts/AuthContext";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Button from "../../components/button/Button";
// import HomeSearch from '../../components/search/homeSearch/HomeSearch';
import Footer from "../../components/footer/Footer";

const Setup = (props) => {
    // import contexts
    const { getEmailFromToken, createUser } = useContext(AuthContext);

    // import states
    const [regState, setRegState] = useState(1);
    const [isBoxChecked, setIsBoxChecked] = useState(false);

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [contact, setContact] = useState("");
    const [language, setLanguage] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    // functions
    const setChecked = (newBoxState) => {
        setIsBoxChecked(newBoxState);
    };

    const nextState = () => {
        setRegState(regState + 1);
    };

    const handleChange = (event, type) => {
        // console.log(event.target.value);
        if(type === "firstname"){
            // console.log("debug 1");
            setFirstname(event.target.value);
        }
        else if(type === "lastname"){
            // console.log("debug 2");
            setLastname(event.target.value);
        }
        else if(type === "contact"){
            // console.log("debug 2");
            setContact(event.target.value);
        }
        else if(type === "language"){
            // console.log("debug 2");
            setLanguage(event.target.value);
        }
        else if(type === "password"){
            // console.log("debug 2");
            setPassword(event.target.value);
        }
        else if(type === "retypePassword"){
            // console.log("debug 2");
            setRetypePassword(event.target.value);
        }
    }

    const submitForm = async () => {
        // verify input

        // 
        const path = window.location.pathname;
        const token = path.split("/").pop();

        const data = {
            "metadata": {
              "eperson.firstname": [
                {
                  "value": firstname,
                  "language": null,
                  "authority": "",
                  "confidence": -1
                }
              ],
              "eperson.lastname": [
                {
                  "value": lastname,
                  "language": null,
                  "authority": "",
                  "confidence": -1
                }
              ]
            },
            "email": email,
            "password": password,
            "canLogIn": true,
            "requireCertificate": false,
            "type": "eperson"
        }

        const response = await createUser(token, data);

        // console.log(response);
        
        // redirect to home
        if(response.data.success && response.data.email === email){
            window.location.href = "/"
        }


    }

    useEffect(() => {
        const path = window.location.pathname;
        const token = path.split("/").pop();

        const loadEmail = async (token) => {
            const responseEmail = await getEmailFromToken(token);
            setEmail(responseEmail)
        }

        loadEmail(token);
    }, [])
    

    return (
        <div className="register-setup mb10">
            <Navbar></Navbar>
            {/* <Banner></Banner> */}

            {regState === 1 && (
                <div className="main">
                    {/* Tung starts here */}
                    <div className="main--header">End User Agreement</div>

                    <div className="main--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Nunc sed velit dignissim sodales ut eu. In
                        ante metus dictum at tempor. Diam phasellus vestibulum
                        lorem sed risus. Sed cras ornare arcu dui vivamus. Sit
                        amet consectetur adipiscing elit pellentesque. Id velit
                        ut tortor pretium viverra suspendisse potenti. Sed
                        euismod nisi porta lorem mollis aliquam ut. Justo
                        laoreet sit amet cursus sit amet dictum sit. br
                        Ullamcorper morbi tincidunt ornare massa eget egestas.
                        In iaculis nunc sed augue lacus. Curabitur vitae nunc
                        sed velit dignissim sodales ut eu sem. Tellus id
                        interdum velit laoreet id donec ultrices tincidunt arcu.
                        Quis vel eros donec ac odio tempor.
                        <br />
                        Viverra accumsan in nisl nisi scelerisque eu ultrices
                        vitae. Varius quam quisque id diam vel quam. Nisl
                        tincidunt eget nullam non nisi est sit. Nunc aliquet
                        bibendum enim facilisis. Aenean sed adipiscing diam
                        donec adipiscing. Convallis tellus id interdum velit
                        laoreet. Massa placerat duis ultricies lacus sed turpis
                        tincidunt. Sed cras ornare arcu dui vivamus arcu.
                        Egestas integer eget aliquet nibh praesent tristique.
                        Sit amet purus gravida quis blandit turpis cursus in
                        hac. Porta non pulvinar neque laoreet suspendisse. Quis
                        risus sed vulputate odio ut. Dignissim enim sit amet
                        venenatis urna cursus. Interdum velit laoreet id donec
                        ultrices tincidunt arcu non sodales. Massa sapien
                        faucibus et molestie. Dictumst vestibulum rhoncus est
                        pellentesque elit ullamcorper. Metus dictum at tempor
                        commodo ullamcorper.
                        <br />
                        Tincidunt lobortis feugiat vivamus at augue eget. Non
                        diam phasellus vestibulum lorem sed risus ultricies.
                        Neque aliquam vestibulum morbi blandit cursus risus at
                        ultrices mi. Euismod lacinia at quis risus sed. Lorem
                        mollis aliquam ut porttitor leo a diam. Ipsum dolor sit
                        amet consectetur. Ante in nibh mauris cursus mattis
                        molestie a iaculis at. Commodo ullamcorper a lacus
                        vestibulum. Pellentesque elit eget gravida cum sociis.
                        Sit amet commodo nulla facilisi nullam vehicula.
                        Vehicula ipsum a arcu cursus vitae congue mauris rhoncus
                        aenean. Ac turpis egestas maecenas pharetra convallis.
                        Lacus sed viverra tellus in. Nullam eget felis eget nunc
                        lobortis mattis aliquam faucibus purus. Id aliquet risus
                        feugiat in ante metus dictum at. Quis enim lobortis
                        scelerisque fermentum dui faucibus. Eu volutpat odio
                        facilisis mauris sit amet massa vitae tortor. Tellus
                        elementum sagittis vitae et leo. Cras sed felis eget
                        velit aliquet sagittis. Proin fermentum leo vel orci
                        porta non pulvinar neque laoreet. Dui sapien eget mi
                        proin sed libero enim. Ultrices mi tempus imperdiet
                        nulla malesuada. Mattis molestie a iaculis at. Turpis
                        massa sed elementum tempus egestas. Dui faucibus in
                        ornare quam viverra orci sagittis eu volutpat. Cras
                        adipiscing enim eu turpis. Ac felis donec et odio
                        pellentesque. Iaculis nunc sed augue lacus viverra vitae
                        congue eu consequat. Posuere lorem ipsum dolor sit amet
                        consectetur adipiscing elit duis. Elit eget gravida cum
                        sociis natoque penatibus. Id faucibus nisl tincidunt
                        eget nullam non. Sagittis aliquam malesuada bibendum
                        arcu vitae. Fermentum leo vel orci porta. Aliquam
                        ultrices sagittis orci a scelerisque purus semper. Diam
                        maecenas sed enim ut sem viverra aliquet eget sit.
                        <br />
                        Et ultrices neque ornare aenean euismod. Eu mi bibendum
                        neque egestas congue quisque egestas diam. Eget lorem
                        dolor sed viverra. Ut lectus arcu bibendum at. Rutrum
                        tellus pellentesque eu tincidunt tortor. Vitae congue eu
                        consequat ac. Elit ullamcorper dignissim cras tincidunt.
                        Sit amet volutpat consequat mauris nunc congue nisi.
                        Cursus in hac habitasse platea dictumst quisque sagittis
                        purus. Placerat duis ultricies lacus sed turpis
                        tincidunt. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis. Non nisi est sit amet facilisis
                        magna. In massa tempor nec feugiat nisl pretium fusce.
                        Pulvinar neque laoreet suspendisse interdum consectetur.
                        Ullamcorper morbi tincidunt ornare massa eget egestas
                        purus viverra accumsan. Fringilla urna porttitor rhoncus
                        dolor purus non enim. Mauris nunc congue nisi vitae
                        suscipit. Commodo elit at imperdiet dui accumsan sit
                        amet nulla. Tempor id eu nisl nunc mi ipsum faucibus.
                        Porta non pulvinar neque laoreet suspendisse. Nec nam
                        aliquam sem et tortor consequat. Eget nunc lobortis
                        mattis aliquam faucibus purus. Odio tempor orci dapibus
                        ultrices. Sed nisi lacus sed viverra tellus. Elit
                        ullamcorper dignissim cras tincidunt. Porttitor rhoncus
                        dolor purus non enim praesent elementum facilisis.
                        Viverra orci sagittis eu volutpat odio. Pharetra massa
                        massa ultricies mi quis.
                        <br />
                        Lectus vestibulum mattis ullamcorper velit sed
                        ullamcorper. Pulvinar neque laoreet suspendisse interdum
                        consectetur. Vitae auctor eu augue ut. Arcu dictum
                        varius duis at consectetur lorem donec. Massa sed
                        elementum tempus egestas sed sed. Risus viverra
                        adipiscing at in tellus integer. Vulputate enim nulla
                        aliquet porttitor lacus luctus accumsan. Pharetra massa
                        massa ultricies mi. Elementum eu facilisis sed odio
                        morbi quis commodo odio. Tincidunt lobortis feugiat
                        vivamus at. Felis donec et odio pellentesque diam
                        volutpat commodo sed. Risus feugiat in ante metus dictum
                        at tempor commodo ullamcorper. Fringilla phasellus
                        faucibus scelerisque eleifend donec pretium vulputate.
                        Lectus proin nibh nisl condimentum id venenatis a
                        condimentum. Id consectetur purus ut faucibus pulvinar
                        elementum integer enim. Non pulvinar neque laoreet
                        suspendisse interdum consectetur. Est pellentesque elit
                        ullamcorper dignissim cras tincidunt lobortis feugiat
                        vivamus. Suscipit tellus mauris a diam maecenas sed enim
                        ut sem. Dolor purus non enim praesent elementum
                        facilisis. Non enim praesent elementum facilisis leo
                        vel. Ultricies leo integer malesuada nunc vel risus
                        commodo viverra maecenas. Nulla porttitor massa id neque
                        aliquam vestibulum. Erat velit scelerisque in dictum non
                        consectetur. Amet cursus sit amet dictum. Nec tincidunt
                        praesent semper feugiat nibh. Rutrum quisque non tellus
                        orci ac auctor. Sagittis aliquam malesuada bibendum arcu
                        vitae elementum. Massa tincidunt dui ut ornare lectus
                        sit amet est.
                    </div>

                    <br />

                    <div class="checkbox-container">
                        <input
                            type="checkbox"
                            onChange={() => setChecked(!isBoxChecked)}
                        ></input>
                        <span class="agreetext">
                            I have read and I agree to the End User Agreement
                        </span>
                    </div>

                    <div className="buttons">
                        <Button
                            styles={{
                                height: "1rem",
                                width: "6rem",
                                background: "#FFF",
                                "border-radius": "5px",
                                padding: "0.6rem 0",
                                border: "1px solid #000000",
                            }}
                            content="Cancel"
                        ></Button>

                        {!isBoxChecked && (
                            <Button
                                styles={{
                                    height: "1rem",
                                    width: "5rem",
                                    background: "#828282",
                                    padding: "0.6rem 0",
                                    color: "#ffffff",
                                }}
                                content="Save"
                                customedClass="unclickable"
                            ></Button>
                        )}

                        {isBoxChecked && (
                            <Button
                                styles={{
                                    height: "1rem",
                                    width: "5rem",
                                    background: "#828282",
                                    padding: "0.6rem 0",
                                    color: "#ffffff",
                                }}
                                content="Save"
                                handleClick={() => nextState()}
                            ></Button>
                        )}
                    </div>
                    {/* Tung ends here */}
                </div>
            )}

            {regState === 2 && (
                <div className="main">
                    <div className="main--header">Create Profile</div>

                    <div className="outer-box">
                        <div className="header-box">
                            <span>Identify</span>
                        </div>

                        <div className="email-box">Email: {email}</div>

                        <div className="box-item">
                            <div className="text">First Name *</div>

                            <div className="box-input">
                                <input 
                                    type="text"
                                    value={firstname}
                                    onChange = {(e) => handleChange(e, "firstname")}
                                ></input>
                            </div>
                        </div>

                        <div className="box-item">
                            <div className="text">Last Name *</div>

                            <div className="box-input">
                                <input 
                                    type="text"
                                    value={lastname}
                                    onChange = {(e) => handleChange(e, "lastname")}
                                ></input>
                            </div>
                        </div>

                        <div className="box-item">
                            <div className="text">Contact Telephone</div>

                            <div className="box-input">
                                <input 
                                    type="text"
                                    value={contact}
                                    onChange = {(e) => handleChange(e, "contact")}
                                ></input>
                            </div>
                        </div>

                        {/* <div className="box-item">
                            <div className="text">Language *</div>

                            <div className="box-input">
                                <input 
                                    // placeholder="only en is supp"
                                    type="text"
                                    value={language}
                                    onChange = {(e) => handleChange(e, "language")}
                                ></input>
                            </div>
                        </div> */}
                    </div>

                    <br />

                    <div className="outer-box">
                        <div className="header-box">
                            <span>Security</span>
                        </div>

                        <div className="box-item">
                            <div className="text">Password *</div>

                            <div className="box-input">
                                <input 
                                    type="password"
                                    value={password}
                                    onChange = {(e) => handleChange(e, "password")}
                                ></input>
                            </div>
                        </div>

                        <div className="box-item">
                            <div className="text">Retype to confirm *</div>

                            <div className="box-input">
                                <input 
                                    type="password"
                                    value={retypePassword}
                                    onChange = {(e) => handleChange(e, "retypePassword")}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="complete-button">
                        <Button
                            styles={{
                                height: "1.5rem",
                                width: "13rem",
                                "border-radius": "5px",
                                background: "#828282",
                                padding: "0.6rem 0",
                                color: "#ffffff",
                            }}
                            content="Complete Registration"
                            handleClick={() => submitForm()}
                        ></Button>
                    </div>
                </div>
            )}

            <Footer></Footer>
        </div>
    );
};

export default Setup;
