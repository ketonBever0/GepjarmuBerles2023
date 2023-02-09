import Form from "./Form"
import FormCim from "./FormCim"


const FormContainer = () => {


    return (
        <div className="p-5">
            <FormCim />
            <div className="row d-flex justify-content-center my-2">
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default FormContainer