import React from 'react'
import { StyledField, SaveButton, CancelButton, StyledForm } from './NewStyled'
import { Formik, Field } from 'formik'

export const New = ({cancelTask, addTask}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                }}
            >
                {
                    ({ handleSubmit, values, dirty }) => (
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledField placeholder="Type task name ..." name="name" value={values.name} />
                            <StyledField placeholder="Type task description ..." name="description" value={values.description} />
                            <div>
                                <CancelButton onClick = {cancelTask}>CANCEL</CancelButton>
                                <SaveButton disabled={!dirty} onClick = {()=>{addTask({ id: 3, name: values.name, description: values.description, })}}>SAVE</SaveButton>
                            </div>
                        </StyledForm>
                    )
                }
            </Formik>
        </div>
    )
}
