function ActionButton(props) {
    const className = props.className
    const title = props.title
    const buttonText = props.buttonText
    const onClick = props.onClick

    const actionButton = (
            <button 
                className={ `actionButton ${className}` } 
                title={ title }
                onClick={ onClick }
            >
                { buttonText }
            </button>
    )

    return actionButton
}

export default ActionButton