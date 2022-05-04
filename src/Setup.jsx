import React from 'react'
import styled from 'styled-components';

const Setup = () => {
    return (
        <Con>
            <details>
                <summary><strong>React Router DOM</strong></summary>
                <iframe src="https://www.w3schools.com/react/react_router.asp" frameborder="0" width="65%" height="500px"></iframe>
            </details>
            <details>
                <summary><strong>Taiwindcss</strong></summary>
                <iframe src="https://tailwindcss.com/docs/guides/create-react-app" frameborder="0" width="65%" height="500px"></iframe>
            </details>
            <details>
                <summary><strong>Styled-components</strong></summary>
                <iframe src="https://styled-components.com/docs/basics#motivation" frameborder="0" width="65%" height="500px"></iframe>
            </details>
            <details>
                <summary><strong>Navbar</strong></summary>
                <p>Navbar section with tailwindcss</p>
                <iframe src="https://retool.com/blog/building-a-react-navbar/" frameborder="0" width="65%" height="500px"></iframe>
                <p>Navbar section with tailwindcss</p>
                <iframe src="https://tailwindui.com/components/application-ui/navigation/navbars" frameborder="0" width="65%" height="500px"></iframe>
            </details>
            <details>
                <summary><strong>Dropdown</strong></summary>
                <p>Dropdown section with tailwindcss</p>
                <iframe src="https://tailwindcomponents.com/component/nestable-dropdown-menu" frameborder="0" width="65%" height="500px"></iframe>
                <p>Navbar section with tailwindcss</p>
                <iframe src="https://tailwindui.com/components/application-ui/navigation/navbars" frameborder="0" width="65%" height="500px"></iframe>
            </details>
        </Con>
    )
}

export default Setup;


const Con = styled.div`
padding: 4em;
background: papayawhip;
`