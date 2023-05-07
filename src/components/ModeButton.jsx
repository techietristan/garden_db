function ModeButton(props) {
    const onClick = props.onClick
    const buttonText = props.buttonText

    const modeButton = (
        <button type='button' className='modeButton' onClick={ onClick }>
            { buttonText }
        </button>
    )

    return modeButton
}

export default ModeButton