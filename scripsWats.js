// appWats.js
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>¡Bienvenido a mi página web!</p>
                <a
                    href="https://wa.me/15551234567/?text=Hola%20¿cómo%20estás?"
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://image-url-of-whatsapp-icon.png"
                        alt="WhatsApp Icon"
                    />
                </a>
            </header>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
