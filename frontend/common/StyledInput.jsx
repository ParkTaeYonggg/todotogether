import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export default function StyledInput ({id, name, type, onChange, ref, value, labeling, error}) {
    return (
        <InputWrapper error={error} labeling={labeling} id={id}>
            <label htmlFor={id} style={{color:theme.fontColor}}>{labeling}</label>
                <InputTag id={id}
                        name={name}
                        type={type}
                        onChange={onChange}
                        ref={ref}
                        value={value}
                        error={error}
                />
        </InputWrapper>
    );
}

const InputTag = styled.input`
    color: ${theme.fontColor};
    border: none;
    border-bottom: 2px solid ${theme.fontColor};
    width: 100%;
`;
const InputWrapper = styled.div`
    &::after {
        content: '${props => props.error !== props.id ? '' : '올바른 '+ props.labeling +' 양식을 입력해주세요.'}';
        font-size: 10px;
        color: red;
    }
`;
