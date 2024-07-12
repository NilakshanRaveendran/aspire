import './websiteLink.css';

const websiteLink = ({logoimg, name, descr}) =>{
    return(
        <>

            <div className="link1">
                <div className="logoimg"><img src={logoimg}/></div>
                <div className="link1-con">
                <div className="name">{name}</div>
                <div className="descr">{descr}</div>
                </div>
            </div>

        
        </>
    )
};

export default websiteLink;
