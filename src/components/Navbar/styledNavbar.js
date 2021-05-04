import styled from "styled-components/macro";

export const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	width:100%;
	z-index: 1;
    background-color: transparent;
    transition: 0.6s ease-in-out;

    img {
        width: 90px;
    }
    
    &.active{
        box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.157);
        background-color: #000000;
    }

    @media(max-width:1100px) {
        justify-content: space-between;
        height: 65px;
        padding: 0px 30px;

        img{
            width:70px;
        }
    }

    /* .active{
        background-color: #FF1414;
        color:#ffffff;
        box-shadow: 5px 10px 30px rgba(198, 64, 64, 0.411);
        transition: all ease 0.2s;

        :hover{
            background-color: #000000;
            color:#ffffff;
            box-shadow: 5px 10px 30px rgba(198, 64, 64, 0.411);
            transition: all ease 0.2s;
        }
    } */
`;

export const Menu = styled.ul`
    display: flex;

    @media(max-width:1100px) {
        display:none;
        position:absolute;
        top:65px;
        left:0px;
        background-color:#000000;
        border-bottom:4px solid #FF1414;
        width:100%;
        padding:0px;
        margin:0px;
    }
`;

export const MenuItem = styled.li`
    @media (max-width: 1100px) {
        width:100%;
    }

    a {
        font-family: 'Lato';
        height:40px;
        line-height: 43px;
        margin: 3px;
        padding: 0px 22px;
        display: flex;
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: 500;
        color:#ffffff;
        letter-spacing: 1px;
        border-radius: 3px;
        transition: 0.2s ease-in-out;

        :hover{
            background-color: #FF1414;
            color:#ffffff;
            box-shadow: 5px 10px 30px rgba(255, 2, 2, 0.336);
            transition: all ease 0.2s;
        }

        @media(max-width:1100px) {
            width:100%;
            height:40px;
            justify-content: center;
            align-items: center;
            margin:0px;
            padding: 25px;
            border:1px solid rgba(38,38,38,0.03);
        }
    }
`;

export const MenuIcon = styled.label`
    display:none;

    @media(max-width:1100px) {
        display:block;
        cursor:pointer;
        float:right;
        padding:28px 20px;
        position:relative;
        user-select: none;
    }
`;

export const NavIcon = styled.span`
    @media(max-width:1100px) {
        background-color:#ffffff;
        display:block;
        height:2px;
        position:relative;
        transition: background 0.2s ease-out;
        width:24px;

        ::before,
        ::after {
            background:rgb(255, 255, 255);
            content:'';
            display:block;
            height:100%;
            position:absolute;
            transition:all ease-out 0.2s;
            width:100%;
        }

        ::before {
            top: 6px;
        }

        ::after {
            top: -6px;
        }
    }
`;

export const MenuBtn = styled.input`
    display:none;

    @media(max-width:1100px) {
        display: none;

        :checked ~ ${Menu} {
            display: block;
        }

        :checked ~ ${MenuIcon} ${NavIcon} {
            background: transparent;
        }

        :checked ~ ${MenuIcon} ${NavIcon}::before {
            transform: rotate(-45deg);
            top:0;
        }

        :checked ~ ${MenuIcon} ${NavIcon}::after {
            transform: rotate(45deg);
            top:0;
        }
    }
`;
