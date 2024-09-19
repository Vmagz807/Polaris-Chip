import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.button = '#';
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      .card {
      background-color: #D3D3D3;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      text-align: center;
      display: inline-block;
      width: 380px;
      margin: 16px;
    }

    .card-image {
      width: 350px;
      background-color: white;
      height: 225px;
      border-radius: 8px;
      padding: 8px;
    }

    .card-title {
      margin: 12px 0 8px;
      height: 25px;
    }

    .card-description {
      font-size: 12px;
      color: #666;
      margin-bottom: 12px;
      height: 30px;
    }

    .card-button {
      padding: 8px 16px;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      
      cursor: pointer;
    }
    
    .card-button:hover, .card-button:active{
      background-color: #0056b3;
      opacity: 0.3;
      font-size: 17px;
    }
    `;
  }

  render() {
    return html`<div id="container">
    <div class="card" style="background-color:${this.background}">
  
      <img src="${this.image}" alt="Card image" class="card-image">
  
      <h2 class="card-title">${this.title}</h2>
  
      <p class="card-description">${this.description}</p>
  
      <a href="${this.link}" style="background-color:${this.buttonColor}" class="card-button" target="_blank">Details</a>
  
    </div>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      background: { type: String},
      buttonColor: {type: String},
      image: {type: String},
      description: {type: String},
      link: {type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
