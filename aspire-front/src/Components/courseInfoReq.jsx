import './courseInfoReq.css';

const courseInfoReq = ({ iconimg, label, value }) => {
    return(
        <div className='course-basic-info'>
            <div className='icon'><img src={iconimg}/></div>
            <div className='basic-info-text'>
                <div className='label'>{label}</div>
                <div className='value'>{value}</div>
            </div>
        </div>
    )
};

export default courseInfoReq;