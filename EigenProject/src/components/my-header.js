import { html, css, LitElement } from 'lit';

class MyHeader extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        header {
            display: flex;
            text-align: center;
            justify-content: space-between;
            padding: 10px 20px;
            background-color: #2e2a2a;
        }

        h1, p{
            color: white;
        }
    
        .left{
            display: flex;
            align-items: center;
        }

        .right{
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .right p{
            padding: 5px;
            border-style: solid black 2px;
        }
    `;

    render() {
        return html`
            <header>
                <div class="left">
                    <img src= >
                    <h1>Valentijn</h1>
                </div>

                <div class="right">
                    <p>movies</p>
                    <p>Projects</p>
                    <p>About me</p>
                </div>
            </header>
        `;
    }
}

customElements.define('my-header', MyHeader);
