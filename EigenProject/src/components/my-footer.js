import { html, css, LitElement } from 'lit';

class MyFooter extends LitElement {
  constructor() {
    super();
    }

    static styles = css`
        footer {
            bottom: 0;
            text-align: center;
            padding: 10px 20px;
            background-color: #2e2a2a;
        }

        .container {
            display: flex;
            margin: 10px;
            justify-content: center;
            gap: 15%;
        }

        h1, h2, a{
            color: white;
        }

        a{
            text-decoration: none;
            font-size: 1.3em;
        }

        .socials{
            display: flex;
            align-items: center;
            width: 50px;
        }

        .socials:hover{
            cursor: pointer;
            font-size: 1.1em;
            font-weight: bold;
        }

        img{
            width: 50px;
            height: 50px;
            margin-right: 10px;
            filter: invert(100%) sepia(100%) grayscale(100%) brightness(700%);
        }
    `;

    render() {
        return html`
            <footer>
                <h2>Contact me</h2>
                    <div class="container">
                            <div class="socials">
                                <img src="/images/github-logo.svg" alt="GitHub">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                            <div class="socials">
                                <img src="/images/linkedin-logo.webp" alt="LinkedIn">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                            <div class="socials"> 
                                <img src="/images/instagram-logo.png" alt="Instagram">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                            <div class="socials"> 
                                <img src="/images/x-logo.png" alt="X">
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
                            </div>
                </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);
