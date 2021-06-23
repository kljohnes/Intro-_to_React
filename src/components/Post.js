function Post({date, title, content}){
    return (
        <div>
            <div>
                Date: {date}
                <br /> 
                Title: {title}
            </div>
            <p>Content: 
                <br />
                {content}</p>
        </div>
    )
}

export default Post;