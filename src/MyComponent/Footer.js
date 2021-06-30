import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        // top: "90vh",
        width: "100%",
        border:"2px solid red"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center my-3">Copyright &copy; MyTodosList.com</p>
        </footer>
    )
}
