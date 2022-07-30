import { createGlobalStyle } from "styled-components";
import back from "../imgs/backgroundUniverse.jpg";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 90%;
        padding: 50px;

        .Card--LiPersonAlive {
            background-color: #b2df28;
            box-shadow: 0px 0px 10px 2px #b2df28;

            .name {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 40%;
                height: 50px;
                color:  #248602;
                background-color: #b2df28;
                border-radius: 5px;
                border: 2px solid #248602;

            }

            p {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 40%;
                height: 50px;
                font-size: 12px;
                color:  #248602;
                background-color: #b2df28;
                border-radius: 5px;
                border: 2px solid #248602;            
            }

        }

        .Card--LiPersonAlive:hover {
            box-shadow: 0px 0px 20px 8px #b2df28
        }

        .Card--LiPersonDead {
            background-color: #df00b9;
            box-shadow: 0px 0px 10px 2px #df00b9;

            .name {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 40%;
                height: 50px;
                color: white;
                background-color: #df00b9;
                border-radius: 5px;
                border: 2px solid #248602;

            }

            p {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 40%;
                height: 50px;
                font-size: 12px;
                color:  white;
                background-color: #df00b9;
                border-radius: 5px;
                border: 2px solid #248602;            
            }
        }

        .Card--LiPersonDead:hover {
            box-shadow: 0px 0px 20px 8px #df00b9;
        }


        li {
            border-radius: 50%;
            
            img {
                border: 2px solid #248602;
            }

        }

        li:hover {
        transform: scale(1.1);
        transition: all 2s ease;
        box-shadow: 0px 0px 20px 8px #b2df28;
        }
    }

    .App {
        width: 100vw;
        height: 100%;
        background-image: url(${back});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;


        .App-header {
        width: 100%;
        height: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;

            img {
                width: 37.5rem;
                transition: all 2s ease;
                transform: scale(1.1) translateY(60px);
            }
        }

        .ContainerButtons {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 2px;

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;

                font-size: 3.125rem;
                background-color: #b2df28;
                color: rgb(255,0,255);
                cursor: pointer;
                border-radius: 5px;
            }

            .btnMore {
                min-width: 5rem;
                min-height: 5rem;
                font-size: 1rem;
                border-radius: 5px;
                position: fixed;
                left: 5%;
                z-index: 1;
                
                font-weight: bold;
                color:  white;
                cursor: pointer;
                background-color: transparent;
                border: 2px solid #b2df28;
            }

            p {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 3.75rem;
                height: 3.125rem;
                padding: 10px;

                font-size: 1.875rem;
                background-color: transparent;
                color: rgb(255,0,255);
                box-shadow: 0px 0px 10px 2px #b2df28;
                margin-left: 10px;
                margin-right: 10px;
                border-radius: 5px;
            }
        }

        main > div {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    

`;

export default GlobalStyle;
