import React, {useState} from "react";
import styled from "styled-components";
const checkedImage = require('../../assets/files/icon/checkbox-on.svg');


const Root = styled.span`
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1;
`;

const Input = styled.input`
    position: absolute;
    top: .2rem;
    right: 0.5rem;
    left: 0;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0;
    margin: 0;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
`;

const UncheckedIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 1.8rem;
    height: 1.8rem;
    border: solid 1px #cccccc;
    background-color: #ffffff;
    display: ${({show}) => show ? 'initial' : 'none'};
    top: .2rem;
    right: 0.5rem;
`;


const CheckedIcon = styled.div`
    position: absolute;
    top: .2rem;
    right: 0.5rem;
    left: 0;
    width: 1.8rem;
    height: 1.8rem;
    border: solid 1px #cccccc;
    background-image: url('${checkedImage}');
    background-repeat: no-repeat;
    display: ${({show}) => show ? 'initial' : 'none'};
`;

function Checkbox(props) {
    const [checked, setChecked] = useState(false);
    return (
        <Root>
            <Input
                checked={checked}
                name={props.name}
                onChange={(e) => {
                    setChecked(!checked);
                    // props.checked = !checked;
                    // props.CheckboxHandler(e);
                }}
                type="checkbox"
            />
            <CheckedIcon show={checked} />
            <UncheckedIcon show={!checked} />
        </Root>
    );
}

export default Checkbox;