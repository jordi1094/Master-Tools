import Text from '../../core/text'

function FormWithFeedback( {className, onSubmit,children, message, level = 'error'}) {
    return <>
        <form className={`FormWithFeedback ${className ? className : ''}`} onSubmit={onSubmit}>
            {children}
            {message && <Text className={`Feedback ${level}`}>{children}</Text>}
        </form>
    </>
}

export default FormWithFeedback