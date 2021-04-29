import React from 'react';
import "./style.css";

function Header() {
    return (
        <div>

            <div class="header-box">
                <img class="logo" src="/images/sommercode.png" alt="Logo"></img>

                    <nav>

                        <ul>
                            <li>
                                <a href="#aboutme">About</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <a href="resume.html">Resume</a>
                            </li>
                        </ul>

                    </nav>
                
            </div>
        </div>

    )
}

export default Header;