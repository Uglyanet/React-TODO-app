import styled from 'styled-components';
import { Field } from 'formik'

export const StyledField = styled(Field)`
    border: none;
    resize: none;
`;

export const SaveButton = styled.button`
    border: none;
    height: 34px;
    width: 100px;
    background: #D1004B;
    outline: none;
    color: white;
`;

export const CancelButton = styled.button`
    border: 1px solid #D1004B;
    height: 34px;
    width: 100px;
    background: white;
    outline: none;
    color: #D1004B;
    border-radius: 3px;
`;

export const StyledForm = styled.form`
    width: 600px;
    height: 168px;
    background: #FFFFFF;
    border: 2px solid #D1004B;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;