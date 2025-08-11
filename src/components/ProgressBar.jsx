const ProgressBar = ({value}) => {

    return(
        <div className="progress">
            {value.toFixed()}%
        </div>
    )

}

export default ProgressBar;